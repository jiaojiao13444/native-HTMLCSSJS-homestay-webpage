# 原生HTML，CSS，JavaScript搭建的民宿网站
## 预览地址
http://htmlpreview.github.io/?https://github.com/jiaojiao13444/native-HTMLCSSJS-homestay-webpage/blob/master/index.html
## 实现功能
鼠标经过图片时放大，使用C3的transform和transition实现  
补充知识：
- transform属性允许我们对元素进行旋转、缩放、移动或倾斜。它有两个属性值，一个是translate，可移动元素；一个是scale，可进行元素的缩放
- transition属性可以在不使用flash动画或js的情况下，当元素从一种样式变换为另一种样式时为元素添加效果，经常和:hover搭配使用，属性值：要过渡的属性 花费时间 运动曲线 何时开始;
```css
.oddsBox .content .productInfo .productBox .infoBox p img:hover {
    /* 鼠标经过时放大图片 */
    transform: scale(1.2);
    /* 这个时间是整个变化过程的时间,如果后面还有时间就是延迟开始的时间 */
    transition: 0.5s;
}
```
上下跳动的动画效果，使用C3的动画属性实现
```css
/* 动画的定义 */
/* 上下跳动的动画效果 */
@keyframes bounce {
    /* 开始时在原点 */
    0% {
        transform: translate(0, 0);
    }
    /* 结束时往下走了5px */
    100% {
        transform: translate(0, -5px);
    }
}
/* 使用bounce这个动画效果,一次用0.5s完成,动画效果永不停止,且是正反方向交替的效果 */
.ensureBox img {
    animation: bounce 0.5s infinite alternate;
}
```
原生JS实现轮播图
```js
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
```
PS: 数据依然是写死的/狗头
