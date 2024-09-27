CREATE SCHEMA IF Not exists weer;
USE weer ;
create table IF not exists weersomstandighedenPerDaG
(
idWeersomstandighedenPerDag INT unsigned NOT NULL auto_increment unique primary key,
datum DATE NOT NULL ,
aantalGraden DECIMAL NOT NULL,
Windkracht INT unsigned NOT NULL ,
RegenInMilimeters DECIMAL NOT NULL,
Plaats VARCHAR(120) NOT NULL

);