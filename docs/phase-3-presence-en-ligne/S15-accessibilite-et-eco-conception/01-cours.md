# Cours – Accessibilité et éco-conception

*BTS SIO SISR 2e année – Bloc 1 – S15*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

Un portail public doit être **utilisable par tous** et **raisonnable** dans sa consommation de ressources. Ces deux exigences se rejoignent : une page propre, structurée et légère est aussi une page accessible.

> [!WARNING]
> **Cadre légal à vérifier.** Les obligations d'accessibilité des services publics en ligne, le contenu de la déclaration d'accessibilité et les sanctions sont fixés par des textes qui évoluent. **Vérifie** sur Légifrance et sur le site officiel de l'accessibilité numérique avant de citer un détail. Ce cours donne la démarche, pas un avis juridique.

---

## 1. L'accessibilité numérique

L'**accessibilité** est la capacité d'un site à être utilisé par **le plus grand nombre de personnes**, quelles que soient leurs capacités ou leurs conditions : déficience visuelle, auditive, motrice, cognitive, mais aussi bras cassé, soleil sur l'écran, connexion lente, vieux téléphone.

Le référentiel français est le **RGAA** (référentiel général d'amélioration de l'accessibilité), qui s'appuie sur les règles internationales **WCAG**. Les services en ligne des administrations y sont soumis (**à vérifier** : périmètre et échéances) et doivent publier une **déclaration d'accessibilité** indiquant leur état de conformité, les contenus non accessibles et la manière de signaler un défaut.

**Quatre principes** (WCAG) :

| Principe | Question | Exemple d'exigence |
|---|---|---|
| **Perceptible** | Chacun peut-il voir, entendre, lire ? | Texte alternatif des images, **contraste**, sous-titres |
| **Utilisable** | Chacun peut-il agir ? | **Tout au clavier**, focus visible, pas de piège |
| **Compréhensible** | Chacun comprend-il ? | **Langue** déclarée, étiquettes claires, messages d'erreur explicites |
| **Robuste** | Les outils d'assistance fonctionnent-ils ? | HTML valide et **sémantique**, composants natifs |

## 2. Les critères courants

| Critère | Comment le respecter | Défaut fréquent |
|---|---|---|
| **Langue** | `<html lang="fr">` | Absente : le lecteur d'écran prononce mal |
| **Alternative textuelle** | `<img alt="…">` utile ; `alt=""` pour une image décorative | Attribut manquant |
| **Contraste** | Texte courant : au moins **4,5:1** ; grand texte et composants d'interface : au moins 3:1 | Gris clair sur blanc |
| **Clavier** | Tout se fait avec Tab, Entrée, Espace ; **focus visible** | `<div onclick>` à la place de `<button>` |
| **Étiquettes** | `<label for="id">` associé à chaque champ | Texte indicatif (*placeholder*) seul |
| **Titres** | Un `h1`, niveaux sans saut | `h1` puis `h4` |
| **Liens** | Intitulé explicite hors contexte | « Cliquez ici », « En savoir plus » |
| **Information par la couleur seule** | Doubler la couleur par un texte ou un symbole | Erreur signalée seulement en rouge |
| **Zoom** | Lisible à 200 %, sans perte de contenu | Texte en pixels fixes qui déborde |

**Le rapport de contraste** se calcule avec la **luminance relative** de chaque couleur : rapport = (L1 + 0,05) / (L2 + 0,05), L1 étant la plus claire. Du gris `#999999` sur blanc donne environ **2,85:1** : insuffisant. Les **composants natifs** (`button`, `a`, `input`, `label`) fournissent le clavier et l'accessibilité **gratuitement** ; les remplacer par des `div` oblige à tout refaire.

## 3. Auditer : automatique et manuel

| Type | Contenu | Limite |
|---|---|---|
| **Automatique** | Outil qui repère les défauts techniques simples (attribut manquant, étiquette absente, saut de titre) | Ne voit qu'une **partie** des défauts ; ne juge pas la pertinence d'un texte alternatif ni le contraste de tout contexte |
| **Manuel** | Navigation **au clavier** seul, zoom 200 %, test avec un **lecteur d'écran**, relecture du sens | Plus long, indispensable |

Un audit complet suit la **grille du RGAA** : critères et tests, page par page, sur un **échantillon représentatif**. Il produit un **taux de conformité** et une **déclaration d'accessibilité**. On ne **déclare** pas une conformité qu'on n'a pas mesurée.

**Démarche d'amélioration :** 1) auditer, 2) classer les défauts par gravité et par effort, 3) corriger d'abord ce qui bloque (clavier, formulaires, contraste), 4) intégrer l'accessibilité aux **nouveaux développements**, 5) republier la déclaration.

## 4. L'éco-conception de service numérique

Le numérique a un **impact environnemental** (fabrication et fin de vie des équipements, consommation des réseaux et des centres de données). On ne le réduit pas avec des « gestes » isolés : on **conçoit sobre** dès le départ. La part de l'impact due à la **fabrication des terminaux** est généralement la plus importante (chiffres à citer avec leur source, par exemple les études de l'ADEME et de l'Arcep).

Le **RGESN** (référentiel général d'écoconception de services numériques, édition 2024) propose des critères répartis en **neuf familles** :

| Famille | Idée | Application au portail |
|---|---|---|
| **Stratégie** | Ne créer que ce qui répond à un vrai besoin | Un portail utile et suivi, pas de fonction décorative |
| **Spécifications** | Définir des exigences sobres | Objectif de poids de page écrit dans le cahier des charges |
| **Architecture** | Choisir une architecture adaptée | Site statique + petite base, pas d'application lourde |
| **UX/UI** | Interfaces simples, sans effet superflu | Pas d'animation inutile, pas de lecture automatique |
| **Contenus** | Contenus légers et utiles | Images dimensionnées, formats modernes, pas de vidéo en fond |
| **Frontend** | Peu de code et de requêtes | Pas de bibliothèque entière pour un menu ; compression |
| **Backend** | Traitement efficace | Requêtes SQL limitées, **cache** |
| **Hébergement** | Hébergement sobre et mesuré | Localisation, offre adaptée (S11) |
| **Algorithmie** | Calculs proportionnés | Pas de traitement lourd inutile |

(**À vérifier** : liste et numérotation des critères sur le site officiel du référentiel.) Le référentiel s'utilise avec une **auto-évaluation** et une **déclaration d'éco-conception**.

**Leviers concrets pour une page web :**

- **Peser** : mesurer les octets transférés ; fixer un **budget** (par exemple, moins de 500 Ko par page : ordre de grandeur de travail, pas une norme).
- **Compresser** les réponses (gzip, Brotli) : le texte se comprime très bien.
- **Réduire le nombre de requêtes** (fichiers regroupés, polices système, pas de script tiers inutile).
- **Mettre en cache** : un navigateur qui reçoit `304` ne retélécharge pas. Dans le journal de S13, 165 requêtes sur 954 (17,3 %) ont reçu cette réponse.
- **Optimiser les images** (dimensions, format, chargement différé) : c'est souvent le premier poste de poids.
- **Éviter** le tiers inutile : chaque script externe ajoute poids, requêtes et traceurs.

> [!NOTE]
> **Accessibilité et sobriété vont de pair.** Un site léger se charge sur un vieux téléphone et une connexion faible ; un HTML sémantique est plus petit et mieux compris des outils d'assistance. Mais les deux peuvent diverger : ne **supprime** jamais un texte alternatif, un sous-titre ou un contraste pour gagner quelques octets.

**Je vérifie.** Une agente propose une vidéo d'ambiance en plein écran en fond de la page d'accueil. Quels critères d'accessibilité et d'éco-conception sont en jeu ?

<details markdown="1">
<summary>Voir la réponse</summary>

**Éco-conception** : poids élevé, lecture automatique, consommation inutile (stratégie, UX/UI, contenus). **Accessibilité** : mouvement qui gêne la lecture, texte difficile à lire sur l'image (contraste), absence de contrôle de l'utilisateur pour arrêter. Solution : image fixe légère, ou vidéo à lancer volontairement, sous-titrée.
</details>

## Ce que tu dois retenir de la séance

- **Quatre principes** : perceptible, utilisable, compréhensible, robuste ; **RGAA** = cadre français (**à vérifier** pour les obligations).
- Réflexes : `lang`, `alt`, **contraste ≥ 4,5:1**, **clavier**, `label`, titres sans saut, liens explicites, composants natifs.
- Un audit **automatique est partiel** ; on complète au clavier, au zoom et avec un lecteur d'écran.
- **Éco-conception** : sobriété d'abord ; mesurer le poids, **compresser**, **cache**, images, peu de tiers ; **RGESN** en neuf familles.
- **Ne pas déclarer** une conformité non mesurée.
