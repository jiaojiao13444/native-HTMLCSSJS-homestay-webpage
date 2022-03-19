//轮播图效果
(function changePic() {
    // 先获取所有图片和圆点
    var pics = document.querySelectorAll('.img');
    var dots = document.querySelectorAll('.dots span');
    // preIndex用于记录上一个被显示的图片与高亮的圆点的索引
    var preIndex = 0;
    for (let i = 0; i < 5; i++) {
        // 给每个图片和圆点都设置一个自定义属性index（表示索引）以便将二者一一对应
        pics[i].setAttribute('index', i);
        dots[i].setAttribute('index', i);
        // 给每个圆点绑定点击事件
        // 不能使用箭头函数，箭头函数中的this指向创建时的环境（此处是window）
        dots[i].onclick = function() {
            let index = this.getAttribute('index');
            if (preIndex !== index) {
                let preDot = dots[preIndex];
                let prePic = pics[preIndex];
                // 删除类名使用remove方法
                preDot.classList.remove('cur');
                prePic.classList.remove('current');
                // 添加类名使用add方法
                this.classList.add('cur');
                let pic = pics[index];
                pic.classList.add('current');
                // 不要忘记更新preIndex
                preIndex = index;
            }
        }
    }
    // 设置自动轮播，间隔2s
    var timer = setInterval(() => {
        let preDot = dots[preIndex];
        let prePic = pics[preIndex];
        if (preIndex < 4) {
            preIndex++;
        } else {
            preIndex = 0;
        }
        let dot = dots[preIndex];
        let pic = pics[preIndex];
        // 删除类名使用remove方法
        preDot.classList.remove('cur');
        prePic.classList.remove('current');
        // 添加类名使用add方法
        dot.classList.add('cur');
        pic.classList.add('current');
    }, 2000);
})();

//特惠房源切换城市
// 方法和上面的差不多
(function changeCity() {
    var cities = document.querySelectorAll('.citylist li');
    var houses = document.querySelectorAll('.productInfo .productBox');
    var preIndex = 0;
    for (let i = 0; i < 8; i++) {
        cities[i].setAttribute('index', i);
        houses[i].setAttribute('index', i);
        cities[i].onclick = function() {
            let index = this.getAttribute('index');
            if (preIndex !== index) {
                let precity = cities[preIndex];
                let prehouse = houses[preIndex];
                precity.classList.remove('current');
                prehouse.classList.remove('current');
                this.classList.add('current');
                let house = houses[index];
                house.classList.add('current');
                preIndex = index;
            }
        }
    }
})();