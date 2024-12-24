import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";

const PORT = 3000;
// it repeating for index file also css file let better approch on app.js file
const server = createServer(async (req, res) => {
    if (req.method === "GET") {
        if (req.url === "/") {
            try {
                const data = await readFile(path.join("public", "index.html"));
                res.writeHead(200, { "content-type": "text/html" });
                res.end(data);
            } catch (error) {
                res.writeHead(404, { "content-type": "text/html" });
                res.end("404 page not found");
            }
        }
    } else if (req.method === "GET") {
        if (req.url === "/style.css") {
            try {
                const data = await readFile(path.join("public", "style.csss"));
                res.writeHead(200, { "content-type": "text/css" });
                res.end(data);
            } catch (error) {
                res.writeHead(404, { "content-type": "text/html" });
                res.end("404 page not found");
            }
        }
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
