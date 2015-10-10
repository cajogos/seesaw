$(document).ready(function ()
{
    var seesawConfig = {
        fontSize:   '12px',
        background: '#EEE'
    };

    // Start SEESAW
    var seesaw = new SEESAW.Start(seesawConfig);

    // Create some components
    var btn1, lbl1, btn2;

    var counter = 0, fontSize = 20;

    btn1 = new SEESAW.Button('btn1', 'You have clicked me 0 times.');
    seesaw.addChild(btn1);
    btn1.setBounds(50, 50, 120, 40);

    lbl1 = new SEESAW.Label('lbl1', 'I am a label');
    seesaw.addChild(lbl1);
    lbl1.setBounds(60, 150, 230, 40);
    lbl1.setFontSize(fontSize);

    btn2 = new SEESAW.Button('btn2', 'Increase font size!');
    seesaw.addChild(btn2);
    btn2.setBounds(200, -20, 100, 50);

    btn1.click = function ()
    {
        this.setText("You have clicked me " + (++counter) + ' times.');
    };

    btn2.click = function ()
    {
        lbl1.setFontSize(++fontSize);
        lbl1.setText('I am a label with font size of ' + fontSize + 'px');
    };

});