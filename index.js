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
    object.label = datas.children[1].innerText  // label = innerText de la 2ème colonne de chaque ligne (sauf 1 et 2, nous les avons décalés)
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
        datasets: tableau2},
    options: {
        title: {
            display: true,
            text: 'World population per region (in millions)'
        }
    }
});

/**********************************************Exo 2************************************/
let country2 = document.querySelectorAll("#table2 thead tr")[0]
let tabCountry = []; 
Array.from(country2.children).forEach(function(countryName){
    if(countryName.innerHTML.length > 0){
        tabCountry.push(countryName.innerText); 
    }
})
console.log(tabCountry);

let tab2 = []
dataset2 = Array.from(document.querySelectorAll("#table1 thead tr"))


dataset2.forEach(function (datas2) {
    let object = {}
    let arData2 = []
    //declarons un tableau d'enfant
    data = Array.from(datas2.children);
    //on supprime le 1 et le 2 du tableau des données
    data.shift()
    data.shift()
    //nous parcourons les données (les valeurs pour chaque pays)
    data.forEach(function (x) {
        arData2.push(parseInt(x.innerText))
    })
    //Enregistrons les données dans l'object
    object.data = arData2
    object.label = datas2.children[1].innerText
    object.borderColor = getRandomColor()
    //Une fois que nous avons enregistre les nouvelles données nous 
    //pouvons le mettre dans le tableau
    tab2.push(object); 

    console.log(arData2);
})

console.log(tab2);


new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: tabCountry,
      datasets: tab2
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions)'
      }
    }
});


