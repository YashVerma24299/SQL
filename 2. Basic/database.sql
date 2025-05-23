Create database college;
use college;
create table student (
	roll_no int,
    namee varchar(30),
    age int
);
Insert into student
values
(101, "Adam", 12),
(102, "Bob", 13),
(103, "Alice", 43);

select * from student;