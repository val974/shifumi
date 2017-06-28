const choix=["pierre", "feuille", "ciseaux"];
let point = 0;
let pointia = 0;


let elements = document.querySelectorAll('img');

let pierre = elements[0];
console.log(pierre);

pierre.addEventListener('click', function(){
	let ia = Math.round(Math.random() * 3);
	if(choix[0] && choix[ia] === choix[1]){
		
		document.getElementById('txt1').innerHTML = "l'ordinateur a choisi feuille, vous avez PERDU";
		document.getElementById('score2').innerHTML = pointia += 5;
	}
	else if(choix[0] && choix[ia] === choix[2]){
		document.getElementById('txt1').innerHTML = "l'ordinateur a choisi ciseaux, vous avez GAGNÉ";
		document.getElementById('score1').innerHTML = point += 5;

	}
	else{
		document.getElementById('txt1').innerHTML = 'EGALITÉ';
	}
})


let feuille = elements[1];
console.log(feuille);

feuille.addEventListener('click', function(){
	let ia = Math.round(Math.random() * 3);
	if(choix[1] && choix[ia] === choix[2]){
		document.getElementById('txt1').innerHTML = "l'ordinateur a choisi ciseaux, vous avez PERDU";

		document.getElementById('score2').innerHTML = pointia += 5;
	}
	else if(choix[1] && choix[ia] === choix[0]){
		document.getElementById('txt1').innerHTML = "l'ordinateur a choisi pierre, vous avez GAGNÉ";
		document.getElementById('score1').innerHTML = point += 5;
	}
	else{
		document.getElementById('txt1').innerHTML = 'EGALITÉ';
	}

})

let ciseaux = elements[2];
console.log(ciseaux);

ciseaux.addEventListener('click', function(){
	let ia = Math.round(Math.random() * 3);
	if(choix[2] && choix[ia] === choix[0]){
		document.getElementById('txt1').innerHTML = "l'ordinateur a choisi pierre, vous avez PERDU";
		document.getElementById('score2').innerHTML = pointia += 5;
	}
	else if(choix[2] && choix[ia] === choix[1]){
		document.getElementById('txt1').innerHTML = "l'ordinateur a choisi feuille, vous avez GAGNÉ";
		document.getElementById('score1').innerHTML = point += 5;
	}
	else{
		document.getElementById('txt1').innerHTML = 'EGALITÉ';
	}
})

