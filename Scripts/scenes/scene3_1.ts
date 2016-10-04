module scenes {
    export class scene3_1 extends objects.Scene {

        // Private instance variables
        private _leftButton : objects.Button;
        private _rightButton : objects.Button;
        private _bgImage : createjs.Bitmap;
        private _choiceOneText: createjs.Text;
        private _choiceTwoText: createjs.Text;

        // scene3_1 Class Contructor
        constructor() {
            super();
        }

        // Initialize scene objects
        public start() : void {
            console.log("Scene 3-1 Started");
            
            // Add background image to scene
            this._bgImage = new createjs.Bitmap(assets.getResult("scene3_1"));
            this.addChild(this._bgImage);

            // Add button to scene 
            this._leftButton = new objects.Button("button_left", config.Screen.CENTER_X - 239, config.Screen.CENTER_Y + 233);
            this.addChild(this._leftButton);
            this._rightButton = new objects.Button("button_right", config.Screen.CENTER_X + 170, config.Screen.CENTER_Y + 233);
            this.addChild(this._rightButton);
            // Register for click callback function
            this._leftButton.on("click", this._leftButtonClick, this);
            this._rightButton.on("click", this._rightButtonClick, this);

            // Make createjs Text object. Set properties. Add to scene.
            this._choiceOneText = new createjs.Text("South America", "bold 16px Arial", "#ffffff");
            this._choiceTwoText = new createjs.Text("Russia", "bold 16px Arial", "#ffffff");

            this._choiceOneText.x = this._leftButton.x - (this._choiceOneText.getBounds().width/4);
            this._choiceOneText.y = this._leftButton.y - 16;
            this._choiceTwoText.x = this._rightButton.x - (this._choiceTwoText.getBounds().width/4);
            this._choiceTwoText.y = this._rightButton.y - 16;

            this.addChild(this._choiceOneText);
            this.addChild(this._choiceTwoText);

            // Add scene3_1 to global stage container
            stage.addChild(this);
        }

        // Mouse event handlers for mouse clicks
        private _leftButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to scene4_1. Call global changeScene() function.
            scene = config.Scene.scene4_1;
            changeScene();
        }
        private _rightButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to scene4_2. Call global changeScene() function.
            scene = config.Scene.scene4_2;
            changeScene();
        }

    }
}