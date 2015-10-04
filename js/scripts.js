$(document).ready(function ()
{
    var seesawConfig = {
        fontSize:   '14px',
        background: '#CCC'
    };

    // Start SEESAW
    var seesaw = new SEESAW.Start(seesawConfig);

    // Create new SEESAW.Components and add them to your seesaw instance
    var btn = new SEESAW.Button('btn-1');
    var btn2 = new SEESAW.Button('btn-2');
    var label = new SEESAW.Label('label-1', 'Hello I am a label!');

    label.setBounds(400, 400, 100, 40);
    label.setFontFace('cursive');
    label.setForeground('#44aacc');
    seesaw.addChild(label);

    seesaw.addChild(btn);

    btn.setBounds(100, 40, 100, 50);

    btn.addChild(btn2);

    btn.click = function ()
    {
        btn2.setPosition(btn2.getX() + 10, btn2.getY() + 20);
        label.setText(label.getText() + 'append');
        label.setForeground('#555ccc');
    };

    btn2.click = function ()
    {
        this.setText('hello!');
    };

    btn2.setSize(40, 40);

    btn2.setPosition(4, 4);

    var num = new SEESAW.Number();

    var encKey = 'key';
    var encrypt = new SEESAW.Encrypt(encKey);
});