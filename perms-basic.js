localStorage.setItem("setup","true");
localStorage.setItem("main",`
import("projects.js");
projects_list = "<button onclick='Exit(this)'>Close</button>"
projectlist = function() {for(i in projectarray){project_list+=projectarray[i]}}
projects = localStorage.getItem("projects").split(":,;");
Exit = function(x){x.parentElement.style.display="none"};
Open = function(x){document.querySelector(x).style.display="block"}
class newproject {
    constructor(name,author,info) {
    	onclick = "eval(localStorage.getItem("+name+"))"
        return("<h3>"+name+"</h3><br><span>Created By<i>"+author+"</i></span><br><p>"+info+"</p><br><onclick="+onclick+">load</button></br>")
    }
};
openprojectlist = "Open('#importprojects');Exit('#Projects')"
pr = "<button>Exit</button>";
for(i in projects){pr+=new newproject(projects[i])};
pr+="<button onclick="+openprojectlist+">Browse Projects</button>";

let a = document.createElement("button");
a.innerHTML = "Projects";
a.onclick="Open('#Projects')"

let b = document.createElement("button");
b.innerHTML = "Info";
b.onclick="Open('#Info')"

let c = document.createElement("button");
c.innerHTML = "Permissions";
c.onclick="Open('#Permissions')"

let e = document.createElement("button");
e.innerHTML = "Format";
b.onclick="Open('#Format')"

let f = document.createElement("div");
f.id = "Projects";
f.innerHTML = pr;
f.className = "div";

let g = document.createElement("div");
g.id = "Info";
g.innerHTML = "<button onclick='Exit(this)'>Exit</button><br><p>Project Omega 221 Was Developed By GoldLunacy<br>The Project Is A Powerful Tool That Can Import Projects Such As A Calculator Or A Game Of Rock Paper Scissors<br>The Creator's Identity Is To Remain Anonomous Until Decided By The Creator<br>Fame Is Good And All But Anonymity Can Be Better<br>Also I Can Ban People For Certain Periods Of Time<br>I Am Not Responsible For What You Do With This Tool<br>Have Fun And Good Luck<br>		-GoldLunacy</p>";
g.className = "div";

let h = document.createElement("div");
h.id = "Permissions";
h.innerHTML = "<button onclick='Exit(this)>Exit</button><br><p>Your Current Permissions:General</p>";
h.className = "div";

let i = document.createElement("div");
i.id = "Format";
i.innerHTML = "<button onclick='Exit(this)>Exit</button><br><p>Formatting Will Make You Lose Everything Pertaining To This</p><br><button>Format</button>";
i.className = "div";

j = document.createElement("style");
j.innerHTML = ".div{width:100%,height:100%,top:0;bottom:0;left:0;right:0;z-index:100;position:fixed;display:none}";

k = document.createElement("div");
k.id="importprojects"
k.className="div"
k.innerHTML = project_list

document.body.appendChild(a);
document.body.appendChild(b);
document.body.appendChild(c);
document.body.appendChild(e);
document.body.appendChild(f);
document.body.appendChild(g);
document.body.appendChild(h);
document.body.appendChild(i);
document.body.appendChild(j);


`);
location.reload()
