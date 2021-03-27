"use strict";

var path = require("path");

module.exports = {
    entry: require.resolve("./src/backend.js"),
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        libraryTarget: 'var',
        library: 'backend'
    },
    watch: true,
    devtool: "eval"
};

// See https://stackoverflow.com/questions/34357489/calling-webpacked-code-from-outside-html-script-tag