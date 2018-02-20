"use strict";
const tableau = require('./tableaux.js');
const max = tableau.length;
console.log('max = ' + max);
const peupler_json = () => {
	let position;
	let tabPersonne = [];
	for (let k=0;k<20;k++) {
		let position = Math.floor(Math.random()*max);
		tabPersonne.push(tableau[position]);
	}
	console.log("tableau personne : " + tabPersonne);
	return(tabPersonne);
}

module.exports = peupler_json;