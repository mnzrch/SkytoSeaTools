// Scripts for classes...

//            Overlay
//  <div id="fix-overlay" wait="0"></div>
// 
//            footer ad
//  <div id="fix-footer-ad-content" class="null"><!-- This is Your content --></div>
//  <div id="fix-footer-ad" wait="0"></div>
// 
function id(x) {
    return document.querySelector('#' + x);
}
function cls(y) {
    return document.querySelector('.' + y);
}
function tag(z) {
    return document.getElementsByTagName(z);
}
if (cls('disable') != null) {
    cls('disable').addEventListener('click', () => {
        return false;
    });
}
if (cls('reload') != null) {
    if (cls('reload').innerHTML != null) {
        cls('reload').innerHTML = "Reload";
    };
    cls('reload').addEventListener('click', () => {
        location.reload();
    });
}
if (cls('disableCM') != null) {
    cls('disableCM').setAttribute('oncontextmenu', 'return false');
}
if (cls('btnv1') != null) {
    cls('btnv1').addEventListener('click', () => {
        cls('btnv1').focus();
    });
}
//            Overlay
let fixoverlay = setInterval(() => {
    if (id('fix-overlay') != null) {
        clearInterval(fixoverlay);
        id('fix-overlay').setAttribute('class', 'fix top-0 right-0 left-0 bottom-0 padding-10 bg-black index-997');
        id('fix-overlay').innerHTML = id('fix-overlay').innerHTML + '<span id="fix-overlay-ctrl" class="margin-5 fix right-0 top-0 btnv1">⨯</span>';
        if (window.location.href.match('mywebapp') != null) {
            id('fix-overlay-ctrl').remove();
            id('fix-overlay').style.background = 'black';
        } else {
            let fixoverlayctrlt = id('fix-overlay').getAttribute('wait');
            fixoverlayctrl = setInterval(() => {
                fixoverlayctrlt -= 1;
                if (fixoverlayctrlt <= 0) {
                    clearInterval(fixoverlayctrl);
                    id('fix-overlay-ctrl').innerHTML = '⨯';
                    id('fix-overlay-ctrl').style.cursor = 'pointer';
                } else {
                    id('fix-overlay-ctrl').innerHTML = fixoverlayctrlt + 's';
                }
            }, 1000)
            setTimeout(() => {
                if (id('fix-overlay-ctrl') != null) {
                    id('fix-overlay-ctrl').addEventListener('click', () => {
                        if (id('fix-overlay-ctrl').innerHTML == '⨯') {
                            id('fix-overlay').remove();
                        }
                    })
                }
            }, 1000);
        }
    }
}, 100)
//            footer ad
// let fixfooterad = setInterval(() => {
    if (id('fix-footer-ad') != null) {
//         clearInterval(fixfooterad);
        id('fix-footer-ad').innerHTML = '<div id="custom-footer-ad" class="w-inherit fix h-25pc maxh-250 minh-100 right-0 bottom-0 left-0 index-996"><span id="custom-footer-ctrl-shadow"></span><span id="custom-footer-ctrl">▽</span><div id="custom-footer-adhere" class="w-wfa h-wfa margin-5 of-hide bg-aliceblue">Adhere</div></div>';
        if (id('custom-footer-adhere') != null && id('fix-footer-ad-content') != null) {
            id('custom-footer-adhere').innerHTML = id('fix-footer-ad-content').innerHTML.replace('<!--', '').replace('-->', '');
        }
        if (id('custom-footer-ad') != null) {
            window.addEventListener('resize', () => {
                if (id('custom-footer-ad').style.bottom != 0) {
                    id('custom-footer-ad').style.bottom = 0;
                    id('custom-footer-ad').style.bottom = -id('custom-footer-ad').clientHeight + 'px';
                }
            });
        }
        if (id('custom-footer-ctrl') != null) {
            id('custom-footer-ctrl').addEventListener('click', () => {
                if (id('custom-footer-ctrl').innerHTML == '▽') {
                    setTimeout(() => {
                        id('custom-footer-ctrl').innerHTML = '△';
                    }, 500);
                    if (id('custom-footer-ad') != null) {
                        id('custom-footer-ad').style.opacity = '0.5';
                        id('custom-footer-ad').style.bottom = -id('custom-footer-ad').clientHeight + 'px';
                    }
                } else if (id('custom-footer-ctrl').innerHTML == '△') {
                    setTimeout(() => {
                        id('custom-footer-ctrl').innerHTML = '▽';
                    }, 500);
                    if (id('custom-footer-ad') != null) {
                        id('custom-footer-ad').style.opacity = '1';
                        id('custom-footer-ad').style.bottom = 0;
                    }
                } else {
                    return false;
                }
            });
            let fixfooteradt = id('fix-footer-ad').getAttribute('wait');
            var fixfooterad = setInterval(() => {
                fixfooteradt -= 1;
                if (fixfooteradt <= 0) {
                    clearInterval(fixfooterad);
                    id('custom-footer-ctrl').innerHTML = '▽';
                    id('custom-footer-ctrl').style.cursor = 'pointer';
                } else {
                    id('custom-footer-ctrl').innerHTML = fixfooteradt + 's';
                }
            }, 1000);
        }
    }
// }, 100)
