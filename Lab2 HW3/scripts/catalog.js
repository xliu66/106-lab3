function saveItem(){
    // get the values
    var code = $("#txtCode").val();

    var desc = $("#txtDescription").val();
    var prc = $("#txtPrice").val();
    var imge = $("#txtImage").val();
    var categ = $("#txtCategory").val();
    var stk = $("#txtStock").val();
    var ded = $("#txtDeliveryDays").val();
    

    // HOMEWORK :
    // read the values from the rest of the input fields

    console.log(code);
    console.log(desc);
    console.log(prc);
    console.log(imge);
    console.log(categ);
    console.log(stk);
    console.log(ded);

}
var items = [];



function fetchCatalog(){
    items = [
        {
            "code": "WW01",
            "description": "Coil Roofing Nails",
            "price": 99.65,
            "image": "https://www.bestmaterials.com/images/hdrr-114large.jpg",
            "category": "Nails",
            "stock": 2,
            "deliveryDays": 180

        },
        {
            "code": "WW02",
            "description": "Stucco Nettings",
            "price": 69.12,
            "image": "https://proburosupply.com/wp-content/uploads/2018/11/STUCCO-WIRE-NETTING.jpg",
            "category": "Netting",
            "stock": 2,
            "deliveryDays": 180

        },
        {
            "code": "WW03",
            "description": "Galvanized Wire",
            "price": 104.50,
            "image": "https://5.imimg.com/data5/WI/LQ/JY/SELLER-75042680/hot-dip-galvanized-wire-500x500-500x500.jpg",
            "category": "Wires",
            "stock": 2,
            "deliveryDays": 180

        },
        {
            "code": "WW04",
            "description": "Anneal Wire",
            "price": 89.24,
            "image": "https://images.homedepot-static.com/productImages/2727748d-6142-4e75-a2bc-691c1aa69dd5/svn/ook-picture-mirror-hanging-50155-64_1000.jpg",
            "category": "Wires",
            "stock": 2,
            "deliveryDays": 180

        }

    ];

}
function displayCatalog(){
    // travel the array
    for(var i=0; i< items.length;i++){
        // get the item
        var item = items[i];
        // draw the item on the DOM (html)
        drawItem(item);
    }

}

function drawItem(item){

    // create the sintax
    var sntx = 
    `<div class='item'> 
        <img src='${item.image}'>

        <label class='code'>${item.code}</label>

        <label class='cat'>${item.category}</label>

        <label class='desc'>${item.description}</label>  

        <label class='price'>${item.price}</label>

        <button class='btn btn-sm btn-info'> + </button>
    </div>`;

    // get the element from the screen
    var container = $("#catalog");

    // append th sintax to the element
    container.append(sntx);

}

function search(){
    var text = $("#txtSearch").val().toLowerCase(); // get the text
    
    // clear prev results
    $("#catalog").html("");

    // travel array and show only items that contains the text 
    for (var i=0; i<items.length;i++){
        var item = items[i];

        //if the secription contains the text,
        //or the catagory contains the text
        //or the code is equal to the text
        //or the price is euqal to the text
        //then show the item on the screen
        if (item.description.toLowerCase().includes(text)
            || item.category.toLowerCase().includes(text)
            || item.code.toLowerCase() == text
            || item.price == text
        ){
            drawItem(item);
        }
    }
}


function init(){
    console.log("THis is catalog page!");


    // get data

    fetchCatalog();
    displayCatalog();


    // hook events

    $("#btnSearch").click(search);
    $("#txtSearch").keypress(function(e){
        /* if(e.key=="Enter"){
            search();
        } */
        if(e.keyCode==13){
            search();
        }
    });
    
    
}

// HTTP methods
// HTTP status codes


window.onload = init;
