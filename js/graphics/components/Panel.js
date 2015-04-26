function Panel(id) {
    Element.call(this, id);
}

Panel.prototype = Object.create(Element.prototype);
Panel.prototype.constructor = Panel;