// Scripts for classes...
function id(x) {
    return document.querySelector('#' + x);
}
function cls(y) {
    return document.querySelector('.' + y);
}
function tag(z) {
    return document.getElementsByTagName(z);
}
if (cls('disable') != null) {
    cls('disable').addEventListener('click', () => {
        return false;
    });
}
if (cls('reload') != null) {
    if (cls('reload').innerHTML != null) {
        cls('reload').innerHTML = "Reload";
    };
    cls('reload').addEventListener('click', () => {
        location.reload();
    });
}
if (cls('disableCM') != null) {
    cls('disableCM').setAttribute('oncontextmenu', 'return false');
}
if (cls('button') != null) {
    cls('button').addEventListener('click', () => {
        this.focus();
    });
}