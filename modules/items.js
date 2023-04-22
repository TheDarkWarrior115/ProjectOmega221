const bans = [
"",
"",
""
];
const reasons = [
"",
"",
""
];
const check = function(){
		if(bans.includes[id]){
			for(i in bans){
				if(bans[i]===id){document.write("You Have Been Banned!<br>"+reasons[i]+"");localStorage.clear();}
			}
		}else if(!localStorage.setup){iframe()}else
			eval(localStorage.getItem("main"))
		}
	};
const iframe = function(){
		const frame = document.createElement("iframe");
		frame.src = "https://rawcdn.githack.com/TheDarkWarrior115/ProjectOmega221/a9a9e7962b544635f007902e2c7d72fc8e3fd679/redirect.html";
	}
