$(document).ready(function() {
   SEESAW.init();
    
    var p = new Paragraph('test');
    var h1 = new Heading('headingtest', 1);
    var h2 = new Heading('headingtest2', 2);
    var btn = new Button('btn', Button.STYLES.INFO);
    var btn2 = new Button('btn2', Button.STYLES.DANGER, Button.SIZES.LARGE);
    
    SEESAW.add(h2);
    SEESAW.stack(h1);
    SEESAW.add(p);
    SEESAW.add(btn);
    SEESAW.add(btn2);
    
    btn.setText('A button');
    btn2.setText('DANGER!!');
    
    p.setText('lorem ipsum dolor sit amet...');
    p.setBackground('blue');
    p.setForegroundColor('white');
    p.setFontSize('2em');
    
    h1.setText('HEADING');
    h2.setText('Another smaller heading');
    
    SEESAW.horizontalRule();
    
    for (var i = 1; i <= 6; i++) {
        var heading = new Heading('h-test' + i, i);
        SEESAW.add(heading);
        heading.setText('Heading ' + i);
    }
});