
function checking()
{
    var user=document.getElementById("us").value;
    var pass=document.getElementById("pass").value;
    var user_data =JSON.parse(localStorage.getItem("account"));
    var check =0;
    for(x in user_data)
    {
        if((user_data[x].UserName==user||user_data[x].Email==user)&&user_data[x].Password==pass)
        {
            check++;
            window.open("home2.html","_self");
            sessionStorage.setItem("login","done");
        }
        
    }
    if(check==0)
    {
        alert("not in data");
    }
}
