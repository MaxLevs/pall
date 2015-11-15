;

var gmat = "|",
	min = -30,
	max = 30;


function gen(x,y) {
	for (var i = x, i>=1, i--) {
		for (var j = y, j>=1, j--){
			rg = Math.random() * (max - min) + min;
			gmat = gmat + rg + "|";
		};
		gmat = gmat + "
		"
	};

	var fs = require('fs');
		fs.writeFile("matr.txt", gmat, function(err) {
			if(err) {console.log(err);}
			else {console.log("Файл сохранен.");
	}
});
}

;