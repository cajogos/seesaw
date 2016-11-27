$(document).ready(function ()
{
    var seesawConfig = {
        fontSize:   '14px',
        background: 'ref'
    };

    // The root component
    var seesaw = new SEESAW.RootComponent(seesawConfig);


    var comp1 = new SEESAW.Component('div-1');

    seesaw.addChild(comp1);

    console.warn(seesaw);
});