SET NAMES UTF8;
DROP DATABASE IF EXISTS car;
CREATE DATABASE car CHARSET=UTF8;
USE car;
CREATE TABLE goods(
	dno INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(32),
	price VARCHAR(32),
	img VARCHAR(32)
);
INSERT INTO goods VALUES(null,'iPhone SE','3160','../img/iphone_07.jpg');
INSERT INTO goods VALUES(null,'iphone 6s','4800','../img/iphone_05.jpg');
INSERT INTO goods VALUES(null,'iPhone6 Plus','4590','../img/iphone_09.jpg');
INSERT INTO goods VALUES(null,'iphone 5s','2080','../img/iphone_03.jpg');
INSERT INTO goods VALUES(null,'MacBook Pro','9288','../img/mac_05.jpg');
INSERT INTO goods VALUES(null,'MacBook Air','7800','../img/mac_07.jpg');
INSERT INTO goods VALUES(null,'iMac','9999','../img/mac_09.jpg');