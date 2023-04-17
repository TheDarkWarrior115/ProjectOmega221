if(bans){location.reload()}else{
import{bans,reasons} from "list.js";
}
if(id){location.reload()};else{
const id = navigator.userAgent;
}
if(bans.includes(id)){
for(i in bans){if(id===bans[i]){document.write("You Have Been Banned!"+reasons[i]);localStorage.clear()}}}else{
	if(localStorage.setup){
		eval(localStorage.getItem("Main"));
	}else{
		localStorage.setItem("setup","true")
		localStorage.setItem("Main","alert('hello')")
	}
}
