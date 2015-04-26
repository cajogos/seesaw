function Font(size, face) {
    // Default Font values
    this._size = size;
    this._face = face;
    this._weight = 400;
    // TODO: this._italic = false; styling?
    // TODO: this._underline = false;  Should we worry about underlined fonts? [CSS: text-decoration: underline]
}

Font.VALID_WEIGHTS = [
    "normal", "bold", "bolder", "lighter",
    100, 200, 300, 400, 500, 600, 700, 800, 900,
    "initial", "inherit"
];

Font.prototype.getSize = function () {
    return this._size;
};

Font.prototype.setSize = function (size) {
    if (size < 0) size = 0;
    this._size = size;
};

Font.prototype.getFace = function () {
    return this._face;
};

Font.prototype.setFace = function (face) {
    this._face = face;
};

Font.prototype.getWeight = function () {
    return this._weight;
};

Font.prototype.setWeight = function (weight) {
    for (var i = 0; i < Font.VALID_WEIGHTS.length; i++) {
        if (weight === Font.VALID_WEIGHTS[i]) {
            this._weight = weight;
            break;
        }
    }
};