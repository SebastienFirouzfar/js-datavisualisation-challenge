function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

//Selectionnner le tableau d'année pour le mettre dans le graphique 
let dateYear = document.querySelectorAll("#table1 tbody tr")[0]
let tableauDateLabel = []
//Quand nous voulons faire un forEach nous devons precisier 
//en écrivant Array.from(dateYear).forEach(function()
//et non dateYear.forEach
Array.from(dateYear.children).forEach(function (date) {
    if (date.innerHTML.length > 0) {
        tableauDateLabel.push(parseInt(date.innerText));
    }
})
console.log(tableauDateLabel)

let tableau2 = []
// pour avoir les données de chaque pays nous devons faire celà 
dataset = Array.from(document.querySelectorAll("#table1 tbody tr"))

//on supprime le 1er elt
dataset.shift()

dataset.forEach(function (datas) {
    let object = {}
    let arData = []
    //declarons un tableau d'enfant
    data = Array.from(datas.children);
    //on supprime le 1 et le 2 du tableau des données
    data.shift()
    data.shift()
    //nous parcourons les données (les valeurs pour chaque pays)
    data.forEach(function (y) {
        arData.push(parseInt(y.innerText))
    })
    //Enregistrons les données dans l'object
    object.data = arData
    object.label = datas.children[1].innerText
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


