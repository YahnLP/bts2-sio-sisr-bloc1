# (terme, sigle ou None, anglais ou "", définition simple, séance de première apparition)
# Source unique : scripts/gen_glossaire.py produit docs/ressources/glossaire.md et includes/abbr.md
DATA = [
# --- Gérer un projet (S01 à S05)
("Partie prenante", None, "stakeholder", "Personne ou groupe qui est concerné par le projet ou peut l'influencer : commanditaire, utilisateurs, direction, prestataire.", "S01"),
("Périmètre", None, "scope", "Ce qui est inclus dans le projet, et ce qui n'y est pas.", "S01"),
("Jalon", None, "milestone", "Date clé d'un projet où l'on vérifie qu'un résultat est atteint.", "S02"),
("Découpage du projet", "WBS", "work breakdown structure", "Découpage du projet en lots puis en tâches de plus en plus fines.", "S02"),
("Diagramme de Gantt", None, "Gantt chart", "Tableau où chaque tâche est une barre placée dans le temps.", "S02"),
("Chemin critique", None, "critical path", "Suite de tâches qui détermine la durée minimale du projet : tout retard dessus retarde le projet.", "S02"),
("Marge", None, "float, slack", "Retard qu'une tâche peut prendre sans retarder le projet.", "S02"),
("Approche prédictive", None, "predictive approach", "On planifie tout au départ, puis on suit le plan (cycle en V, cascade).", "S02"),
("Approche agile", None, "agile approach", "On avance par petites livraisons successives et on s'adapte aux retours.", "S03"),
("Sprint", None, "sprint", "Période courte et fixe (une à quatre semaines) à la fin de laquelle on livre un résultat utilisable.", "S03"),
("Carnet de produit", None, "product backlog", "Liste ordonnée de tout ce qu'on veut dans le produit.", "S03"),
("Récit utilisateur", None, "user story", "Une exigence écrite du point de vue de l'utilisateur : « En tant que…, je veux… afin de… ».", "S03"),
("Vélocité", None, "velocity", "Quantité de travail qu'une équipe termine en moyenne par sprint.", "S03"),
("Recette", None, "acceptance", "Vérification, avec le client, que la livraison répond aux exigences prévues.", "S05"),
("Conduite du changement", None, "change management", "Ensemble des actions (communication, formation, accompagnement) qui aident les utilisateurs à adopter une nouveauté.", "S05"),
]
