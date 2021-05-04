
var time = document.querySelector(".header__time");
var btns = document.querySelectorAll('button');
var btnClear = document.querySelector('button.clear');
var screen__result = document.querySelector('.screen__result');
var header__icon = document.querySelector('.header__mode');
var header__icon_img =  document.querySelector('.header__icon-img');
console.log(btnClear)

var screen__para = document.querySelector('.screen__para')

setInterval(function() {
    var date = new Date()
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var timeNow = `${hours}:${minutes}:${seconds}`;
    time.innerHTML = timeNow
},1000)
function clear() {
    screen__para.innerHTML = "";
}
for(var btn of btns) {
    btn.onclick = function(e) {
        screen__para.innerHTML += this.value;
    }
}
btnClear.onclick = function() {
    screen__para.innerHTML = '';
    screen__result.innerHTML='';
}

document.querySelector('button.equal').onclick = function() {
    var res = screen__para.innerHTML
    var result = eval(res)
    screen__result.innerHTML = result;
    console.log(result)
}
header__icon.onclick = function () {
    document.querySelector('body').classList.toggle('light-mode')
    console.log(document.body.classList.contains('light-mode'))
    if(document.body.classList.contains('light-mode')) {
         header__icon_img.src= "./assets/img/moon.png"; ;
         document.querySelector('.header__icon_back').innerHTML = "Dark Mode";
         document.querySelector('.header__icon_back').background = 'var(--secondary-20)';
    }
    else {
        header__icon_img.src= "./assets/img/sun.png";
        document.querySelector('.header__icon_back').innerHTML = "Light Mode";


    }
   
}
document.querySelector('button.del').onclick = function () {
    var beforeDel = screen__para.innerText; 
    var alterDel = beforeDel.slice(0,beforeDel.length-1)
    screen__para.innerText = alterDel;
    

}
// expected output: 2 + 2


// var body = document.querySelector('body');
// var dark = document.querySelector('.dark');
// dark.addEventListener('click',function hihi() {
//     body.classList.toggle('dark');
// })



