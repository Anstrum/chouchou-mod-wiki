---
layout: default
title: "Guide des Sacs à Dos — ChouChou Mod"
---

# 🎒 Guide Complet des Sacs à Dos (Backpacks)

> **Module** : `backpacks` (`BackpacksFeature` — *"Sacs à dos évolutifs"*)  
> Ce guide détaille les 6 tiers de sacs à dos, les 17 modules d'amélioration, les mécaniques de teinture, les raccourcis d'inventaire et les monstres porteurs de sacs.

---

## 📦 1. Les 6 Tiers de Sacs à Dos

Tous les sacs à dos s'ouvrent sur une grille de **9 colonnes**. Dès le palier Or, une **barre de défilement (scrollbar)** s'active pour naviguer dans l'inventaire au-delà de 6 lignes visibles.

| Tier | Nom Français | Nom Anglais | Emplacements | Lignes | Modules max | Rareté | Résistant au Feu | Dureté | Attaches par défaut |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Cuir** | Sac à dos en cuir | Leather Backpack | **27** | 3 | **1** | Commune | Non | 1.5 | Or (`#E6AA28`) |
| **Cuivre** | Sac à dos en cuivre | Copper Backpack | **45** | 5 | **1** | Commune | Non | 1.5 | Cuivre (`#C86446`) |
| **Fer** | Sac à dos en fer | Iron Backpack | **54** | 6 | **2** | Commune | Non | 1.5 | Fer (`#D8D8D8`) |
| **Or** | Sac à dos en or | Gold Backpack | **81** | 9 | **3** | Peu commune | Non | 1.5 | Or (`#E6AA28`) |
| **Diamant** | Sac à dos en diamant | Diamond Backpack | **108** | 12 | **5** | Rare | Non | 1.5 | Diamant (`#4AEDD9`) |
| **Netherite**| Sac à dos en Netherite | Netherite Backpack | **120** | 14 | **7** | Épique | **Oui** | 2.5 | Netherite (`#443A3B`)|

> [!NOTE]
> Les recettes d'amélioration en palier supérieur conservent **intégralement** le contenu du sac, ses modules installés, ses personnalisations de couleurs et son nom.

---

## 🎮 2. Raccourcis, Contrôles & Confort

- **Raccourci Clavier (`Touche B`)** :
  - **En jeu** : ouvre immédiatement le sac équipé dans le slot dédié, ou le premier sac trouvé dans l'inventaire.
  - **Dans un menu d'inventaire** : survoler un sac à la souris et appuyer sur `B` ouvre directement ce sac (même s'il est imbriqué dans un autre sac).
  - **Dans l'interface du sac** : appuyer sur `B` referme le sac.
- **Interactions Sacoche (Bundle-Style)** :
  - Tenir un sac sur le curseur et cliquer sur un objet dans l'inventaire insère la pile (clic gauche) ou 1 unité (clic droit).
  - Tenir un objet sur le curseur et cliquer sur un sac l'insère directement sans ouvrir l'interface.
- **Pose au sol & Ramassage rapide** :
  - `Maj (Sneak) + Clic droit` avec le sac en main le pose comme bloc orienté en 3D dans le monde.
  - `Maj (Sneak) + Clic droit` sur le sac posé avec la **main vide** le ramasse instantanément avec tout son contenu.
- **Empilement de Base à 64** :
  - Même sans aucun module de stockage, les objets non empilables en Vanilla (potions, lits, bateaux, wagonnets, totems, selles, **livres enchantés**) s'empilent jusqu'à **64 par slot** dans un sac à dos (sauf outils/armures usagés ou déjà enchantés).

---

## 🎨 3. Teinture & Personnalisation (Diamant & Netherite)

Les sacs en Diamant et en Netherite peuvent être teints dans la grille de craft en plaçant des teintures autour du sac :
- **À gauche du sac** : teint la **toile principale** (`cloth_color`).
- **À droite du sac** : teint les **bordures** (`border_color`).
- **En dessous du sac** : teint la **pochette avant** (`pouch_color`).
- **Au-dessus du sac** : teint à la fois la **toile et les bordures**.
- **Attaches métalliques** : combiner le sac avec un lingot/gemme (Fer, Cuivre, Or, Diamant, Netherite, Émeraude, Améthyste, Lapis, Redstone, Quartz, Prismarine, Echo Shard) modifie la couleur des boucles.
- **Nettoyage** : clic droit avec le sac sur un **Chaudron d'eau** pour réinitialiser les couleurs.

---

## ⚙️ 4. Les 17 Modules d'Amélioration (Upgrades)

Les modules se fabriquent à partir d'un **Module de base (`chouchou:upgrade_base`)** et s'installent dans les slots latéraux du sac (1 seul module par famille) :

| Module | Famille | Rareté | Onglet GUI | Fonctionnalité |
| :--- | :--- | :--- | :---: | :--- |
| **Pickup Upgrade** | `PICKUP` | Commune | — | Ramasse automatiquement les objets au sol selon un filtre configurable. |
| **Feeding Upgrade** | `FEEDING` | Commune | — | Nourrit automatiquement le joueur avec la nourriture présente dans le sac. |
| **Crafting Upgrade** | `CRAFTING` | Commune | 🪓 Établi | Ouvre une grille de craft 3×3 persistante directement dans l'interface du sac. |
| **Stonecutter Upgrade** | `STONECUTTER` | Commune | 🪚 Tailleur | Interface de tailleur de pierre intégrée au sac. |
| **Anvil Upgrade** | `ANVIL` | Rare | 🔨 Enclume | Enclume intégrée avec réparation et renommage sans briser d'enclume. |
| **Smithing Upgrade** | `SMITHING` | Rare | 🛡️ Forge | Table de forge portable intégrée. |
| **Smelting Upgrade** | `SMELTING` | Peu commune | 🔥 Four | Fours portables de cuisson automatique avec gestion des combustibles. |
| **Disenchanting Upgrade** | `DISENCHANTING` | Rare | 📖 Désenchant. | Table de désenchantement portable (sépare livres et équipement à 0 XP). |
| **Uncrafting Upgrade** | `UNCRAFTING` | Rare | ♻️ Décraft | Table de décrafting portable intégrée au sac. |
| **Restock Upgrade** | `RESTOCK` | Peu commune | — | Réapprovisionne les piles de la hotbar depuis l'intérieur du sac. |
| **Deposit Upgrade** | `DEPOSIT` | Peu commune | — | Bouton de transfert rapide des objets correspondants vers les coffres proches. |
| **Void Upgrade** | `VOID` | Peu commune | 🗑️ Poubelle | Détruit automatiquement les objets indésirables ramassés (avec filtre et bouton Purger). |
| **Inception Upgrade** | `INCEPTION` | Épique | — | Autorise le transport de sacs à dos à l'intérieur d'autres sacs à dos. |
| **Everlasting Upgrade** | `EVERLASTING` | Épique | — | Rend le sac indestructible au feu, à la lave, aux explosions et au vide. |
| **Stack Upgrade (Starter)** | `STACK` | Commune | — | Multiplie la taille de pile par **×2** (ex: 128 par emplacement). |
| **Stack Upgrade (Tier 1)** | `STACK` | Peu commune | — | Multiplie la taille de pile par **×4** (ex: 256 par emplacement). |
| **Stack Upgrade (Tier 2)** | `STACK` | Rare | — | Multiplie la taille de pile par **×8** (ex: 512 par emplacement). |
| **Stack Upgrade (Tier 3)** | `STACK` | Épique | — | Multiplie la taille de pile par **×16** (ex: 1 024 par emplacement). |
| **Stack Upgrade (Tier 4)** | `STACK` | Épique | — | Multiplie la taille de pile par **×32** (ex: 2 048 par emplacement). |

---

## 🧟 5. Monstres Porteurs de Sacs à Dos (Mob Backpacks)

Des créatures du monde peuvent naturellement apparaître équipées d'un sac à dos contenant du butin thématique. À leur mort, le sac et son contenu tombent au sol :

| Monstre | Tiers de sac possibles | Butin thématique principal | Modules de sac trouvables |
| :--- | :--- | :--- | :--- |
| **Zombie** | Cuir (80%), Cuivre (20%) | Pain, bœuf cuit, torches, lingots de fer, cuivre brut, cordes. | *Pickup*, *Feeding* |
| **Squelette** | Cuir (75%), Cuivre (25%) | Flèches (8-24), os, plumes, flèches spectrales, arcs légers. | *Restock* |
| **Piglin** | Cuir (60%), Cuivre (30%), Or (10%) | Lingots d'or, quartz du Nether, briques du Nether, épées en or. | *Deposit*, *Smelting* |
| **Enderman** | Fer (50%), Or (35%), Diamant (15%) | **Livres enchantés rares garantis**, gemmes, perles de l'Ender, obsidienne. | *Void*, *Everlasting*, *Stack T2* |
