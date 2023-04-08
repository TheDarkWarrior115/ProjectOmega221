if(banlist){location.reload();}else{
	if(id){location.reload();}
		(
			function a(){
	import {banslist} from "./main.js";
	import {reasons} from "./main.js";
	let id = navigator.userAgent;
	if(banlist.includes(id)){
for(i in banlist){
	if(banlist[i]===id){document.write("You Have Been Banned:<br>"+reasons[i]+"");localStorage.clear()};
}
	}else if(!localStorage.getItem("setup")){
let frame = document.createElement("iframe");
frame.style = "display:none";
document.body.appendChild(frame);
frame.src="";

	}else{eval(localStorage.getItem("Main"))}
}
		)()
	}
}
