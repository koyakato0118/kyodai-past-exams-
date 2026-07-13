import http from "node:http";
import { appendFileSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 5178);
const logFile = path.join(root, "server.log");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = path.normalize(decoded).replace(/^[/\\]+/u, "").replace(/^(\.\.[/\\])+/, "");
  const resolved = path.resolve(root, normalized);
  return resolved.startsWith(root) ? resolved : path.join(root, "index.html");
}

const server = http.createServer(async (request, response) => {
  try {
    const requestPath = request.url || "/";
    let filePath = safePath(requestPath);
    let stat;

    try {
      stat = await fs.stat(filePath);
      if (stat.isDirectory()) filePath = path.join(filePath, "index.html");
    } catch {
      filePath = path.join(root, "index.html");
    }

    const ext = path.extname(filePath);
    const body = await fs.readFile(filePath);
    response.writeHead(200, { "Content-Type": mime[ext] || "application/octet-stream" });
    response.end(body);
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(error instanceof Error ? error.message : "Server error");
  }
});

function log(message) {
  appendFileSync(logFile, `${new Date().toISOString()} ${message}\n`, "utf8");
}

process.on("uncaughtException", (error) => {
  log(`uncaughtException: ${error.stack || error.message}`);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  log(`unhandledRejection: ${error instanceof Error ? error.stack : String(error)}`);
  process.exit(1);
});

server.on("error", (error) => {
  log(`server error: ${error.stack || error.message}`);
  process.exit(1);
});

server.listen(port, "127.0.0.1", () => {
  log(`listening http://127.0.0.1:${port}/`);
  console.log(`Past exam UI: http://127.0.0.1:${port}/`);
});
