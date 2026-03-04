---
title: "Recherche juridique & IA dans le service public"
subtitle: "Session de cartographie collective"
author: "Elsa Le Duigou"
role: "ALLiaNCE"
organization: "Direction interministérielle du numérique"
date: "2026"
---

# Le constat

## Un besoin qui remonte de partout, sans réponse coordonnée

La recherche juridique est un besoin transversal au service public, qui remonte de façon récurrente dans des contextes très différents.

- **Magistrats** : besoin d'accès rapide à la jurisprudence et à la doctrine pour instruire et rédiger
- **DAJ ministérielles** : veille juridique, interprétation de textes, rédaction d'avis
- **Agents en contact avec le droit** : droit du travail, commande publique, droit public général

:::callout[Plusieurs initiatives en cours]
Mon Assistant Pénal, Jacepair (Conseil d'État), outils DILA sur Legifrance, renseignement en droit du travail aux ministères sociaux — des projets qui avancent en parallèle, sans coordination.
:::

> Risque : fragmentation des efforts, doublons, inégalité d'accès selon les institutions et ordres juridictionnels.

# La cartographie

## Deux niveaux de besoin, des réponses distinctes

| | Niveau 1 | Niveau 2 |
|---|---|---|
| **Cible** | Tous agents publics | Magistrats, juristes, DAJ |
| **Besoin** | Accéder aux textes en vigueur | Interpréter, accéder à la doctrine et aux décisions |
| **Sources** | Legifrance, Judilibre, ArianeWeb (publiques) | Bases doctrinales privées (Dalloz, Lexis…) + bases internes (Jurica, Ariane) |
| **Solution envisagée** | RAG interministériel — inférence Albert API, actualisation DILA | RAG facile sur bases internes + marché IA juridique porté par la DAE |
| **Portage** | DINUM + DILA + ALLiaNCE | Ministère de la Justice + Conseil d'État, avec accompagnement ALLiaNCE |

:::alert[info]
Les sources de niveau 2 sont souvent propriétaires et varient selon la spécialité juridique. Les décisions de justice ne sont pas toutes publiques — elles appartiennent aux juridictions.
:::

# Les entités associées

## Un travail collectif inter-institutionnel

Cette démarche réunit quatre entités aux mandats complémentaires :

- **Ministère de la Justice** : portage politique et opérationnel pour l'ordre judiciaire (~25 000 personnes), accès aux bases internes (Jurica)
- **Conseil d'État** : portage pour l'ordre administratif (~3 000 personnes), accès à Ariane et ArianeWeb
- **DILA** : opérateur des données Legifrance, mandat de rediffusion, actualisation du moteur RAG
- **DINUM** : infrastructure d'inférence via Albert API, coordination interministérielle via ALLiaNCE

:::callout[Principe de subsidiarité]
Chaque entité reste souveraine sur ses données et ses usages métier. La mutualisation porte sur l'infrastructure et les briques techniques communes.
:::

# Objectif de la session

## Ce que nous vous demandons aujourd'hui

- ✅ **Valider** ce qui est juste dans votre périmètre
- ✏️ **Corriger** ce qui est inexact ou approximatif
- ➕ **Signaler** ce qui manque — acteurs, sources, initiatives
- 🔜 **Poser les bases** d'une prochaine étape opérationnelle sur le portage

:::highlight
Qu'est-ce qui est inexact ou manquant dans ce qui relève de votre périmètre ?
:::
