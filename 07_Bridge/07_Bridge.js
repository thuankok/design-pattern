let Gestures = function(output){
    this.output = output;
    
    this.tap = function(){this.output.click()}
    this.swipe = function() {this.output.move()}
    this.pan = function() {this.output.drag()}
    this.pinch = function() {this.output.zoom()}
}

let Mouse  = function (output){
    this.output = output;

    this.click = function () { this.output.click(); }
    this.move = function () { this.output.move(); }
    this.down = function () { this.output.drag(); }
    this.wheel = function () { this.output.zoom(); }

}

let Screen = function(){
    this.click = function(){console.log("Screen click");}
    this.move = function(){console.log("Screen move");}
    this.drag = function(){console.log("Screen drag");}
    this.zoom = function(){console.log("Screen zoom in or zoom out");}
}

let Audio = function () {
    this.click = function () { console.log("Sound oink"); }
    this.move = function () { console.log("Sound waves"); }
    this.drag = function () { console.log("Sound screech"); }
    this.zoom = function () { console.log("Sound volume up"); }
};


function run() {

    let screen = new Screen();
    let audio = new Audio();

    let hand = new Gestures(screen);
    let mouse = new Mouse(audio);

    hand.tap();
    hand.swipe();
    hand.pinch();

    mouse.click();
    mouse.move();
    mouse.wheel();
}

run()