$(document).ready(function ()
{
    var seesawConfig = {
        fontSize:   '14px',
        background: 'teal'
    };

    // Start SEESAW
    var seesaw = new SEESAW.Start(seesawConfig);

    // Create new SEESAW.Components and add them to your seesaw instance
    var btn = new SEESAW.Button('btn-1', 'Play');
    var btn2 = new SEESAW.Button('btn-2', 'Pause');
    var btn3 = new SEESAW.Button('btn-3', 'Stop');
    var label = new SEESAW.Label('label-1', 'SEESAW TEST');
    var video = new SEESAW.Video('video');

    video.setBounds(50, 20, 640, 480);
    video.setBackground('teal');

    seesaw.addChild(video);
    video.setSource('http://v2v.cc/~j/theora_testsuite/320x240.ogg');
    video.setCurrentTime(2);

    label.setFontFace('monospace');
    label.setForeground('red');
    label.setFontSize(20);
    seesaw.addChild(label);

    seesaw.addChild(btn);
    seesaw.addChild(btn2);
    seesaw.addChild(btn3);

    btn.setBounds(50, 520, 100, 30);
    btn2.setBounds(160, 520, 100, 30);
    btn3.setBounds(270, 520, 100, 30);

    btn.click = function ()
    {
        video.play();
    };

    btn2.click = function ()
    {
        video.pause();
    };

    btn3.click = function ()
    {
        video.stop();
    };
});