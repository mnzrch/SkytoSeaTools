
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
        if (getCoki('lll_smart_menu') == 0) {
            setCSS('display', 'none', lllsm);
        };
        let mtitle;
        if (getAttr('name', lllsm)) {
            mtitle = getAttr('name', lllsm);
        } else {
            mtitle = 'Smart Menu';
        }
        html('<img title="Double Click to open Smart Menu by Letslearnlights" alt="Menu" src="' + assestdir + '/menu.svg"><div class="main null fd-column"> <header class="dis-flex ai-center"> <mtitle title="' + mtitle + '" class="drager">' + mtitle + '</mtitle> <nav> <div class="btnv3"> <span style="position: relative;font-weight: bold;-webkit-text-stroke: thick;">–</span> </div> <div class="btnv3 htmlcross"></div> </nav> </header> <linebreak></linebreak> <dbody class="relative top-7 of-auto"></dbody> </div>', lllsm);
        console.log('lll_smart_menu Enabled');
        // return;
        let smenu = $('#lll-smart-menu>img');
        let mmenu = $('#lll-smart-menu>.main');
        let mini = $('#lll-smart-menu > div > header > nav > div:nth-child(1)');
        let close = $('#lll-smart-menu > div > header > nav > div:nth-child(2)');
        dclick(function () {
            setCSS('display', 'none', smenu);
            setCSS('display', 'flex', mmenu);
            function lll_menuH() {
                setCSS('max-height', winh() - (winh() / 100) * 5 - 30 + 'px', mmenu);
            };
            lll_menuH();
            window.onresize = function () {
                lll_menuH();
            }
            setClass('lightboxLG', mmenu);
            $setCSS({
                'width': 'fit-content', 'maxWidth': '95%', 'height': 'fit-content', 'max-height': '95%', 'left': '50%', 'transform': 'translate(-50%, -50%)', 'top': '50%'
            }, lllsm);
        }, smenu);
        click(function () {
            setCSS('display', 'unset', smenu);
            setCSS('display', 'none', mmenu);
            setAttr('style', '', lllsm);
        }, mini);
        click(function () {
            lllsm.remove();
            setCoki('lll_smart_menu', '0', { 'max-age': '31104000' });
        }, close);
    }
    //---------------------------------------------------------------------------
    // Custom item_lister
    let lll_lister_index = 0;
    $cls('lll-item-lister-place').forEach((ele) => {
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
        document.querySelector(".lll-item-lister-" + lll_lister_index + ">.header>#close").onclick = function () {
            setCSS('display', 'none', ele);
            let mmdp = $('#lll-smart-menu > div > dbody');
            clog(mmdp);
            if (mmdp) {
                mmdp.appendChild(myele);
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
            document.querySelector(".lll-item-lister-" + lll_lister_index + ">.items").appendChild(newele);
        });
        let mmdp = $('#lll-smart-menu > div > dbody');
        if (mmdp && getCSS('display', ele) == 'none') {
            mmdp.appendChild(myele);
            click(function () {
                setCSS('display', 'unset', ele);
                myele.remove();
            }, myele);
        }
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
    // dragger
    const dragElements = $cls("dragable");
    dragElements.forEach(function (dragElement) {
        const drager = dragElement.querySelector(".drager");
        if (drager) {
            setClass('cursor-grab', drager);
            let isDragging = false;
            let currentX;
            let currentY;
            let initialX;
            let initialY;
            let xOffset = 0;
            let yOffset = 0;
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
const o = new MutationObserver(m => m.forEach(M => console.log('moded - ' + M) && scripts)); o.observe(document.body, { childList: true, attributes: true, characterData: true });
window.onload = scripts;
function ondocmod() { scripts };