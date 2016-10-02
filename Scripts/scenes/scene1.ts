
module scenes {
    export class scene1 extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _leftButton : objects.Button;
        private _rightButton : objects.Button;

        // Menu Class Contructor
        constructor()
        {
            super();
        }

        public start() : void {
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
        }

        public update() : void {

        }

        // Fucntion for when button is pressed
        private _rightButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene2_2;
            changeScene();
        }
        private _leftButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene2_1;
            changeScene();
        }
    }
}