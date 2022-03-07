// script...
function id(x) {
    return document.querySelector('#' + x);
}
function cls(y) {
    return document.querySelector('.' + y);
}
function tag(z) {
    return document.querySelector(z);
}
if (window.location.href.match('quirytool=ist') != null) {
    if (id('webtool-place') != null) {
        let webtoolcon = '<link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Tools/3l-ist.css"><div id="fix-overlay"><div class="lll-ist fix bg-black border-10 bs-solid bc-black of-hidden h-500 maxh-600 w-maxcon"><div class="lll-ist-credit hdr absolute ai-center t-center w-wfa h-8pc padding-10 bg-black red"><span>Internet Speed Tester by LetsLearnLights</span></div><iframe class="ist-frame of-hidden maxh-500 h-100pc bs-none" scrolling="no" src="https://fast.com/" style="margin-top: -25px;"></iframe><div class="lll-ist-credit ftr absolute ai-center t-center w-wfa h-16pc padding-10 bg-black red"><span>This is a free tool for testing internet speed test from 3L Developers.</span><div class="dis-flex w-wfa jc-spacearound"><a class="social-icon lll" target="blank" href="https://letslearnlights.blogspot.com/" title="LetsLearnLights"></a><a class="social-icon fb" target="blank" href="https://facebook.com/mnzr.chauhan.official" title="facebook"></a><a class="social-icon insta" target="blank" href="https://instagram.com/mnzr.chauhan.official" title="instagram"></a><a class="social-icon yt" target="blank" href="https://www.youtube.com/results?search_query=mnzr+chauhan&sp=EgIQAg%253D%253D" title="youtube"></a></div></div></div></div>';
        // let webtoolcon = '<link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Tools/3l-ist.css"><div id="fix-overlay"><div class="lll-ist fix bg-black border-10 bs-solid bc-black of-hidden h-500 maxh-600 w-maxcon"><div class="lll-ist-credit hdr absolute ai-center t-center w-wfa h-10pc padding-10 bg-black red"><span>Internet Speed Tester by LetsLearnLights</span></div><iframe class="ist-frame of-hidden maxh-500 h-100pc bs-none" scrolling="no" src="https://fast.com/" style="margin-top: -25px;"></iframe><div class="lll-ist-credit ftr absolute ai-center t-center w-wfa h-16pc padding-10 bg-black red"><span>This is a free tool for testing internet speed test from 3L Developers.</span><div class="dis-flex w-wfa jc-spacearound"><a class="social-icon lll" target="blank" href="https://letslearnlights.blogspot.com/" title="LetsLearnLights"></a><a class="social-icon fb" target="blank" href="https://facebook.com/mnzr.chauhan.official" title="facebook"></a><a class="social-icon insta" target="blank" href="https://instagram.com/mnzr.chauhan.official" title="instagram"></a><a class="social-icon yt" target="blank" href="https://www.youtube.com/results?search_query=mnzr+chauhan&sp=EgIQAg%253D%253D" title="youtube"></a></div></div></div></div>';
        id('webtool-place').innerHTML = webtoolcon;
        setTimeout(() => {
            id('webtool-place').setAttribute('class', '');
        }, 1000)
    }
}
if (window.location.href.match('quirytool=ehsaas') != null) {
    if (id('webtool-place') != null) {
        let webtoolcon = '<span id="fix-overlay-ctrl" class="margin-5 fix right-0 top-0 btnv1 index-1000" style="cursor: pointer;">⨯</span><iframe src="https://ehsaastracking.pass.gov.pk/" frameborder="0" class="ehsaas-frame fix top-0 right-0 left-0 bottom-0 index-999 margin-0"></iframe>';
        id('webtool-place').innerHTML = webtoolcon;
        if (window.location.href.match('mywebapp') != null) {
            id('fix-overlay-ctrl').remove();
        } else {
            id('fix-overlay-ctrl').addEventListener('click', () => {
                id('webtool-place').remove();
            })
        }
        setTimeout(() => {
            if (cls('ehsaas-frame') != null) {
                cls('ehsaas-frame').style.height = window.innerHeight + 'px';
                cls('ehsaas-frame').style.width = window.innerWidth + 'px';
            }
            id('webtool-place').setAttribute('class', '');
        }, 1000)
    }
    window.addEventListener('resize', () => {
        if (cls('ehsaas-frame') != null) {
            cls('ehsaas-frame').style.height = window.innerHeight + 'px';
            cls('ehsaas-frame').style.width = window.innerWidth + 'px';
        }
    })
}
