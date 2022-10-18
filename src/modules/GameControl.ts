import scorePannel from "./scorePannel";
import Snake from "./Snake";
import Food from "./Food";

class GameControl {
    scorePannel: scorePannel;
    Snake: Snake;
    Food: Food;

    isLive: boolean = true;

    direction: string = "ArrowRight";

    constructor() {
        this.scorePannel = new scorePannel();
        this.Snake = new Snake();
        this.Food = new Food();
        this.init();
    }

    init() {
        document.addEventListener("keydown", this.keyBoardhander.bind(this));
        this.run()
    }
    keyBoardhander(event: KeyboardEvent) {
        this.direction = event.key;
        console.log(this.direction);



    }


    // 控制蛇的移动
    run() {
        let X = this.Snake.X;
        let Y = this.Snake.Y;
        switch (this.direction) {
            case "ArrowRight":
                X += 10;
                break;
            case "ArrowLeft":
                X -= 10;
                break;
            case "ArrowUp":
                Y -= 10;
                break;
            case "ArrowDown":
                Y += 10;
                break;
            default:
                break;
        }
        try {
            this.Snake.X = X;
            this.Snake.Y = Y;
        } catch (e: any) {
            alert(e.message);
            this.isLive = false;
        }
        this.checkEat(X, Y);

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePannel.level - 1) * 30);
        
    }
    checkEat(X: number, Y: number) {
        if(X === this.Food.X && Y === this.Food.Y) {
            this.Food.change();
            this.scorePannel.addScore();
            this.Snake.addEle();
        }
    }
    
    
}

export default GameControl;