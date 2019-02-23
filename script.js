$(document).ready(function() {
	
	var things = ['icjeu', 'rorsy', 'lcaol', 'youth', 'aiind', 'wtdhi','ciabn','kabcl','joeny','hricb','moobl','tupli','motnh'];
	var thing = things[Math.floor(Math.random()*things.length)];
	var dictionary = ['juice', 'ice', 'rosy','or','sorry','local','coal','you','thou','thy','to','call','cue','and','in',
	'with','width','out','toy','hot','hut','aid','hit','wit','hid','all', 'soy', 'it','an','so','cabin','can','bin','cab','ban',
	'black','cab','lab','back','lack','enjoy','joy','yen','one','eon','birch','crib','rib','rich','bloom','mob','loom','boom',
	'tulip','tip', 'lip','put','pit','lit','month','moth','hot','not','ton'];
	
	function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
	        j = Math.floor(Math.random() * (i + 1));
	        x = a[i];
	        a[i] = a[j];
	        a[j] = x;
    	} return a;
	}

	$("#refresh").click(function(e){
		window.location.reload();
	})


	var cells = [];
	var letters = [];
	for (var i = 0; i < thing.length; i++) {
		var cell = document.createElement("td");
		var letter = document.createTextNode(thing.charAt(i));
		cell.appendChild(letter);
		document.querySelector("tr").appendChild(cell);
		cell.classList.add("cell");
		cells.push(cell);
		letters.push(cell.textContent);

		$("#shuffle").click(function(e){
			shuffle(letters);
			for (var i = 0; i < cells.length; i++) {	
				cells[i].textContent = letters[i];
			}
		})
	}

	counter = 0;
	var result = [];
	$(".cell").click(function(e){
		var clicked = e.target;
		clicked.classList.add("selected");
		var txt = e.target.innerText;
		result.push(txt);
		joinedResult = result.join('');
		display = document.querySelector("#display");
		display.textContent = joinedResult;
		counter++;

		$("#shuffle").click(function(e){
			shuffle(letters);
			clicked.classList.remove("selected");
			for (var i = 0; i < cells.length; i++) {	
				cells[i].textContent = letters[i];
				result = [];
				display.textContent = '';
			}
		})



		if (result.length > thing.length) {
			alert("Try Again");
			window.location.reload();
		} else {
				for (var i = 0; i < dictionary.length; i++) {
				if ((joinedResult == dictionary[i]) > 0) {
					display.style.color = "gold";
					setTimeout(function(){
						alert("Correct!!");
						window.location.reload();
					}, 100);
				} 
			}
		}
	})
	
	
})

