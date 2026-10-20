# Aide-mémoire – Git au quotidien

*BTS SIO SISR 2e année – Bloc 1 – S10*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Cycle

`git status` · `git diff` · `git add fichier` · `git commit -m "message"` · `git log --oneline --graph --all`.

## Branches

`git switch -c nom` · `git switch nom` · `git merge nom` (`--no-ff` pour garder la trace) · **une branche par demande**.

## Conflit

Chercher `<<<<<<<` · choisir ou combiner · **supprimer les marqueurs** · tester · `git add` · commit.

## Distant

`git clone` · `git pull` · `git push` · push refusé ⇒ `pull`, résoudre, `push`.

## Versions et retour arrière

`git tag v1.1` · `git revert commit` (annule sans réécrire l'historique).

## Réflexes

`main` toujours stable · tests avant fusion · message de commit utile · **pas de secret** dans le dépôt (`.gitignore`).
