install = function(x){localStorage.setItem("projects",localStorage.getItem("projects")+=x)}
name = [];
author = [];
desc = [];
a = "projectarray = [";
for(i in name){
	a+="<h3>"+name[i]+"</h3><br>"+"<span><i>"+author+"</i><br><p>"+desc+"</p><span/><br><button onclick='install("++")'>Install</button>"
}
