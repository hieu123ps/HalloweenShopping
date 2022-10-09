function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password-repeat").value;
    
    
     
    if(u== "") {
        alert("Vui lòng nhập tên!");
        event.preventDefault();
    }
    else if (p1 == "") {
        alert("Vui lòng nhập mật khẩu!");
        event.preventDefault();
    }
    else if(p2 == "") {
        alert("Vui lòng xác minh mật khẩu!");
        event.preventDefault();
    }
    else if(p2 != p1){
        alert("Không Hợp Lệ")
    }
    else{
     
    alert("Cảm ơn bạn đã đăng kí thành công!")
    event.preventDefault();
    }
    
}
