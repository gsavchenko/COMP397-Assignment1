/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var currentScene;
var scene;
// Game scenes
var entranceScene;
var gameScene;
// Preload Assets required
var assetData = [
    { id: "Start", src: "../../Assets/images/Start.png" },
    { id: "Back", src: "../../Assets/images/Back.png" },
    { id: "Right", src: "../../Assets/images/Right.png" },
    { id: "Left", src: "../../Assets/images/Left.png" },
    { id: "LeftPathScreen", src: "../../Assets/images/LeftPath.png" },
    { id: "RightPathScreen", src: "../../Assets/images/RightPath.png" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);
    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);
    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.scene1;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.scene1:
            stage.removeAllChildren();
            entranceScene = new scenes.scene1();
            currentScene = entranceScene;
            console.log("Starting scene1 scene");
            break;
        case config.Scene.scene2_1:
            stage.removeAllChildren();
            currentScene = new scenes.scene2_1();
            console.log("Starting scene2_1 scene");
            break;
        case config.Scene.scene2_2:
            stage.removeAllChildren();
            currentScene = new scenes.scene2_2();
            console.log("Starting scene2_2 scene");
            break;
        case config.Scene.scene3_1:
            stage.removeAllChildren();
            currentScene = new scenes.scene3_1();
            console.log("Starting scene3_1 scene");
            break;
        case config.Scene.scene3_2:
            stage.removeAllChildren();
            currentScene = new scenes.scene3_2();
            console.log("Starting scene3_2 scene");
            break;
        case config.Scene.scene3_3:
            stage.removeAllChildren();
            currentScene = new scenes.scene3_3();
            console.log("Starting scene3_3 scene");
            break;
        case config.Scene.scene3_4:
            stage.removeAllChildren();
            currentScene = new scenes.scene3_4();
            console.log("Starting scene3_4 scene");
            break;
        case config.Scene.scene4_1:
            stage.removeAllChildren();
            currentScene = new scenes.scene4_1();
            console.log("Starting scene4_1 scene");
            break;
        case config.Scene.scene4_2:
            stage.removeAllChildren();
            currentScene = new scenes.scene4_2();
            console.log("Starting scene4_2 scene");
            break;
        case config.Scene.scene4_3:
            stage.removeAllChildren();
            currentScene = new scenes.scene2_2();
            console.log("Starting scene4_3 scene");
            break;
        case config.Scene.scene2_2:
            stage.removeAllChildren();
            currentScene = new scenes.scene2_2();
            console.log("Starting scene4_4 scene");
            break;
        case config.Scene.scene2_2:
            stage.removeAllChildren();
            currentScene = new scenes.scene2_2();
            console.log("Starting scene4_5 scene");
            break;
        case config.Scene.scene2_2:
            stage.removeAllChildren();
            currentScene = new scenes.scene2_2();
            console.log("Starting scene4_6 scene");
            break;
        case config.Scene.scene4_7:
            stage.removeAllChildren();
            currentScene = new scenes.scene4_7();
            console.log("Starting scene4_7 scene");
            break;
        case config.Scene.scene4_8:
            stage.removeAllChildren();
            currentScene = new scenes.scene4_8();
            console.log("Starting scene4_8 scene");
            break;
    }
}
//# sourceMappingURL=game.js.map