module scenes {
    export class scene4_7 extends objects.Scene {

        // Private instance variables
        private _leftButton : objects.Button
        private _bgImage : createjs.Bitmap;
        private _restartText: createjs.Text;

        // scene4_7 Class Contructor
        constructor() {
            super();
        }

        // Initialize scene objects
        public start() : void {
            console.log("Scene 4-7 Started");

            // Add background image to scene
            this._bgImage = new createjs.Bitmap(assets.getResult("scene4_7"));
            this.addChild(this._bgImage);

            // Add button to scene 
            this._leftButton = new objects.Button("Left", config.Screen.CENTER_X - 239, config.Screen.CENTER_Y + 233);
            this.addChild(this._leftButton);
            // Register for click callback function
            this._leftButton.on("click", this._leftButtonClick, this);

            // Make createjs Text object. Set properties. Add to scene.
            this._restartText = new createjs.Text("Restart", "bold 16px Arial", "#ffffff");
            this._restartText.x = this._leftButton.x - (this._restartText.getBounds().width/6);
            this._restartText.y = this._leftButton.y - 16;
            this.addChild(this._restartText);

            // Add scene4_7 scene to global stage container
            stage.addChild(this);
        }

        // Mouse event handler for mouse clicks
        private _leftButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to scene1. Call global changeScene() function.
            scene = config.Scene.scene1;
            changeScene();
        }
    }
}