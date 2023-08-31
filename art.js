const fs = require("node:fs").promises;
const artPaths = { 
    goat0: "art/goat0.txt",
    goat1: "art/goat1.txt",
    goat2: "art/goat2.txt",
};

module.exports = { 
    getArtById(id) {
        const path = artPaths[id];
        if (!path) {
            throw new Error("bad id");
        }
        console.log("loading file:", path);
        return fs.readFile(path, { encoding: "utf-8" });
    }
 };
 