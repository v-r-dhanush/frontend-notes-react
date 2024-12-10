function checkData(){
    //let uname = document.getElementById("fname").ariaValueMax;
    let uname = document.myform.fname.value;
    let mail = document.myform.email.value;
    let password = document.myform.password.value;
    let phone = document.myform.pho.value;
    let gen=document.myform.ugen;
    let uedu = document.myform.edu;
    let regName = "^[a-zA-Z ]{2,20}$";
    let rmail="^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$"
    let rpass="^[A-Za-z@#%&*0-9]{8,20}$"
    let rphone="^[0-9]{9,11}$";
    if(uname.trim() === ""){
        window.alert("fullname required ");
        document.getElementById("fname").focus();
        return false;
    }
    if(!uname.trim().match(regName)){
        window.alert("fullname must contain only character min-2 and max-20 ");
        document.getElementById("fname").focus();
        return false;
    }
    if(mail.trim() ===""){
        window.alert("enter the mail id");
        return false;
    }
    if(!mail.trim().match(rmail)){
        window.alert("enter the valid mail id");
        return false;
    }
    if(!password.trim().match(rpass)){
        window.alert("enter valid password ");
        return false;
    }
    if(password.trim() === ""){
        window.alert("enter password ");
        return false;
    }
    if(!phone.trim().match(rphone)){
        window.alert("enter valid phone number ");
        return false;
    }
    if(phone.trim() === ""){
        window.alert("enter phone number ");
        return false;
    }
    if(ugen[0].checked==false && ugen[1].checked==false){
        window.alert("select gender");
        return false;
    }
    if(uedu[0].checked == false &&uedu[1].checked == false && uedu[2].checked == false && uedu[3].checked == false){
        window.alert("please select your Qualification");
        return false;
    }   
}