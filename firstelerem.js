document.querySelector("*").click(function (e) {
    e.preventDefault();
    document.querySelector(this)[0].remove();
    document.querySelector('#removemeonclick')
    return false;
});