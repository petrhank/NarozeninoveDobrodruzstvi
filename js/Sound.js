class Sound {
	constructor() {
		this.main = new Audio("./audio/Manhattan_main.mp3");
		this.main.loop = true;
		this.main.volume = 0.05;
		this.vodnik = new Audio("./audio/Manhattan_vodnik.mp3");
		this.vodnik.loop = true;
		this.vodnik.volume = 0.05;
		this.glum = new Audio("./audio/Manhattan_glum.mp3");
		this.glum.loop = true;
		this.glum.volume = 0.05;
		this.havran = new Audio("./audio/Manhattan_havran.mp3");
		this.havran.loop = true;
		this.havran.volume = 0.1;
		this.item = new Audio("./audio/Manhattan_item.mp3");
		this.item.volume = 0.1;
		this.end = new Audio("./audio/Manhattan_tynka_end.mp3");
		this.end.volume = 0.1;
		this.drink = new Audio("./audio/drink.mp3");
		this.drink.volume = 0.2;
		this.laugh = new Audio("./audio/laugh.mp3");
		this.laugh.volume = 0.05;
		this.squeak = new Audio("./audio/squeak.mp3");
		this.squeak.volume = 0.01;
		this.vez = new Audio("./audio/Manhattan_vez.mp3");
		this.vez.loop = true;
		this.vez.volume = 0.1;
		this.punch = new Audio("./audio/punch.mp3");
		this.punch.volume = 0.05;
		this.scream = new Audio("./audio/scream.mp3");
		this.scream.volume = 0.05;
		this.meduza = new Audio("./audio/meduza.mp3");
		this.meduza.volume = 0.05;
	}
}
