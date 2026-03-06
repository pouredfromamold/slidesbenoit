---
title: "Recherche juridique & IA dans le service public"
subtitle: "Session de cartographie collective"
author: "-"
role: "-"
organization: "Direction interministérielle du numérique | Ministère de la Justice"
date: "2026"
---

# Le constat

## Un besoin qui remonte de partout, sans réponse coordonnée

La recherche juridique est un besoin transversal au service public, qui remonte de façon récurrente dans des contextes très différents.

- **Magistrats** : besoin d'accès rapide à la jurisprudence et à la doctrine pour instruire et rédiger
- **DAJ ministérielles** : veille juridique, interprétation de textes, rédaction d'avis
- **Agents en contact avec le droit** : droit du travail, commande publique, droit public général

:::callout[Plusieurs initiatives en cours]
Mon Assistant Pénal, Jacepair (Conseil d'État), outils DILA sur Legifrance, renseignement en droit du travail aux ministères sociaux.
:::

> Risque : fragmentation des efforts, doublons, inégalité d'accès selon les institutions et ordres juridictionnels.

# Les entités concernées

## Des mandats différents autour d'un même sujet

- **Ministère de la Justice** : ordre judiciaire (~25 000 personnes), accès aux bases internes (Jurica)
- **Conseil d'État** : ordre administratif (~3 000 personnes), accès à Ariane et ArianeWeb
- **Conseil constitutionnel** : contrôle de constitutionnalité, documentation jurisprudentielle propre
- **Cour de cassation** : juridiction suprême de l'ordre judiciaire, opérateur de Judilibre et Jurica
- **DAJ ministérielles** : directions des affaires juridiques, productrices et utilisatrices de doctrine interne
- **DILA** : opérateur des données Legifrance, mandat de rediffusion
- **DINUM** : infrastructure d'inférence via Albert API, coordination interministérielle via ALLiaNCE

# La cartographie

## Deux niveaux de besoin, des réponses distinctes

| | Niveau 1 — Accès aux sources ouvertes | Niveau 2A — Recherche doctrinale | Niveau 2B — Bases internes |
|---|---|---|---|
| **Cible** | Tous agents publics | Magistrats, juristes, DAJ | Magistrats, DAJ |
| **Besoin** | Accéder aux textes en vigueur et à la jurisprudence publique | Interpréter, accéder à la doctrine spécialisée | Accéder aux décisions non publiées et documentations internes |
| **Sources** | Legifrance, Judilibre, ArianeWeb, EUR-Lex, fiches CNIL, PISTE (API DILA) | Lamyline (droit social), Lexis 360 (affaires / marchés publics), Dalloz (procédure pénale / droit public) | Jurica (Cour de cassation), Ariane (Conseil d'État), documentations internes DAJ |
| **Accès** | Public et gratuit | Abonnements privés, variables selon les institutions | Réservé aux agents habilités, non anonymisé |
| **Solution envisagée** | RAG interministériel — inférence Albert API, actualisation DILA via PISTE | Marché IA juridique porté par la DAE pour faciliter l'accès aux offres privées | RAG facile sur bases internes, accompagnement ALLiaNCE |

:::alert[info]
Les niveaux 2A et 2B peuvent se combiner selon les besoins métier. Un magistrat peut avoir besoin simultanément d'une base doctrinale privée et d'un accès aux décisions internes de sa juridiction.
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
