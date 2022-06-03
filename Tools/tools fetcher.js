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
        let webtoolcon = '<link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Tools/3l-ist.css"><div id="fix-overlay"><div class="lll-ist bg-black bs-solid w-maxcon"><div class="lll-ist-credit hdr ai-center t-center w-wfa h-8pc padding-10 bg-black red"><span>Internet Speed Tester by LetsLearnLights</span></div><iframe class="ist-frame h-100pc" scrolling="no" src="https://fast.com/" style="margin-top: -25px;"></iframe><div class="lll-ist-credit ftr ai-center t-center w-wfa h-16pc padding-10 bg-black red"><span>This is a free tool for testing internet speed test from 3L Developers.</span><div class="dis-flex w-wfa jc-spacearound"><a class="social-icon lll" target="blank" href="https://letslearnlights.blogspot.com/" title="LetsLearnLights"></a><a class="social-icon fb" target="blank" href="https://facebook.com/mnzr.chauhan.official" title="facebook"></a><a class="social-icon insta" target="blank" href="https://instagram.com/mnzr.chauhan.official" title="instagram"></a><a class="social-icon yt" target="blank" href="https://www.youtube.com/results?search_query=mnzr+chauhan&sp=EgIQAg%253D%253D" title="youtube"></a></div></div><div style=" margin-top: 2px; height: 20px; box-shadow: 0px 0px 5px white; "></div></div></div>';
        id('webtool-place').innerHTML = webtoolcon;
        setTimeout(() => {
            id('webtool-place').setAttribute('class', '');
        }, 1000)
    }
}
if (window.location.href.match('quirytool=ehsaas') != null) {
    if (id('webtool-place') != null) {
        let webtoolcon = '<span id="fix-overlay-ctrl" class="margin-5 btnv1" style="cursor: pointer;">⨯</span><iframe src="https://ehsaastracking.pass.gov.pk/" frameborder="0" class="ehsaas-frame margin-0"></iframe>';
        id('webtool-place').innerHTML = webtoolcon;
        window.body.style.overflow = 'hidden';
        if (window.location.href.match('mywebapp') != null) {
            id('fix-overlay-ctrl').remove();
        } else {
            id('fix-overlay-ctrl').addEventListener('click', () => {
                id('webtool-place').remove();
                window.body.style.overflowX = 'hidden';
                window.body.style.overflowY = 'auto';
            })
        }
        setTimeout(() => {
            if (cls('ehsaas-frame') != null) {
                cls('ehsaas-frame').style.height = window.innerHeight + 'px';
                cls('ehsaas-frame').style.width = window.innerWidth + 'px';
                cls('ehsaas-frame').style.overflowY = 'auto';
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
