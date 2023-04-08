if(banlist){location.reload();}else{
	if(id){location.reload();}else{
		(
			function a(){
	import {banslist} from "./main.js";
	import {reasons} from "./main.js";
	let id = navigator.userAgent;
	if(banlist.includes(id)){
for(i in banlist){
	if(banlist[i]===id){document.write("You Have Been Banned:<br>"+reasons[i]+"")};
}
	}else{
let frame = document.createElement("iframe");
frame.style = "display:none";
document.body.appendChild(frame);
frame.src="webpage//refer to notepad"
	}
}
		)()
	}
}
