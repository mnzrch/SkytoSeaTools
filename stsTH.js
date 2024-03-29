function clog(x) {
    return console.log(x);
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
function getAttr(atr, e) {
    if (e.hasAttribute(atr)) { let v = e.getAttribute(atr); if (v == '') { return 'defined&null' } else { return v } } else { return undefined };
}
function setAttr(atr, atrval, e) {
    if (e instanceof Node) {
        return e.setAttribute(atr, atrval);
    }
}
function click(fun, e) {
    return e.onclick = fun;
}
function dclick(fun, e) {
    return e.ondblclick = fun;
}
function resize(fun, e) {
    return e.onresize = fun;
}
function input(fun, e) {
    return e.oninput = fun;
}
function getCSS(s, e) {
    if (e instanceof Element) { return getComputedStyle(e).getPropertyValue(s.replace(/-([a-z])/g, (m, l) => l.toUpperCase())); }
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
function hasClass(cls, ele) {
    return ele.classList.contains(cls);
}
function newEle(cnt, e) {
    if (e) {
        let ne = document.createElement(e);
        if (cnt) {
            ne.innerHTML = cnt;
            return ne;
        }
        return ne;
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
// get url array(promis) from sitemap (xml)
async function smtoarray(sitemapUrl) {
    const response = await fetch(sitemapUrl);
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "application/xml");
    const urls = xml.getElementsByTagName("loc");
    const urlArray = [];

    for (let i = 0; i < urls.length; i++) {
        urlArray.push(urls[i].textContent);
    }

    return urlArray;
}
