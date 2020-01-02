#include <stdio.h>
#include<stdlib.h>
#include"sqlite3.h"


int callback(void *para, int col_count, char **col_value, char **col_name) {
            for (int i = 1; i < col_count; i++) {
            printf("%s: %s \n", col_name[i], col_value[i]);
      }
	    return 0;
}
int show();
//gcc hello2.c -o hellocgi.cgi
int main(){
    printf("Content-Type:text/html\n\n");
    // printf("<h1>Hello CGI</h1>");
    char *header ="<!doctype html>"\
                                  "<html>"\
                                  "<head>"\
                                  "<meta name='viewport' content='width=device-width'"\
                                  "<meta charset='UTF-8'>"\
                                  "<title>修仙会员管理中心</title>"\
                                  "</head>"\
                                  "<body>";
    printf("%s\n",header);
    printf("<style>"\
                 ".title{color:red;}"\
                 "a{color:#333;text-decoration:none;}"\
                 "a:hover{color:green;}"
                 "</style>");
    //  printf("<a href='https://www.baidu.com'>百度</a>");
    printf("<div style = 'line-height:40px;color:#fff;background-color:skyblue;text-align:center;'>修仙会员</div>");

    sqlite3 *db = NULL;
    int res = sqlite3_open("cms.db",&db);
    if(res!= 0){
        printf("open db fail\n");
        return -1;
    }

    show(db);
    sqlite3_close(db);
    printf("</body></html>");
    return 0;
}

 int show(sqlite3 *db){
           // printf("<ul>");
	   char *id = getenv("QUERY_STRING");

            char sql[100];
            char *err;

	    sprintf(sql,"select * from news where id = %d",atoi(id));

            if(0 != sqlite3_exec(db,sql,callback,NULL,&err)){
                printf("%s\n",err);
                exit(-1);
            }
           // printf("</ul>");
            return 0;
        }
