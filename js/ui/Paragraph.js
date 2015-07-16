/**
 * @class Paragraph
 * @constructor
 * @extends Component
 * @param {string} [id]
 */
function Paragraph(id) {
    Component.call(this, id);
}

Paragraph.prototype = Object.create(Component.prototype);
Paragraph.prototype.constructor = Paragraph;

