module scenes {
    export class scene4_1 extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _leftButton : objects.Button;
        private _rightButton : objects.Button;
        private _bgImage : createjs.Bitmap;
        private _restartText: createjs.Text;


        // Menu Class Contructor
        constructor()
        {
            super();
            this._bgImage = new createjs.Bitmap(assets.getResult("scene4_1"));
            this.addChild(this._bgImage);
        }

        public start() : void {
            console.log("Scene 4-1 Scene Started");

            //var bgImage = new createjs.Bitmap("../../Assets/images/RightPath.png");

            // Add button to scene. Register for click callback function
            this._leftButton = new objects.Button("Left", config.Screen.CENTER_X - 239, config.Screen.CENTER_Y + 233);
            this.addChild(this._leftButton);
            this._leftButton.on("click", this._leftButtonClick, this);

            this._restartText = new createjs.Text("Restart", "bold 16px Arial", "#ffffff");
            this._restartText.x = this._leftButton.x - (this._restartText.getBounds().width/6);
            this._restartText.y = this._leftButton.y - 16;
            this.addChild(this._restartText);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {

        }

        // Fucntion for when button is pressed
        private _rightButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene1;
            changeScene();
        }
        private _leftButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.scene1;
            changeScene();
        }
    }
}