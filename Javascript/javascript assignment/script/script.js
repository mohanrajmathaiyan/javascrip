function validating()
{
    var Name = document.getElementById("name");
    var refname = /[a-zA-Z]+/;
    if(Name.value.trim() !== "" && refname.test(Name))
    {
        
        Name.style.border = "solid 2px green"
        document.getElementById("invaildname").innerHTML="valid";
        document.getElementById("invaildname").style.visibility="visible";
        document.getElementById("invaildname").style.color="green";
        
    }
    else
    {
        Name.style.border = "solid 2px red"
        document.getElementById("invaildname").innerHTML="special charactor and numbers are not allowed";
        document.getElementById("invaildname").style.visibility="visible";
        document.getElementById("invaildname").style.color="red";
        
    }


    var fathername = document.getElementById("fname");
    var reffathername = /[a-zA-Z]+/;
    if(fathername.value.trim() !== "" && reffathername.test(fathername))
    {
        
        fathername.style.border = "solid 2px green"
        document.getElementById("invaildfathername").innerHTML="valid";
        document.getElementById("invaildfathername").style.visibility="visible";
        document.getElementById("invaildfathername").style.color="green";
        
    }
    else
    {
        fathername.style.border = "solid 2px red"
        document.getElementById("invaildfathername").innerHTML="special charactor and numbers are not allowed";
        document.getElementById("invaildfathername").style.visibility="visible";
        document.getElementById("invaildfathername").style.color="red";
        
    }

    
    var Email = document.getElementById("email");
    var refmail = /^([a-z0-9]+)@([a-z]+).([a-z]{2,5})/;
    if(Email.value.trim() !== "" && refmail.test(Email))
    {
        
        Email.style.border = "solid 2px green"
        document.getElementById("invaildemail").innerHTML="valid";
        document.getElementById("invaildemail").style.visibility="visible";
        document.getElementById("invaildemail").style.color="green";
       
    }
    else
    {
        Email.style.border = "solid 2px red"
        document.getElementById("invaildemail").innerHTML="Invalid";
        document.getElementById("invaildemail").style.visibility="visible";
        document.getElementById("invaildemail").style.color="red";
        
    }


    var DOB = document.getElementById("dob");
    var refdob = /^(([0-9]{2})-([0-9]{2})-([0-9]{4}))$/;
    if(DOB.value.trim() !== "" && refdob.test(DOB))
    {
        
        DOB.style.border = "solid 2px green"
        document.getElementById("invailddob").innerHTML="valid";
        document.getElementById("invailddob").style.visibility="visible";
        document.getElementById("invailddob").style.color="green";
        
    }
    else
    {
        DOB.style.border = "solid 2px red"
        document.getElementById("invailddob").innerHTML="Invalid";
        document.getElementById("invailddob").style.visibility="visible";
        document.getElementById("invailddob").style.color="red";
        
    }


    var Mobilno = document.getElementById("mobileno");
    var refmobile = /^([7-9][0-9]{9})$/;
    if(Mobilno.value.trim() !== "" && refmobile.test(Mobilno.value))
    {
        
        Mobilno.style.border = "solid 2px green"
        document.getElementById("invaildmobile").innerHTML="valid";
        document.getElementById("invaildmobile").style.visibility="visible";
        document.getElementById("invaildmobile").style.color="green";
        
    }
    else
    {
        Mobilno.style.border = "solid 2px red"
        document.getElementById("invaildmobile").innerHTML="Invalid";
        document.getElementById("invaildmobile").style.visibility="visible";
        document.getElementById("invaildmobile").style.color="red";
        
    }


    var Current_Address = document.getElementById("address1");
    var refCurrentaddress1 = /[a-zA-Z0-9]+/;
    if(Current_Address.value.trim() !== ""  && refCurrentaddress1.test(Current_Address))
    {
        
        Current_Address.style.border = "solid 2px green"
        document.getElementById("invaildaddress1").innerHTML="valid";
        document.getElementById("invaildaddress1").style.visibility="visible";
        document.getElementById("invaildaddress1").style.color="green";
        
    }
    else
    {
        Current_Address.style.border = "solid 2px red"
        document.getElementById("invaildaddress1").innerHTML="Invalid";
        document.getElementById("invaildaddress1").style.visibility="visible";
        document.getElementById("invaildaddress1").style.color="red";
        
    }


    var City1 = document.getElementById("city1");
    var refCity1 = /[a-zA-Z]+/;
    if(City1.value.trim() !== "" && refCity1.test(City1))
    {
        
        City1.style.border = "solid 2px green"
        document.getElementById("invaildcity1").innerHTML="valid";
        document.getElementById("invaildcity1").style.visibility="visible";
        document.getElementById("invaildcity1").style.color="green";
        
    }
    else
    {
        City1.style.border = "solid 2px red"
        document.getElementById("invaildcity1").innerHTML="Invalid";
        document.getElementById("invaildcity1").style.visibility="visible";
        document.getElementById("invaildcity1").style.color="red";
        
    }


    var Zip1 = document.getElementById("zip1");
    var refzip1 = /[a-zA-Z]+/;
    if(Zip1.value.trim() !== "" && refzip1.test(Zip1))
    {
        
        Zip1.style.border = "solid 2px green"
        document.getElementById("invaildzip1").innerHTML="valid";
        document.getElementById("invaildzip1").style.visibility="visible";
        document.getElementById("invaildzip1").style.color="green";
        
    }
    else
    {
        Zip1.style.border = "solid 2px red"
        document.getElementById("invaildzip1").innerHTML="Invalid";
        document.getElementById("invaildzip1").style.visibility="visible";
        document.getElementById("invaildzip1").style.color="red";
        
    }
    var Isper = document.getElementById("isper");
    if(Isper.checked==true)
    {
        var Address2 = document.getElementById("");
    }


    var File = document.getElementById("file");
    // var refx = /[5-6]\d{4}0/;
    if(File.value.trim() !== "")
    {
        
        File.style.border = "solid 2px green"
        document.getElementById("invaildfile").innerHTML="valid";
        document.getElementById("invaildfile").style.visibility="visible";
        document.getElementById("invaildfile").style.color="green";
        
    }
    else
    {
        File.style.border = "solid 2px red"
        document.getElementById("invaildfile").innerHTML="Invalid";
        document.getElementById("invaildfile").style.visibility="visible";
        document.getElementById("invaildfile").style.color="red";
        
    }
}





