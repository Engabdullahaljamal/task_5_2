
fetch('https://dummyjson.com/products').then(function (result) {
    return result.json();

}).then(function (result) {
    displayData(result.products);
})


let i = 0;

function displayData(arr) {
    arr.forEach(function (item) {

        const cardsArea = document.querySelector('.cards_area');
        const div1 = document.createElement('div');
        div1.classList = "card";


        const img = document.createElement("img")
        img.src = item.images[0];
        img.classList = "card-img-top img_style"

        const div2 = document.createElement("div")
        div2.classList = "card-body"

        const h5 = document.createElement("h5");
        h5.classList = "title text-center"
        h5.innerText = item.title;

        const p = document.createElement("p");
        p.classList = "card-text text-center"
        p.innerText = item.description;
        let w = "$"
        const p2 = document.createElement("p");
        p2.classList = "card-text text-center red_p"
        p2.innerText = "the price: " + item.price + "$";

        div2.append(h5);
        div2.append(p);
        div2.append(p2)
        div1.append(img);
        div1.append(div2);

        cardsArea.append(div1);

    });

}

const dataFromLocalStorage = localStorage.getItem('data');







