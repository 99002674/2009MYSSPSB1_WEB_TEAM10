function validate()
{
    var name = document.forms["partyForm"]["name"].value;
    var email = document.forms["partyForm"]["email"].value;
    var phone = document.forms["partyForm"]["phone"].value;
    var date = document.forms["partyForm"]["date"].value;
    var noofpeople = document.forms["partyForm"]["num"].value;
    var cuisine1 = document.forms["partyForm"]["food1"];
    var cuisine2 = document.forms["partyForm"]["food2"];
    var cuisine3 = document.forms["partyForm"]["food3"];
    var cuisine4 = document.forms["partyForm"]["food4"];
    var state = document.forms["partyForm"]["state"].value;
    var city = document.forms["partyForm"]["city"].value;
    var address = document.forms["partyForm"]["address"].value;

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