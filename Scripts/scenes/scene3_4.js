var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var scene3_4 = (function (_super) {
        __extends(scene3_4, _super);
        // Menu Class Contructor
        function scene3_4() {
            _super.call(this);
            this._bgImage = new createjs.Bitmap(assets.getResult("LeftPathScreen"));
            this.addChild(this._bgImage);
        }
        scene3_4.prototype.start = function () {
            console.log("Scene 2-2 Scene Started");
            //var bgImage = new createjs.Bitmap("../../Assets/images/RightPath.png");
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
        scene3_4.prototype.update = function () {
        };
        scene3_4.prototype._leftButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene4_7;
            changeScene();
        };
        // Fucntion for when button is pressed
        scene3_4.prototype._rightButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene4_8;
            changeScene();
        };
        return scene3_4;
    }(objects.Scene));
    scenes.scene3_4 = scene3_4;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene3_4.js.map