// 食物类
class Food {
    element: HTMLElement;
    constructor() {
        // !  表示强调该值不为空
        this.element = document.getElementById("food")!;

    }
    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    change() {
        // 随机生成食物位置时候，位置范围是有限制的 0 - 290
        // 考虑到蛇的每次移动单位都是10，所以我们设置随机生成位置时候
        // 生成整10倍数
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + "px";
        this.element.style.top = top + "px";

    }
}

// 测试代码
// let food = new Food();
// food.change()
// console.log(food.X, food.Y);
export default Food;