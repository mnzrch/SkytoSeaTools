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