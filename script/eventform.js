function validate()
{
    var name = document.forms["eventForm"]["name"].value;
    var email = document.forms["eventForm"]["email"].value;
    var phone = document.forms["eventForm"]["phone"].value;
    var date = document.forms["eventForm"]["date"].value;
    var noofpeople = document.forms["eventForm"]["num"].value;
    var cuisine1 = document.forms["eventForm"]["food1"];
    var cuisine2 = document.forms["eventForm"]["food2"];
    var cuisine3 = document.forms["eventForm"]["food3"];
    var cuisine4 = document.forms["eventForm"]["food4"];
    var state = document.forms["eventForm"]["state"].value;
    var city = document.forms["eventForm"]["city"].value;
    var address = document.forms["eventForm"]["address"].value;

    if(name=="" || name.lenth < 5 || name.lenth > 15 || !isNaN(name))
    {
        alert("Invalid Name");
    }
    else if(email=="" || !email.match(/[a-z A-Z 0-9]@[a-z].[a-z]/))
    {
        alert("Invalid E-mail");
    }
    else if(phone=="")
    {
        alert("Invalid Phone Number");
    }
    else if(date=="")
    {
        alert("Enter Date");
    }
    else if(noofpeople=="")
    {
        alert("Invalid Number");
    }
    else if(cuisine1.checked==false && cuisine2.checked==false && cuisine3.checked==false && cuisine4.checked==false)
    {
        alert("Select at least one cuisine");
    }
    else if(state=="default")
    {
        alert("Invalid State");
    }
    else if(address=="")
    {
        alert("Invalid Address");
    }
    else
    {
        alert("Order placed successfully");
    }
}