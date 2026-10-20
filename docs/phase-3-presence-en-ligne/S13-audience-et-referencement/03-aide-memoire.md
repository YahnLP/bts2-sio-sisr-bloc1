# Aide-mémoire – Journaux et référencement

*BTS SIO SISR 2e année – Bloc 1 – S13*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Champs d'une ligne (format combiné)

`$1` IP · `$4` date · `$6` méthode · `$7` ressource · `$9` code · `$10` octets.

## Commandes utiles

```bash
wc -l access.log
awk '{print $1}' access.log | sort -u | wc -l
awk '{print substr($9,1,1)}' access.log | sort | uniq -c
awk '$9==404{print $7}' access.log | sort | uniq -c | sort -rn
grep -v -e Robot-Exemple access.log
```

## Codes

200 succès · 304 cache · 301/302 redirection · 400 requête invalide · 404 introuvable · 409 conflit · 500 erreur serveur (**à traiter**).

## Pièges

IP ≠ personne · visiteurs quotidiens **non additifs** · retirer robots et scanners avant de compter · `robots.txt` **n'est pas** une protection.

## Référencement

Titre unique · description utile · un `h1` · URL lisibles · `sitemap.xml` (`xmllint --noout`) · liens explicites.
