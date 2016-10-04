/*
    Class:              scene
    Description:        config module to store globally accessible values and states for the game.

    Author:             George Savchenko
    Revision History:
    Name:               Date:        Description:
    -------------------------------------------------------------------
    George Savchenko    10/3/2016    renamed variables and removed code
*/
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.scene1 = 0;
        Scene.scene2_1 = 1;
        Scene.scene2_2 = 2;
        Scene.scene3_1 = 3;
        Scene.scene3_2 = 4;
        Scene.scene3_3 = 5;
        Scene.scene3_4 = 6;
        Scene.scene4_1 = 7;
        Scene.scene4_2 = 8;
        Scene.scene4_3 = 9;
        Scene.scene4_4 = 11;
        Scene.scene4_5 = 12;
        Scene.scene4_6 = 13;
        Scene.scene4_7 = 14;
        Scene.scene4_8 = 15;
        return Scene;
    }());
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    }());
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map