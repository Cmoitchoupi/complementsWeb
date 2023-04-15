// const personne = {
//     nom: 'Dupont',
//     prenom: 'Jean',
//     age: 30,
//     taille: 175
// };

const personne = {};
personne.nom = 'Dupont';
personne.prenom = 'Jean';
personne.age = 30;
personne.taille = 175;

const x = personne;

// console.log(personne.nom);
// console.log(x.nom);

x.nom = 'Martin';

// console.log(personne.nom);
// console.log(x.nom);

// console.log(personne.nom);
// console.log(personne.prenom);
// console.log(personne.age);
// console.log(personne.taille);
// 
// console.log(personne['nom']);
// console.log(personne['prenom']);
// console.log(personne['age']);
// console.log(personne['taille']);

for (let prop in personne) {
    console.log(`${prop}: ${personne[prop]}`);
}

personne.poids = 70;
// console.log(personne)

delete personne.poids;
// console.log(personne);

personne.sports = {
    sport1: "foot-ball",
    sport2: "rugby",
    sport3: "basket-ball"
};

// console.log(personne['sports']);
// console.log(personne.sports)
// console.log(personne.sports.sport1);
// console.log(personne.sports['sport1']);


for (let prop in personne.sports) {
    console.log(prop, ':', personne.sports[prop]);
}

personne.sports.sport1 = {
    name: "foot-ball",
    equipement: ["ballon", "cage"]
}

personne.sports.sport2 = {
    name: "tenis",
    equipement: ["balle", "filet", "raquette"]
}

personne.sports.sport3 = {
    name: "basket-ball",
    equipement: ["ballon", "panier"]
}

for (let prop in personne.sports) {
    console.log(prop, ':', personne.sports[prop]);
}

personne.qui = function () {
    console.log(this.nom, this.prenom);
}

personne.quimaj = function () {
    console.log(this.nom.toUpperCase(), this.prenom.toUpperCase());
}

personne.qui();
personne.quimaj();

let div = document.createElement("div");

let values = Object.values(personne);

for (let i = 0; i < Object.values(personne).length; i++) {
    div.textContent += values[i];
}

window.onload = () => {
    document.body.appendChild(div);
}

console.log(JSON.stringify(Object.values(personne)));

personne.datenaissance = new Date('September 22, 2018');

console.log(JSON.stringify(Object.values(personne)));

// Exercice 2

personne.langue = "Francais"

personne.getLang = function () {
    return this.langue
}

personne.setLang = function (newLangue) {
    this.langue = newLangue
}


const obj = { counter: 0 };

Object.defineProperty(obj, 'reset', {
    get: function () {
        this.counter = 0;
    }
});

Object.defineProperty(obj, 'inc', {
    get: function () {
        this.counter++;
    }
});

Object.defineProperty(obj, 'dec', {
    get: function () {
        this.counter--;
    }
});

Object.defineProperty(obj, 'add', {
    set: function (value) {
        this.counter += value;
    }
});

Object.defineProperty(obj, 'subs', {
    set: function (value) {
        this.counter -= value;
    }
});

// 2.2

function Personne(nom, prenom, age, couleurYeux) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.couleurYeux = couleurYeux;

    this.name = function () {
        console.log(`Je m'appelle ${this.prenom} ${this.nom}`);
    }

    this.changeName = function (newNom, newPrenom) {
        this.nom = newNom;
        this.prenom = newPrenom;
    }
}

const personne1 = new Personne('Dupont', 'Jean', 30, 'marron');
personne1.changeName('Durand', 'Pierre');
personne1.name(); 


let x1 = "Hello";
console.log(x1.length); 

let x2 = 3;
console.log(x2.toString()); 

let x3 = true;
console.log(x3.valueOf()); 

let x4 = null;
console.log(x4 === null); 

console.log(Math.PI); 

console.log(Math.pow(2, 3)); 

console.log(Math.sqrt(25));

