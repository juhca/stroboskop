window.addEventListener('load', function() {
	//stran nalozena
	var stevec = 0;
	var gumb_odstrani = false;
	
	//Dodaj novo barvo
	var dodajBarvo = function(event) {
		var input = document.createElement('button');
        var picker = new jscolor(input);
        picker.fromRGB(Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255))
        document.getElementById("barve").appendChild(input);
        stevec++;
	}
	
	document.querySelector("#novaBarva") 
		.addEventListener('click', dodajBarvo);
		
		//Odstrani barve
	var odstraniBarvo = function(event)
	{
		if(stevec > 0)
		{
			var oce = document.getElementById("barve");
			while(oce.firstChild)
			{
				oce.removeChild(oce.firstChild);
			}
			stevec = 0;	
		}
		else
		{
			alert("Manjkajoča barva. Za odstranitev barve, moraš prvo dodati eno. Kdo bi si mislil?");
		}
	}
	document.querySelector("#odstraniBarve").addEventListener('click', odstraniBarvo);
	
		//Stroboskop
	var vrednosti = [];
	var minCas = 0;
	var maxCas = 0;
	var ustavi = false;
	
	var spremeniBarvo = function(id) {
		document.getElementById("stroboskop").style.backgroundColor = "#"+vrednosti[id];

		if (ustavi) {
			ustavi = false;
		} else {
			novId = (id+1) % vrednosti.length;
			timeout = Math.floor((Math.random() * (maxCas-minCas)) + minCas);
			setTimeout(function() {spremeniBarvo(novId)} , timeout);
		}		
	}
	
	var stop = function(event) {
		ustavi = true;
	}
	
	var zagon = function(event) {
		
		if(gumb_odstrani == false)
		{
			minCas = document.getElementById("min").value;
			if(isNaN(minCas) == true)
			{
				alert("V začetek intervala vstavi številko.");
				return;
			}
			
			maxCas = document.getElementById("max").value;
			if(isNaN(maxCas) == true)
			{
				alert("V konec intervala vstavi številko.");
				return;
			}
			
			if(stevec == 0)
			{
				alert("Vstavi eno barvo.");
				return;
			}
			
			vrednosti = [];
			var barve = document.querySelectorAll("#barve > button");
			for (i = 0; i < barve.length; i++) {
				var barva = barve[i];
				vrednosti.push(barva.innerHTML);
			}
			
			spremeniBarvo(0);
			
			var start = document.querySelector("#start");
			start.innerHTML = "Ustavi stroboskop";
			start.addEventListener('click', stop);
			gumb_odstrani = true;
		}
		else
		{
			var start = document.querySelector("#start");
			start.innerHTML = "Zaženi stroboskop";
			stop();
			start.removeEventListener('click', stop);
			gumb_odstrani = false;
		}
	}
	document.querySelector("#start").addEventListener('click', zagon);
	
});