$(document).ready(function ()
{
    // Start SEESAW
    var seesaw = new SEESAW.Start();

    // Create new SEESAW.Components and add them to your seesaw instance
    var btn = new SEESAW.Button('btn-1');
    var btn2 = new SEESAW.Button('btn-2');

    seesaw.addChild(btn);

    btn.setBounds(100, 40, 100, 50);

    btn.addChild(btn2);

    btn.click = function ()
    {
        console.log('OH NO YOU CLICKED ME'); // TODO: Remove
    };

    btn2.setSize(40, 40);

    btn2.setPosition(4, 4);

    var num = new SEESAW.Number();

    var encKey = 'key';
    var encrypt = new SEESAW.Encrypt(encKey);

    console.log(seesaw); // TODO: Remove
});