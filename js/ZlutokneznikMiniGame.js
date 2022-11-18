class ZlutokneznikMiniGame {
	constructor() {
		this.zlutokneznik = document.querySelector(".zlutokneznik");
		this.healthDiv = document.querySelector(".health");
		this.healthBar = document.querySelector(".healthbar");
		this.zlutokneznik.classList.remove("hidden");
		this.healthBar.classList.remove("hidden");
		this.textBox = document.querySelector("#scene_vez .text-box");
		this.textBox.innerText = "Žlutokněžník Netleskej získal tvůj léčivý lektvar, který pomalu srká, a ten mu dává nadpřirozenou sílu. K jeho poražení ho budeš muset přelstít.";
		this.healthDiv.style.width = "100%";
		this.health = 100;
		this.waitAfterNoise = false;
		this.finished = false;
		this.zlutokneznik.addEventListener("click", () => {
			if (this.health - 1 !== 0) {
				this.decreaseHealth(1);
				sound.punch.play();
				return;
			}
			this.drinkPotion();
		});
	}
	decreaseHealth(amount) {
		if (this.health <= amount) {
			this.health = 0;
			this.healthDiv.style.width = "0";
			this.flyAway();
			return true;
		}
		this.health -= amount;
		this.healthDiv.style.width = this.health + "%";
	}
	drinkPotion() {
		this.health = 100;
		this.healthDiv.style.width = "100%";
		sound.drink.play();
	}
	flyAway() {
		this.zlutokneznik.classList.add("flyaway");
	}
}
