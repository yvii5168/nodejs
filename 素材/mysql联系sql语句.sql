-- 通过*把users中所有的数据查询出来 
select * from users;users
-- 从users表中，将username和password对应的数据查询出来
-- select username, password from users; 
-- 想users表中，插入新数据，username:tony stark, password: 098123
insert into users(username, password) values('tony stark', '098123');
-- 更新id为2的数据，用户密码更改为：admin123，用户状态为：1
update users set password='admin123', status='1' where id=2; 
delete from users where id=4;

-- 演示where子句
select * from users where status=1;
select * from users where id >=2;
select * from users where username <> 'zs';
select * from users where username != 'zs';
select * from users where status = 0 and id < 3;
select * from users where status =1 or username = 'ZS';
select * from users order by status ASC;
select * from users order by id DESC;
select * from users order by status desc, username asc;
select count(*) from users where status=0;
select count(*) as total from users where status=0;
select username as uname, password as upwd from users where status=0;