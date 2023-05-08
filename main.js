const login = function(){import("users.js")}
document.body.innerHTML=`
<input id="username" name="username" placeholder="Username" type="text"><br>
<input id="password" name="password" placeholder="Password" type="password"><br>
<input onclick="login" type="submit" id="submit" value="Login"><br>
<span style="font-size:10px">No account? Click <span style="color:blue;font-size:10px">here</span> to create one.</span>
`
