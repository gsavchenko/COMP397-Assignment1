var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var scene1 = (function (_super) {
        __extends(scene1, _super);
        // Menu Class Contructor
        function scene1() {
            _super.call(this);
        }
        scene1.prototype.start = function () {
            console.log("scene 1 Scene Started");
            // Add button to scene. Register for click callback function
            this._leftButton = new objects.Button("Left", config.Screen.CENTER_X - 130, config.Screen.CENTER_Y + 180);
            this.addChild(this._leftButton);
            this._rightButton = new objects.Button("Right", config.Screen.CENTER_X + 130, config.Screen.CENTER_Y + 180);
            this.addChild(this._rightButton);
            this._leftButton.on("click", this._leftButtonClick, this);
            this._rightButton.on("click", this._rightButtonClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        scene1.prototype.update = function () {
        };
        // Fucntion for when button is pressed
        scene1.prototype._rightButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene2_2;
            changeScene();
        };
        scene1.prototype._leftButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene2_1;
            changeScene();
        };
        return scene1;
    }(objects.Scene));
    scenes.scene1 = scene1;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene1.js.map