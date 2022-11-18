class Inventory {
	constructor() {
		this.container = document.querySelector(".inventory");
		this.petZizal = this.container.querySelector(".pet-zizal");
		this.rybicka = this.container.querySelector(".rybicka");
		this.havraniPero = this.container.querySelector(".havrani-pero");
		this.lektvar = this.container.querySelector(".lektvar");
	}
	displayPetZizal() {
		this.petZizal.style.display = "block";
	}
	displayRybicka() {
		this.rybicka.style.display = "block";
	}
	displayHavraniPero() {
		this.havraniPero.style.display = "block";
	}
	displayLektvarAndHideOthers() {
		this.lektvar.style.display = "block";
		this.petZizal.style.display = "none";
		this.rybicka.style.display = "none";
		this.havraniPero.style.display = "none";
	}
	hideLektvar() {
		this.lektvar.style.display = "none";
	}
}
