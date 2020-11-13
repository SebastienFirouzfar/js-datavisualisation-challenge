function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


let dateYear = document.querySelectorAll("#table1 tbody tr")[0] //Selectionnner le tableau d'année pour le mettre dans le graphique 
let tableauDateLabel = []

//Quand nous voulons faire un forEach nous devons precisier 
//en écrivant Array.from(dateYear).forEach(function()
//et non dateYear.forEach
Array.from(dateYear.children).forEach(function (date) {  // créer un tableau composé de tous les enfants de "ans" ; saisir chaque élément et l'appeler "année".
    if (date.innerHTML.length > 0) {    // si la longueur du texte intérieur de chaque "année" est supérieure à 0 (en d'autres termes, si le texte intérieur n'est PAS vide)
        tableauDateLabel.push(parseInt(date.innerText));  // insérer dans le tableau "labelsTableauUn" la parseInt du texte intérieur de "l'année 
    }
})
console.log(tableauDateLabel)


// Obtenir les données nécessaires pour les DATASETS dans un bel ensemble d'objets

let tableau2 = [] // Ici nous voulons insérer tous les objets qui contiendront les propriétés(4) : data, label, borderColor et fill.

// pour avoir les données de chaque pays nous devons faire celà 
// créer un tableau composé de tous les <tr> y compris tous ses éléments enfants.
dataset = Array.from(document.querySelectorAll("#table1 tbody tr"))

dataset.shift() //on supprime le 1er elt

// saisir chaque élément du tableau 'dataset' = chaque ligne du tableau > et l'appeler 'datas'.
dataset.forEach(function (datas) {
    let object = {} // il y aura un objet par ligne  
    let arData = [] // il y aura un tableau de données par ligne
    data = Array.from(datas.children);//declarons un tableau d'enfant

    //on supprime le 1 et le 2 du tableau des données
    data.shift()
    data.shift()

    //nous parcourons les données (les valeurs pour chaque pays)
    // saisir chaque élément du tableau 'data' = chaque <td> > et l'appeler 'y' >> exemple d'un y donné = "<td>1012,8</td>"
    // pousser dans le tableau 'arrData' le parseInt du innerText de 'y' 
    //>> y.innerText = "1012,8" sous forme de chaîne de caractères, parseInt transformera la chaîne en un nombre.
    data.forEach(function (y) {
        arData.push(parseInt(y.innerText))
    })

    //Enregistrons les données dans l'object
    object.data = arData
    object.label = datas.children[1].innerText  //(pays) label = innerText de la 2ème colonne de chaque ligne (sauf 1 et 2, nous les avons décalés)
    object.borderColor = getRandomColor()
    object.fill = false
    //Une fois que nous avons enregistre les nouvelles données nous 
    //pouvons le mettre dans le tableau
    tableau2.push(object)

   console.log(arData)
})

console.log(tableau2)

//Nous allons copier les données qui se trouve 
//dans le site https://tobiasahlin.com pour ensuite 
//les coller dans la page index.js de l'exo
new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: tableauDateLabel,
        datasets: tableau2
    },
    options: {
        title: {
            display: true,
            text: 'World population per region (in millions)'
        }
    }
});

/**********************************************Exo 2************************************/
let country = document.querySelectorAll("#table2 tbody tr") //select the country 
let tabCountry = [];
//Parcour tout le pays 
Array.from(country).forEach(function (countryName) {
    //nous allons prendre le 1er enfant dans le tableau (qui est le pays)
    let newCountry = countryName.children[1]; 
    tabCountry.push(newCountry.innerText);
})
console.log(tabCountry)



/////////////////////////////////////////////////////// 2007-09
//vu que nous avons que 2 collones avec des données, nous pouvons prendre la valeur 
//qui se trouve dans la 2ème collones et la 3ème afin de mettre ça dans le graph
let tableauExo2 = []
datasetCountry = Array.from(document.querySelectorAll("#table2 tbody tr")); //select the value of country 
let object2 = {} // il y aura un objet par ligne  
let arData2 = [] // il y aura un tableau de données par ligne
datasetCountry.forEach(function (data) {
    let newData = data.children[2]; 
    arData2.push(parseInt(newData.innerText)); 
})
object2.label = "2007-09"
object2.backgroundColor = getRandomColor();
object2.data = arData2;
tableauExo2.push(object2)


//////////////////////////////////////////////////////////////2010-12
//vu que nous avons que 2 collones avec des données, nous pouvons prendre la valeur 
//qui se trouve dans la 2ème collones et la 3ème afin de mettre ça dans le graph
let object3 = {} // il y aura un objet par ligne  
let arData3 = [] // il y aura un tableau de données par ligne
datasetCountry.forEach(function (data) {
    let newData = data.children[3]; 
    arData3.push(parseInt(newData.innerText)); 
})
object3.label = "2010-12"
object3.backgroundColor = getRandomColor();
object3.data = arData3;
tableauExo2.push(object3)

new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
        labels: tabCountry,
        datasets: tableauExo2
    },
    options: {
        title: {
            display: true,
            text: 'Population growth (millions)'
        }
    }
});

/***********************************************************EXO 3 *****************************************/
let headingAjax = document.getElementById("firstHeading"); 
let tableauAjax = []
fetch(" https://canvasjs.com/services/data/datapoints.php") //avoir l'url de la base de donnée 

//se connecter à l'api .then(response => response.json()) Et verifier que l'url est bien connecter
.then(response => response.json())
.then((data)=>{
    data.forEach(function(a){
        tableauAjax.push({x:parseInt(a[0]), y:parseInt(a[1])})
    })
})
console.log(tableauAjax)



