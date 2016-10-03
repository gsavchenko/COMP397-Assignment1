var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var scene2_2 = (function (_super) {
        __extends(scene2_2, _super);
        // Menu Class Contructor
        function scene2_2() {
            _super.call(this);
            this._bgImage = new createjs.Bitmap(assets.getResult("scene2_2"));
            this.addChild(this._bgImage);
        }
        scene2_2.prototype.start = function () {
            console.log("Scene 2-2 Scene Started");
            // Add button to scene. Register for click callback function
            this._leftButton = new objects.Button("Left", config.Screen.CENTER_X - 239, config.Screen.CENTER_Y + 233);
            this.addChild(this._leftButton);
            this._rightButton = new objects.Button("Right", config.Screen.CENTER_X + 170, config.Screen.CENTER_Y + 233);
            this.addChild(this._rightButton);
            this._leftButton.on("click", this._leftButtonClick, this);
            this._rightButton.on("click", this._rightButtonClick, this);
            this._choiceOneText = new createjs.Text("I'm Not Ready For This.", "bold 16px Arial", "#ffffff");
            this._choiceOneText.x = this._leftButton.x - (this._choiceOneText.getBounds().width / 3);
            this._choiceOneText.y = this._leftButton.y - 16;
            this.addChild(this._choiceOneText);
            this._choiceTwoText = new createjs.Text("I've Seen Things.", "bold 16px Arial", "#ffffff");
            this._choiceTwoText.x = this._rightButton.x - (this._choiceTwoText.getBounds().width / 3);
            this._choiceTwoText.y = this._rightButton.y - 16;
            this.addChild(this._choiceTwoText);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        scene2_2.prototype.update = function () {
        };
        scene2_2.prototype._leftButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene3_3;
            changeScene();
        };
        // Fucntion for when button is pressed
        scene2_2.prototype._rightButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene3_4;
            changeScene();
        };
        return scene2_2;
    }(objects.Scene));
    scenes.scene2_2 = scene2_2;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene2_2.js.map