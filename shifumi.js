const choix=["pierre", "feuille", "ciseaux"];
let point = 0;
let text = "";


let elements = document.querySelectorAll('img');

let pierre = elements[0];
console.log(pierre);

pierre.addEventListener('click', function(){
	let ia = Math.round(Math.random() * 10 / 5);
	if(choix[0] && choix[ia] === choix[1]){
		alert("l'ordinateur a choisit feuille, vous avez PERDU!");
	}
	else if(choix[0] && choix[ia] === choix[2]){
		alert("l'ordinateur a choisit ciseaux, vous avez GAGNÉ !");
	}
	else{
		alert('EGALITÉ');
	}
})


let feuille = elements[1];
console.log(feuille);

feuille.addEventListener('click', function(){
	let ia = Math.round(Math.random() * 10 / 5);
	if(choix[1] && choix[ia] === choix[2]){
		alert("l'ordinateur a choisit ciseaux, vous avez PERDU");
	}
	else if(choix[1] && choix[ia] === choix[0]){
		alert("l'ordinateur a choisit pierre, vous avez GAGNÉ");
	}
	else{
		alert('EGALITÉ');
	}

})

let ciseaux = elements[2];
console.log(ciseaux);

ciseaux.addEventListener('click', function(){
	let ia = Math.round(Math.random() * 10 / 5);
	if(choix[2] && choix[ia] === choix[0]){
		alert("l'ordinateur a choisit pierre, vous avez PERDU");
	}
	else if(choix[2] && choix[ia] === choix[1]){
		alert("l'ordinateur a choisit feuille, vous avez GAGNÉ");
	}
	else{
		alert('EGALITÉ');
	}
})