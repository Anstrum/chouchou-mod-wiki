---
layout: default
title: "Guide des Waystones & Téléportation — ChouChou Mod"
---

# 🗿 Guide des Waystones, Sharestones & Réseau Coop

> **Module** : `waystones` (`WaystonesFeature` — *"Waystones & Réseau Coop"*)  
> Les Waystones et Sharestones offrent un réseau de déplacement rapide **instantané et partagé** entre tous les joueurs de la coopérative.

---

## 🌐 1. Philosophie & Fonctionnement Coopératif

Contrairement aux mods traditionnels où chaque joueur doit obligatoirement visiter une stèle pour la débloquer :
- **Partage Global Immédiat** : dès qu'une Waystone ou Sharestone est posée ou activée par un joueur, elle est enregistrée dans le `SavedData` mondial et devient **immédiatement accessible par tous les joueurs du serveur**.
- **Tri & Organisation Personnalisés** : chaque joueur peut réordonner et épingler ses stèles favorites dans l'interface sans impacter l'ordre de ses coéquipiers.
- **Préservation du Nom** : casser une stèle avec un outil doté de **Toucher de Soie (`Silk Touch`)** conserve son nom personnalisé (`custom_name`) sur l'objet lâché.

---

## 🔮 2. La Pierre de Téléportation (`chouchou:warp_stone`)

![Pierre de Téléportation](assets/icons/warp_stone.png)

- **Composant fondamental** : Sert de cœur d'artisanat pour toutes les Waystones et Sharestones.
- **Téléportation portable** : Peut être utilisée directement depuis la main (`Clic droit maintenu`) pour ouvrir le réseau de téléportation à distance.
- **Recette (3×3)** :
  - Ligne 1 : Améthyste — Perle de l'Ender — Améthyste
  - Ligne 2 : Perle de l'Ender — Lingot d'Or — Perle de l'Ender
  - Ligne 3 : Améthyste — Perle de l'Ender — Améthyste

---

## 🏛️ 3. Les 10 Variantes de Waystones

Toutes les Waystones se fabriquent en entourant **1 Pierre de téléportation** de **6 blocs de matériaux taillés** :

| Variante | Matériau de Craft (×6) | Style Architectural |
| :--- | :--- | :--- |
| **Andésite** (`andesite_waystone`) | Pierre taillée (`stone_bricks`) | Classique / Plaines |
| **Andésite moussue** (`mossy_andesite_waystone`) | Pierre taillée moussue | Ruines antiques / Forêts denses |
| **Grès** (`sandstone_waystone`) | Grès sculpté (`chiseled_sandstone`) | Déserts & Savanes |
| **Ardoise des abîmes** (`deepslate_waystone`) | Ardoise des abîmes | Souterrains & Tréfonds |
| **Roche noire** (`blackstone_waystone`) | Roche noire (`blackstone`) | Bastions & Nether |
| **Pierre de l'End** (`end_stone_waystone`) | Pierre de l'End taillée | Cités de l'End |
| **Briques du Nether rouges** (`red_nether_bricks_waystone`) | Briques du Nether rouges | Forteresses du Nether |
| **Purpur** (`purpur_waystone`) | Bloc de purpur | Architecture Shulker |
| **Prismarine** (`prismarine_waystone`) | Prismarine | Monuments marins & Côtes |
| **Briques de terre crue** (`mud_bricks_waystone`) | Briques de terre crue | Mangroves & Marais |

---

## 💎 4. Les 8 Sharestones Colorées

Les Sharestones permettent de distinguer visuellement vos bases et avant-postes grâce à un emblème minéral lumineux :

| Variante | ID | Emblème | Utilisation Recommandée |
| :--- | :--- | :--- | :--- |
| **Améthyste** | `amethyst_sharestone` | Éclats d'Améthyste | Salles d'enchantement et bibliothèques |
| **Cuivre** | `copper_sharestone` | Lingot de Cuivre | Usines industrielles et ateliers |
| **Diamant** | `diamond_sharestone` | Diamant | Coffres-forts et bases principales |
| **Émeraude** | `emerald_sharestone` | Émeraude | Villages et centres d'échanges |
| **Or** | `gold_sharestone` | Lingot d'Or | Salles des trésors et Nether |
| **Lapis-lazuli** | `lapis_sharestone` | Lapis-lazuli | Fermes à expérience |
| **Prismarine** | `prismarine_sharestone` | Éclats de Prismarine | Ports maritimes et bases aquatiques |
| **Redstone** | `redstone_sharestone` | Poudre de Redstone | Salles des machines et fermes auto |

*Toutes les Sharestones se fabriquent avec 6 pierres taillées, 1 pierre de téléportation au centre, et 2 gemmes/lingots de la couleur souhaitée.*

---

## 🗺️ 5. Génération Naturelle dans le Monde

- **Dans les Villages** : une Waystone adaptée au biome apparaît naturellement au cœur de chaque village généré (plaines, désert, taïga, savane, toundra).
- **Waystones Sauvages** : des stèles solitaires oubliées jalonnent les biomes sauvages à intervalles réguliers, portant des noms générés procéduralement pour baliser votre exploration.
