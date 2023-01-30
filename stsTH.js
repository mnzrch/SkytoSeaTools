// Scripts...

let assestdir;
if (window.location.protocol == 'file:') {
    assestdir = 'file:///C:/Users/Mc/Desktop/SkytoSeeTool/assests'
} else {
    assestdir = 'https://mnzrch.github.io/SkytoSeeTools/assests'
};
function tag(x) {
    return document.querySelector(x);
}
function $tag(x) {
    return document.querySelectorAll(x);
}
function cls(y) {
    return document.querySelector('.' + y);
}
function $cls(y) {
    return document.querySelectorAll('.' + y);
}
function id(z) {
    return document.querySelector('#' + z);
}
function $id(z) {
    return document.querySelectorAll('#' + z);
}
function getAttr(atr, element) {
    return element.getAttribute(atr);
}
function setAttr(atr, atrval, element) {
    return element.setAttribute(atr, atrval);
}
function click(fun, element) {
    return element.onclick = fun;
}
function resize(fun, element) {
    return element.onresize = fun;
}
function input(fun, element) {
    return element.oninput = fun;
}
function getCSS(css, element) {
    return parseInt(getComputedStyle(element)[css]);
}
function setCSS(property, value, element) {
    return element.style[property] = value;
}
function newEle(content, element) {
    if (element) {
        let newEle = document.createElement(element);
        if (content) {
            newEle.innerHTML = content;
            return newEle;
        }
        return newEle;
    }
    return document.createElement(content);
}
function html(content, element) {
    return element.innerHTML = content;
}
// Get cookie
function getCoki(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
// Set cookie
function setCoki(name, value, options = {}) {
    options = {
        path: '/',// add other defaults here if necessary
        ...options
    };
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
// Delete cookie
function delCoki(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}
// url parameters
function urlSP(x) {
    let parms = new URLSearchParams(window.location.search);
    return parms.get(x);
}
// Window height
function winh() {
    return window.innerHeight;
}
// Window width
function winw() {
    return window.innerWidth;
}
// past clipboard
async function clipboardpast(ele) {
    let clpdata = await navigator.clipboard.readText();
    if (clpdata == '') {
        alert('Clipboard is Empty!')
    } else {
        ele.value = clpdata;
    }
}





























