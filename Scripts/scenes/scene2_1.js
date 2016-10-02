var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var scene2_1 = (function (_super) {
        __extends(scene2_1, _super);
        // Menu Class Contructor
        function scene2_1() {
            _super.call(this);
            this._bgImage = new createjs.Bitmap(assets.getResult("RightPathScreen"));
            this.addChild(this._bgImage);
        }
        scene2_1.prototype.start = function () {
            console.log("Scene 2-1 Scene Started");
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
        scene2_1.prototype.update = function () {
        };
        scene2_1.prototype._leftButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene3_1;
            changeScene();
        };
        // Fucntion for when button is pressed
        scene2_1.prototype._rightButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene3_2;
            changeScene();
        };
        return scene2_1;
    }(objects.Scene));
    scenes.scene2_1 = scene2_1;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene2_1.js.map