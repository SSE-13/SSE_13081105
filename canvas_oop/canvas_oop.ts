/**
 * 基类，负责处理x,y,rotation 等属性
 */ 
class DisplayObject {

    x = 0;

    y = 0;

    rotation = 0;

    draw(context: CanvasRenderingContext2D) {
        context.save();
        context.rotate(this.rotation);
        context.translate(this.x, this.y);
        this.render(context);

        context.restore();
    }

    render(context: CanvasRenderingContext2D) {

    }

}

class Bitmap extends DisplayObject {


    source;

    render(context: CanvasRenderingContext2D) {

        var image = imagePool[this.source];
        if (image) {
            context.drawImage(image, 0, 0);
        }
        else {
            context.font = "20px Arial";
            context.fillStyle = '#000000';
            context.fillText('错误的URL', 0, 20);
        }
    }

}

class Rect extends DisplayObject {

    width = 100

    height = 100;

    color = '#FF0000';

    render(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(0, 0, this.width, this.height);
    }
}

class TextField extends DisplayObject {

    render(context: CanvasRenderingContext2D) {
        context.font = "10px Arial";
        context.fillStyle = '#FFFFFF';
        context.fillText('风之旅人', 0, 10);
    }
}

function drawQueue(queue) {
    for (var i = 0; i < renderQueue.length; i++) {
        var displayObject: DisplayObject = renderQueue[i];
        displayObject.draw(context);
    }
}

var imagePool = {};

function loadResource(imageList, callback) {
    var count = 0;
    imageList.forEach(function(imageUrl) {
        var image = new Image();
        image.src = imageUrl;
        image.onload = onLoadComplete;
        image.onerror = onLoadError;

        function onLoadComplete() {
            imagePool[imageUrl] = image;
            count++;
            if (count == imageList.length) {
                callback();
            }
        }
        
        function onLoadError(){
            alert('资源加载失败:' + imageUrl);
        }
    })
}


var canvas: HTMLCanvasElement = document.getElementById("game") as HTMLCanvasElement;
var context = canvas.getContext("2d");


/*var rect = new Rect();
rect.width = 800;
rect.height = 400;
rect.color = '#a1ab90'*/


var rect2 = new Rect();
rect2.width = 800;
rect2.height = 150;
//rect2.x = 000;
rect2.y = 250;
//rect2.rotation = Math.PI / 8;
rect2.color = '#d2a494'

var rect3 =new Rect();
rect3.width = 20;
rect3.height = 75;
rect3.x=400;
rect3.y=260;
rect3.color='#791a06'

var rect4 =new Rect();
rect4.width = 15;
rect4.height = 50;
rect4.x=300;
rect4.y=200;
rect4.color='#791a06'


var text = new TextField();
text.x = 5;

var bitmap = new Bitmap();
bitmap.source = 'back.jpg';

//渲染队列
var renderQueue = [bitmap, rect2, text,rect3,rect4];
//资源加载列表
var imageList = ['wind.jpg'];

//先加载资源，加载成功之后执行渲染队列
loadResource(imageList, function() {
    drawQueue(renderQueue);
})


