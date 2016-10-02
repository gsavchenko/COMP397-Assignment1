
module scenes {
    export class scene2_1 extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _leftButton : objects.Button;
        private _rightButton : objects.Button;
        private _bgImage : createjs.Bitmap;

        // Menu Class Contructor
        constructor()
        {
            super();
            this._bgImage = new createjs.Bitmap(assets.getResult("RightPathScreen"));
            this.addChild(this._bgImage);
        }

        public start() : void {
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
        }

        public update() : void {

        }

        private _leftButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene3_1;
            changeScene();
        }
        // Fucntion for when button is pressed
        private _rightButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene3_2;
            changeScene();
        }

    }
}