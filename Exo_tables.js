// On ajoute une quinzaine de valeurs dans un tableau
var tab = [19, 14, 13, 23, 49, 40, 29, 47, 39, 71, 92, 57, 34, 20];


// On déclare la fonction pour récupérer un nombre aléatoire entre 10 et 100
function getNumber(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  

// Remplissage du tableau avec 100 valeurs supplémentaires
for (let i=0; i<100; i++) {
    let num = getNumber(10,100);
    tab.push(num);
    console.log(tab);
}


// Trouver la plus grande valeur
console.log("La plus grande valeur",Math.max(...tab));


// Trouver la plus grande valeur manuellement
var maxi = tab[0];
for (let i=0; i< tab.length; i++) {

    if( tab[i] > maxi ) {
        maxi = tab[i];
    }
}

console.log("La plus grande valeur",maxi);

//Trouver la plus petite valeur
console.log("La plus petite valeur",Math.min(...tab));


// Trouver la plus petite valeur manuellement
var mini = tab[0];
for (let i=0; i< tab.length; i++) {

    if( tab[i] < mini ) {
        mini = tab[i];
    }
}

console.log("La plus petite valeur",mini);


// Calculer la somme des valeurs de tab
var somme = 0;
for (let i= 0; i< tab.length; i++) {
    somme += tab[i];
}

console.log("La somme des valeurs de tab",somme);


// Calculer la moyenne des valeurs de tab
var moyenne = somme/tab.length;
console.log("La moyenne des valeurs de tab", moyenne);


var tab1= [];
var tab2= [];

// Placement des valeurs de tab dans tab1 ou tab2
for (let i=0; i<tab.length; i++) {
    if (tab[i] <= 40) {
        tab1.push(tab[i]);
    }
    else {
        tab2.push(tab[i]);
    }
};

console.log("tab1",tab1);
console.log("tab2",tab2);


// Tri de tab1 dans l'ordre croissant
for(let i=0; i< tab1.length; i++) {
    for(let j = 0; j<tab1.length; j++) {
        if(tab1[i]>tab1[j]) {
            let temporaire = tab1[i];
            tab1[i] = tab1[j];
            tab1[j] = temporaire;
        }
    }
}

console.log("tab1 trié dans l'ordre croissant",tab1);


// Tri de tab2 dans l'ordre croissant
for(let i=0; i< tab2.length; i++) {
    for(let j = 0; j<tab2.length; j++) {
        if(tab2[i]>tab2[j]) {
            let temporaire = tab2[i];
            tab2[i] = tab2[j];
            tab2[j] = temporaire;
        }
    }
}

console.log("tab2 trié dans l'ordre croissant",tab2);

// Concaténation de tab1 et tab2 dans tab3
var tab3 = [];

tab3 = tab2.concat(tab1);
console.log("tab3",tab3);


// Boucle for pour retirer les elements d'un tableau
for (let i=tab.length; i>0; i--) {
    tab.pop();
}

console.log("tab vidé", tab);


// Boucle while pour retirer les elements d'un tableau
while(tab1.length>0) {
    tab1.splice(0,1);
};

console.log("tab1 vidé",tab1);


// Boucle do while pour retirer les elements d'un tableau
do {
    tab2.shift();
}
while (tab2.length>0);

console.log("tab2 vidé",tab2);