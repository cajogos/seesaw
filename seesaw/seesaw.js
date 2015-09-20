var SEESAW = {};

$(document).ready(function ()
{

    $('body').append('<div id="seesaw-div"></div>');

    SEESAW.createdAt = Date.now();
    SEESAW.div = $('#seesaw-div');

    console.log(SEESAW); // TODO: Remove


});