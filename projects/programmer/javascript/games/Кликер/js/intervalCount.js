function intervalCount() {

		var oneCounter;
		var twoCounter;
		var threeCounter;

		oneCounter = setInterval(function () {

			if (countS > 10 & countS < 100) {

				document.querySelector('#btn2').style.display = 'inline-block';

				clearInterval(oneCounter);
				delete oneCounter;

				twoCounter = setInterval(function () {
					countS = count.textContent = +count.textContent + 1;

					console.log(countS);

					if (countS > 100 & countS < 1000) {

						document.querySelector('#btn3').style.display = 'inline-block';

						clearInterval(twoCounter);
						delete twoCounter;

						threeCounter = setInterval(function () {
							countS = count.textContent = +count.textContent + 11;
							console.log(countS);

							if (countS > 1000) {

								document.querySelector('#btn4').style.display = 'inline-block';

								clearInterval(threeCounter);
								delete threeCounter;

								threeCounter = setInterval(function () {
									countS = count.textContent = +count.textContent + 111;
									console.log(countS);
								}, 1000);

							}

							countSumFunction();

						}, 1000);
					}

					countSumFunction();

				}, 1000);
			}

			countSumFunction();

		}, 1000);

	}