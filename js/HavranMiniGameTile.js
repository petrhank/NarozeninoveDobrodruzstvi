class HavranMiniGameTile {
	constructor(element, x, y) {
		this.element = element;
		this.moveTile(x, y);
	}
	moveTile(x, y) {
		this.x = x;
		this.y = y;
		this.element.style.left = (this.x - 1) * this.element.offsetWidth + "px";
		this.element.style.top = (this.y - 1) * this.element.offsetHeight + "px";
	}
}
