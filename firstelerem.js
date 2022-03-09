$("*").click(function (e) {
    e.preventDefault();
    $(this)[0].remove();
    document.querySelector('#removemeonclick')
    return false;
});