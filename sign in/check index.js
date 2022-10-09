function myFunction() {
var u = document.getElementById("username").value;
var p1 = document.getElementById("password").value;

if(u== "") {
    alert("Vui lòng nhập tên!");
    event.preventDefault();
}
else if (p1 == "") {
    alert("Vui lòng nhập mật khẩu!");
    event.preventDefault();
}
else if(u == "admin" && p1 == "admin"){
    window.location="../index.html";
}
};
let button = document.getElementById("check");
button.addEventListener("click",myFunction);