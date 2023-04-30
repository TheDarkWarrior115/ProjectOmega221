if(bans,reasons,project,id){location.reload()}else{
	import{bans,reasons,projects} from "lists.js";
	const id = navigator.userAgent;
	if(bans.includes(id)){
		for(i in bans){if(id===bans[i])}{parent.document.write("You Have Been Banned!<br><br>"+reasons[i]+"")}
	}else{
		parent.eval(`const frame = document.createElement("iframe");frame.src="";window.`);
	}
};
