if(navigator.cookieEnabled!==true){
		document.write("Cookies Are Not Enabled Go To Settings To Enable.")
	}else if(navigator.onLine!==true){
		document.write("You Are Not Connected To A Network");
	}else{
		localStorage.setItem("login",`
		document.body.innerHTML="<form><input id='username' name='username' type='text' placeholder='Username'><br><input id='password' name='password' type='password' placeholder="Password"><input id='login' name='login' type='submit'></form><br><span>Don't Have An Account Or Want Another One? Click<span onclick=''> Here</span> To Create One<br>Forgot Password? Click <span>Here</span> To Set</span>"
		`)
	}
