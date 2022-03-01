// cript by LetsLearnLights
let adheadertl = 15;
var Theader = setInterval(function(){
    adheadertl -= 1;
    if(adheadertl <= 0){
      clearInterval(Theader);
      document.getElementById('header-static-act').innerHTML = '<btn id=header-static-actbtn class=header-static-actbtn onclick=headerhide()>◥</btn>';
    } else  if(adheadertl <= 9){
        document.getElementById("header-static-act").innerHTML = '<btn id=header-static-actbtn class=header-static-actbtn style=letter-spacing:normal;>0'+adheadertl+'</btn>';
    } else{
        document.getElementById("header-static-act").innerHTML = '<btn id=header-static-actbtn class=header-static-actbtn style=letter-spacing:normal;>'+adheadertl+'</btn>';
      }
    }, 1000);
let adfootertl = 15;
    var Tfooter = setInterval(function(){
    adfootertl -= 1;
    if(adfootertl <= 0){
        clearInterval(Tfooter);
        document.getElementById('footer-static-act').innerHTML = '<button id=footer-static-actbtn class=footer-static-actbtn onclick=footerhide()>▽</button>';
    } else  if(adfootertl <= 9){
        document.getElementById('footer-static-act').innerHTML = '<button id=footer-static-actbtn class=footer-static-actbtn style=font-family:none;>0'+adfootertl+'</button>';
    } else{
        document.getElementById('footer-static-act').innerHTML = '<button id=footer-static-actbtn class=footer-static-actbtn style=font-family:none;>'+adfootertl+'</button>';
        }
    }, 1000);
let adlefttl = 15;
var Tleft = setInterval(function(){
    adlefttl -= 1;
    if(adlefttl <= 0){
        clearInterval(Tleft);
        document.getElementById('left-static-act').innerHTML = '<btn id=left-static-actbtn class=left-static-actbtn onclick=lefthide()>◁◂</btn>';
    } else  if(adlefttl <= 9){
        document.getElementById('left-static-act').innerHTML = '<btn id=left-static-actbtn class=left-static-actbtn style=letter-spacing:normal;>0'+adlefttl+'</btn>';
    } else{
        document.getElementById('left-static-act').innerHTML = '<btn id=left-static-actbtn class=left-static-actbtn style=letter-spacing:normal;>'+adlefttl+'</btn>';
        }
    }, 1000);
let adrighttl = 15;
var Tright = setInterval(function(){
    adrighttl -= 1;
    if(adrighttl <= 0){
        clearInterval(Tright);
        document.getElementById('right-static-act').innerHTML = '<btn id=right-static-actbtn class=right-static-actbtn onclick=righthide()>▸▷</btn>';
    } else  if(adrighttl <= 9){
        document.getElementById('right-static-act').innerHTML = '<btn id=right-static-actbtn class=right-static-actbtn style=letter-spacing:normal;>0'+adrighttl+'</btn>';
    } else{
        document.getElementById('right-static-act').innerHTML = '<btn id=right-static-actbtn class=right-static-actbtn style=letter-spacing:normal;>'+adrighttl+'</btn>';
        }
    }, 1000);
// header
function headerhide() {
    var op = document.getElementById('static-ad-op');
    op.style.opacity = '30%';
    var hide = document.getElementById('header-static-adframe');
    hide.style.top = '-175px';
    let wwidth = window.innerWidth - 29 + "px";
    hide.style.left = wwidth;
    // <btn id=header-static-actbtn class=header-static-actbtn onclick=headerview()">◣</btn>
   setTimeout(()=>{
        document.getElementById('header-static-act').innerHTML = '<btn id=header-static-actbtn class=header-static-actbtn onclick=headerview()>◣</btn>';
        let actbtn = document.getElementById('header-static-actbtn');
        actbtn.style.padding = '0px 0px 0px 2px';
        actbtn.style.width = '18px';
    },400);
}
function headerview() {
    var op = document.getElementById('static-ad-op');
    op.style.opacity = '100%';
        var view = document.getElementById('header-static-adframe');
        view.style.top = '10%';
        view.style.left = '10%';
    // <btn id=header-static-actbtn class=header-static-actbtn onclick=headerhide()">◥</btn>
   setTimeout(()=>{
       document.getElementById('header-static-act').innerHTML = '<btn id=header-static-actbtn class=header-static-actbtn onclick=headerhide()>◥</btn>';
    },400);
}
// footer
function footerhide() {
    var op = document.getElementById('static-ad-op');
    op.style.opacity = '30%';
    var hide = document.getElementById('footer-static-adframe');
    hide.style.height = '5px';
// <button id=footer-static-actbtn class=footer-static-actbtn onclick=footerview()">△</button>
    setTimeout(() => {
        document.getElementById('footer-static-act').innerHTML = '<button id=footer-static-actbtn class=footer-static-actbtn onclick=footerview()>△</button>';
    }, 400);
}
function footerview() {
    var op = document.getElementById('static-ad-op');
    op.style.opacity = '100%';
    var view = document.getElementById('footer-static-adframe');
    view.style.height = '200px'; 
// <btn id=footer-static-actbtn class=footer-static-actbtn onclick=footerhide()">▽</button>
   setTimeout(()=>{
    document.getElementById('footer-static-act').innerHTML = '<button id=footer-static-actbtn class=footer-static-actbtn onclick=footerhide()>▽</button>';
   },400);
}
// left
function lefthide() {
    var op = document.getElementById('static-ad-op');
    op.style.opacity = '30%';
    var hide = document.getElementById('left-static-adframe');
    hide.style.left = '-200px';
    // <btn id=left-static-actbtn class=left-static-actbtn onclick=leftview()">▸▷</btn>
   setTimeout(()=>{
        document.getElementById('left-static-act').innerHTML = '<btn id=left-static-actbtn class=left-static-actbtn onclick=leftview()>▸▷</btn>';
    },400);
}
function leftview() {
    var op = document.getElementById('static-ad-op');
    op.style.opacity = '100%';
        var view = document.getElementById('left-static-adframe');
        view.style.left = '0';
    // <btn id=left-static-actbtn class=left-static-actbtn onclick=lefthide()">◁◂</btn>
   setTimeout(()=>{
       document.getElementById('left-static-act').innerHTML = '<btn id=left-static-actbtn class=left-static-actbtn onclick=lefthide()>◁◂</btn>';
    },400);
}
// right
function righthide() {
    var op = document.getElementById('static-ad-op');
    op.style.opacity = '30%';
    var hide = document.getElementById('right-static-adframe');
    hide.style.right = '-200px';
    // <btn id=right-static-actbtn class=right-static-actbtn onclick=rightview()">◁◂</btn>
   setTimeout(()=>{
        document.getElementById('right-static-act').innerHTML = '<btn id=right-static-actbtn class=right-static-actbtn onclick=rightview()>◁◂</btn>';
    },400);
}
function rightview() {
    var op = document.getElementById('static-ad-op');
    op.style.opacity = '100%';
        var view = document.getElementById('right-static-adframe');
        view.style.right = '0';
    // <btn id=right-static-actbtn class=right-static-actbtn onclick=righthide()">▸▷</btn>
   setTimeout(()=>{
       document.getElementById('right-static-act').innerHTML = '<btn id=right-static-actbtn class=right-static-actbtn onclick=righthide()>▸▷</btn>';
    },400);
}
// centerc
function centerchide() {
    var op = document.getElementById('static-ad-op');
    op.style.opacity = '30%';
    var hide = document.getElementById('centerc-static-adframe');
    hide.style.right = '-770px';
    hide.style.bottom = '-770px';
    // <btn id=centerc-static-actbtn class=centerc-static-actbtn onclick=centercview()">□◻</btn>
        document.getElementById('centerc-static-act').innerHTML = '<btn id=centerc-static-actbtn class=centerc-static-actbtn onclick=centercview()>◻</btn>';
    }
function centercview() {
    var op = document.getElementById('static-ad-op');
    op.style.opacity = '100%';
        var view = document.getElementById('centerc-static-adframe');
        view.style.right = '1%';
        view.style.bottom = '1%';
    // <btn id=centerc-static-actbtn class=centerc-static-actbtn onclick=centerchide()">▣</btn>
       document.getElementById('centerc-static-act').innerHTML = '<btn id=centerc-static-actbtn class=centerc-static-actbtn onclick=centerchide()>▣</btn>';
}