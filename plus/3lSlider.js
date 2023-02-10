
//---------------------------------------------------------------------------
// (3l) lll Slider
let onloadslider = setInterval(() => {
    if (id('for-lll-slider') != null) {
        clearInterval(onloadslider);
        if (id('for-lll-slider').getAttribute('autostart') == 'on') {
            sliderloader();
        } else {
            id('for-lll-slider').innerHTML = '<button id="sliderloader" class="btnv2">Load Slider</button>';
            id('sliderloader').onclick = function () {
                sliderloader();
            }
        }
    }
}, 5);
function sliderloader() {
    if (id('for-lll-slider') != null & id('lll-slider-content') != null) {
        ctrlpnt = '<div class="lll-slider-ctrlpnl" style="visibility: hidden;"><div class="lll-slider-ctrlpnl-header">Control Panel <span id="down">&Downarrow;</span></div><div class="lll-slider-ctrlpnl-content"><div id="autoplaybtn">Autoplay <div id="autoplay" class="checkbox"></div></div><div id="builtsbtn">Builts <div id="builts" class="checkbox"></div></div><div id="nextplaybtn">Nextplay <input title="Delay in Seconds" id="nextplay" type="number" onclick="if(this.value<=0){this.value=0}else if(this.value>=99){this.value=99}"></div><div id="transitionbtn">Transition <input title="Animation in Seconds" id="transition" type="number" onclick="if(this.value<=0){this.value=0}else if(this.value>=99){this.value=99}"></div><div id="ctrlpnl-note" class="red bg-black">Note: Changes may apply after slider full rout completed!</div></div></div>';
        id('for-lll-slider').innerHTML = '<div class="lll-slider w-wfa bg-black disableCM" style="visibility: hidden;"><div class="lll-slider-header f-monospace"><div class="lll-slider-header-mono"><div class="lll-slider-header-mono-dot"><div class="lll-slider-header-dot bg-white"></div><div class="lll-slider-header-dot bg-red"></div><div class="lll-slider-header-dot bg-green"></div></div><span class="lll-slider-header-title">LLL Slider</span></div>' + ctrlpnt + '</div><div class="lll-slider-ctrl absolute dis-flex ai-center jc-spacebetween padding-10"><img class="lll-slider-previousimg" title="Previous" src="./assests/right.png"><img class="lll-slider-nextimg" title="Next" src="./assests/left.png"></div><div class="lll-slider-imgwrap bg-white w-wfa h-wfa"></div><div class="lll-slider-bulitwrap w-wfa h-auto"><div class="lll-slider-bulit bg-transparent w-wfa"></div></div><div class="lll-slider-Copyright f-monospace">Powered by<br><a class="black" href="https://letslearnlights.blogspot.com/" target="_blank" title="Developer&apos;s Website, Free Technices">LetsLearnLights</a></div></div>';
        let usercontent = id('lll-slider-content').innerHTML.replace('<!--', '').replace('-->', '');
        sliderImgArea = document.createElement('div');
        sliderImgArea.setAttribute('class', 'lll-slider-img of-hidden');
        sliderImgArea.innerHTML = usercontent;
        cls('lll-slider-imgwrap').appendChild(sliderImgArea);
        setTimeout(() => {
            loadslider();
        }, 1000);
    }
    function loadslider() {
        if (cls('lll-slider') != null) { // onLoad...
            cls('lll-slider').style.height = cls('lll-slider').clientWidth / 1.78 + 'px'; // Slider...
            cls('lll-slider').style.marginTop = (cls('lll-slider-header').clientHeight) + 'px';
            cls('lll-slider-header').style.marginTop = -(cls('lll-slider-header').clientHeight) + 'px'; // Header...
            cls('lll-slider-header').style.width = cls('lll-slider').clientWidth + 'px';
            cls('lll-slider-bulitwrap').style.height = cls('lll-slider').clientHeight - 20 + 'px'; // BuiltWrap...
            cls('lll-slider-bulitwrap').style.marginTop = -cls('lll-slider').clientHeight + 5 + 'px';
            cls('lll-slider-bulit').style.height = cls('lll-slider').clientHeight - 20 + 'px'; // Built...
            cls('lll-slider-ctrl').style.height = cls('lll-slider').clientHeight - 20 + 'px'; // Ctrl...
            cls('lll-slider-ctrl').style.width = cls('lll-slider').clientWidth - 20 + 'px';
            cls('lll-slider-header-title').style.width = cls('lll-slider-header').clientWidth - cls('lll-slider-header-mono-dot').clientWidth - cls('lll-slider-ctrlpnl').clientWidth - 10 + 'px'; // title
            id('ctrlpnl-note').style.width = cls('lll-slider-ctrlpnl-content').clientWidth + 'px';
            // vars...
            let sliderimg = cls('lll-slider-img').getElementsByTagName('img');
            let sliderbuilts = cls('lll-slider-bulit').getElementsByTagName('img');
            let previousimg = cls('lll-slider-previousimg');// pre
            let nextimg = cls('lll-slider-nextimg');// next
            let lllcr = cls('lll-slider-Copyright');
            let totalimgsnum = cls('lll-slider-img').childElementCount;
            let slider = id('for-lll-slider');
            let autoplayslider;
            let restarslider;
            // varsEnd...
            previousimg.setAttribute('id', 1) // Previous id
            cls('lll-slider-bulit').innerHTML = cls('lll-slider-img').innerHTML;
            // Quiries...
            let usertrans; // Transition
            let nextplay; // NextPlay
            setInterval(() => {
                if (slider.getAttribute('transition') != null) {
                    usertrans = slider.getAttribute('transition') * 1000;
                } else {
                    usertrans = 1000;
                }
                if (slider.getAttribute('nextplay') != null) {
                    nextplay = slider.getAttribute('nextplay') * 1000;
                } else {
                    nextplay = 3000;
                    slider.setAttribute('nextplay', nextplay / 1000);
                }
            }, 5);
            // default actions.
            // user actions.
            cls('lll-slider-img').style.transition = usertrans / 1000 + 's';
            cls('lll-slider-header-title').innerHTML = slider.getAttribute('title');
            setTimeout(() => {
                id('nextplay').value = nextplay / 1000;
                id('transition').value = usertrans / 1000;
            }, 5000);
            let transition = setInterval(() => {
                if (usertrans != NaN) {
                    clearInterval(transition);
                    cls('lll-slider-img').style.transition = usertrans / 1000 + 's';
                }
            }, 5);
            // user actionsEnd.
            Array.prototype.forEach.call(sliderimg, (element) => { // Slider Images...
                element.style.height = cls('lll-slider').clientHeight - 10 + 'px';
                element.style.minHeight = cls('lll-slider').clientHeight - 10 + 'px';
                element.style.width = cls('lll-slider').clientWidth - 10 + 'px';
                element.style.minWidth = cls('lll-slider').clientWidth - 10 + 'px';
            });
            let countimgs = totalimgsnum + 1; // setting build id's
            let maximgsetting = setInterval(() => {
                countimgs -= 1;
                if (countimgs <= 0) {
                    clearInterval(maximgsetting)
                } else {
                    cls('lll-slider-bulit').children[countimgs - 1].setAttribute('id', countimgs);
                }
            }, 10);
            Array.prototype.forEach.call(sliderbuilts, (element) => { // Slider Play from built...
                element.onclick = function () {
                    previousimg.setAttribute('id', element.id);
                    currentEle = previousimg.id;
                    cls('lll-slider-img').style.marginLeft = -cls('lll-slider-imgwrap').clientWidth * (currentEle - 1) + 'px';
                }
            });
            previousimg.onclick = function () { // Previous
                if (previousimg.id == 1) {
                    return false;
                } else {
                    previousimg.setAttribute('id', previousimg.id - 1)
                    currentEle = previousimg.id;
                    let imglink = sliderimg[currentEle].getAttribute('src');
                    console.log(imglink);
                    if (imglink.substring(0, 13) == 'https://blob') {
                        sliderimg[currentEle].setAttribute('src', imglink.substr(13));
                    }
                    cls('lll-slider-img').style.marginLeft = -cls('lll-slider-imgwrap').clientWidth * (currentEle - 1) + 'px';
                }
            }
            nextimg.onclick = function () { // Next
                if (previousimg.id == totalimgsnum) {
                    return false;
                } else {
                    previousimg.setAttribute('id', previousimg.id - (-1))
                    currentEle = previousimg.id;
                    cls('lll-slider-img').style.marginLeft = -cls('lll-slider-imgwrap').clientWidth * (currentEle - 1) + 'px';
                }
            }
            lllcr.style.marginLeft = cls('lll-slider').clientWidth - (lllcr.clientWidth + 10) + 'px'; // cp
            let ctrlpnlarrow = document.querySelector('div.lll-slider-ctrlpnl-header > span'); // ctrpnl
            setTimeout(() => {
                ctrlpnlarrow.innerHTML = '&Downarrow;';
                ctrlpnlarrow.id = 'down';
                cls('lll-slider-ctrlpnl-content').style.marginTop = -(cls('lll-slider-ctrlpnl-content').clientHeight + 5) + 'px';
                setTimeout(() => {
                    cls('lll-slider-ctrlpnl').style.visibility = 'visible';
                }, 1000);
            }, 5000);
            ctrlpnlarrow.onclick = function () {
                if (ctrlpnlarrow.id == 'down') {
                    ctrlpnlarrow.innerHTML = '&Uparrow;';
                    ctrlpnlarrow.id = 'up';
                    cls('lll-slider-ctrlpnl-content').style.marginTop = '0px';
                } else {
                    ctrlpnlarrow.innerHTML = '&Downarrow;';
                    ctrlpnlarrow.id = 'down';
                    cls('lll-slider-ctrlpnl-content').style.marginTop = -cls('lll-slider-ctrlpnl-content').clientHeight - 5 + 'px';
                }
            }
            // nextplay
            id('nextplaybtn').onclick = function () {
                slider.setAttribute('nextplay', id('nextplay').value);
            }
            // Transition
            id('transitionbtn').onclick = function () {
                slider.setAttribute('transition', id('transition').value);
                cls('lll-slider-img').style.transition = id('transition').value + 's';
            }
            // builts ctrl
            if (slider.getAttribute('built') == 'on') {
                id('builts').click();
            }
            builtsonfun();
            function builtsonfun() {
                let builtson = setInterval(() => {
                    if (id('builts').getAttribute('value') == 'on') {
                        clearInterval(builtson);
                        builtsofffun();
                        cls('lll-slider-bulit').style.visibility = 'visible';
                    }
                }, 5);
            }
            function builtsofffun() {
                let builtsoff = setInterval(() => {
                    if (id('builts').getAttribute('value') == 'off') {
                        clearInterval(builtsoff);
                        builtsonfun();
                        cls('lll-slider-bulit').style.visibility = 'hidden';
                    }
                }, 5);
            }
            if (slider.getAttribute('autoplay') == 'on') { // autoplay
                id('autoplay').click();
            }
            autoplayonfun();
            function autoplayonfun() {
                let autoplayon = setInterval(() => {
                    if (id('autoplay').getAttribute('value') == 'on') {
                        clearInterval(autoplayon);
                        autoplayofffun();
                        playslider();
                    }
                }, 5);
            }
            function autoplayofffun() {
                let autoplayoff = setInterval(() => {
                    if (id('autoplay').getAttribute('value') == 'off') {
                        clearInterval(autoplayoff);
                        autoplayonfun();
                        clearInterval(autoplayslider);
                        clearInterval(restarslider);
                    }
                }, 5);
            }
            function playslider() { // Auto Player
                autoplayslider = setInterval(() => {
                    nextimg.click();
                }, nextplay);
                function pauseslider() {
                    clearInterval(autoplayslider);
                }
                restarslider = setInterval(() => {
                    if (previousimg.id == totalimgsnum) {
                        clearInterval(restarslider);
                        pauseslider();
                        setTimeout(() => {
                            cls('lll-slider-img').style.transition = '0s';
                            cls('lll-slider-img').style.marginLeft = 0 + 'px';
                            setTimeout(() => {
                                cls('lll-slider-img').style.transition = usertrans / 1000 + 's';
                            }, 50);
                            previousimg.setAttribute('id', '1')
                            playslider();
                        }, nextplay);
                    }
                }, 5)
            }
            setInterval(() => {
                if (previousimg.id == totalimgsnum) {
                    id('autoplaybtn').style.display = 'none';
                } else {
                    id('autoplaybtn').style.display = 'flex';
                }
            }, 5)
            window.onresize = function () { // onResize...
                cls('lll-slider-img').style.transition = '0s'; // transition-...
                cls('lll-slider-img').style.marginLeft = -cls('lll-slider-imgwrap').clientWidth * (previousimg.id - 1) + 'px'; // mleft...
                cls('lll-slider').style.height = cls('lll-slider').clientWidth / 1.78 + 'px'; // Slider...
                cls('lll-slider').style.marginTop = (cls('lll-slider-header').clientHeight) + 'px';
                cls('lll-slider-header').style.marginTop = -(cls('lll-slider-header').clientHeight) + 'px'; // Header...
                cls('lll-slider-header').style.width = cls('lll-slider').clientWidth + 'px';
                cls('lll-slider-bulitwrap').style.height = cls('lll-slider').clientHeight - 20 + 'px'; // BuiltWrap...
                cls('lll-slider-bulitwrap').style.marginTop = -cls('lll-slider').clientHeight + 5 + 'px';
                cls('lll-slider-bulit').style.height = cls('lll-slider').clientHeight - 20 + 'px'; // Built...
                cls('lll-slider-ctrl').style.height = cls('lll-slider').clientHeight - 20 + 'px'; // Ctrl...
                cls('lll-slider-ctrl').style.width = cls('lll-slider').clientWidth - 20 + 'px';
                lllcr.style.marginLeft = cls('lll-slider').clientWidth - (lllcr.clientWidth + 10) + 'px'; // cp
                cls('lll-slider-header-title').style.width = cls('lll-slider-header').clientWidth - cls('lll-slider-header-mono-dot').clientWidth - cls('lll-slider-ctrlpnl').clientWidth - 10 + 'px'; // title
                let sliderimg = cls('lll-slider-img').getElementsByTagName('img');
                Array.prototype.forEach.call(sliderimg, (element) => { // Slider Images...
                    element.style.height = cls('lll-slider').clientHeight - 10 + 'px';
                    element.style.minHeight = cls('lll-slider').clientHeight - 10 + 'px';
                    element.style.width = cls('lll-slider').clientWidth - 10 + 'px';
                    element.style.minWidth = cls('lll-slider').clientWidth - 10 + 'px';
                });
                cls('lll-slider-img').style.transition = '1s'; // transition...
            };
            setTimeout(() => {
                cls('lll-slider').style.visibility = 'visible';
            }, 3000);
        }
    };
}