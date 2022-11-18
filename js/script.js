const sound = new Sound();
const game = new Game("#game");

//Microphone Start
navigator.mediaDevices
	.getUserMedia({
		audio: true,
	})
	.then(function (stream) {
		const audioContext = new AudioContext();
		const analyser = audioContext.createAnalyser();
		const microphone = audioContext.createMediaStreamSource(stream);
		const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);

		analyser.smoothingTimeConstant = 0.8;
		analyser.fftSize = 1024;

		microphone.connect(analyser);
		analyser.connect(scriptProcessor);
		scriptProcessor.connect(audioContext.destination);
		scriptProcessor.onaudioprocess = function () {
			const array = new Uint8Array(analyser.frequencyBinCount);
			analyser.getByteFrequencyData(array);
			const arraySum = array.reduce((a, value) => a + value, 0);
			const average = arraySum / array.length;
			if (game.zlutokneznikMiniGame) {
				if (Math.round(average) > 120 && !game.zlutokneznikMiniGame.waitAfterNoise && game.zlutokneznikMiniGameActive && !game.zlutokneznikMiniGame.finished) {
					let isFinished = game.zlutokneznikMiniGame.decreaseHealth(30);
					if (isFinished) {
						game.zlutokneznikMiniGame.finished = true;
						game.hasLektvar = true;
						sound.item.play();
						sound.laugh.play();
						game.inventory.displayLektvarAndHideOthers();
						return;
					}
					sound.scream.play();
					game.zlutokneznikMiniGame.waitAfterNoise = true;
					setTimeout(() => {
						game.zlutokneznikMiniGame.waitAfterNoise = false;
					}, 1000);
				}
			}
		};
	})
	.catch(function (err) {
		/* handle the error */
		console.error(err);
	});

//Microphone End
