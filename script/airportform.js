function validate()
{
    var name = document.forms["airportForm"]["name"].value;
    var email = document.forms["airportForm"]["email"].value;
    var phone = document.forms["airportForm"]["phone"].value;
    var flightno = document.forms["airportForm"]["flightno"].value;
    var date = document.forms["airportForm"]["date"].value;
    var time = document.forms["airportForm"]["time"].value;
    var noofpeople = document.forms["airportForm"]["num"].value;
    var cuisine1 = document.forms["airportForm"]["food1"];
    var cuisine2 = document.forms["airportForm"]["food2"];
    var cuisine3 = document.forms["airportForm"]["food3"];
    var cuisine4 = document.forms["airportForm"]["food4"];
    var departure = document.forms["airportForm"]["departure"].value;
    var arrival = document.forms["airportForm"]["arrival"].value;

    if(name=="")
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
    else if(flightno=="")
    {
        alert("Invalid Flight Number");
    }
    else if(date=="" || time=="")
    {
        alert("Enter Date and time");
    }
    else if(noofpeople=="")
    {
        alert("Invalid Number");
    }
    else if(cuisine1.checked==false && cuisine2.checked==false && cuisine3.checked==false && cuisine4.checked==false)
    {
        alert("Select at least one cuisine");
    }
    else if(departure=="")
    {
        alert("Invalid Departure Destination");
    }
    else if(arrival=="")
    {
        alert("Invalid Arrival Destination");
    }
    else
    {
        alert("Order placed successfully");
    }
}