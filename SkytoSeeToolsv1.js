
const scripts = () => {
    //---------------------------------------------------------------------------
    // Custom reloader
    if (cls('reload') != null) {
        let reload = $cls('reload');
        Array.prototype.forEach.call(reload, (element) => {
            element.innerHTML = 'Reload';
            element.addEventListener('click', () => {
                location.reload();
            });
        });
    };
    //---------------------------------------------------------------------------
    // Custom item_lister
    let lll_lister_index = 0;
    Array.prototype.forEach.call($cls('lll-item-lister-place'), (ele) => {
        lll_lister_index++;
        function lll_listerH() {
            setCSS('height', winh() - 20 + 'px', ele);
        }
        lll_listerH();
        window.onresize = function () {
            lll_listerH();
        }
        html('<div class="lll-item-lister-'+lll_lister_index+' lll-item-lister of-hidden h-inherit lightboxW"> <div class="header dis-flex w-wfa bg-gray padding-2 jc-spacebetween"> <span id="title" class="margin-2 lightele w-wfa relative"><div>Auto Generated List</div></span> <span id="close" title="Click to close it!" class="btnv3 htmlcross"></span> </div> <div class="items dis-flex ai-center fd-column of-auto"></div> </div>', ele);
        if (getAttr('name', ele)) {
            html(getAttr('name', ele), document.querySelector(".lll-item-lister-"+lll_lister_index+">.header>#title>div"));
        }
        document.querySelector(".lll-item-lister-"+lll_lister_index+">.header>#close").onclick = function () {
            setCSS('display', 'none', ele);
        }
        Array.prototype.forEach.call($cls('lll-listed-item'), (ele) => {
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
            document.querySelector(".lll-item-lister-"+lll_lister_index+">.items").appendChild(newele);
        });
        setCSS('display', 'unset', ele);
    });
    //---------------------------------------------------------------------------
    // content-list...
    if (cls('content-list') != null) {
        let clist = $cls('content-list');
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
            let clistheader = $cls('content-list-header');
            Array.prototype.forEach.call(clistheader, (element0) => {
                let clistname = element0.parentElement.parentElement.getAttribute('name');
                if (clistname == 'no') { //name
                    element0.innerHTML = '!';
                } else if (clistname == 'nill') {
                    element0.innerHTML = '';
                } else if (clistname != null && clistname != '') {
                    element0.innerHTML = clistname;
                } else {
                    element0.innerHTML = 'Content List by LetsLearnLights';
                }
            })
            let cntntctrl = $cls('content-list-ctrl');
            Array.prototype.forEach.call(cntntctrl, (element1) => {
                let ctrlmainele = element1.parentElement.parentElement;
                let clistmode = ctrlmainele.getAttribute('mode');
                let ctrlnextele = element1.parentElement.nextElementSibling;
                if (ctrlmainele.getAttribute('content-bg') != null) {
                    ctrlnextele.style.backgroundColor = ctrlmainele.getAttribute('content-bg');
                }
                if (clistmode == 'opened') { //ctrl
                    element1.innerHTML = '&Uparrow;';
                    ctrlnextele.style.height = 'auto';
                    ctrlnextele.style.padding = '5px';
                } else {
                    element1.innerHTML = '&Downarrow;';
                }
            })
        });
    };
    //---------------------------------------------------------------------------
    // Disable context menu.
    if (cls('disableCM') != null) {
        let disableCM = $cls('disableCM');
        Array.prototype.forEach.call(disableCM, (element) => {
            element.oncontextmenu = function () {
                return false;
            }
        });
    };
    //---------------------------------------------------------------------------
    // Custom toparrow
    if (cls('toparrow') != null) {
        let toparrow = $cls('toparrow');
        Array.prototype.forEach.call(toparrow, (element) => {
            // element.innerHTML = '<a href="' + element.getAttribute('jumpto') + '" id="toparrow" style="color: green; text-align: right;"><span class="text">Top</span><span class="sym">↑</span></a>';
            element.innerHTML = '<a href="' + element.getAttribute('jumpto') + '" id="toparrow" style="color: green; text-align: right;">🔝</a>';
        });
    };
    //---------------------------------------------------------------------------
    // Custom disable
    if (cls('disable') != null) {
        let disable = $cls('disable');
        Array.prototype.forEach.call(disable, (element) => {
            element.onclick = function () {
                return false;
            }
            element.oncontextmenu = function () {
                return false;
            }
            element.setAttribute('title', 'This item has been Disabled');
        });
    };
    //---------------------------------------------------------------------------
    // Custom bt-url
    if (cls('btn-url') != null) {
        let bturl = $cls('bt-url');
        Array.prototype.forEach.call(bturl, (element) => {
            element.onclick = function () {
                window.open(element.getAttribute('url'), '_blank');
            }
        });
    };
    if (cls('btn-0url') != null) {
        let bt0url = $cls('bt-0url');
        Array.prototype.forEach.call(bt0url, (element) => {
            element.onclick = function () {
                window.location.href = element.getAttribute('url');
            }
        });
    };
    //---------------------------------------------------------------------------
    // Custom htmlcross
    Array.prototype.forEach.call($cls('htmlcross'), (ele) => {
        html('<span style="position: relative;bottom: -1px;">⨉</span>', ele);
    });
    // window.onresize = function () {
    //     lll_listerH();
    // }
};
// doc_change_detect
const o = new MutationObserver(m => m.forEach(M => console.log('moded - ' + M) && scripts)); o.observe(document.body, { childList: true, attributes: true, characterData: true });
window.onload = scripts;
function ondocmod() { scripts };