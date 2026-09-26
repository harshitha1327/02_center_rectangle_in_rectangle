const r = require("raylib");

const g = require("./geometry");

function running() {
    return !r.WindowShouldClose();
}

const WIDTH = 1000;
const HEIGHT = 1000;
const FPS = 50;

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Rectangle in Rectangle");
    r.SetTargetFPS(FPS);
}

function update() { }

function drawRectangleInRectangle() {

    const innerRectangleWidth = 100;
    const innerRectangleHeight = 50;

    const outerRectangleX = 30;
    const outerRectangleY = 400;

    const outerRectangleWidth = 200;
    const outerRectangleHeight = 300;

    r.DrawRectangle(
        outerRectangleX,
        outerRectangleY,
        outerRectangleWidth,
        outerRectangleHeight,
        r.WHITE,
    );

    const innerRectangleX = g.calcOffset(
        outerRectangleWidth,
        innerRectangleWidth,
    ) + outerRectangleX;
    const innerRectangleY = g.calcOffset(
        outerRectangleHeight,
        innerRectangleHeight,
    ) + outerRectangleY;

    r.DrawRectangle(
        innerRectangleX,
        innerRectangleY,
        innerRectangleWidth,
        innerRectangleHeight,
        r.RED,
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawRectangleInRectangle();

    r.EndDrawing();
}

function teardown() {
    return r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
