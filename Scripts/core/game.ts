/// <reference path = "_reference.ts" />

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;

var currentScene : objects.Scene;
var scene: number;

// Game scenes
var entranceScene : scenes.scene1;
var gameScene : scenes.Game;

// Preload Assets required
var assetData:objects.Asset[] = [
    {id: "Start", src:"../../Assets/images/Start.png"}, 
    {id: "Back", src:"../../Assets/images/Back.png"},
    {id: "Right", src:"../../Assets/images/button.png"},
    {id: "Left", src:"../../Assets/images/button.png"},
    {id: "LeftPathScreen", src:"../../Assets/images/LeftPath.png"},
    {id: "RightPathScreen", src:"../../Assets/images/RightPath.png"},
    {id: "scene1", src:"../../Assets/images/scene1.png"},
    {id: "scene2_1", src:"../../Assets/images/scene2_1.png"},
    {id: "scene2_2", src:"../../Assets/images/scene2_2.png"},
    {id: "scene3_1", src:"../../Assets/images/scene3_1.png"},
    {id: "scene3_2", src:"../../Assets/images/scene3_2.png"},
    {id: "scene3_3", src:"../../Assets/images/scene3_3.png"},
    {id: "scene3_4", src:"../../Assets/images/scene3_4.png"},
    {id: "scene4_1", src:"../../Assets/images/scene4_1.png"},
    {id: "scene4_2", src:"../../Assets/images/scene4_2.png"},
    {id: "scene4_3", src:"../../Assets/images/scene4_3.png"},
    {id: "scene4_4", src:"../../Assets/images/scene4_4.png"},
    {id: "scene4_5", src:"../../Assets/images/scene4_5.png"},
    {id: "scene4_6", src:"../../Assets/images/scene4_6.png"},
    {id: "scene4_7", src:"../../Assets/images/scene4_7.png"},
    {id: "scene4_8", src:"../../Assets/images/scene4_8.png"}
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

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}

function changeScene() : void {
    
    // Simple state machine pattern to define scene swapping.
    switch(scene)
    {
        case config.Scene.scene1 :
            stage.removeAllChildren();
            entranceScene = new scenes.scene1();
            currentScene = entranceScene;
            console.log("Starting scene1 scene");
            break;
        case config.Scene.scene2_1 :
            stage.removeAllChildren();
            currentScene = new scenes.scene2_1();
            console.log("Starting scene2_1 scene");
            break;
        case config.Scene.scene2_2 :
            stage.removeAllChildren();
            currentScene = new scenes.scene2_2();
            console.log("Starting scene2_2 scene");
            break;
        case config.Scene.scene3_1 :
            stage.removeAllChildren();
            currentScene = new scenes.scene3_1();
            console.log("Starting scene3_1 scene");
            break;
        case config.Scene.scene3_2 :
            stage.removeAllChildren();
            currentScene = new scenes.scene3_2();
            console.log("Starting scene3_2 scene");
            break;
        case config.Scene.scene3_3 :
            stage.removeAllChildren();
            currentScene = new scenes.scene3_3();
            console.log("Starting scene3_3 scene");
            break;
        case config.Scene.scene3_4 :
            stage.removeAllChildren();
            currentScene = new scenes.scene3_4();
            console.log("Starting scene3_4 scene");
            break;
        case config.Scene.scene4_1 :
            stage.removeAllChildren();
            currentScene = new scenes.scene4_1();
            console.log("Starting scene4_1 scene");
            break;
        case config.Scene.scene4_2 :
            stage.removeAllChildren();
            currentScene = new scenes.scene4_2();
            console.log("Starting scene4_2 scene");
            break;
        case config.Scene.scene4_3 :
            stage.removeAllChildren();
            currentScene = new scenes.scene4_3();
            console.log("Starting scene4_3 scene");
            break;
        case config.Scene.scene4_4 :
            stage.removeAllChildren();
            currentScene = new scenes.scene4_4();
            console.log("Starting scene4_4 scene");
            break;
        case config.Scene.scene4_5 :
            stage.removeAllChildren();
            currentScene = new scenes.scene4_5();
            console.log("Starting scene4_5 scene");
            break;
        case config.Scene.scene4_6 :
            stage.removeAllChildren();
            currentScene = new scenes.scene4_6();
            console.log("Starting scene4_6 scene");
            break;
        case config.Scene.scene4_7 :
            stage.removeAllChildren();
            currentScene = new scenes.scene4_7();
            console.log("Starting scene4_7 scene");
            break;
        case config.Scene.scene4_8 :
            stage.removeAllChildren();
            currentScene = new scenes.scene4_8();
            console.log("Starting scene4_8 scene");
            break;
    }
}