class scorePannel{
    score = 0;
    level = 1;

    // 获取对应的元素结点
    scoreEle : HTMLElement;
    levelEle : HTMLElement;

    // 设置最大等级， 每隔多少分可以升级一次
    maxLevel : number;
    scoreFlag : number;


    constructor (maxLevel : number = 10, scoreFlag : number = 10) {
        this.scoreEle =  document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel = maxLevel;
        this.scoreFlag = scoreFlag;

    }

    // 分数增加
    addScore() {
        this.scoreEle.innerHTML = ++this.score + "";

        // 当分数增加到一定阶段，等级提升
        if(this.score % this.scoreFlag == 0) {
            this.upLevel();
        }
    }

    // 等级增加
    upLevel() {
        if(this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + "";
        }
    }
}


// 测试代码
// let levelPannel = new scorePannel(20, 5)

// let i = 0;
// while(i++ < 100) {
//     levelPannel.addScore();
// }

export default scorePannel;