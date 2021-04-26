card = [
    {
        cardTitle1: "Тайная жизнь",
        cardTitle2: "домашних животных 2",
        cost: 17,
        currency: "руб.",
        file: "card.jpg",
        type: "blu-ray.png",
        salesFile: "sales.png",
        sales: true,
        rating: 4,
        button: "buy.png"
    },
    {
        cardTitle1: "История игрушек 4",
        cardTitle2: "Приключения Вилкинса",
        cost: 54,
        currency: "руб.",
        file: "toy4.jpg",
        type: "blu-ray.png",
        salesFile: "sales.png",
        sales: true,
        rating: 4,
        button: "buy.png"
    },
    {
        cardTitle1: "Фердинант",
        cardTitle2: "Побег из коровника",
        cost: 36,
        currency: "руб.",
        file: "ferd.jpg",
        type: "blu-ray.png",
        salesFile: "sales.png",
        sales: true,
        rating: 4,
        button: "buy.png"
    }
]



// хотелсделать через цикл тут,но не вышно,посоветуйте!!!!!!!!!!!!!!!!!!!!!!!
for (i = 0; i < card.length; i++) {
    //выбивает только одну цену,за последний объект,как исправить,чтоб на каждый свою выбивало???

    // полная стоймость

    fullCost = `${card[i].cost},00 ${card[i].currency}`;
    // alert(fullCost);

    // стоимость акции -10%
    cost1 = card[i].cost * .9;
    // alert(cost1);
    saleCost = `${Math.floor(cost1)},00 ${card[i].currency}`;
    // alert(saleCost);
}


//Расчёт рейтинга


let myStars = "";
// сдесь тоже проблема,непонимаю я как сделать правильно!!!
for (i = 1; i <= card[0].rating; i++) {
    myStars += '<span class="material-icons">star</span>';
}
myStars += '<span class="material-icons">star_border</span>';
// alert(myStars);




let doSales = "";
if (card.sales) {
    doSales = ` <div>${saleCost}</div> `;
    //работает только с картинками,ссылками,гиперссылками и формами(forms)
}






s = '';
for (i = 0; i < card.length; i++) {

    s += `
<div class="card">
<div class="pic">
   <img src="images/${card[i].file}" alt="">
   <img src="images/${card[i].salesFile}" alt="">
   <img src="images/${card[i].type}" alt="">
</div>

<div class="title">
   <div>${card[i].cardTitle1}</div>
   <div>${card[i].cardTitle2}</div>
</div>

<div class="price">
         ${doSales}
    <div>${fullCost}</div>
</div>

<div class="stars">
${myStars}
</div>

<div class="buy">
   <img src="images/${card[i].button}" alt="">
</div>

</div>
`;
}
cards.innerHTML = s;


if (card[0].sales) {                                        //почему не хочет работать с остальными 
    // document.images[1].style.visibility='visible';       
    // document.images[1].style.display='inline';
    document.images[1].style.opacity = '1';
} else if (card[1].sales) {
    document.images[1].style.opacity = '1';                  //почему не хочет работать с остальными 
} else if (card[2].sales) {
    document.images[1].style.opacity = '1';                   //почему не хочет работать с остальными 
}
