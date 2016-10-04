/*
    Class:              scene
    Description:        config module to store globally accessible values and states for the game.

    Author:             George Savchenko 
    Revision History:
    Name:               Date:        Description:
    -------------------------------------------------------------------
    George Savchenko    10/3/2016    renamed variables and removed code
*/
module config {
    export class Scene {
        public static scene1 : number = 0;
        public static scene2_1 : number = 1;
        public static scene2_2 : number = 2;
        public static scene3_1 : number = 3;
        public static scene3_2 : number = 4;
        public static scene3_3 : number = 5;
        public static scene3_4 : number = 6;
        public static scene4_1 : number = 7;
        public static scene4_2 : number = 8;
        public static scene4_3 : number = 9;
        public static scene4_4 : number = 11;
        public static scene4_5 : number = 12;
        public static scene4_6 : number = 13;    
        public static scene4_7 : number = 14;  
        public static scene4_8 : number = 15;       
    }

    export class Screen {
        public static WIDTH : number = 640;
        public static HEIGHT : number = 480;
        public static CENTER_X : number = 320;
        public static CENTER_Y : number = 240;
    }
    
    export class Game {
        public static FPS : number = 60;
    }
}