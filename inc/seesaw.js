$(document).ready(function ()
{
    SEESAW.setUserConfig({
        fontSize:   '14px',
        background: 'salmon'
    });

    var seesaw = SEESAW.getRoot();

    var comp1 = new SEESAW.Component('');

    comp1.setBounds(20, 100, 100, 250);
    comp1.setBackground('blue');

    seesaw.addChild(comp1);

    var comp2 = new SEESAW.Component('comp-1');
    seesaw.addChild(comp2);

    comp2.setBackground('green');
    comp2.setSize(100, 100);
    comp2.setPosition(-10, -10);

});