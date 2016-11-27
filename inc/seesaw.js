$(document).ready(function ()
{
    var seesawConfig = {
        fontSize:   '14px',
        background: 'red'
    };

    SEESAW.setUserConfig(seesawConfig);

    // The root component
    var seesaw = new SEESAW.RootComponent(seesawConfig);


    var comp1 = new SEESAW.Component('div-1');

    comp1.setBounds(20, 100, 100, 250);
    comp1.setBackground('blue');

    seesaw.addChild(comp1);
});