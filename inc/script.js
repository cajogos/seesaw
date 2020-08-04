document.addEventListener('DOMContentLoaded', function(event)
{
    let seesaw = new SeeSaw();

    let box = SeeSaw.Component('mybox');

    box.setBackground('red');

    seesaw.append(box);
});
