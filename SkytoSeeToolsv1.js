function id(x) {
    return document.querySelector('#' + x);
}
function cls(y) {
    return document.querySelector('.' + y);
}
function tag(z) {
    return document.querySelector(z);
}
let assestdir;
if (window.location.protocol == 'file:') {
    assestdir = 'file:///C:/Users/Mc/Desktop/SkytoSeeTool/assests'
} else {
    assestdir = 'https://mnzrch.github.io/SkytoSeeTools/assests'
};
//---------------------------------------------------------------------------
//            Overlay
setTimeout(() => {
    if (id('fix-overlay') != null) {
        id('fix-overlay').setAttribute('class', 'padding-10 bg-black');
        id('fix-overlay').innerHTML = id('fix-overlay').innerHTML + '<span id="fix-overlay-ctrl" class="margin-5 btnv1">⨯</span>';
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
}, 1000);
//---------------------------------------------------------------------------
//            footer ad
setTimeout(() => {
    if (id('fix-footer-ad') != null) {
        id('fix-footer-ad').innerHTML = '<div id="custom-footer-ad" class="w-inherit fix h-25pc"><span id="custom-footer-ctrl-shadow"></span><span id="custom-footer-ctrl">▽</span><div id="custom-footer-adhere" class="w-wfa h-wfa margin-5 bg-aliceblue">Adhere</div></div>';
        if (id('custom-footer-adhere') != null && id('fix-footer-ad-content') != null) {
            id('custom-footer-adhere').innerHTML = id('fix-footer-ad-content').innerHTML.replace('<!--', '').replace('-->', '');
        }
        if (id('custom-footer-ctrl') != null) {
            id('custom-footer-ctrl').addEventListener('click', () => {
                if (id('custom-footer-ctrl').innerHTML == '▽') {
                    setTimeout(() => {
                        id('custom-footer-ctrl').innerHTML = '△';
                    }, 500);
                    if (id('custom-footer-ad') != null) {
                        id('custom-footer-ad').style.height = 250 + 'px';
                        id('custom-footer-ad').style.opacity = '0.5';
                        id('custom-footer-ad').style.bottom = -250 + 'px';
                        setTimeout(() => {
                            id('custom-footer-ad').style.transition = 0 + 's';
                        }, 1000);
                    }
                } else if (id('custom-footer-ctrl').innerHTML == '△') {
                    setTimeout(() => {
                        id('custom-footer-ctrl').innerHTML = '▽';
                    }, 500);
                    if (id('custom-footer-ad') != null) {
                        id('custom-footer-ad').style.transition = 1 + 's';
                        id('custom-footer-ad').style.height = 25 + '%';
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
}, 1000);
//---------------------------------------------------------------------------
//    Custom tag list

if (cls('for-tag-list') != null) {
    if (id('tag-list-preview') != null) {
        id('tag-list-preview').innerHTML = '<div class="custom-tag-list"><div class="custom-tag-list-ctrl"><img id="custom-tag-list-right" class="disable btnv1" src="https://i.ibb.co/n3Nh2Jm/right.png"><img id="custom-tag-list-left" class="btnv1" src="https://i.ibb.co/RgTqMnt/left.png"><img id="custom-tag-list-mini" class="btnv1" onclick=custom_tag_list_mini() src="https://i.ibb.co/kmFgFjZ/mini.png"><img id="custom-tag-list-close" class="btnv1" src="https://i.ibb.co/8bD7RWP/close.png"></div><div class="custom-tag-list-content"></div><div class="null" style="visibility: hidden;"><div class="custom-tag-list-backup-right"></div><div class="custom-tag-list-backup-left"></div><div class="custom-tag-list-backup-height"></div><div class="custom-tag-list-backup-width"></div></div></div>';
    }
    if (cls('custom-tag-list-content') != null) {
        cls('custom-tag-list-content').innerHTML = cls('for-tag-list').innerHTML;
    }
};
if (cls('custom-tag-list') != null) {
    window.addEventListener('resize', () => {
        cls('custom-tag-list').style.height = '-webkit-fill-available';
    })
    if (cls('custom-tag-list-content') != null) {
        cls('custom-tag-list-content').style.height = cls('custom-tag-list').clientHeight - 32 + 'px';
        window.addEventListener('resize', () => {
            cls('custom-tag-list-content').style.height = cls('custom-tag-list').clientHeight - 32 + 'px';
        })
        cls('custom-tag-list').addEventListener('click', () => {
            cls('custom-tag-list-content').style.height = cls('custom-tag-list').clientHeight - 32 + 'px';
        })
    }
    if (id('custom-tag-list-left') != null) {
        id('custom-tag-list-left').addEventListener('click', () => {
            cls('custom-tag-list').style.right = '0px';
            cls('custom-tag-list').style.left = 'unset';
            id('custom-tag-list-left').setAttribute('class', 'disable btnv1');
            id('custom-tag-list-right').setAttribute('class', 'btnv1');
            if (cls('custom-tag-list-backup-right') != null) {
                cls('custom-tag-list-backup-right').innerHTML = getComputedStyle(cls('custom-tag-list')).right;
            }
            if (cls('custom-tag-list-backup-height') != null) {
                if (cls('custom-tag-list').clientHeight != 32) {
                    cls('custom-tag-list-backup-height').innerHTML = cls('custom-tag-list').clientHeight + 'px';
                }
            }
            if (cls('custom-tag-list-backup-width') != null) {
                if (cls('custom-tag-list').clientWidth != 162) {
                    cls('custom-tag-list-backup-width').innerHTML = cls('custom-tag-list').clientWidth + 'px';
                }
            }
        })
    }
    if (id('custom-tag-list-right') != null) {
        id('custom-tag-list-right').addEventListener('click', () => {
            cls('custom-tag-list').style.left = '0px';
            cls('custom-tag-list').style.right = 'unset';
            id('custom-tag-list-right').setAttribute('class', 'disable btnv1');
            id('custom-tag-list-left').setAttribute('class', 'btnv1');
            if (cls('custom-tag-list-backup-right') != null) {
                cls('custom-tag-list-backup-right').innerHTML = getComputedStyle(cls('custom-tag-list')).right;
            }
            if (cls('custom-tag-list-backup-height') != null) {
                if (cls('custom-tag-list').clientHeight != 32) {
                    cls('custom-tag-list-backup-height').innerHTML = cls('custom-tag-list').clientHeight + 'px';
                }
            }
            if (cls('custom-tag-list-backup-width') != null) {
                if (cls('custom-tag-list').clientWidth != 162) {
                    cls('custom-tag-list-backup-width').innerHTML = cls('custom-tag-list').clientWidth + 'px';
                }
            }
        })
    }
    if (id('custom-tag-list-close') != null) {
        id('custom-tag-list-close').addEventListener('click', () => {
            cls('custom-tag-list').style.visibility = 'hidden';
        })
    }
    if (id('fetch-tag-list') != null) {
        id('fetch-tag-list').setAttribute("onclick", "cls('custom-tag-list').style.visibility = 'visible'");
        id('fetch-tag-list').addEventListener('click', () => {
            cls('custom-tag-list').style.visibility = 'visible';
        })
    };
};
function custom_tag_list_mini() {
    if (id('custom-tag-list-mini') != null) {
        id('custom-tag-list-mini').src = "https://i.ibb.co/PMWz11d/maxi.png";
        id('custom-tag-list-mini').setAttribute('onclick', 'custom_tag_list_maxi()');
        id('custom-tag-list-mini').id = "custom-tag-list-maxi";
    }
    if (cls('custom-tag-list') != null) {
        if (cls('custom-tag-list-backup-right') != null) {
            cls('custom-tag-list-backup-right').innerHTML = getComputedStyle(cls('custom-tag-list')).right;
        }
        if (cls('custom-tag-list-backup-height') != null) {
            cls('custom-tag-list-backup-height').innerHTML = cls('custom-tag-list').clientHeight + 'px';
        }
        if (cls('custom-tag-list-backup-width') != null) {
            cls('custom-tag-list-backup-width').innerHTML = cls('custom-tag-list').clientWidth + 'px';
        }
        cls('custom-tag-list').style.height = cls('custom-tag-list-ctrl').clientHeight + 'px';
        cls('custom-tag-list').style.width = '162px';
        cls('custom-tag-list').style.resize = 'none';
        cls('custom-tag-list').style.bottom = '0px';
        cls('custom-tag-list').style.top = 'unset';
        cls('custom-tag-list').style.left = '0px';
        cls('custom-tag-list').style.right = 'unset';
    }
    if (id('custom-tag-list-right') != null) {
        id('custom-tag-list-right').setAttribute('class', 'disable btnv1');
    }
    if (id('custom-tag-list-left') != null) {
        id('custom-tag-list-left').setAttribute('class', 'btnv1');
    }
}
function custom_tag_list_maxi() {
    if (id('custom-tag-list-maxi') != null) {
        id('custom-tag-list-maxi').src = "https://i.ibb.co/kmFgFjZ/mini.png";
        id('custom-tag-list-maxi').setAttribute('onclick', 'custom_tag_list_mini()');
        id('custom-tag-list-maxi').id = "custom-tag-list-mini";
    }
    if (cls('custom-tag-list') != null) {
        cls('custom-tag-list').style.resize = 'both';
        cls('custom-tag-list').style.bottom = 'unset';
        cls('custom-tag-list').style.top = '0px';
        if (cls('custom-tag-list-backup-right') != null) {
            if (cls('custom-tag-list-backup-right').innerHTML == '0px') {
                cls('custom-tag-list').style.right = '0px';
                cls('custom-tag-list').style.left = 'unset';
                if (id('custom-tag-list-right') != null) {
                    id('custom-tag-list-right').setAttribute('class', 'btnv1');
                }
                if (id('custom-tag-list-left') != null) {
                    id('custom-tag-list-left').setAttribute('class', 'disable btnv1');
                }
            } else {
                cls('custom-tag-list').style.right = 'unset';
                cls('custom-tag-list').style.left = '0px';
            }
        }
        if (cls('custom-tag-list-backup-height') != null) {
            cls('custom-tag-list').style.height = cls('custom-tag-list-backup-height').innerHTML;
        }
        if (cls('custom-tag-list-backup-width') != null) {
            cls('custom-tag-list').style.width = cls('custom-tag-list-backup-width').innerHTML;
        }
        if (cls('custom-tag-list-content') != null) {
            cls('custom-tag-list-content').style.height = cls('custom-tag-list').clientHeight - 32 + 'px';
        }
    }
}
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
        id('for-lll-slider').innerHTML = '<div class="lll-slider w-wfa bg-black disableCM" style="visibility: hidden;"><div class="lll-slider-header f-monospace"><div class="lll-slider-header-mono"><div class="lll-slider-header-mono-dot"><div class="lll-slider-header-dot bg-white"></div><div class="lll-slider-header-dot bg-red"></div><div class="lll-slider-header-dot bg-green"></div></div><span class="lll-slider-header-title">LLL Slider</span></div>' + ctrlpnt + '</div><div class="lll-slider-ctrl absolute dis-flex ai-center jc-spacebetween padding-10"><img class="lll-slider-previousimg" title="Previous" src="' + assestdir + '/right.png"><img class="lll-slider-nextimg" title="Next" src="' + assestdir + '/left.png"></div><div class="lll-slider-imgwrap bg-white w-wfa h-wfa"></div><div class="lll-slider-bulitwrap w-wfa h-auto"><div class="lll-slider-bulit bg-transparent w-wfa"></div></div><div class="lll-slider-Copyright f-monospace">Powered by<br><a class="black" href="https://letslearnlights.blogspot.com/" target="_blank" title="Developer&apos;s Website, Free Technices">LetsLearnLights</a></div></div>';
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
// content-list...
if (cls('content-list') != null) {
    let clist = document.getElementsByClassName('content-list');
    Array.prototype.forEach.call(clist, (element) => {
        let clisthdr = document.createElement('div');
        clisthdr.setAttribute('class', 'content-list-head dis-block jc-spacebetween');
        let ctrlclickdata = "if(this.innerHTML=='&Downarrow;'){this.innerHTML='&Uparrow;';this.parentElement.nextElementSibling.style.height='auto';this.parentElement.nextElementSibling.style.padding='5px';}else{this.innerHTML='&Downarrow;';this.parentElement.nextElementSibling.style.height='0px';this.parentElement.nextElementSibling.style.padding='0px';}";
        clisthdr.innerHTML = '<span class="content-list-ctrl" onclick="' + ctrlclickdata + '"></span><div class="content-list-header"></div>';
        let clistcntnt = document.createElement('div');
        clistcntnt.setAttribute('class', 'content-list-content');
        clistcntnt.innerHTML = element.innerHTML;
        element.innerHTML = '';
        element.appendChild(clisthdr);
        element.appendChild(clistcntnt);
        element.style.visibility = 'visible';
        // let clistname = element.getAttribute('name');
        let clistheader = document.getElementsByClassName('content-list-header');
        Array.prototype.forEach.call(clistheader, (element0) => {
            let clistname = element0.parentElement.parentElement.getAttribute('name');
            if (clistname == 'no') {//name
                element0.innerHTML = '!';
            } else if (clistname == 'nill') {
                element0.innerHTML = '';
            } else if (clistname != null && clistname != '') {
                element0.innerHTML = clistname;
            } else {
                element0.innerHTML = 'Content List by LetsLearnLights';
            }
        })
        let cntntctrl = document.getElementsByClassName('content-list-ctrl');
        Array.prototype.forEach.call(cntntctrl, (element1) => {
            let ctrlmainele = element1.parentElement.parentElement;
            let clistmode = ctrlmainele.getAttribute('mode');
            let ctrlnextele = element1.parentElement.nextElementSibling;
            if (ctrlmainele.getAttribute('content-bg') != null) {
                ctrlnextele.style.backgroundColor = ctrlmainele.getAttribute('content-bg');
            }
            if (clistmode == 'opened') {//ctrl
                element1.innerHTML = '&Uparrow;';
                ctrlnextele.style.height = 'auto';
                ctrlnextele.style.padding = '5px';
            } else {
                element1.innerHTML = '&Downarrow;';
            }
            // function ctrlclickfun() {
            //     if (element1.innerHTML == '&Downarrow;') {
            //         ctrlnextele.style.height = 'auto';
            //         ctrlnextele.style.padding = '5px';
            //     } else {
            //         ctrlnextele.style.height = '0px';
            //         ctrlnextele.style.padding = '0px';
            //     }
            // }
        })
    });
}



