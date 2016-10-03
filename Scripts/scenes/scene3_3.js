var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var scene3_3 = (function (_super) {
        __extends(scene3_3, _super);
        // scene3_3 Class Contructor
        function scene3_3() {
            _super.call(this);
        }
        // Initialize scene objects
        scene3_3.prototype.start = function () {
            console.log("Scene 3-3 Scene Started");
            // Add background image to scene
            this._bgImage = new createjs.Bitmap(assets.getResult("scene3_3"));
            this.addChild(this._bgImage);
            // Add button to scene
            this._leftButton = new objects.Button("Left", config.Screen.CENTER_X - 239, config.Screen.CENTER_Y + 233);
            this.addChild(this._leftButton);
            this._rightButton = new objects.Button("Right", config.Screen.CENTER_X + 170, config.Screen.CENTER_Y + 233);
            this.addChild(this._rightButton);
            // Register for click callback function
            this._leftButton.on("click", this._leftButtonClick, this);
            this._rightButton.on("click", this._rightButtonClick, this);
            // Make createjs Text object. Set properties. Add to scene.
            this._choiceOneText = new createjs.Text("Wait What Child?!", "bold 16px Arial", "#ffffff");
            this._choiceTwoText = new createjs.Text("You Waited?", "bold 16px Arial", "#ffffff");
            this._choiceOneText.x = this._leftButton.x - (this._choiceOneText.getBounds().width / 3);
            this._choiceOneText.y = this._leftButton.y - 16;
            this._choiceTwoText.x = this._rightButton.x - (this._choiceTwoText.getBounds().width / 3);
            this._choiceTwoText.y = this._rightButton.y - 16;
            this.addChild(this._choiceOneText);
            this.addChild(this._choiceTwoText);
            // Add scene3_3 scene to global stage container
            stage.addChild(this);
        };
        // Mouse event handlers for mouse clicks
        scene3_3.prototype._leftButtonClick = function (event) {
            // Change global scene variable to scene4_5. Call global changeScene() function.
            scene = config.Scene.scene4_5;
            changeScene();
        };
        // Fucntion for when button is pressed
        scene3_3.prototype._rightButtonClick = function (event) {
            // Change global scene variable to scene4_6. Call global changeScene() function.
            scene = config.Scene.scene4_6;
            changeScene();
        };
        return scene3_3;
    }(objects.Scene));
    scenes.scene3_3 = scene3_3;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene3_3.js.map