---
layout: default
title: "Guide de l'Atelier & des Machines — ChouChou Mod"
---

# 🛠️ Guide de l'Atelier, Recyclage & Gestion d'Expérience

> **Modules** : `uncrafting`, `disenchanting_table`, `global_xp`, `ender_ore`  
> L'Atelier rassemble les stations de travail et machines essentielles pour recycler votre équipement, désenchanter en toute sécurité et partager l'expérience en multijoueur.

---

## ♻️ 1. La Table de Décrafting (`chouchou:uncrafting_table`)

![Table de Décraft](assets/icons/uncrafting_upgrade.png)

La Table de décrafting permet de désassembler n'importe quel objet fabriqué pour récupérer ses composants d'origine :
- **Aperçu Fantôme (Ghost Preview)** : placer un objet dans le slot d'entrée affiche immédiatement en semi-transparence les ingrédients récupérables dans la grille 3×3.
- **Sélecteur de Recettes (`<` et `>`)** : si un objet possède plusieurs recettes (ex: bois différents, crafts alternatifs), le joueur peut faire défiler les variantes disponibles.
- **Décraft Rapide (`Maj + Clic`)** : traite en continu toute la pile d'entrée tant que le joueur a suffisamment d'XP et d'espace d'inventaire.
- **Formule d'Usure & Proportionnalité** :
  - **Métaux & Lingots** : un outil en fer ou en or usagé restitue des **Pépites proportionnelles** à la durabilité restante.
  - **Matériaux non morcelables (Diamant, Bois)** : applique un système de paliers stricts pour éviter les exploits.
- **Désassemblage de Forge** : permet de rétrograder un équipement en Netherite pour récupérer le lingot de Netherite et l'équipement en Diamant sous-jacent.
- **Fonte Proportionnelle au Four** : fondre un outil ou une armure en métal dans un four classique rend une quantité de pépites proportionnelle à son usure.

---

## 📖 2. La Table de Désenchantement (`chouchou:disenchanting_table`)

![Table de Désenchantement](assets/icons/disenchanting_upgrade.png)

Contrairement à la Meule Vanilla qui détruit les enchantements pour donner un peu d'XP, la Table de désenchantement transfère les enchantements sur des **Livres enchantés vierges** :
1. **Désenchantement d'Équipement** :
   - Placez l'arme/outil/armure au centre et des livres vierges à droite.
   - **L'équipement n'est PAS détruit !** Il conserve sa durabilité et ses attributs.
   - La pénalité d'enclume (`RepairCost`) de l'objet est automatiquement remise à **0**.
2. **Séparation des Livres Multi-Enchantés** :
   - Un livre enchanté possédant 2 enchantements ou plus peut être séparé enchantement par enchantement en plusieurs livres individuels.
3. **Protection des Niveaux de Transcendance** :
   - C'est la seule méthode sûre pour retirer un enchantement de Niveau 6 à 10 sans risquer de le perdre.

---

## ⚙️ 3. Le Concasseur de Géodes (`chouchou:geode_cracker`)

![Concasseur de Géodes](assets/icons/raw_ender_ore.png)

Machine industrielle indispensable pour extraire les **Gemmes d'Éther** nécessaires à la Transcendance :
- **Alimentation thermique** : consomme de la **Poudre de Blaze** comme combustible.
- **Pointe de broyage mécanique** : nécessite une **Pointe en diamant (`chouchou:diamond_tip`)**, capable de concasser 10 géodes avant de s'user.
- **Rendement** : chaque **Géode d'Éther (`chouchou:raw_ender_ore`)** broyée a **5 % de chance** de libérer une **Gemme d'Éther (`chouchou:ender_gem`)**.

---

## 🟢 4. Le Bloc d'Expérience Global (`chouchou:xp_block`)

Une banque d'XP commune et sans perte pour la coopération :
- **Stockage sans limite** : faites un clic droit pour déposer vos niveaux d'XP, ou sneak-clic pour retirer vos points.
- **Affichage 3D flottant** : projette en temps réel le nombre total de niveaux stockés au-dessus du bloc.
- **Aspiration des Orbes** : aspire automatiquement les orbes d'XP lâchées à proximité pour éviter qu'elles ne disparaissent.
- **Conservation au Minage** : miner le bloc conserve la totalité de l'expérience emmagasinée à l'intérieur.
