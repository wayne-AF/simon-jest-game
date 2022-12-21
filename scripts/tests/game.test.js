/**
 * @jest-environment jsdom
 */

// Boilerplate code for uploading the DOM to be accessed for Mocking.
// Same for every HTML code you want to load into the DOM.
beforeALL(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})
