// Script...
function id(x) {
    return document.querySelector('#' + x);
}
function cls(y) {
    return document.querySelector('.' + y);
}
function tag(z) {
    return document.getElementsByTagName(z);
}
if (cls('for-tag-list') != null) {
    if (id('tag-list-preview') != null) {
        id('tag-list-preview').innerHTML = '<div class="custom-tag-list"><div class="custom-tag-list-ctrl"><img id="custom-tag-list-right" class="disable button" src="https://i.ibb.co/n3Nh2Jm/right.png"><img id="custom-tag-list-left" class="button" src="https://i.ibb.co/RgTqMnt/left.png"><img id="custom-tag-list-mini" class="button" onclick=custom_tag_list_mini() src="https://i.ibb.co/kmFgFjZ/mini.png"><img id="custom-tag-list-close" class="button" src="https://i.ibb.co/8bD7RWP/close.png"></div><div class="custom-tag-list-content"></div><div class="null" style="visibility: hidden;"><div class="custom-tag-list-backup-right"></div><div class="custom-tag-list-backup-left"></div><div class="custom-tag-list-backup-height"></div><div class="custom-tag-list-backup-width"></div></div></div>';
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
            id('custom-tag-list-left').setAttribute('class', 'disable button');
            id('custom-tag-list-right').setAttribute('class', 'button');
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
            id('custom-tag-list-right').setAttribute('class', 'disable button');
            id('custom-tag-list-left').setAttribute('class', 'button');
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
        id('custom-tag-list-right').setAttribute('class', 'disable button');
    }
    if (id('custom-tag-list-left') != null) {
        id('custom-tag-list-left').setAttribute('class', 'button');
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
                    id('custom-tag-list-right').setAttribute('class', 'button');
                }
                if (id('custom-tag-list-left') != null) {
                    id('custom-tag-list-left').setAttribute('class', 'disable button');
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