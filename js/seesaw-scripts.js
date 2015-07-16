$(document).ready(function() {
   SEESAW.init();
    
    var p = new Paragraph('test');
    var h1 = new Heading('headingtest', 1);
    var h2 = new Heading('headingtest2', 2);
    
    
    SEESAW.add(h2);
    SEESAW.prepend(h1);
    SEESAW.add(p);
    
    p.setText('lorem ipsum dolor sit amet...');
    p.setBackground('blue');
    p.setForegroundColor('white');
    p.setFontSize('5em');
    
    h1.setText('HEADING');
    h2.setText('Another smaller heading');
});