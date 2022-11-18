class GlumMiniGame {
	constructor() {
		this.checkBtn = document.querySelector(".glum-check-button");
		this.input = document.querySelector(".glum-input");
		this.odpoved = "tma";
		this.textBox = document.querySelector("#scene_glum .text-box");
		this.wrongMessage = document.querySelector("#scene_glum .wrong-message");
		this.finished = new Promise((resolve, reject) => {
			this.checkBtn.addEventListener("click", () => {
				if (this.input.value.toLowerCase() === this.odpoved) {
					resolve();
					this.textBox.innerText = "Grr, správně. Tady máš ... rybišku.";
				} else {
					this.wrongMessage.classList.add("active");
					setTimeout(() => {
						this.wrongMessage.classList.remove("active");
					}, 2000);
				}
			});
		});
	}
}
