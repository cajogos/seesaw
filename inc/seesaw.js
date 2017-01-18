$(document).ready(function ()
{
    SEESAW.setUserConfig({
        fontSize: '14px',
        background: 'salmon'
    });

    var seesaw = SEESAW.getRoot();
    seesaw.setBackground('lightblue');

    var comp1 = new SEESAW.Component();

    comp1.setBounds(20, 100, 300, 250);
    comp1.setBackground('lightgreen');

    seesaw.addChild(comp1);

    console.log(seesaw);

    var comp2 = new SEESAW.Component();
    comp1.addChild(comp2);

    comp2.setBackground('salmon');
    comp2.setSize(100, 100);
    comp2.setPosition(20, 20);

    for (var i = 0; i < 100; i++)
    {
        var tempComp = new SEESAW.Component();
        seesaw.addChild(tempComp);
        tempComp.setSize(5, 5);
        tempComp.setBackground('blue');
        var randX = SEESAW.Math.randInt(0, tempComp.getParent().getWidth() - tempComp.getWidth());
        var randY = SEESAW.Math.randInt(0, tempComp.getParent().getHeight() - tempComp.getHeight());
        tempComp.setPosition(randX, randY);
    }
});