#include <stdio.h>
#include <stdlib.h>


typedef struct {
  int id;
  char *name;
  int age;
  char sex;
}Vips;

Vips add()
{
    Vips u;
    u.name = malloc(sizeof(char));
    printf("请输入您的名字: ");
    scanf("%s",u.name);
    printf("请输出您的年龄:");    
    scanf("%d",&u.age);
    printf("请输出您的性别:");
    scanf("%s",&u.sex);
    printf("新增成功\n");
    return u;
}


int menu()
{
  printf("-----------[欢迎来到修仙会员管理系统]-------------\n");
  printf("\t\t0:新增会员\n");
  printf("\t\t1:删除会员\n");
  printf("\t\t2:修改会员\n");
  printf("\t\t3:查询会员\n");
  printf("\t\t4:退出系统\n");
  printf("--------------------------------------------------\n");
  printf("请输入0~4来进行下一步:\n");

}

void del(int count,Vips user[])
{
     int x,i;
    printf("请您输入需要删除的用户编号：");
    scanf("%d",&x);
    for( i = 0; i < count;i++){
        if(user[i].id == x){
            user[i]  = user[i+1];
                        
        }
    }
}

void change(int count,Vips user[])
{
    int j;
    printf("请您输入需要修改的ID: ");
    scanf("%d",&j);
    for(int i = 0;i<count;i++){
        if(user[i].id==j){
            printf("请输入您的姓名：");
            scanf("%s",user[i].name);
            printf("请输入您的年龄：");
            scanf("%d",&user[i].age);
            printf("请输入您的性别：");
            scanf("%s",&user[i].sex);
            printf("修改成功\n");
        }

    }
}

void check(int count,Vips user[])
{
    for(int a=0;a<count;a++){
        if(user[a].id!=0){
         printf("id:%d 姓名:%s 年龄:%d 性别%d \n",user[a].id,user[a].name,user[a].age,user[a].sex);  
        }
    }
}


 int main(){
     int falg = 1;
     int i;
     int count = 0;
     Vips a;
     Vips user[1000];
     while(falg){
        menu();
        scanf("%d",&i);
        switch(i){
            case 0:
               a = add();
                user[count].id = count+1;
                user[count].name = a.name;
                user[count].age = a.age;
                user[count].sex = a.sex;
                count++;
                break;
            case 1:
                del(count,user);
                break;
            case 2:
                change(count,user);
                break;
             case 3:
                chack(count,user);
                break;
            case 4:
                exit(0);
            default:
                break;

        }
     }
 }
 



