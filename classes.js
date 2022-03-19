// Scripts for classes...

function id(x) {
    return document.querySelector('#' + x);
}
function cls(y) {
    return document.querySelector('.' + y);
}
function tag(z) {
    return document.querySelector(z);
}
if (cls('disable') != null) {
    let disable = document.getElementsByClassName('disable');
    Array.prototype.forEach.call(disable, (element) => {
        element.onclick = function () {
            return false;
        }
        element.oncontextmenu = function () {
            return false;
        }
        element.setAttribute('title', 'This item has been Disabled');
    });
}
if (cls('reload') != null) {
    let reload = document.getElementsByClassName('reload');
    Array.prototype.forEach.call(reload, (element) => {
        element.innerHTML = 'Reload';
        element.addEventListener('click', () => {
            location.reload();
        });
    });
}
if (cls('disableCM') != null) {
    let disableCM = document.getElementsByClassName('disableCM');
    Array.prototype.forEach.call(disableCM, (element) => {
        element.oncontextmenu = function () {
            return false;
        }
    });
}
// if (cls('btnv1') != null) {
//     let btnv1 = document.getElementsByClassName('btnv1');
//     Array.prototype.forEach.call(btnv1, (element) => {
//         element.style.LineHeight = element.style.height + 'px';
//     });
// }