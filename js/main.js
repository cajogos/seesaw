$(document).ready(function () {
    var SEESAW = $('.seesaw');

    SEESAW.width(document.documentElement.clientWidth);
    SEESAW.height(document.documentElement.clientHeight);

    var seesawh1 = $('.seesaw h1');

    seesawh1.on('mouseover', function() {
       seesawh1.css('font-size', '15em');
    });

    seesawh1.on('mouseout', function() {
        seesawh1.css('font-size', '14em');
    });
});