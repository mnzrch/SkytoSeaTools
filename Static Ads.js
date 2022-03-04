
function id(x) {
    return document.querySelector('#' + x);
}
function cls(y) {
    return document.querySelector('.' + y);
}
function tag(z) {
    return document.getElementsByTagName(z);
}

if (id('custom-footer-ad') != null) {
    window.addEventListener('resize', () => {
            id('custom-footer-ad').style.bottom=0;
    });
}
if (id('custom-footer-ctrl') != null) {
    id('custom-footer-ctrl').addEventListener('click', () => {
        if (id('custom-footer-ctrl').innerHTML == '↓') {
                id('custom-footer-ad').style.bottom=-id('custom-footer-ad').clientHeight;
            setTimeout(() => {
                id('custom-footer-ctrl').innerHTML = '↑';
            }, 500);
//             if (id('custom-footer-ad') != null) {
//                 id('custom-footer-ad').style.bottom=-id('custom-footer-ad').clientHeight;
//             }
        } else if (id('custom-footer-ctrl').innerHTML == '↑') {
                id('custom-footer-ad').style.bottom=0;
            setTimeout(() => {
                id('custom-footer-ctrl').innerHTML = '↓';
            }, 500);
//             if (id('custom-footer-ad') != null) {
//                 id('custom-footer-ad').style.bottom=0;
//             }
        } else {
            return false;
        }
    });
    let adtime = 16;
    var closecounter = setInterval(() => {
        adtime -= 1;
        if (adtime <= 0) {
            clearInterval(closecounter);
            id('custom-footer-ctrl').innerHTML = '↓';
            id('custom-footer-ctrl').style.cursor = 'pointer';
        } else {
            id('custom-footer-ctrl').innerHTML = adtime + 's';
        }
    }, 1000);
}
