# Cours – Planifier un projet : découpage, durées, chemin critique

*BTS SIO SISR 2e année – Bloc 1 – S02*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

Dans l'**approche prédictive**, on planifie l'ensemble du projet **au départ** (étapes, durées, ressources, dates), puis on suit le plan et on mesure les écarts. Elle convient quand le besoin est **stable** et bien connu : migration d'un serveur, déploiement d'un parc, projet à date de fin imposée.

---

## 1. Découper : le WBS

Le **découpage** (WBS) range le travail en **lots**, puis en **tâches** assez petites pour être estimées et confiées à une personne. Règle : un lot = un **livrable**.

| Lot | Tâches |
|---|---|
| Cadrage | Recueillir les besoins ; rédiger le cahier des charges |
| Choix de la solution | Comparer les solutions ; décider |
| Mise en place | Installer le serveur de test ; paramétrer ; importer les données |
| Mise en service | Tester ; documenter ; former ; basculer |

## 2. Estimer les durées

On estime la durée d'une tâche, pas la date. Une méthode simple donne trois valeurs : **optimiste** (O), **la plus probable** (M), **pessimiste** (P).

*Durée estimée = (O + 4 × M + P) / 6*

**Exemple.** Comparer les solutions : O = 3 jours, M = 5, P = 10. Durée = (3 + 20 + 10) / 6 = 33 / 6 = **5,5 jours**. La valeur est plus haute que M, parce que le pire cas est plus éloigné que le meilleur.

> [!NOTE]
> Une estimation est une **hypothèse**, pas une promesse. On la note avec sa source (expérience, comparaison, avis du prestataire) et on la corrige en cours de projet.

## 3. Dépendances

Une tâche peut commencer quand ses **prédécesseurs** sont terminées (dépendance « fin à début »). Les tâches **sans dépendance entre elles** peuvent se dérouler **en parallèle**, si des personnes sont disponibles.

---

## 4. Le chemin critique

Le **chemin critique** est la suite de tâches qui donne la **durée minimale** du projet. Pour le trouver :

1. **Passe aller** : pour chaque tâche, **début au plus tôt** (DT) = le plus grand des **fins au plus tôt** (FT) de ses prédécesseurs ; FT = DT + durée.
2. **Durée du projet** = plus grande FT.
3. **Passe retour** : en partant de la fin, **fin au plus tard** (FTa) = le plus petit des **débuts au plus tard** (DTa) de ses successeurs ; DTa = FTa − durée.
4. **Marge** = DTa − DT. Les tâches de **marge nulle** forment le chemin critique.

| Tâche | Durée | Prédécesseur | DT | FT | DTa | FTa | Marge |
|---|---:|---|---:|---:|---:|---:|---:|
| X | 2 | – | 0 | 2 | 0 | 2 | 0 |
| Y | 3 | X | 2 | 5 | 2 | 5 | 0 |
| Z | 1 | X | 2 | 3 | 4 | 5 | 2 |
| W | 2 | Y, Z | 5 | 7 | 5 | 7 | 0 |

Durée du projet : 7 jours. Chemin critique : X, Y, W. La tâche Z peut prendre **2 jours de retard** sans effet.

**Je vérifie.** Dans l'exemple, Y prend 2 jours de plus. Quelle est la nouvelle durée du projet ? Et si c'est Z qui prend 2 jours de plus ?

<details markdown="1">
<summary>Voir la réponse</summary>

Y est critique : le projet passe à **9 jours**. Z a une marge de 2 jours : un retard de 2 jours ne change rien (**7 jours**) ; un retard de 3 jours ferait passer le projet à 8.
</details>

## 5. Le diagramme de Gantt

Le **diagramme de Gantt** représente chaque tâche par une **barre** placée sur une échelle de temps ; les flèches montrent les dépendances ; les **jalons** (losanges) marquent les dates clés (validation du cahier des charges, recette, mise en production). On y repère d'un coup d'œil le chemin critique, le parallélisme et la charge.

## 6. Durée, charge, ressources

La **durée** (jours calendaires ou ouvrés) n'est pas la **charge** (jours de travail cumulés). Deux personnes peuvent diviser la durée d'une tâche **divisible**, mais pas toujours : neuf femmes ne font pas un enfant en un mois. Une **ressource** (une personne, une machine) ne peut pas faire deux tâches en même temps : un planning correct sur le papier peut être **irréalisable** si la même personne doit tenir deux tâches parallèles.

## 7. Suivre et corriger

On compare **prévu et réel** à chaque point d'étape : avancement des tâches, retard sur le chemin critique, consommation du budget. Pour rattraper un retard sur le chemin critique : **raccourcir** une tâche (ressource supplémentaire, moins de périmètre), **paralléliser**, ou **décaler** la fin en le faisant valider par le commanditaire.

## Ce que tu dois retenir de la séance

- Découper en **lots et tâches** ; estimer avec trois valeurs : **(O + 4M + P) / 6**.
- **Chemin critique** : passe aller, passe retour, **marge** nulle ; un retard sur le chemin critique **retarde le projet**, pas sur une tâche à marge.
- **Gantt** : barres, dépendances, jalons.
- Durée ≠ charge ; une ressource ne fait pas deux tâches à la fois.
- On **suit** l'écart et on décide : raccourcir, paralléliser ou décaler.
