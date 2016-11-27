$(document).ready(function ()
{
    SEESAW.setUserConfig({
        fontSize:   '14px',
        background: 'red'
    });

    var seesaw = SEESAW.getRoot();

    var comp1 = new SEESAW.Component('div-1');

    comp1.setBounds(20, 100, 100, 250);
    comp1.setBackground('blue');

    seesaw.addChild(comp1);

    var comp2 = new SEESAW.Component();
    seesaw.addChild(comp2);

    comp2.setBackground('green');
    comp2.setSize(100, 100);

});