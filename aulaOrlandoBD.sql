CREATE SCHEMA exec;
use exec;
create TABLE atores(
  idator INT NOT NULL PRIMARY KEY,
  nome varchar(30),
  ano int,
  idioma varchar(10),
  sobrenome varchar(40)
);
CREATE TABLE pais(
  idpais int not NULL PRIMARY KEY,
  pais varchar(30)
);
create atorpais(
  atorid,
  paisid int,
  PRIMARY KEY(atorid, paisid),
  CONSTRAINT fkatorid FOREIGN KEY(atorid) references atores(idator) on delete cascade on update cascade,
  CONSTRAINT fkpaisid FOREIGN KEY(paisid) references paid(idpais) on delete CASCADE on UPDATE CASCADE
);


INSERT INTO pais VALUES (1,'Brasil'),
(2, 'EUA'),(3,'Mexico'),(4,"França"),
(5,'Cuba')

-- Trigger

CREATE TRIGGER tradd after INSERT on atores for EACH row 
inser into atorpais values(new.idator,1);

-- Drop trigger trmod;
UPDATE atorpais SET paisid = 2 WHERE atorpais.atorid = new.idator;
CREATE TRIGGER trmod after UPDATE ON atores FOR EACH ROW 

-- Insert
INSERT INTO atores values (1,"Gabriel",2003,"Portugues","Matos"),
(2,"junin",2003,"italiano","silva"),
(3,"teresa",2003,"Portugues","Matos"),
(1,"rafael",2003,"Portugues","oliveira");


-- View
