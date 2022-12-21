/**
 * @jest-environment jsdom
 */
 
// Must install version npm install --save-dev jest@26.6.3

// Importing the objects into the test file to allow it to work
const { game } = require("../game");

// Boilerplate code for uploading the DOM to be accessed for Mocking.
// Same for every HTML code you want to load into the DOM, just may need to change the file name.
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

// Start by creating tests before writing any code 

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});
