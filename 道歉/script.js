let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "我错了 真的对不起", 
    "球球泥 原谅我好嘛", 
    "以后好吃的都给你 ", 
    "别钓我了 直钩我也咬", 
    "原谅我好不好..."
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "https://s1.aigei.com/src/img/gif/5e/5e15c5f637fa498492026182e4e08afd.gif?e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:mRUHeB8PdFJ8WomSikDcZlM5Idg="; // 震惊
    if (clickCount === 2) mainImage.src = "https://s1.aigei.com/src/img/gif/5e/5e15c5f637fa498492026182e4e08afd.gif?e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:mRUHeB8PdFJ8WomSikDcZlM5Idg=";   // 思考
    if (clickCount === 3) mainImage.src = "https://s1.aigei.com/src/img/gif/5e/5e15c5f637fa498492026182e4e08afd.gif?e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:mRUHeB8PdFJ8WomSikDcZlM5Idg=";   // 生气
    if (clickCount === 4) mainImage.src = "https://s1.aigei.com/src/img/gif/5e/5e15c5f637fa498492026182e4e08afd.gif?e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:mRUHeB8PdFJ8WomSikDcZlM5Idg=";  // 哭
    if (clickCount >= 5) mainImage.src = "https://s1.aigei.com/src/img/gif/5e/5e15c5f637fa498492026182e4e08afd.gif?e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:mRUHeB8PdFJ8WomSikDcZlM5Idg=";  // 之后一直是哭

});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">就知道你最好了( ˘ ³˘)♡</h1>
            <img src="https://s1.aigei.com/src/img/gif/78/78b5fce991344fa3ac809c4e825b3286.gif?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:3spIIIWL4yWDK7tTiPyCz7EPvIM=" alt="拥抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});