const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/fire.js",
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js"
    },
    watch: true
}