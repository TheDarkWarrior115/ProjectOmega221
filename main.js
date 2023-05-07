if(id,bans,reasons){document.write("Error");setTimeout(function(){location.reload()},5000)}else{
	const id = navigator.userAgent;
	const bans = [];
	const reasons = [];
	if(bans.includes("id")){
		for(i in bans){if(id===bans[i]){document.write("All Saved Progress Has Been Erased;You Have Been Banned!<br>"+reasons[i]+"");localStorage.clear()}}
	}else{
		var a = document.createElement("form");
		var b = document.createElement("input");
		var c = document.createElement("input");
		var d = document.createElement("button");
		var e = document.createElement("a");
		document.body.appendChild(e);
		e.innerHTML="No Account? Click Here To Create One";
		e.onclick=
		document.body.appendChild(a);
		a.appendChild(b);
		a.innerHTML+="<br>"
		a.appendChild(c);
		a.innerHTML+="<br>"
		a.appendChild(d);
		b.placeHolder="Username";
		b.id="username";
		b.name="username";
		b.type="text";
		c.placeHolder="Password";
		c.id="password";
		c.name="password";
		c.type="password";
		d.innerHTML="Login";
		
	}
}
