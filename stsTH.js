// Scripts...

let assestdir;
if (window.location.protocol == 'file:') {
    assestdir = 'file:///C:/Users/mnzrc/Desktop/SkytoSeeTool/assests'
} else {
    assestdir = 'https://mnzrch.github.io/SkytoSeeTools/assests'
};
function $(x) {
    return document.querySelector(x);
}; const tag = $;
function $$(x) {
    return document.querySelectorAll(x);
}; const tags = $$;
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
function getAttr(atr, ele) {
    return ele.hasAttribute(atr) ? ele.getAttribute(atr) : undefined;
}
function setAttr(atr, atrval, e) {
    return e.setAttribute(atr, atrval);
}
function click(fun, e) {
    return e.onclick = fun;
}
function resize(fun, e) {
    return e.onresize = fun;
}
function input(fun, e) {
    return e.oninput = fun;
}
function getCSS(css, e) {
    return parseInt(getComputedStyle(e)[css]);
}
function setCSS(prpty, vl, e) {
    var p = prpty.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    return e.style[p] = vl;
}
function $setCSS(objs, ele) {
    for (var p in objs) {
        if (objs.hasOwnProperty(p)) {
            setCSS(p, objs[p], ele);
        }
    }
}
function setClass(cls, ele) {
    ele.classList.add(cls);
}
function remClass(cls, ele) {
    ele.classList.remove(cls);
}
function newEle(cnt, e) {
    if (e) {
        let newEle = document.createe(e);
        if (cnt) {
            newEle.innerHTML = cnt;
            return newEle;
        }
        return newEle;
    }
    return document.createElement(cnt);
}
function html(cnt, e) {
    return e.innerHTML = cnt;
}
// Get cookie
function getCoki(n) {
    let mtchs = document.cookie.match(new RegExp(
        "(?:^|; )" + n.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return mtchs ? decodeURIComponent(mtchs[1]) : undefined;
}
// Set cookie
function setCoki(n, vl, op = {}) {
    op = {
        path: '/',// add other defaults here if necessary
        ...op
    };
    if (op.expires instanceof Date) {
        op.expires = op.expires.toUTCString();
    }
    let updtdCK = encodeURIComponent(n) + "=" + encodeURIComponent(vl);
    for (let opK in op) {
        updtdCK += "; " + opK;
        let opVL = op[opK];
        if (opVL !== true) {
            updtdCK += "=" + opVL;
        }
    }
    document.cookie = updtdCK;
}
// Delete cookie
function delCoki(n) {
    setCookie(n, "", {
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
    let clpD = await navigator.clipboard.readText();
    if (clpD == '') {
        alert('Clipboard is Empty!')
    } else {
        ele.value = clpD;
    }
}





























