-- where
select * from user where followers>=200;

-- In Specific range (Between)
select * from user where age between 16  and 24;


-- Particular value yhi ho (In)
select * from user where email in ("abc@gmail.com","xyz@gmail.com", "alice@example.com") ;
select * from user where age in(25, 35, 17) ;

-- Limit 
select * from user  limit 2 ;
select * from user  limit 4 ;
select * from user where age>15 limit 6 ;

-- order by
select * from user;
select * from user order by age asc;
select * from user order by age desc;
select * from user order by age;

--Aggregate Function
select max(age) from user;
select count(age) from user where age=19;
select avg(age) from user;
select sum(followers + following) from user;

--Group By
select age from user group by age;
select age, count(id) from user group by age;
select age, max(id) from user group by age;

--Having clause
select age, count(id) from user group by age having age>30;
select age, count(id) from user group by age having count(id)>2;

--Updation
update user set  followers =500 where age=19;

--Delete
delete from user where age=19;

--ALTER
select * from user;
alter table user add column city varchar(20) default "mumbai";
select * from user;
alter table user drop column following;
select * from user;
alter table user rename instauser;
select * from instauser;