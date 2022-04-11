function id(x) {
    return document.querySelector('#' + x);
}
function cls(y) {
    return document.querySelector('.' + y);
}
function tag(z) {
    return document.querySelector(z);
}
function lll_ctrlpnl() {
    if (window.location.search.match('mywebv')) {
        cls('lll-ctrlpnl').style.display = 'block';
        cls('lll-ctrlpnl-playbtn-ctrl').onclick = function () {
            cls('lll-ctrlpnl').style.display = 'none';
        }
        cls('lll-ctrlpnl-logo').onclick = function () {
            let mywebctrlpnlcntnt = '<div class="lll-ctrlpnl-header"><div class="lll-ctrlpnl-ctrl btnv1" >&minus;</div><div class="lll-ctrlpnl-head">Control Panel</div></div ><div class="lll-ctrlpnl-content"><div class="lll-ctrlpnl-content-box bt-0url" url="https://letslearnlights.blogspot.com/?quirytool=ehsaas&mywebapp"><img src="./Tools/assests/ehsass.png"><div>Ehsaas Programe</div></div><div class="lll-ctrlpnl-content-box bt-0url" url="https://letslearnlights.blogspot.com/?quirytool=ist&mywebapp"><img src="./Tools/assests/ist.png"><div>Internet Speed Tester</div></div><div class="lll-ctrlpnl-content-box bt-0url" url="https://www.google.com/"><img src="./Tools/assests/1 (11).png"><div>Google</div></div><div class="lll-ctrlpnl-content-box bt-0url" url="https://www.facebook.com/"><img src="./Tools/assests/facebook.png"><div>Facebook</div></div><div class="lll-ctrlpnl-content-box bt-0url" url="https://www.instagram.com/"><img src="./Tools/assests/2.png"><div>Instagram</div></div><div class="lll-ctrlpnl-content-box bt-0url" url="https://youtube.com"><img src="./Tools/assests/3.png"><div>Youtube</div></div><div class="lll-ctrlpnl-content-box bt-0url" url="https://www.tiktok.com/"><img src="./Tools/assests/tiktok.png"><div>Tiktok</div></div></div>';
            let mywebctrlpnlcntnt0 = '<div class="lll-ctrlpnl-playbtn"><div class="lll-ctrlpnl-playbtn-ctrl">&Cross;</div><img class="lll-ctrlpnl-logo" src="./Tools/assests/control-panel.svg"><div style="float: left;writing-mode: vertical-lr;font-weight: bold;cursor: none;">Control Panel</div></div>';
            cls('lll-ctrlpnl').removeAttribute('style');
            cls('lll-ctrlpnl').innerHTML = mywebctrlpnlcntnt;
            cls('lll-ctrlpnl').style.display = 'block';
            cls('lll-ctrlpnl-ctrl').onclick = function () {
                cls('lll-ctrlpnl').setAttribute('style', 'width: fit-content;height: fit-content;top: 5px;left: auto;padding: 5px;text-align: center;border-radius: 5px 0px 0px 5px;');
                cls('lll-ctrlpnl').innerHTML = mywebctrlpnlcntnt0;
                cls('lll-ctrlpnl').style.display = 'block';
                lll_ctrlpnl();
            };
        };
    }
};
lll_ctrlpnl();