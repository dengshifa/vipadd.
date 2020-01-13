
const readline = require('readline');

async function input(msg) {

    return await new Promise((resolve, reject) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(msg, (answer) => {

            resolve(answer)

            rl.close();
        });
    })
}

(async () => {
    var question= await input("请选择你要打印的图形(1.三角形;2.正方形;3.菱形;4.梯形;5.回字形):");
    var content = await input("请设置填充的内容:");
    // var hollow =  await input("请选择是否空心(y/n):");
    var x="";

    switch(question){
        case '1'://三角形
            var hollow =  await input("请选择是否空心(y/n):");
            var height = await input("请设置三角形的高:");
    
            // var x="";
            for(var i=0;i<height;i++){
                for(var j=0;j<height-i;j++){
                    x+=" ";
                }
                for(var k=0;k<2*i+1;k++){
                    if(hollow == 'y'){
                        if(i>0&&i<height-1&&k>0&&k<2*i){
                            x+=' ';
                        }else{
                            x+=`${content}`;
                        }
                    }else{
                        x+=`${content}`;
                    }           
                }
                    x+="\n";
            }
            console.log(x);
            break;

        case '2'://正方形
            var hollow =  await input("请选择是否空心(y/n):");
            var height = await input("请设置正方形的边长:");
            // var x="";
            for(var i = 0; i < height; i++){

                for(var j = 0; j < height; j++){
                    if(hollow == 'y'){
                        if(i>0&&i<height-1&&j>0&&j<height-1){
                           x+='  ';
                        }
                        else{
                           x+=`${content} `;
                        }
                    }
                    else{
                        x+=`${content} `;
                    }
                    
                }
                    x+='\n';
            }
            console.log(x);
            break;

        case '3'://菱形
            var hollow =  await input("请选择是否空心(y/n):");
            var height = await input("请设置菱形的高:") 
            var x='';
            if(height%2==0) height-=1;
            for(var i = 0.5*(height-1)*(-1); i <= 0.5*(height-1); i++){
                var m = i;
                if(i < 0) m *= -1

                for(var j = 0; j < m; j++){
                    x+='  '; 
                }
                for(var j = 0; j < height-2*m; j++){
                    if (hollow == 'y') {
                        if (i>0.5*(height-1)*(-1)&&i<0.5*(height-1)&&j>0&&j< height-1-2*m) {
                            x+='  '
                        }else{
                             x+= `${content} `;  
                        }
                    }else{
                         x+= `${content} `;   
                    }
                   
                }      
                    x+='\n';
            }
            console.log(x);
            break;
    
        case '4'://梯形
            var hollow =  await input("请选择是否空心(y/n):");
            var height = await input("请设置梯形的高:") 
            for(var i=0;i<height;i++){
                for(var j=0;j<height-i;j++){
                    x+=" ";  
                }
                for(var k=0;k<2*i+7;k++){
                    if(hollow == 'y'){
                        if(i>0&&i<height-1&&k>0&&k<2*i+6){
                            x+=" ";
                        }else{
                            x+=`${content}`;
                        }
                    }else{
                        x+=`${content}`;
                    }
                }
                    x+="\n";
            }
            console.log(x);
            break;

        case '5'://回字
        var height = await input("请设置回字的边长:") 
        for(var i = 0; i < height; i++){

            for(var j = 0; j < height; j++){
                if(i>0&&i<height-1&&j>0&&j<height-1){
                    if(i>2&&i<height-3&&j>2&&j<height-3){
                        if (i>=4&&i<=height-5&&j>=4&&j<=height-5) {
                            x+="  ";
                        }else{
                            x+=`${content} `
                        }                       
                    }else{
                        x+='  ';
                    }
                }else{
                    x+=`${content} `;
                }                
            }
            x+='\n';
        }
            console.log(x);
            break;
        default:
            break;
}

})()

