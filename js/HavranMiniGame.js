class HavranMiniGame {
	constructor() {
		this.tileElements = Array.from(document.querySelectorAll(".havran-minigame__tile"));
		this.textBox = document.querySelector("#scene_havran .text-box");
		this.finishedMessage = "Mockrát děkuji, tady máš pírko pro štěstí";
		this.nahled = document.querySelector(".havran-minigame__nahled");
		this.nahledBtn = document.querySelector(".havran-minigame__otevrit-nahled");
		this.tiles = [];
		for (let i = 1; i <= this.tileElements.length; i++) {
			if (i <= 4) {
				this.tiles.push(new HavranMiniGameTile(this.tileElements[i - 1], i, 1));
			} else if (i <= 8) {
				this.tiles.push(new HavranMiniGameTile(this.tileElements[i - 1], i - 4, 2));
			} else if (i <= 12) {
				this.tiles.push(new HavranMiniGameTile(this.tileElements[i - 1], i - 8, 3));
			} else this.tiles.push(new HavranMiniGameTile(this.tileElements[i - 1], i - 12, 4));
		}
		this.nahledBtn.addEventListener("mousedown", () => {
			this.nahled.classList.add("active");
		});
		document.body.addEventListener("mouseup", () => {
			this.nahled.classList.remove("active");
		});
		this.finished = new Promise((resolve, reject) => {
			for (let tile of this.tiles) {
				tile.element.addEventListener("click", () => {
					if (tile.x < 4) {
						if (this.canMove(tile, "x", "1")) {
							tile.moveTile(tile.x + 1, tile.y);
							if (this.isFinished()) {
								this.textBox.innerText = this.finishedMessage;
								resolve();
							}
							return;
						}
					}
					if (tile.x > 1) {
						if (this.canMove(tile, "x", "-1")) {
							tile.moveTile(tile.x - 1, tile.y);
							if (this.isFinished()) {
								this.textBox.innerText = this.finishedMessage;
								resolve();
							}
							return;
						}
					}
					if (tile.y < 4) {
						if (this.canMove(tile, "y", "1")) {
							tile.moveTile(tile.x, tile.y + 1);
							if (this.isFinished()) {
								this.textBox.innerText = this.finishedMessage;
								resolve();
							}
							return;
						}
					}
					if (tile.y > 1) {
						if (this.canMove(tile, "y", "-1")) {
							tile.moveTile(tile.x, tile.y - 1);
							if (this.isFinished()) {
								this.textBox.innerText = this.finishedMessage;
								resolve();
							}
							return;
						}
					}
				});
			}
		});
	}
	canMove(tile, dimension, direction) {
		let otherDimension = dimension === "x" ? "y" : "x";
		return !this.tiles.some((checkedTile) => {
			if (checkedTile[dimension] === tile[dimension] + parseInt(direction) && checkedTile[otherDimension] === tile[otherDimension]) {
				return true;
			}
		});
	}
	isFinished() {
		if (
			this.tiles.every((tile) => {
				if (tile.element.id === "havran-minigame__tile-1" && tile.x === 1 && tile.y === 1) {
					return true;
				}
				if (tile.element.id === "havran-minigame__tile-2" && tile.x === 2 && tile.y === 1) {
					return true;
				}
				if (tile.element.id === "havran-minigame__tile-3" && tile.x === 3 && tile.y === 1) {
					return true;
				}
				if (tile.element.id === "havran-minigame__tile-4" && tile.x === 4 && tile.y === 1) {
					return true;
				}
				if (tile.element.id === "havran-minigame__tile-5" && tile.x === 1 && tile.y === 2) {
					return true;
				}
				if (tile.element.id === "havran-minigame__tile-6" && tile.x === 2 && tile.y === 2) {
					return true;
				}
				if (tile.element.id === "havran-minigame__tile-7" && tile.x === 3 && tile.y === 2) {
					return true;
				}
				if (tile.element.id === "havran-minigame__tile-8" && tile.x === 4 && tile.y === 2) {
					return true;
				}
				if (tile.element.id === "havran-minigame__tile-9" && tile.x === 1 && tile.y === 3) {
					return true;
				}
				if (tile.element.id === "havran-minigame__tile-10" && tile.x === 2 && tile.y === 3) {
					return true;
				}
				if (tile.element.id === "havran-minigame__tile-11" && tile.x === 3 && tile.y === 3) {
					return true;
				}
				if (tile.element.id === "havran-minigame__tile-12" && tile.x === 4 && tile.y === 3) {
					return true;
				}
				if (tile.element.id === "havran-minigame__tile-13" && tile.x === 1 && tile.y === 4) {
					return true;
				}
				if (tile.element.id === "havran-minigame__tile-14" && tile.x === 2 && tile.y === 4) {
					return true;
				}
				if (tile.element.id === "havran-minigame__tile-15" && tile.x === 3 && tile.y === 4) {
					return true;
				}
			})
		) {
			return true;
		}
	}
}
