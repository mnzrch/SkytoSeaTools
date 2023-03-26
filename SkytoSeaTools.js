
const scripts = () => {
    //---------------------------------------------------------------------------
    // Custom reloader
    if (cls('reload') != null) {
        $cls('reload').forEach((e) => {
            e.innerHTML = 'Reload';
            click(function () {
                location.reload();
            }, e);
        });
    };
    //---------------------------------------------------------------------------
    // lll_smart_menu
    const lllsm = id('lll-smart-menu');
    if (lllsm) {
        let mtitle;
        if (getAttr('name', lllsm)) {
            mtitle = getAttr('name', lllsm);
        } else {
            mtitle = 'Smart Menu';
        }
        html('<img title="Double Click to open Smart Menu by Letslearnlights" alt="Menu" src="' + assestdir + '/menu.svg"><div class="main null fd-column"> <header class="dis-flex ai-center"> <mtitle title="' + mtitle + '" class="drager">' + mtitle + '</mtitle> <nav> <div title="Click to Minimize it!" class="btnv3"> <span style="position: relative;font-weight: bold;-webkit-text-stroke: thick;">–</span> </div> <div title="Click to close it!" class="btnv3 htmlcross"></div> </nav> </header> <linebreak></linebreak> <dbody class="relative top-7 of-auto"></dbody> </div>', lllsm);
        clog('lll_smart_menu Enabled');
        // return;
        let hmenu = tag('#lll-smart-menu>img');
        let mmenu = tag('#lll-smart-menu>.main');
        let mini = tag('#lll-smart-menu > div > header > nav > div:nth-child(1)');
        let close = tag('#lll-smart-menu > div > header > nav > div:nth-child(2)');
        dclick(function () {
            setCSS('display', 'none', hmenu);
            setCSS('display', 'flex', mmenu);
            function lll_menuH() {
                setCSS('max-height', winh() - (winh() / 100) * 5 - 30 + 'px', mmenu);
            };
            lll_menuH();
            window.onresize = function () {
                lll_menuH();
            }
            setClass('lightboxLG', mmenu);
            setAttr('dfstyle', getAttr('style', lllsm), lllsm);
            $setCSS({
                'width': 'fit-content', 'max-Width': '95%', 'height': 'fit-content', 'max-height': '95%'
            }, lllsm);
            setCoki('lll_smart_menu', '1', { 'max-age': '31104000' });
        }, hmenu);
        click(function () {
            setCSS('display', 'unset', hmenu);
            setCSS('display', 'none', mmenu);
            setAttr('style', getAttr('dfstyle', lllsm), lllsm);
        }, mini);
        click(function () {
            setCoki('lll_smart_menu', '0', { 'max-age': '31104000' });
            lllsm.remove();
        }, close);
    }
    //---------------------------------------------------------------------------
    // Custom_item_lister
    let lll_lister_index = 0;
    $cls('lll-item-lister-place').forEach((ele) => {
        if (getCoki('lll_lister') == 0 && getAttr('remember', ele)) {
            clog('lll_lister Enabled with Minimized Mod');
            setCSS('display', 'none', ele);
        };
        lll_lister_index++;
        let myele = newEle('Listed Items', 'div');
        setAttr('class', 'lightboxWS dis-inlineB cursor-pointer', myele);
        function lll_listerH() {
            setCSS('height', winh() - 20 + 'px', ele);
        }
        lll_listerH();
        window.onresize = function () {
            lll_listerH();
        }
        let titlediv;
        if (getAttr('name', ele)) {
            titlediv = getAttr('name', ele);
        } else {
            titlediv = 'Auto Generated List';
        }
        html('<div class="lll-item-lister-' + lll_lister_index + ' lll-item-lister of-hidden h-inherit w-wfa lightboxW"> <div class="header dis-flex w-wfa bg-gray padding-2 jc-spacebetween"> <span id="title" class="margin-2 lightele w-wfa drager"><div class="relative" title="' + titlediv + '">' + titlediv + '</div></span> <span id="close" title="Click to close it!" class="btnv3 htmlcross"></span> </div> <div class="items dis-flex ai-center fd-column of-auto"></div> </div>', ele);
        tag(".lll-item-lister-" + lll_lister_index + ">.header>#close").onclick = function () {
            setCoki('lll_lister', '0', { 'max-age': '31104000' });
            setCSS('display', 'none', ele);
            let smca = tag('#lll-smart-menu > div > dbody');
            if (smca) {
                smca.appendChild(myele);
            }
        }
        $cls('lll-listed-item').forEach((ele) => {
            // <a href="#item" title="jump to item" class="item">item</a>
            let newele = newEle('a');
            if (getAttr('name', ele)) {
                html(getAttr('name', ele), newele);
                setAttr('title', 'Go to => ' + getAttr('name', ele), newele);
                setAttr('class', 'item', newele);
            } else {
                html(getAttr('id', ele), newele);
                setAttr('title', 'Go to => ' + getAttr('id', ele), newele);
                setAttr('class', 'item', newele);
            }
            setAttr('href', '#' + getAttr('id', ele) + '', newele);
            tag(".lll-item-lister-" + lll_lister_index + ">.items").appendChild(newele);
        });
        if ($cls('lll-listed-item').length <= 0) {
            ele.remove();
        };
        let smca = tag('#lll-smart-menu > div > dbody');
        if (smca && getCSS('display', ele) == 'none') {
            smca.appendChild(myele);
        }
        click(function () {
            setCSS('display', 'unset', ele);
            setCoki('lll_lister', '1', { 'max-age': '31104000' });
            myele.remove();
        }, myele);
    });
    //---------------------------------------------------------------------------
    // content-list...
    if (cls('content-list') != null) {
        $cls('content-list').forEach((e) => {
            let clisthdr = document.createElement('div');
            clisthdr.setAttribute('class', 'content-list-head dis-block jc-spacebetween');
            let ctrlclickdata = "if(this.innerHTML=='&Downarrow;'){this.innerHTML='&Uparrow;';this.parentElement.nextElementSibling.style.height='auto';this.parentElement.nextElementSibling.style.padding='5px';}else{this.innerHTML='&Downarrow;';this.parentElement.nextElementSibling.style.height='0px';this.parentElement.nextElementSibling.style.padding='0px';}";
            clisthdr.innerHTML = '<span class="content-list-ctrl" onclick="' + ctrlclickdata + '"></span><div class="content-list-header"></div>';
            let clistcntnt = document.createElement('div');
            clistcntnt.setAttribute('class', 'content-list-content');
            clistcntnt.innerHTML = e.innerHTML;
            e.innerHTML = '';
            e.appendChild(clisthdr);
            e.appendChild(clistcntnt);
            e.style.visibility = 'visible';
            // let clistname = e.getAttribute('name');
            $cls('content-list-header').forEach((e) => {
                let clistname = e.parentElement.parentElement.getAttribute('name');
                if (clistname == 'no') { //name
                    e.innerHTML = '!';
                } else if (clistname == 'nill') {
                    e.innerHTML = '';
                } else if (clistname != null && clistname != '') {
                    e.innerHTML = clistname;
                } else {
                    e.innerHTML = 'Content List by LetsLearnLights';
                }
            });
            $cls('content-list-ctrl').forEach((e) => {
                let ctrlmainele = e.parentElement.parentElement;
                let clistmode = ctrlmainele.getAttribute('mode');
                let ctrlnextele = e.parentElement.nextElementSibling;
                if (getAttr('content-bg', ctrlmainele)) {
                    ctrlnextele.style.backgroundColor = getAttr('content-bg', ctrlmainele);
                }
                if (clistmode == 'opened') { //ctrl
                    e.innerHTML = '&Uparrow;';
                    ctrlnextele.style.height = 'auto';
                    ctrlnextele.style.padding = '5px';
                } else {
                    e.innerHTML = '&Downarrow;';
                }
            })
        });
    };
    //---------------------------------------------------------------------------
    // windowtype
    $cls('windowtype').forEach((e) => {
        let title;
        if (getAttr('name', e)) {
            title = getAttr('name', e);
        } else {
            title = 'untitled dom* Window!';
        }
        let cbtn = newEle('button'); setAttr('class', 'close-button btnv3 htmlcross', cbtn); setAttr('title', 'Click to close!', cbtn);
        let mbtn = newEle('button'); setAttr('class', 'minimize-button btnv3 htmlmini', mbtn); setAttr('title', 'Click to minimize!', mbtn);
        let btns = newEle('div'); setClass('buttons', btns); btns.appendChild(mbtn); btns.appendChild(cbtn);
        let wintitl = newEle(title, 'div'); setAttr('class', 'title drager', wintitl);
        let winbr = newEle('div'); setClass('window-bar', winbr); winbr.appendChild(wintitl); winbr.appendChild(btns);
        let dbody = newEle(e.innerHTML, 'dbody'); setAttr('class', 'relative top-7 of-auto dis-block', dbody);
        html('', e);
        e.appendChild(winbr); e.appendChild(newEle('linebreak')); e.appendChild(dbody);
        setCSS('height',(e.clientHeight-(winbr.clientHeight+20))+'px',dbody);
        click(function () {
            e.remove();
        }, cbtn);
        click(function () {
            let me = newEle(title, 'windowtype'); setAttr('title', 'Click to view "' + title + '"', me); setAttr('class', 'lightboxWS w-fitcon cursor-pointer margin-5 dis-inlineB', me);
            let smca = tag('#lll-smart-menu > div > dbody');
            if (smca) {
                smca.appendChild(me);
                setCSS('display', 'none', e);
                click(function () {
                    setCSS('display', 'none', me);
                    setCSS('display', 'block', e);
                }, me);
            } else {
                alert('It will only minimize if lll_Smart_Menu will be enabled!');
            }
        }, mbtn);
    });
    //---------------------------------------------------------------------------
    // Disable context menu.
    if (cls('disableCM') != null) {
        $cls('disableCM').forEach((e) => {
            e.oncontextmenu = function () { return false; }
        });
    };
    //---------------------------------------------------------------------------
    // Custom toparrow
    if (cls('toparrow') != null) {
        $cls('toparrow').forEach((e) => {
            html('<span>🔝</span>', e);
            if (id(getAttr('jumpto', e))) {
                click(function () { id(getAttr('jumpto', e)).scrollIntoView({ block: 'start', behavior: 'smooth' }, true); }, e);
            } else {
                click(function () { tag('body').scrollIntoView({ block: 'start', behavior: 'smooth' }, true); }, e);
            }
        });

    };
    //---------------------------------------------------------------------------
    // Custom disable
    if (cls('disable') != null) {
        $cls('disable').forEach((e) => {
            e.onclick = function () {
                return false;
            }
            e.oncontextmenu = function () {
                return false;
            }
            e.setAttribute('title', 'This item has been Disabled');
        });
    };
    //---------------------------------------------------------------------------
    // Custom bt-url
    if (cls('btn-url') != null) {
        $cls('bt-url').forEach((e) => {
            e.onclick = function () {
                window.open(getAttr('url', e), '_blank');
            }
        });
    };
    if (cls('btn-0url') != null) {
        $cls('bt-0url').forEach((e) => {
            e.onclick = function () {
                window.location.href = getAttr('url', e);
            }
        });
    };
    //---------------------------------------------------------------------------
    // Custom htmlcross
    $cls('htmlcross').forEach((e) => {
        html('<span style="position: relative;bottom: -1px;">⨉</span>', e);
    });
    //---------------------------------------------------------------------------
    // Custom htmlmini
    $cls('htmlmini').forEach((e) => {
        html('<span style="position: relative;bottom: 0.05em;">–</span>', e);
    });
    //---------------------------------------------------------------------------
    // vp_center
    $cls('vp-center').forEach((e) => {
        setCSS('top', (getCSS('top', e).slice(0, -2)) - (e.clientHeight / 2) + 'px', e);
        setCSS('left', (getCSS('left', e).slice(0, -2)) - (e.clientWidth / 2) + 'px', e);
        setCSS('transform', 'translate(' + 0 + ',' + 0 + ')', e);
        setCSS('opacity', '1', e);
    });
    //---------------------------------------------------------------------------
    // Custom checkbox
    $cls('checkbox').forEach((e) => {
        setCSS('cursor', 'pointer', e); if (getAttr('title', e) == 'Please wait, Item is being loaded!') { setAttr('title', 'Click to check/uncheck', e) };
        if (getAttr('value', e) == 'checked') {
            html('<span style="position: relative;top: -4px;right: -2px;">✓</span>', e)
        };
        click(function () { if (e.innerHTML == '') { html('<span style="position: relative;top: -4px;right: -2px;">✓</span>', e); setAttr('value', '1', e) } else { html('', e); setAttr('value', '0', e) } }, e)
    });
    // Reactor Scripts
    let uscript = './uScripts.js'; //path to scripts you want to include
    let uscriptE = newEle('script'); setAttr('src', uscript, uscriptE);
    body.appendChild(uscriptE);
    // dragger
    const dragElements = $cls("dragable");
    dragElements.forEach(function (dragElement) {
        // setCSS('transition', '0s', dragElement);
        // clog('trans ' + dragElement.offSetX);
        // setCSS('transform', getCSS('transform', dragElement), dragElement);
        const drager = dragElement.querySelector(".drager");
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;
        if (drager) {
            setClass('cursor-grab', drager);
            drager.addEventListener("mousedown", dragStart);
            document.addEventListener("mouseup", dragEnd);
            document.addEventListener("mousemove", drag);
            function dragStart(e) {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
                isDragging = true;
            }
            function dragEnd(e) {
                initialX = currentX;
                initialY = currentY;
                isDragging = false;
            }
            function drag(e) {
                if (isDragging) {
                    e.preventDefault();
                    currentX = e.clientX - initialX;
                    currentY = e.clientY - initialY;
                    xOffset = currentX;
                    yOffset = currentY;
                    setTranslate(currentX, currentY, dragElement);
                }
            }
        }
        function setTranslate(xPos, yPos, e) {
            e.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        }
    });
};
// doc_change_detect
const o = new MutationObserver(m => m.forEach(M => console.log('moded - ' + M) && scripts())); o.observe(document.body, { childList: true, attributes: true, characterData: true });
window.onload = scripts();