#include <stdio.h>
#include <stdlib.h>
#include "sqlite3.h"

typedef struct{
    char *name;
    char *age;
    char *sex;
}news;


int insert(sqlite3 *db,news n)
{
    char *err;
    char  sql[200];

    sprintf(sql,"INSERT INTO news (name,age,sex) VALUES ('%s','%s','%s')",n.name,n.age,n.sex);

    if(0!= sqlite3_exec(db,sql,NULL,NULL,&err))
    {
        printf("\t%s\n",err);
        exit(-1);
    }
    return 0;
}



int callback(void *para, int col_count, char **col_value, char **col_name)
{

    for (int i = 0; i < col_count; i++) {
        printf("%s: %s \n", col_name[i], col_value[i]);
    }

//    printf("%s: %s \n", col_name[1], col_value[2]);

    printf("\t---------------------------------------------\n");

    return 0;
}



int show(sqlite3 *db)
{
    char *err;
    char sql[100];
    sprintf(sql, "\t\tSELECT * FROM news");
    if(0!= sqlite3_exec(db,sql,callback,NULL,&err))
    {
        printf("\t\t%s\n",err);
        exit(-1);
    }
    return 0;
}




int del(sqlite3 *db, int x)
{
    char *err;
    char sql[100];

    sprintf(sql, "DELETE FROM news WHERE id='%d'",x);

    if (0 != sqlite3_exec(db, sql, callback, NULL, &err))
    {
        printf("%s\n", err);
        exit(-1);
    }
    return 0;
}

int modify(sqlite3*db,news n,int x)
{
    char *err;
    char sql[100];
    sprintf(sql,"UPDATE news SET name='%s',age='%s',sex='%s' WHERE id='%d'",n.name,n.age,n.sex,x);
    if(0 !=sqlite3_exec(db, sql, callback, NULL, &err))
    {
        printf("%s\n",err);
        exit(-1);
    }
    return 0;
}

int main()
{
  sqlite3 *db = NULL;
  int flag =1;
  int x;
  int res = sqlite3_open("cms.db", &db);
    if (res != 0)
    {
        printf("open db fail\n");
        return -1;
    }

    while(flag)
    {
        int y;
        printf("-----------[欢迎来到修仙会员管理系统]-------------\n");
        printf("\t\t1:新增会员\n");
        printf("\t\t2:删除会员\n");
        printf("\t\t3:修改会员\n");
        printf("\t\t4:查询会员\n");
        printf("\t\t5:退出系统\n");
        printf("------------------------------------------------------------\n");
        printf("请输入1~5来进行下一步:\n");
        scanf("%d",&y);
        switch (y)
        {
        case 1:{
            news n;
				printf("\t\t请输入您的姓名：");
				n.name=malloc(sizeof(char));
				n.age=malloc(sizeof(char));
				n.sex=malloc(sizeof(char));

				scanf("%s",n.name);
				printf("\t\t请输入您的年龄：");
				scanf("%s",n.age);
				printf("\t\t请输入你的性别：");
				scanf("%s",n.sex);
			//	printf("%s",new->title);
				insert(db,n);
        };
            break;
        case 2:show(db); 
			       printf("\t\t输入要删除的会员：\n");
			       scanf("\t%d",&x);
			       del(db,x);
            break;
        case 3: {
			       news n;
			       show(db);
			       printf("\t\t输入要修改的会员id:\t\t\n");
                               scanf("%d",&x);
                               printf("\t\t输入修改后的姓名:\t\t\n");
                               n.name=malloc(sizeof(char));
                               n.age=malloc(sizeof(char));
                               n.sex=malloc(sizeof(char));
                               scanf("%s",n.name);
                               printf("\t\t输入修改后的年龄:\t\t\n");
                               scanf("\t\t%s",n.age);
                               printf("\t\t输入修改后的性别:\t\t\n");
                               scanf("\t\t%s",n.sex);
			       modify(db,n,x);
			       };
            break;
        case 4:
            show(db);
            break;
        case 5:
            flag=0;
            break;
        default:
            break;
        }
    }
 
    sqlite3_close(db);
    return 0;
}
