var today = new Date();

var mm = today.getMonth() + 1;

season = '';
switch (mm) {
    case 12:
    case 1:
    case 2:
        season = 'summer';
        break;
    case 3:
    case 4:
    case 5:
        season = 'autumn';
        break;
    case 6:
    case 7:
    case 8:
        season = 'winter';
        break;
    case 9:
    case 10:
    case 11:
        season = 'spring';
        break;
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("myhead").style.backgroundImage = "url('images/" + season + "Tas.jpg')";
}, false);

var myVar = setInterval(function () { myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toDateString() + " " + d.toLocaleTimeString();
    document.getElementById("date").innerHTML = t;
}

function resFormVailid(){
var resNumber = document.getElementById("resNumber");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var address = document.getElementById("address");
var arrDate = document.getElementById("arrDate");
var depDate = document.getElementById("depDate");
var rooNumber = document.getElementById("rooNumber");
var email = document.getElementById("email");
var phnNumber = document.getElementById("phnNumber");
if(
resForm.checkValidity() == false
)



{
  document.getElementById("Pemail").innerHTML = "wrong bad";
}
else{
    document.getElementById("Pemail").innerHTML = "";
}
}

function SaveObject() {
    var resNumber = document.forms.resForm.resNumber.value;
    var resObject = {
    fname:document.forms.resForm.fname.value,
    lname:document.forms.resForm.lname.value,
    address:document.forms.resForm.address.value,
    arrDate:document.forms.resForm.arrDate.value,
    depDate:document.forms.resForm.depDate.value,
    rooNumber:document.forms.resForm.rooNumber.value,
    email:document.forms.resForm.email.value,
    phnNumber:document.forms.resForm.phnNumber.value
    };
    localStorage.setItem(resNumber, JSON.stringify(resObject));

}

function ModifyItem() {
    var resNumber = document.forms.resForm.resNumber.value;
    var resObject = JSON.parse(localStorage.getItem(resNumber));
    document.forms.resForm.fname.value =  resObject.fname;
    document.forms.resForm.lname.value = resObject.lname;
    document.forms.resForm.address.value = resObject.address;
    document.forms.resForm.arrDate.value = resObject.arrDate;
    document.forms.resForm.depDate.value = resObject.depDate;
    document.forms.resForm.rooNumber.value = resObject.rooNumber;
    document.forms.resForm.email.value = resObject.email;
    document.forms.resForm.phnNumber.value = resObject.phnNumber;


}
function DeleteItem() {
        var resNumber = document.forms.resForm.resNumber.value;
        localStorage.removeItem(resNumber);
}

function ClearAll() {
    if (confirm("Do you really want to delete everything") == true) {
        localStorage.clear();
    } 

}

function ResetItem() {
    document.forms.resForm.reset();
}

function todoSaveItem() {

    var name = document.forms.todoForm.todoOrder.value;
    var data = document.getElementById("todoThings");
    localStorage.setItem(name, data);
    todoShowAll();

}

function todoShowAll() {
    var key = "";
    var list = "<tr><td>Order of visits</td><td>Where to go<td></tr>";
    var i = 0;
    //pulls out items from local Storage and puts into list

    for (i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        list += "<ol><li>" + key + "</li><li>" + localStorage.getItem(key) + "</li></ol>";
    }
    //Displays content from storage
    if (list == "<ol><li>Name</li><li>Value</li></ol>") {
        list += "<ol><li><i>empty</i></li><td><i>empty</i></li></ol>";
    }
    document.getElementById('todoList').innerHTML = list;
}