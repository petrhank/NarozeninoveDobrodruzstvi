class Game {
	constructor(selector) {
		this.container = document.querySelector(selector);
		this.scenes = Array.from(this.container.querySelectorAll(".scene"));
		this.changeSceneBtns = Array.from(this.container.querySelectorAll(".change-scene-btn"));
		this.hasPetZizal = false;
		this.hasRybicka = false;
		this.hasHavraniPero = false;
		this.hasLektvar = false;
		this.rozcesti2Allowed = false;
		this.zlutokneznikHasLektvar = false;
		this.zlutokneznikMiniGameActive = false;
		this.vodnikMiniGame = new VodnikMinigame();
		this.glumMiniGame = new GlumMiniGame();
		this.havranMiniGame = new HavranMiniGame();
		this.inventory = new Inventory();
		this.jezibabaTextBox = document.querySelector("#scene_jezibaba .text-box");
		this.noReturnMessage = document.querySelector("#scene_rozcesti_1 .wrong-message");
		this.zlutokneznikRozcesti = document.querySelector(".zlutokneznik-rozcesti");
		for (let changeSceneBtn of this.changeSceneBtns) {
			changeSceneBtn.addEventListener("click", () => {
				if (changeSceneBtn.dataset.target === "scene_tynka_end" && !this.hasLektvar) {
					this.noReturnMessage.classList.add("active");
					setTimeout(() => {
						this.noReturnMessage.classList.remove("active");
					}, 2000);
					return;
				}
				this.changeScene(changeSceneBtn.dataset.target);
			});
		}
		this.vodnikMiniGame.finished.then(() => {
			this.hasPetZizal = true;
			sound.item.play();
			this.inventory.displayPetZizal();
		});
		this.glumMiniGame.finished.then(() => {
			this.hasRybicka = true;
			sound.item.play();
			this.inventory.displayRybicka();
		});
		this.havranMiniGame.finished.then(() => {
			this.hasHavraniPero = true;
			sound.item.play();
			this.inventory.displayHavraniPero();
		});
	}
	allowRozcesti2() {
		const cert = document.querySelector(".cert");
		const textBox = document.querySelector("#scene_rozcesti_2 .text-box");
		const bublina = document.querySelector(".cert_hlaska");
		cert.style.display = "none";
		textBox.style.display = "none";
		bublina.style.display = "none";
		const btns = Array.from(document.querySelectorAll("#scene_rozcesti_2 .change-scene-btn"));
		for (let btn of btns) {
			btn.classList.remove("disabled");
		}
	}
	changeScene(id) {
		for (let scene of this.scenes) {
			scene.classList.remove("active");
			if (scene.id === id) {
				scene.classList.add("active");
			}
		}
		if (id === "scene_jezibaba" && this.rozcesti2Allowed === false) {
			this.rozcesti2Allowed = true;
			this.allowRozcesti2();
		}
		if (id === "scene_tynka_end") {
			this.inventory.hideLektvar();
		}
		//Pokud má vševchny tři ingredience a id sceny je jezibaba, změní hasLektvar na true
		if (id === "scene_jezibaba" && this.hasPetZizal && this.hasRybicka && this.hasHavraniPero) {
			this.jezibabaTextBox.innerText = "Děkuji ti za přinesení ingrediencí. Tady máš lektvar.";
			this.hasLektvar = true;
			this.hasHavraniPero = false;
			this.hasRybicka = false;
			this.hasPetZizal = false;
			sound.item.play();
			this.inventory.displayLektvarAndHideOthers();
		}
		if (id === "scene_rozcesti_1" && this.hasLektvar && !this.zlutokneznikMiniGame) {
			this.zlutokneznikRozcesti.classList.add("fly");
			this.hasLektvar = false;
			this.zlutokneznikHasLektvar = true;
			this.inventory.hideLektvar();
			sound.laugh.play();
		}
		if (id === "scene_vez" && this.zlutokneznikHasLektvar && !this.zlutokneznikMiniGame) {
			this.zlutokneznikMiniGame = new ZlutokneznikMiniGame();
		}
		if (id === "scene_vez") {
			this.zlutokneznikMiniGameActive = true;
		} else {
			this.zlutokneznikMiniGameActive = false;
		}
		//Zvuky pro jednotlivé scény
		if (id === "scene_rozcesti_1" || id === "scene_jezibaba" || id === "scene_rozcesti_2") {
			sound.main.play();
		} else {
			sound.main.pause();
		}
		if (id === "scene_vodnik") {
			sound.vodnik.play();
		} else {
			sound.vodnik.pause();
		}
		if (id === "scene_glum") {
			sound.glum.play();
		} else {
			sound.glum.pause();
		}
		if (id === "scene_havran") {
			sound.havran.play();
		} else {
			sound.havran.pause();
		}
		if (id === "scene_vez") {
			sound.vez.play();
		} else {
			sound.vez.pause();
		}
		if (id === "scene_tynka_end") {
			sound.end.play();
		}
	}
}
