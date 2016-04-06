
var human = new render.DisplayObjectContainer();
human.x = -50;
human.y = -120;
var humanContainer = new render.DisplayObjectContainer();
var head = new render.Bitmap();
head.x = 10;
head.y = -90;
var trunk = new render.Bitmap();
trunk.x = 20;
var left_arm = new render.Bitmap();
left_arm.x = -10;
left_arm.y = 30;
var right_arm = new render.Bitmap();
right_arm.x = 95;
right_arm.y = 30;
var left_leg = new render.Bitmap();
left_leg.x = 0;
left_leg.y = 130;
var right_leg = new render.Bitmap();
right_leg.x = 60;
right_leg.y = 120;

head.source = "head.png";
trunk.source = "trunk.png";
left_arm.source = "left_arm.png";
right_arm.source = "right_arm.png";
left_leg.source = "left_leg.png";
right_leg.source = "right_leg.png";

humanContainer.addChild(human);
human.addChild(left_arm);
human.addChild(right_arm);
human.addChild(left_leg);
human.addChild(right_leg);
human.addChild(head);
human.addChild(trunk);


var renderCore = new render.RenderCore();

renderCore.start(humanContainer, ["left_arm.png","right_arm.png", "left_leg.png", "right_leg.png", "head.png", "trunk.png"]);


class HumanBody extends Body {

    vx:number = 5;
    vrotation = Math.PI/2;

    onTicker(duringTime: number) {

        this.x += this.vx*duringTime;
        this.rotation += this.vrotation*duringTime;

    }
}

var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.y = 200; 
ticker.start([body]);


var eventCore = new events.EventCore();
eventCore.init();

var headHitTest = (localPoint:math.Point,displayObject:render.DisplayObject) =>{
    alert (`点击位置为${localPoint.x},${localPoint.y}`);
    return true;
}

var headOnClick = () => {
    alert("clicked!!");
    //修改 HumanBody 的速度，使其反向移动
}

eventCore.register(head,headHitTest,headOnClick);










