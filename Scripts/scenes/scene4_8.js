var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var scene4_8 = (function (_super) {
        __extends(scene4_8, _super);
        // scene4_8 Class Contructor
        function scene4_8() {
            _super.call(this);
        }
        // Initialize scene objects
        scene4_8.prototype.start = function () {
            console.log("Scene 4-8 Started");
            // Add background image to scene
            this._bgImage = new createjs.Bitmap(assets.getResult("scene4_8"));
            this.addChild(this._bgImage);
            // Add button to scene
            this._leftButton = new objects.Button("button_left", config.Screen.CENTER_X - 239, config.Screen.CENTER_Y + 233);
            this.addChild(this._leftButton);
            // Register for click callback function
            this._leftButton.on("click", this._leftButtonClick, this);
            // Make createjs Text object. Set properties. Add to scene.
            this._restartText = new createjs.Text("Restart", "bold 16px Arial", "#ffffff");
            this._restartText.x = this._leftButton.x - (this._restartText.getBounds().width / 6);
            this._restartText.y = this._leftButton.y - 16;
            this.addChild(this._restartText);
            // Add scene4_8 scene to global stage container
            stage.addChild(this);
        };
        // Mouse event handler for mouse clicks
        scene4_8.prototype._leftButtonClick = function (event) {
            // Change global scene variable to scene1. Call global changeScene() function.
            scene = config.Scene.scene1;
            changeScene();
        };
        return scene4_8;
    }(objects.Scene));
    scenes.scene4_8 = scene4_8;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene4_8.js.map