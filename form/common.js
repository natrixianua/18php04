function validateRegister(){
	var city,name,phone,check,male,female,gay;
	name = document.getElementById('name').value;
	phone = document.getElementById('phone').value;
	city = document.getElementById('city').value;
	male = document.getElementById('male').checked;
	female= document.getElementById('female').checked;
	gay = document.getElementById('gay').checked;
	check =true;
	if(name==''){
		document.getElementById('error_name').innerHTML='please input your name';
		check=false;
	}
	else{
		document.getElementById('error_name').innerHTML = '';
	}
	if(phone == ''){
		document.getElementById('error_phone').innerHTML = 'Please input your phone!';
		check = false;
	}
	else{
		document.getElementById('error_phone').innerHTML = '';
	}
	if(!male && !female && !gay){
		document.getElementById('error_gender').innerHTML = 'Please choose your gender!';
		check = false;
	}
	else{
		document.getElementById('error_gender').innerHTML = '';
	}
	if(city==0){
		document.getElementById('error_province').innerHTML = 'Please choose your city!';
		check=false
	}
	else{
		document.getElementById('error_province').innerHTML = '';
	}
	if(check){
		document.getElementById('registerForm').style.display = 'none';
		document.getElementById('success').style.display = 'block';
	}
}