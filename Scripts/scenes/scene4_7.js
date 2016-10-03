var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var scene4_7 = (function (_super) {
        __extends(scene4_7, _super);
        // Menu Class Contructor
        function scene4_7() {
            _super.call(this);
            this._bgImage = new createjs.Bitmap(assets.getResult("scene4_7"));
            this.addChild(this._bgImage);
        }
        scene4_7.prototype.start = function () {
            console.log("Scene 4-7 Scene Started");
            //var bgImage = new createjs.Bitmap("../../Assets/images/RightPath.png");
            // Add button to scene. Register for click callback function
            this._leftButton = new objects.Button("Left", config.Screen.CENTER_X - 239, config.Screen.CENTER_Y + 233);
            this.addChild(this._leftButton);
            this._leftButton.on("click", this._leftButtonClick, this);
            this._restartText = new createjs.Text("Restart", "bold 16px Arial", "#ffffff");
            this._restartText.x = this._leftButton.x - (this._restartText.getBounds().width / 6);
            this._restartText.y = this._leftButton.y - 16;
            this.addChild(this._restartText);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        scene4_7.prototype.update = function () {
        };
        // Fucntion for when button is pressed
        scene4_7.prototype._rightButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene2_1;
            changeScene();
        };
        scene4_7.prototype._leftButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene1;
            changeScene();
        };
        return scene4_7;
    }(objects.Scene));
    scenes.scene4_7 = scene4_7;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene4_7.js.map