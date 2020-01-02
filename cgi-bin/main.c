#include <stdio.h>
#include<stdlib.h>
#include"sqlite3.h"


int callback(void *para, int col_count, char **col_value, char **col_name) {
	 //   for (int i = 0; i < col_count; i++) {
        printf("<li style='list-style:none;'><a style='text-decoration:none' href='hello2.cgi?%s'>%s</a></li>",col_value[0],col_value[1]);
   // }
    return 0;
}
int show();
//gcc hellocgi.c -o hellocgi.cgi
int main() {
	
    printf("Content-Type: text/html\n\n");

    char *header="<!doctype html>"\
                 "<html>"\
                 "<head>"\
                 "<meta charset='UTF-8'>"\
                 "<title>修仙会员管理中心</title>"
                 "</head>"\
                 "<body>";
    printf("%s\n",header);
    printf("<style>"\
                    ".title{color:red}"\
                    "a{color:#333;}"\
                    "ul{margin:0px;padding:0px;}"\
                    "li{text-align:center;line-height:40px;background-color:lightgreen;}"\
                    "</style>");
    printf("<div style = 'line-height:40px;color:#fff;background-color:skyblue;text-align:center;'>修仙会员</div>");      
    printf("<p style = 'line-height:40px;color:#fff;background-color:skyblue;text-align:center;'>请选择您想要操作的对象：</p>");
       
    

                 
    sqlite3 *db = NULL;
    int res = sqlite3_open("cms.db",&db);
    if(res !=0){
        printf("open db fail\n");
        return -1;
        }
        show(db);
        sqlite3_close(db);
        printf("</body></html>");


    return 0;
}

//    int callback(void *para, int col_count, char **col_value, char **col_name) {
 //      printf("<li><a href='detail.cgi?%s'>%s</a><li>\n",col_value[0],col_value[1]);
   //     return 0;
//}

        int show(sqlite3 *db){
            printf("<ul>");

            char *sql = "SELECT * FROM news";
            char *err;

            if(0 != sqlite3_exec(db,sql,callback,NULL,&err)){
                printf("%s\n",err);
                exit(-1);
            }
            printf("</ul>");
            return 3;
        }






