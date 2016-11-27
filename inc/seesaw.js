$(document).ready(function ()
{
    SEESAW.setUserConfig({
        fontSize:   '14px',
        background: 'lightblue'
    });

    var seesaw = SEESAW.getRoot();

    var comp1 = new SEESAW.Component();

    comp1.setBounds(20, 100, 100, 250);
    comp1.setBackground('lime');

    seesaw.addChild(comp1);

    var comp2 = new SEESAW.Component();
    seesaw.addChild(comp2);

    comp2.setBackground('orange');
    comp2.setSize(100, 100);
    comp2.setPosition(250, 400);

});