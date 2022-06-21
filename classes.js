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
setInterval(() => {
    if (cls('disableCM') != null) {
        let disableCM = document.getElementsByClassName('disableCM');
        Array.prototype.forEach.call(disableCM, (element) => {
            element.oncontextmenu = function () {
                return false;
            }
        });
    }
    if (cls('checkbox') != null) {
        let checkbox = document.getElementsByClassName('checkbox');
        Array.prototype.forEach.call(checkbox, (element) => {
            element.setAttribute('title', 'off');
            element.onclick = function () {
                if (element.innerHTML == '') {
                    element.innerHTML = '&check;';
                    element.setAttribute('value', 'on')
                    element.setAttribute('title', 'on');
                    element.style.background = 'linear-gradient(45deg, #0025d9, #007eff)';
                    element.style.color = 'white';
                } else {
                    element.innerHTML = '';
                    element.setAttribute('value', 'off')
                    element.setAttribute('title', 'off');
                    element.style.background = '';
                    element.style.color = '';
                }
            }
        });
    }
}, 5);
if (cls('reload') != null) {
    let reload = document.getElementsByClassName('reload');
    Array.prototype.forEach.call(reload, (element) => {
        element.innerHTML = 'Reload';
        element.addEventListener('click', () => {
            location.reload();
        });
    });
}
if (cls('toparrow') != null) {
    let toparrow = document.getElementsByClassName('toparrow');
    Array.prototype.forEach.call(toparrow, (element) => {
        element.innerHTML = '<a href="#topofart" id="toparrow" style="color: green; text-align: right;"><span class="text">Top</span><span class="sym">↑</span></a>';
    });
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
setInterval(() => {
    if (cls('bt-url') != null) {
        let bturl = document.getElementsByClassName('bt-url');
        Array.prototype.forEach.call(bturl, (element) => {
            element.onclick = function () {
                window.open(element.getAttribute('url'), '_blank');
            }
        });
    }
    if (cls('bt-0url')) {
        let bt0url = document.getElementsByClassName('bt-0url');
        Array.prototype.forEach.call(bt0url, (element) => {
            element.onclick = function () {
                window.location.href = element.getAttribute('url');
            }
        });
    }
}, 1000);