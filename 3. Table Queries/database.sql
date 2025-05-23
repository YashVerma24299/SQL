create table user (
	id int primary key, 
    age int,
    namee varchar(30) not null,
    email varchar(50) unique,
    followers int default 0,
    following int default 0,
    constraint age check (age>=18)
);

create table post(
	id int,
    content varchar(50),
    user_id int,
    primary key (id),
    foreign key (user_id) references user(id)
);

-- Check Reverse Engineering after join both table

insert into user (id, age, namee, email, followers, following) 
VALUES (1, 25, 'Alice', 'alice@example.com', 100, 50),
(2, 30, 'Bob', 'bob@example.com', DEFAULT, DEFAULT),
(3, 40, 'Charlie', 'charlie@example.com', 200, 150);

insert into user (id, age, namee, following) 
VALUES (4, 35, 'caesy', DEFAULT);

insert into user (id, age, namee) 
VALUES (5, 19, 'Yash');

insert into user (id, age, namee) 
VALUES
(6, 19, 'Yash'),
(7, 19, 'Yash'),
(8, 19, 'Yash'),
(9, 19, 'Yash');

select * from user;
select id, namee, email from user;
select distinct age from user;