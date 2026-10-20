SET NAMES utf8mb4;
CREATE DATABASE IF NOT EXISTS portail CHARACTER SET utf8mb4;
USE portail;

CREATE TABLE salles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(60) NOT NULL UNIQUE,
  capacite INT NOT NULL CHECK (capacite > 0)
);

CREATE TABLE reservations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  salle_id INT NOT NULL,
  association VARCHAR(80) NOT NULL,
  courriel VARCHAR(120) NOT NULL,
  jour DATE NOT NULL,
  debut TIME NOT NULL,
  fin TIME NOT NULL,
  CHECK (fin > debut),
  FOREIGN KEY (salle_id) REFERENCES salles(id)
);

INSERT INTO salles (nom, capacite) VALUES
  ('Salle des fêtes', 200), ('Salle du conseil', 40), ('Salle des associations A', 25),
  ('Salle des associations B', 15), ('Gymnase', 120), ('Salle d''exposition', 60);

INSERT INTO reservations (salle_id, association, courriel, jour, debut, fin) VALUES
  (1, 'Club photo', 'club.photo@example.org', '2030-03-15', '09:00', '11:00'),
  (1, 'Chorale', 'chorale@example.org', '2030-03-15', '14:00', '15:30'),
  (2, 'Comité des fêtes', 'comite@example.org', '2030-03-15', '18:00', '20:00'),
  (5, 'Basket', 'basket@example.org', '2030-03-16', '10:00', '12:00');
