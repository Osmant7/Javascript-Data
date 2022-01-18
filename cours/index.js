// Rappel des types de données
let string = "Chaine de caractères"
let number = 22
let boolean = true
let maVariable;    // undefined


// Tableaux
// dans un objet on met des accolade, mais dans un tableau on met des crochet
let array = ["bordeaux", "toulouse", "nantes"]

// console.log(array[1][3]);
let array2 = ["bordeaux", 24, true, [1,2], {nom: "Denis"}]

// console.log(array2[4].nom);

let objet = {
    pseudo: "Denis",
    age: 22,
    technos: ["JS", "React", "NodeJS"],
    admin: false,
};

// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 22,
    technos: ["JS", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 25,
    technos: ["CSS", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["PHP", "React", "NodeJS"],
    admin: true,
  },
];

// console.log(data[2].pseudo);

//******************************** */
// Les structures de controle

if (data[0].age < data[1].age) {
    // console.log(data[0].pseudo + " est moins agé que " + data[1].pseudo);
} else {
    // Valeur si faux
}

// While 
let w = 0;

while (w < 10) {
    w++
    // console.log("la valeur de w est de : " + w);
}

// Do while

let d = 0;

do {
    d++;
    // console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
    // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans </li>`;
}

// on déclare la valeur de i | jusqu'où on boucle | on incrémente i si la condition de n'est pas rempli
for (i = 0; i < data.length; i++){
    // console.log(data[i].technos[0]);
    // document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

document.body.addEventListener('click', (e) => {
   switch (e.target.id) {
     case "javascript":
       document.body.style.background = "yellow";
       break;
     case "php":
       document.body.style.background = "violet";
       break;
     case "python":
       document.body.style.background = "blue";
       break;
    default:
        null;
   }
});



// Méthodes String

let string2 = "Javascript est un language orienté objet";

// console.log(eval(parseInt("1") + 2));
// console.log(typeof parseInt("42"));
// console.log(isNaN(string2));

// console.log(string2.length);
// console.log(string2[string2.length - 1]);


// console.log(string2.indexOf("language"));
// console.log(string2.indexOf("x"));  // retourne -1 si il ne connait pas

// let newString = string2.slice(2);
// let newString = string2.slice(5, 17);
// console.log(newString);
// console.log(string2.split(" "));

// console.log(string2.toLowerCase());    // tout mettre en minuscule
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));


// *********************************

// Méthodes Numbers

let number2 = 42.1234;
let numberString = "42.12 est un chiffre"

// console.log(number2.toFixed(2));
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// Math
// console.log(Math.PI);
// console.log(Math.round(4.6));   // arrondie
// console.log(Math.floor(4.8));   // arrondie inférieur
// console.log(Math.ceil(4.1));   // arrondie supérieur
// console.log(Math.pow(2, 5));   // puissance
// console.log(Math.sqrt(16));   // racine carré

// console.log(Math.floor(Math.random() * 50));

// *******************************
// Méthodes Arrays

let array3 = ["Javascript", "PHP", "Python"];
let array4 = ["Ruby", "Solidity"];

let newArray = array3.concat(array4)
// console.log(newArray);

// let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join(" "));

// console.log(array3.slice(1));
// console.log(newArray.slice(3, 5));

// console.log(array3.indexOf("Python"));

// array3.forEach((languages) => console.log(languages));

// console.log(array3.every((language) => language === "PHP"));
// console.log(array3.some((language) => language === "PHP"));

// let shift = array3.shift();
// console.log(shift);

// console.log(array3.pop());

// const restArray = array3.splice(1, 1, "C++");
// console.log(array3);
// const restArray = array3.splice(0, 2, ...array4);
// console.log(array3);

// IMPORTANT //

let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));
arrayNumber.push(17);
// console.log(arrayNumber);

// FILTER, SORT, MAP

// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => a - b));

// document.body.innerHTML = arrayNumber
//   .map((number) =>  `<li>${number}</li>`)
//   .join("");

// **********************
// Méthodes Objects

// la ligne 213 cest une fonction ternaire, user.admin ? veut dire user.admin === true ?, alors modérateur sinon Membre
// document.body.innerHTML = data
//   // .filter((user) => user.admin === false)
//   // .filter((user) => user.pseudo.includes("Den"))
//   .sort((a, b) => b.age - a.age)
//   .map((user) => 
//   `
//     <div class="user-card">
//       <h2>${user.pseudo}</h2>
//       <p>Age : ${user.age} ans</p>
//       <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>     
//     </div>
//   `
//   ).join("");


// *************************
// Les Dates

// Date Classique

let date = new Date();

// Timestamp

let timestamp = Date.parse(date);
// console.log(timestamp);

// IsoString
let iso = date.toISOString();

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric"
  });
  return newDate;
};

// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

// ********************
// Destructuring

let moreData = {
  destVar: ["Element 1", "Element 2"]
}

const { destVar } = moreData;

// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];
let [x, y, z] = array5;
// console.log(x);
// console.log(y);
// console.log(z);


const dateDestructuring = (chaine) => {
  let newDate = chaine.split('T')[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
  
}
console.log(dateDestructuring(iso));


//****************** */
// Les Datasets

const h3js = document.getElementById("javascript");
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");
// h3.forEach((language) => console.log(language.dataset.lang));

// *********************
// Les Regex

let mail = "osmantoy035@gmail.com";
console.log(mail.search(/ezrgerg/));   // -1 si il ne trouve pas,   0 si il trouve

// console.log(mail.replace(/osman/, "Sano"));

// console.log(mail.match(/TOy/i));
// console.log(mail.match(/[zok]/));
// console.log(mail.match(/[123]/));

// Tous les chiffres
// console.log(mail.match(/\d/));

// Matcher toutes els lettres
// console.log(mail.match(/[a-z]/));

// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 245265682

// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
