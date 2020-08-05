document.addEventListener('DOMContentLoaded', function(event)
{
    let seesaw = new SeeSaw();

    let box = SeeSaw.component();
    box.setBackground('red');
    box.setSize(250, 250);
    box.setX(300);
    box.setY(400);
    seesaw.append(box);

    let box2 = SeeSaw.component();
    box2.setBackground('lime');
    box2.setSize(300, 300);
    seesaw.append(box2);

    let box3 = SeeSaw.component();
    box3.setBackground('yellow');
    box3.setSize(100, 100);
    box3.setX(box.getWidth() / 2);
    box3.setY(box.getHeight() / 2);
    box.append(box3);

    setInterval(() => {
        box.setX(Math.ceil(Math.random() * 500));
        box.setY(Math.ceil(Math.random() * 500));
        box2.setX(Math.ceil(Math.random() * 500));
        box2.setY(Math.ceil(Math.random() * 500));
    }, 250);
});
