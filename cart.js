
function cancelproduct(z)
{
    var newcart=JSON.parse(localStorage.getItem("Cart_of_products"));
    newcart.splice(z,1);
    localStorage.setItem("Cart_of_products",JSON.stringify(newcart));
    showproducts(); 
}
function showproducts()
{   
    var total=0;
    var newcart=JSON.parse(localStorage.getItem("Cart_of_products"));
    var productsDiv = document.getElementById("products");
    productsDiv.innerHTML = "";
    for(x in newcart)
    {  
         total+=parseInt(newcart[x].product_price)*parseInt(newcart[x].product_quantity);
        productsDiv.innerHTML+=
        `<div class='card'>
            <img src='${newcart[x].product_image}'/>
            <h3>${newcart[x].product_name}</h3>
            <p>${newcart[x].product_size} </p>
            <p>price : ${newcart[x].product_price} $</p>
            <p>quantity : ${newcart[x].product_quantity}</p> 
            <button class="btn-1" onclick="cancelproduct(${x})">Cancel</button>
        </div>`;

    }
    document.getElementById("totalprice").innerText="total cost : "+total+" $";
}
showproducts();