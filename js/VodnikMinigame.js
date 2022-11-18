class VodnikMinigame {
	constructor() {
		this.score = 0;
		this.container = document.querySelector(".vodnik-minigame");
		this.zizalaContainer = document.querySelector(".zizala-container");
		this.zizala = document.querySelector(".zizala-container .wrapper");
		this.catchedZizala = document.querySelector(".zizala-container .catch");
		this.meduzaContainer = document.querySelector(".meduza-container");
		this.meduza = document.querySelector(".meduza-container .wrapper");
		this.counter = document.querySelector(".zizaly-counter-container .count");
		this.textBox = document.querySelector("#scene_vodnik .text-box");
		this.shownTimeout = 750;
		this.finished = new Promise((resolve, reject) => {
			this.initZizala(resolve, reject);
		});
		this.initMeduza();
	}
	initZizala(resolve, reject) {
		this.zizalaInterval = setInterval(() => {
			this.showZizala();
		}, 1200);
		this.zizala.addEventListener("click", () => {
			this.showCatchedZizala();
			sound.squeak.play();
			this.shownTimeout -= 30;
			this.score++;
			this.counter.innerText = this.score;
			if (this.score === 10) {
				resolve();
				clearInterval(this.zizalaInterval);
				clearInterval(this.meduzaInterval);
				this.textBox.innerText = "Gratuluji, tady máš svých pět žížal";
			}
		});
	}
	initMeduza() {
		this.meduzaInterval = setInterval(() => {
			this.showMeduza();
		}, 2600);
		this.meduza.addEventListener("click", () => {
			this.score = 0;
			this.counter.innerText = this.score;
			this.shownTimeout = 750;
			sound.meduza.play();
		});
	}
	showZizala() {
		this.catchedZizala.style.display = "none";
		this.changeRandomLocation(this.zizalaContainer);
		this.zizala.classList.add("active");
		setTimeout(() => {
			this.zizala.classList.remove("active");
		}, this.shownTimeout);
	}
	showCatchedZizala() {
		this.catchedZizala.style.display = "block";
	}
	showMeduza() {
		this.changeRandomLocation(this.meduzaContainer);
		this.meduza.classList.add("active");
		setTimeout(() => {
			this.meduza.classList.remove("active");
		}, 1000);
	}
	changeRandomLocation(target) {
		let x = Math.floor(Math.random() * (this.container.clientHeight - target.clientHeight));
		let y = Math.floor(Math.random() * (this.container.clientWidth - target.clientWidth));
		target.style.top = x + "px";
		target.style.left = y + "px";
	}
}
