// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

var chosenProducts = [];
var elementsArray=[];

function openInfo(evt, tabName) {

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}
//inspired by https://www.w3schools.com/howto/howto_js_dropdown.asp
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}}

function addRestrictions(slct1){
    var s1 = document.getElementById(slct1);

    restrictListProducts(products, s1.value);


}
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);

    // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";

    // obtain a reduced list of products based on restrictions
    var optionArray = sortByCategory(productOrganic, s1.value);

    // for each item in the array, create a checkbox element, each containing information such as:
    // <input type="checkbox" name="product" value="Bread">
    // <label for="Bread">Bread/label><br>



    for (i = 0; i < optionArray.length; i++) {

        var productName = optionArray[i].name;
        // create the checkbox and add in HTML DOM
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        s2.appendChild(checkbox);

        // create a label for the checkbox, and also add in HTML DOM

        var label = document.createElement('label');
        var img = document.createElement('img')
        img.src = optionArray[i].image;
        img.height= 90;
        img.width= 90;
        label.appendChild(img);
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName));
        label.appendChild(document.createTextNode('\u00A0\u00A0')); //inspired by StackOverflow
        label.appendChild(document.createTextNode('$'));
        label.appendChild(document.createTextNode(optionArray[i].price));
        s2.appendChild(label);


        // create a breakline node and add in HTML DOM
        s2.appendChild(document.createElement("br"));



    }

    selectedItems();
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

    var ele = document.getElementsByName("product");
    for (let i=0; i<ele.length; i++){
        if (ele[i].checked){
            elementsArray.push(ele[i].value);
    }}

    var c = document.getElementById('displayCart');
    c.innerHTML = "";

    // build list of selected item
    var para = document.createElement("P");
    for (i = 0; i < elementsArray.length; i++) {
            para.appendChild(document.createTextNode(elementsArray[i]));
            para.appendChild(document.createElement("br"));
            chosenProducts.push(elementsArray[i]);
        }


    // add paragraph and total price
    c.appendChild(para);
    c.appendChild(document.createTextNode("Total Price is " +"$" + getTotalPrice(chosenProducts)));

}
