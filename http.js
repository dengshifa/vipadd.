const net = require('net');
const server = net.createServer();

server.on("connection",(client)=>{
	console.log("有客户端连上了")

	client.on("data",(data)=>{
		// console.log(data.toString());

		var data = data.toString();
		var strs = new Array()
        strs = data.split(" ") 

		// var index = data.indexOf("\n");
		// // console.log(index);
		
		// var firstline =data.substring(0,index).trim();
		
		// const [method,url,version]=firstline.split(" ");
	
		if ( strs[0]=='GET'&& strs[1] == '/') {
			client.write("HTTP/1.1 200 OK\n");
	 		client.write("Content-Type: text/html;charset=UTF-8\n\n");

	 		client.write("<h1>welcome</h1><a href='/admin'>进入入管理理后台</a>");
	 		client.end();
		}

		if (strs[0]=='GET' && strs[1] == '/admin') {
			let long = parseInt(strs.length) 
            //console.log(long)
            let endrow = strs[long-1]
            //console.log(endrow)
            var mess= new Array()
            mess = endrow.split("=")
			if(mess[0] == "SESSID"){
                client.write('HTTP/1.1 200 OK\n')
                client.write('Content-Type: text/html;charset=UTF-8\n\n')
                client.write(mess[1]) //打印SESSID的值
            }else{
				client.write("HTTP/1.1 302 OK\n");
	 			client.write("Content-Type: text/html;charset=UTF-8\n");
	 			client.write('Location:192.168.28.43/login\n\n')
	 		// client.end();
		 	}
		 	client.end();
		}

		if ( strs[0]=='GET' && strs[1] == '/login') {
			client.write("HTTP/1.1 200 OK\n");
	 		client.write("Content-Type: text/html;charset=UTF-8\n\n");
	 		client.write("<form action='http://192.168.28.43:8001/login' method='post' ><br>");
	 		client.write("<fieldset>");
	 		client.write("<legend>登录</legend>");
	 		client.write("账号:<input type='text' name='username'> <br>");
	 		client.write("密码:<input type='password' name='pwd' maxlength=10> <br>");
	 		client.write("<input type='submit' value='登录'>");
	 		client.write("</filedset>");
	 		client.write("</form>");
	 		client.end();
	 		
		}
		

		if(strs[0] == "POST" && strs[1] == "/login") {
			// let dataarr =data.split(" ");
			let length = parseInt(strs.length)
			let end = strs[length - 1]
			let array = new Array()
			let np = new Array()
			let string='';
			array = end.split("username=")
			np = array[1].split("&pwd=")
			console.log(np)
			if(np[0]==='admin' && np[1]==='123456'){
				let strarr = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
                for(key in strarr ){
                    let num = Math.ceil(Math.random()*13)
                    string+=strarr[num]
                }
                    client.write('HTTP/1.1 302 OK \n');
                    client.write('Content-Type: text/html charset = UTF-8 \n');
                    client.write(`Set-Cookie: SESSID=${string}\n`);
                    // console.log(`${string}`)
                    client.write('Location:/admin \n\n');
                    client.end()
            }else{
            		client.write('HTTP/1.1 302 OK \n');
                    client.write('Content-Type: text/html ;charset = UTF-8 \n');
                    // client.write(`Set-Cookie: SESSID=${string}\n`)
                    // console.log(`${string}`)
                    client.write('Location:/admin \n\n');
            }
		
		}	
	 	// client.end();	 	
	})

})

server.listen(8001,()=>{
	console.log("服务器已启动");
})