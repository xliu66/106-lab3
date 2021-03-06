var serverURL = "http://restclass.azurewebsites.net/API/";

// an object constructor
function Item(code,desc,price,image,category,stock,deliveryDays){
    this.code = code;
    this.description = desc;
    this.price = price;
    this.image = image;
    this.category = category;
    this.stock = stock;
    this.deliveryDays = deliveryDays;
    this.user = "Xiaochen Liu";
    
}

function clearForm(){
    $("#txtCode").val("");
    $("#txtDescription").val("");
    $("#txtPrice").val("");
    $("#txtImage").val("");
    $("#txtCategory").val("");
    $("#txtStock").val("");
    $("#txtDeliveryDays").val("");

}

function saveItem(){
    // get the values
    var code = $("#txtCode").val();
    var desc = $("#txtDescription").val();
    var price = $("#txtPrice").val();
    var image = $("#txtImage").val();
    var category = $("#txtCategory").val();
    var stock = $("#txtStock").val();
    var delivery = $("#txtDeliveryDays").val();
    
    // create an object
    var theItem = new Item(code,desc,price,image,category,stock,delivery);


    // HOMEWORK :
    // read the values from the rest of the input fields

    console.log(theItem);
    
    var jsontring = JSON.stringify(theItem);
    console.log(jsontring);

    // send the object to the server
    $.ajax({
        url: serverURL + "points",
        type: "POST",
        data: jsontring,
        contentType: "application/json",
        success: function(response){
            console.log("Yeii, it works",response);

            // data saved!
            clearForm();
        },
        error: function(errorDetails){
            console.log("Error: ",errorDetails);

        }
    });
}

function testAjax(){

    // Async
    // Javascript
    // And
    // XML com  JSON

    // pay for the order
    $.ajax({
        url: serverURL + "test",
        type: 'GET',
        success: function (res){   //res for response from the server
            console.log("Payment finished");
            console.log("Server says", res);

            console.log("Done, thank you for the payment");
        },
        error: function (err){
            console.log("Payment error");
            console.log("Error ocurred", err);

            console.log("Sorry....");
        }
    });

    // console.log("Done, thank you for the payment");
    // console.log("NOT FINISHED YET");
}


function init(){

    console.log("This is Admin page!");
    // retrieve initial data

    // hook events
    $("#btnSave").click(saveItem);

}


window.onload = init;