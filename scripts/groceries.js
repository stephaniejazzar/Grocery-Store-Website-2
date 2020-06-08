
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
    {
        name: "broccoli",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.99,
        vegetable: true,
        fruit: false,
        dairyProduct: false,
        meat: false,
        other: false,
        image:"broccoli.jpg" //https://www.cookforyourlife.org/recipes/steamed-broccoli/

    },
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.35,
        vegetable: false,
        fruit: false,
        dairyProduct: false,
        meat: false,
        other: true,
        image:"bread.jpg" //https://butterwithasideofbread.com/white-bread-recipe/
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 10.51,
        vegetable: false,
        fruit: false,
        dairyProduct: false,
        meat:true,
        other: false,
        image:"salmon.jpg" //https://www.123rf.com/photo_98705627_salmon-fresh-salmon-fish-raw-salmon-fish-fillet.html
    },

    {
        name: "carrot",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.52,
        vegetable: true,
        fruit: false,
        dairyProduct: false,
        meat: false,
        other: false,
        image:"carrot.jpg"  //https://www.unlockfood.ca/en/Articles/Budget/All-About-Carrots.aspx
    },

    {
        name: "cheese",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 3.55,
        vegetable: false,
        fruit: false,
        dairyProduct: true,
        meat: false,
        other: false,
        image:"cheese.jpg"  //https://blackdiamond.ca/our-cheeses/natural-cheese-bars/old-cheddar-2/
    },

    {
        name: "chicken",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 7.55,
        vegetable: false,
        fruit: false,
        dairyProduct: false,
        meat: true,
        other: false,
        image:"chicken.jpg" //https://www.consumerreports.org/cro/salmonella/antibiotic-resistant-salmonella-outbreak-raw-chicken
    },

    {
        name: "chips",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 1.55,
        vegetable: false,
        fruit: false,
        dairyProduct: false,
        meat: false,
        other: true,
        image:"chips.jpg"   //https://www.iga.net/en/product/potato-chipsclassic/00000_000000006041004701
    },

    {
        name: "lettuce",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 2.17,
        vegetable: true,
        fruit: false,
        dairyProduct: false,
        meat: false,
        other: false,
        image:"lettuce.jpg"  //https://www.eatthismuch.com/food/nutrition/romaine-lettuce,90019/
    },

    {
        name: "apple",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.12,
        vegetable: false,
        fruit: true,
        dairyProduct: false,
        meat: false,
        other: false,
        image:"apple.jpg"   //https://www.bbc.com/future/article/20191119-how-climate-change-could-kill-the-red-apple
    },
    {
        name: "strawberries",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 1.29,
        vegetable: false,
        fruit: true,
        dairyProduct: false,
        meat: false,
        other: false,
        image:"strawberry.jpg"   //https://www.dw.com/en/australias-needle-in-strawberry-scare-widens/a-45525110
    },
    {
        name: "cookies",
        vegetarian: true,
        glutenFree: false,
        organic: true,
        price: 1.59,
        vegetable: false,
        fruit: false,
        dairyProduct: false,
        meat: false,
        other: true,
        image:"cookies.jpg" //https://sugarandcharm.com/butter-less-chocolate-chip-cookies
    },

    {
        name: "milk",
        vegetarian: true,
        glutenFree: false,
        organic: true,
        price: 1.99,
        vegetable: false,
        fruit: false,
        dairyProduct: true,
        meat: false,
        other: false,
        image:"milk.jpg"  //https://www.loblaws.ca/Food/Dairy-and-Eggs/Milk-%26-Cream/2%25-%26-Whole-Milk/2%25-Milk/p/20017001_EA
    }


];


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
var product_names = [];
var priceList = [];
var productOrganic = [];




// sort by price inspired by : http://www.javascriptkit.com/javatutors/arraysort2.shtml
products.sort(function(a, b){
    return a.price-b.price
})


function restrictListProducts(prods, restriction) {

    for (let i = 0; i < prods.length; i++) {
        if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
            product_names.push(prods[i]);
        } else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
            product_names.push(prods[i]);
        } else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)) {
        product_names.push(prods[i]);
        } else if (restriction == "None") {
            product_names.push(prods[i]);
        }

    }


    for (let i = 0; i < product_names.length; i++) {
        if ((restriction == "Organic") && (product_names[i].organic == true)) {
            productOrganic.push(product_names[i]);


        }else if ((restriction == "Not Organic") && (product_names[i].organic == false)) {
            productOrganic.push(product_names[i]);




        }
    }

    return productOrganic;
}

//Sorting list of products based on category
var listOfProducts =[];

function sortByCategory(prods, category){
    listOfProducts=[];

    for (let i = 0; i < prods.length; i++){
        if((category=="vegetables") && (prods[i].vegetable==true)){
            listOfProducts.push(prods[i]);

        }
     if((category=="fruits") && (prods[i].fruit==true)){
         listOfProducts.push(prods[i]);

    }
    if((category=="dairyProducts") && (prods[i].dairyProduct==true)){
        listOfProducts.push(prods[i]);

    }
     if((category=="meats") && (prods[i].meat==true)){
         listOfProducts.push(prods[i]);

    }
     if((category=="others") && (prods[i].other==true)){
         listOfProducts.push(prods[i]);

    }



}return listOfProducts;}




// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i=0; i<products.length; i+=1) {
        if (chosenProducts.indexOf(products[i].name) > -1){
            totalPrice += products[i].price;

        }
    }
    return totalPrice;
}
