
// Ejercicio 1
let printMessage = (message) => {
    console.log(message);
};

// Ejercicio 2
let createMultiplication = (number1, number2) => {
    let result = number1 * number2;
    return result;
};

// Ejercicio 3
let mappedBeers = beers.map((beer) => {
    return {
        name: beer.name,
        abv: beer.abv,
        ibu: beer.ibu
    };
});
console.log("Mapped Beers:", mappedBeers);

// Ejercicio 4: 
let getTopAlcoholicBeers = (beers) => {
    let sortedBeers = beers.slice().sort((a, b) => b.abv - a.abv);
    return sortedBeers.slice(0, 10);
};
console.log("Top 10 Alcoholic Beers:", getTopAlcoholicBeers(beers));

// Ejercicio 5: 
let getTopLeastBitterBeers = (beers) => {
    let sortedBeers = beers.slice().sort((a, b) => a.ibu - b.ibu);
    return sortedBeers.slice(0, 10);
};
console.log("Top 10 Least Bitter Beers:", getTopLeastBitterBeers(beers));

// Ejercicio 6: 
let dBeerByName = (beers, name) => {
    return beers.find(beer => beer.name === name);
};
console.log("Found Beer:", findBeerByName(beers, "Buzz"));

// Ejercicio 7
let dBeerByIbu = (beers, value) => {
    let foundBeer = beers.find(beer => beer.ibu === value);
    if (foundBeer) {
        return foundBeer;
    } else {
        console.log(`There is no beer with an ibu of ${value}.`);
    }
};
console.log("Found Beer by IBU:", findBeerByIbu(beers, 8));

// Ejercicio 8
let BeerPositionByName = (beers, name) => {
    let index = beers.findIndex(beer => beer.name === name);
    if (index !== -1) {
        return index;
    } else {
        console.log(`${name} does not exist.`);
    }
};
console.log("Position of Beer:", findBeerPositionByName(beers, "Buzz"));

// Ejercicio 9
let filterBeersByMaxAlcohol = (beers, alcohol) => {
    return beers.filter(beer => beer.abv <= alcohol)
                .map(beer => ({
                    name: beer.name,
                    alcohol: beer.abv,
                    bitterness: beer.ibu
                }));
};
console.log("Filtered Beers by Alcohol:", filterBeersByMaxAlcohol(beers, 4.2));

// Ejercicio 10
let sortBeersByProperty = (beers, property, ascending = true) => {
    let sortedBeers = beers.slice().sort((a, b) => {
        if (ascending) {
            return a[property] - b[property];
        } else {
            return b[property] - a[property];
        }
    });
    return sortedBeers.slice(0, 10);
};
console.log("Sorted Beers by ABV (descending):", sortBeersByProperty(beers, 'abv', false));


// Ejercicio 11
let tablebody = document.getElementById("tableBody");

let createRows = (beers) => {
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdIbu = document.createElement("td");
    let tdAbv = document.createElement("td");

    tdName.textContent = beer.name;
    tdName.classList.add("miClass");
    tdIbu.textContent = beers.ibu;
    tdIbu.classList.add("miClass");
    tdAbv.textContent = beer.abv;
    tdAbv.classList.add("miClass");

    tr.append(tdName, tdIbu, tdAbv);
    return tr;

    };
    let completeTable = (arrrayBeers, contenedor) => {
        for (const beer of arrayBeers) {
            let tr = createRows(beer);
            contenedor.appendChild(tr);
            }
            };
            completeTable(beers,tableBody);
