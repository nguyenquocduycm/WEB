var SELLER_USER='seller';
var SELLER_PASSWORD='seller';

var BIDDER_USER='bidder';
var BIDDER_PASSWORD='bidder';

var ADMIN_USER='admin';
var ADMIN_PASSWORD='admin';

var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');

if(formLogin.attachEvent){
	formLogin.attachEvent('submit',onFormSubmit);
}
else {
	formLogin.addEventListener('submit',onFormSubmit);
}

function onFormSubmit(e){
	var username=inputUsername.value;
	var password=inputPassword.value;

	if (username= BIDDER_USER&& password== BIDDER_PASSWORD){
		window.open('../01/01.html');
	}
	else if(username= SELLER_USER && password==SELLER_PASSWORD ){
		window.open('../Dang Tin/QuanLiSanPham.html');
	}
	else if(username=ADMIN_USER && password==ADMIN_PASSWORD){
		window.open('../Admin/Homepage.html');
	}
	else {
		alert('Tài khoản hoặc mật khẩu không chính xác');
	}
}