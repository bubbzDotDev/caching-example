const http = require("node:http");
const art = require("./getArt.js");

// Create a local server to receive data from
const server = http.createServer(async (req, res) => {
  if (req.url !== "/") {
    try {
      const result = await art.getArtById(req.url.replace("/", ""));
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(result);
    } catch (error) {
      res.writeHead(404);
      res.end("Not found");
    }
  } else {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Hello World!",
      })
    );
  }
});

server.listen(8000);
