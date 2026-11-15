---
layout: default
title: "Grimoire des 82 Enchantements — ChouChou Mod"
---

# 📜 Grimoire des 82 Enchantements Actifs (Minecraft 1.26.3 & ChouChou Mod)

> **Source de vérité** : Fichiers JSON `data/*/enchantment/`, gestionnaires Java `features/enchantments_reforged/` et [Stats and datas/04_ENCHANTEMENTS_ET_REFORGED.md](../Stats%20and%20datas/04_ENCHANTEMENTS_ET_REFORGED.md).  
> **Règle générale de Transcendance** : Les enchantements progressifs sont **plafonnés au Niveau 5 en jeu standard** (tables d'enchantement, butins, villageois, enclume). Les **Niveaux 6 à 10** sont débloqués exclusivement via la **Table de Transcendance**.

---

## ⛏️ 1. Outils, Minage & Récolte (13 enchantements actifs)

| # | Nom de l'Enchantement | Identifiant Technique | Statut | Équipement Éligible | Niv. Max (Std / Transc.) | Effet & Règles Définies |
| :-: | :--- | :--- | :---: | :---: | :---: | :--- |
| **1** | **Fonte Instantanée** | `chouchou:auto_smelt` | ✅ Actif | Pioches, Pelles, Haches | **1** *(Toggle)* | Fond automatiquement les blocs minés compatibles avec le four. Incompatible avec Toucher de Soie. |
| **2** | **Récolte Abondante** | `chouchou:bountiful_harvest` | ✅ Actif | **Houes exclusivement** | **10** *(5 / 10)* | +10% / niveau de chance de multiplier le butin des cultures matures. |
| **3** | **Toucher Délicat** | `chouchou:delicate_touch` | ✅ Actif | **Houes exclusivement** | **1** *(Toggle)* | Empêche d'écraser la terre labourée en sautant avec la houe en main. |
| **4** | **Efficacité** | `minecraft:efficiency` | ✅ Actif | Tous outils & Cisailles | **10** *(5 / 10)* | Vitesse de minage augmentée (formule Vanilla amplifiée). |
| **5** | **Endurance** | `chouchou:endurance` | ✅ Actif | Outils (Pioches, Pelles, Haches, Houes) | **10** *(5 / 10)* | Économise la durabilité lors de sessions de minage ininterrompues. |
| **6** | **Excavatrice** | `chouchou:excavator` | ✅ Actif | **Pioches & Pelles uniquement** | **3** *(N1-2 std / N3 Transc.)* | Minage en zone en Sneak (N1: 1×2, N2: 3×3, N3: 5×5 via Transcendance). |
| **7** | **Fortune** | `minecraft:fortune` | ✅ Actif | Tous outils | **10** *(5 / 10)* | Multiplie les drops de minerais/cultures. Incompatible avec Toucher de Soie et Fonte Instantanée. |
| **8** | **Bûcheron** | `chouchou:lumberjack` | ✅ Actif | **Haches exclusivement** | **3** *(N1-2 std / N3 Transc.)* | Abat l'arbre connecté en Sneak (N1: 8, N2: 32 bûches, N3: 200 bûches via Transcendance). |
| **9** | **Replantation** | `chouchou:replenish` | ✅ Actif | **Houes exclusivement** | **1** *(Toggle)* | Replante automatiquement la graine correspondante à la récolte. |
| **10** | **Tamisage** | `chouchou:sifting` | ✅ Actif | **Pelles exclusivement** | **10** *(5 / 10)* | +10% / niveau d'extraire des pépites, gemmes et graines de la terre/sable/gravier. |
| **11** | **Toucher de Soie** | `minecraft:silk_touch` | ✅ Actif | Tous outils | **1** *(Toggle)* | Récolte le bloc tel quel. Incompatible avec Fortune et Fonte Instantanée. |
| **12** | **Solidité** | `minecraft:unbreaking` | ✅ Actif | Tout équipement avec durabilité | **10** *(5 / 10)* | Réduit l'usure de l'équipement (niveau / (niveau + 1)). |
| **13** | **Mineur de Filon** | `chouchou:vein_miner` | ✅ Actif | **Pioches exclusivement** | **5** *(N1-3 std / N4-5 Transc.)* | Mine le filon en Sneak (N1: 4, N2: 8, N3: 16 blocs ; N4: 32, N5: 64 blocs via Transcendance). |

---

## ⚔️ 2. Combat de Mêlée & Armes (18 enchantements actifs)

| # | Nom de l'Enchantement | Identifiant Technique | Statut | Équipement Éligible | Niv. Max (Std / Transc.) | Effet & Règles Définies |
| :-: | :--- | :--- | :---: | :---: | :---: | :--- |
| **14** | **Fléau des Arthropodes**| `minecraft:bane_of_arthropods`| ✅ Actif | Toutes armes | **10** *(5 / 10)* | +2.5 dégâts par niveau contre les arthropodes + Lenteur. |
| **15** | **Berserker** | `chouchou:berserker` | ✅ Actif | **Haches exclusivement (Dual Wield)** | **10** *(5 / 10)* | Requiert 1 hache dans chaque main. Les kills déclenchent Soif de Sang (+5% dégâts/stack, 5s). |
| **16** | **Exécuteur** | `chouchou:executioner` | ✅ Actif | Toutes armes | **10** *(5 / 10)* | +10% / niveau de dégâts sur les cibles ayant ≤ 35% de leurs PV max. |
| **17** | **Aura de Feu** | `minecraft:fire_aspect` | ✅ Actif | Toutes armes | **10** *(5 / 10)* | Enflamme la cible (+2s par niveau). Incompatible avec Morsure du Givre. |
| **18** | **Morsure du Givre** | `chouchou:frostbite` | ✅ Actif | Toutes armes | **10** *(5 / 10)* | Gèle et ralentit la cible. Incompatible avec Aura de Feu. |
| **19** | **Recul** | `minecraft:knockback` | ✅ Actif | Toutes armes | **10** *(5 / 10)* | +1 bloc de recul par niveau. |
| **20** | **Butin** | `minecraft:looting` | ✅ Actif | Toutes armes | **10** *(5 / 10)* | +1 drop max supplémentaire par niveau. |
| **21** | **Magnétisme** | `chouchou:magnetism` | ✅ Actif | Outils, Armes & Plastron | **10** *(5 / 10)* | Aspire butins et XP dans un rayon de 3 + 2 × niveau blocs. |
| **22** | **Acharnement** | `chouchou:momentum` | ✅ Actif | Toutes armes | **10** *(5 / 10)* | +4% par coup / niveau sur frappes consécutives sur la même cible. |
| **23** | **Impact Cinétique** | `chouchou:precision` | ✅ Actif | Toutes armes | **10** *(5 / 10)* | +20% / niveau de dégâts en coup critique (saut) ou en sprint. |
| **24** | **Faucheur** | `chouchou:reaper` | ✅ Actif | Toutes armes | **10** *(5 / 10)* | Orbes d'XP bonus (+2 XP/niv) et répare l'arme au kill (+2 durabilité/niv). |
| **25** | **Représailles** | `chouchou:retaliation` | ✅ Actif | Toutes armes | **10** *(5 / 10)* | +10% / niveau de dégâts sur la prochaine frappe dans les 3s après avoir pris un coup. |
| **26** | **Tranchant** | `minecraft:sharpness` | ✅ Actif | Toutes armes | **10** *(5 / 10)* | +0.5 × niveau + 0.5 dégâts nets. |
| **27** | **Châtiment** | `minecraft:smite` | ✅ Actif | Toutes armes | **10** *(5 / 10)* | +2.5 dégâts par niveau contre les morts-vivants. |
| **28** | **Chancellement** | `chouchou:stagger` | ✅ Actif | Toutes armes | **10** *(5 / 10)* | Ralentit lourdement la cible à l'impact (aucun recul provoqué). |
| **29** | **Affilage** | `minecraft:sweeping_edge` | ✅ Actif | Épées exclusivement | **10** *(5 / 10)* | Dégâts d'attaque en balayage augmentés (+10%/niv, 100% au N10). |
| **30** | **Courant Marin** | `chouchou:undertow` | ✅ Actif | Toutes armes | **10** *(5 / 10)* | +10% / niveau de dégâts dans l'eau ou sous la pluie. |
| **31** | **Vampirisme** | `chouchou:vampirism` | ✅ Actif | Toutes armes | **10** *(5 / 10)* | +5% / niveau de vol de vie (25% à N5, 50% à N10). |

---

## 🦺 3. Armures, Survie & Mobilité (23 enchantements actifs)

| # | Nom de l'Enchantement | Identifiant Technique | Statut | Équipement Éligible | Niv. Max (Std / Transc.) | Effet & Règles Définies |
| :-: | :--- | :--- | :---: | :---: | :---: | :--- |
| **32** | **Affinité Aquatique** | `minecraft:aqua_affinity` | ✅ Actif | Casque | **1** *(Toggle)* | Vitesse de minage normale sous l'eau. |
| **33** | **Protection Explosions**| `minecraft:blast_protection`| ✅ Actif | 4 armures | **10** *(5 / 10)* | Réduit les dégâts d'explosion (+1.5%/niv, max 60%) + anti-projection. |
| **34** | **Amortissement** | `chouchou:cushioning` | ✅ Actif | **Bottes exclusivement** | **10** *(5 / 10)* | Réduit les dégâts de chute, les chocs d'élytres et perles de l'Ender (max 60%). |
| **35** | **Agilité Aquatique** | `minecraft:depth_strider` | ✅ Actif | Bottes | **10** *(5 / 10)* | Vitesse de nage et marche dans l'eau. Compatible avec Semelles de Givre. |
| **36** | **Protection contre le Feu**| `minecraft:fire_protection`| ✅ Actif | 4 armures | **10** *(5 / 10)* | Réduit les dégâts de feu/lave (+1.5%/niv, max 60%) + réduit la durée d'ignition. |
| **37** | **Garde de Givre** | `chouchou:frostguard` | ✅ Actif | 4 armures | **10** *(5 / 10)* | Gèle et ralentit les assaillants. Incompatible avec Peau de Lave. |
| **38** | **Semelles de Givre** | `minecraft:frost_walker` | ✅ Actif | Bottes | **10** *(5 / 10)* | Gèle l'eau sous les pas en glace éphémère. Compatible avec Agilité Aquatique. |
| **39** | **Planage** | `chouchou:glider` | ✅ Actif | **Élytres exclusivement** | **5** *(Plafond 5)* | Portance accrue en vol plané, vole beaucoup plus loin sans perdre d'altitude. |
| **40** | **Baroud d'Honneur** | `chouchou:last_stand` | ✅ Actif | **Plastrons exclusivement** | **10** *(5 / 10)* | Seuil ≤ 25% PV : Absorption (jusqu'à 10 cœurs au N10) + Résistance. Cooldown 90s. |
| **41** | **Peau de Lave** | `chouchou:molten_skin` | ✅ Actif | 4 armures | **10** *(5 / 10)* | Enflamme les assaillants. Incompatible avec Garde de Givre. |
| **42** | **Vision Nocturne** | `chouchou:nightwalker` | ✅ Actif | **Casque exclusivement** | **1** *(Toggle)* | Vision nocturne permanente automatique dans la nuit ou l'obscurité. |
| **43** | **Protection Projectiles**| `minecraft:projectile_protection`| ✅ Actif | 4 armures | **10** *(5 / 10)* | Réduit les dégâts de flèches/tridents (+1.5%/niv, max 60%). |
| **44** | **Récupération** | `chouchou:recovery` | ✅ Actif | 4 armures | **10** *(5 / 10)* | Régénération passive de santé hors-combat (jusqu'à 1 PV/s au N10). |
| **45** | **Apnée** | `minecraft:respiration` | ✅ Actif | Casque | **10** *(5 / 10)* | Prolonge la durée d'apnée sous l'eau (+2s par niveau). |
| **46** | **Second Souffle** | `chouchou:second_wind` | ✅ Actif | **Plastrons exclusivement** | **10** *(5 / 10)* | Seuil ≤ 30% PV : Soin direct (+0.5 cœur/niv) + Vitesse. Cooldown 120s. |
| **47** | **Vitesse des Âmes** | `minecraft:soul_speed` | ✅ Actif | Bottes | **10** *(5 / 10)* | Vitesse accélérée sur Sable et Terre des âmes. |
| **48** | **Inébranlable** | `chouchou:steadfast` | ✅ Actif | 4 armures | **10** *(5 / 10)* | Réduit les dégâts de mêlée subis (-1.5%/niv, max 60%) + anti-recul. |
| **49** | **Pied Sûr** | `chouchou:surefooted` | ✅ Actif | **Bottes exclusivement** | **1** *(Toggle)* | Annule le ralentissement sur Soul Sand et Miel, annule le glissement sur la glace. |
| **50** | **Furtivité Rapide** | `minecraft:swift_sneak` | ✅ Actif | Jambières | **10** *(5 / 10)* | Vitesse de déplacement augmentée en mode accroupi (Sneak). |
| **51** | **Épines** | `minecraft:thorns` | ✅ Actif | 4 armures | **10** *(5 / 10)* | Renvoie des dégâts à l'attaquant au contact. |
| **52** | **Piste Battue** | `chouchou:trailblazer` | ✅ Actif | **Bottes exclusivement** | **5** *(Plafond 5)* | Vitesse I à III accrue sur les chemins de terre battue (*Dirt Path*). |
| **53** | **Vitalité** | `chouchou:vitality` | ✅ Actif | 4 armures | **10** *(5 / 10)* | +1 PV (0.5 cœur) max par niveau (jusqu'à +20 cœurs cumulés sur 4 pièces N10). |
| **54** | **Adhérence Murale** | `chouchou:wall_grip` | ✅ Actif | **Bottes exclusivement** | **1** *(Toggle)* | S'agripper en Sneak aux parois verticales, descente lente contrôlée. |

---

## 🏹 4. Tir à Distance : Arcs & Arbalètes (12 enchantements actifs)

| # | Nom de l'Enchantement | Identifiant Technique | Statut | Équipement Éligible | Niv. Max (Std / Transc.) | Effet & Règles Définies |
| :-: | :--- | :--- | :---: | :---: | :---: | :--- |
| **55** | **Flamme** | `minecraft:flame` | ✅ Actif | Arcs & Arbalètes | **1** *(Toggle)* | Enflamme les flèches tirées. Incompatible avec Flèche de Givre. |
| **56** | **Flèche de Givre** | `chouchou:frostshot` | ✅ Actif | Arcs & Arbalètes | **10** *(5 / 10)* | Gèle et ralentit la cible. Incompatible avec Flamme. |
| **57** | **Marque du Chasseur**| `chouchou:hunters_mark` | ✅ Actif | Arcs & Arbalètes | **10** *(5 / 10)* | Dégâts progressifs (+5%/tir/niv) sur tirs consécutifs sur la même cible. |
| **58** | **Infinité** | `minecraft:infinity` | ✅ Actif | Arcs & Arbalètes | **1** *(Toggle)* | Tir illimité sans consommer de flèche standard. Compatible Raccommodage. |
| **59** | **Tir Lointain** | `chouchou:longshot` | ✅ Actif | Arcs & Arbalètes | **10** *(5 / 10)* | +6% / niveau par tranche de 10m au-delà de 18 mètres. |
| **60** | **Tir Multiple** | `minecraft:multishot` | ✅ Actif | Arcs & Arbalètes | **10** *(1 / 10)* | Tire en éventail (3 flèches à N1, +1/niv, jusqu'à 12 flèches au N10). |
| **61** | **Perforation** | `minecraft:piercing` | ✅ Actif | Arcs & Arbalètes | **10** *(5 / 10)* | Traverse +1 entité par niveau. Incompatible avec Ricochet. |
| **62** | **Immobilisation** | `chouchou:pinning` | ✅ Actif | Arcs & Arbalètes | **10** *(5 / 10)* | Applique Lenteur progressive jusqu'à immobilisation totale au N10. |
| **63** | **Puissance** | `minecraft:power` | ✅ Actif | Arcs & Arbalètes | **10** *(5 / 10)* | Dégâts de flèches augmentés (+25% × (niveau + 1)). |
| **64** | **Charge Rapide** | `minecraft:quick_charge` | ✅ Actif | **Arcs & Arbalètes** | **10** *(5 / 10)* | Accélère le rechargement de l'arbalète ET la tension de l'arc (+1 tick/niv). |
| **65** | **Ricochet** | `chouchou:ricochet` | ✅ Actif | Arcs & Arbalètes | **10** *(5 / 10)* | Rebondit vers 1 à 3 cibles secondaires. Incompatible avec Perforation. |
| **66** | **Récupérateur** | `chouchou:salvage` | ✅ Actif | Arcs & Arbalètes | **10** *(5 / 10)* | N1-N5 : chance de récupération au sol ; N6-N10 : ramassage direct dans l'inventaire. |

---

## 🔱 5. Armes Spéciales, Tridents & Masse (7 enchantements actifs)

| # | Nom de l'Enchantement | Identifiant Technique | Statut | Équipement Éligible | Niv. Max (Std / Transc.) | Effet & Règles Définies |
| :-: | :--- | :--- | :---: | :---: | :---: | :--- |
| **67** | **Brèche** | `minecraft:breach` | ✅ Actif | Masse | **10** *(5 / 10)* | Réduit l'efficacité de l'armure de la cible (-15% d'armure/niv). |
| **68** | **Canalisation** | `minecraft:channeling` | ✅ Actif | Tridents | **1** *(Toggle)* | Déclenche la foudre par temps d'orage. |
| **69** | **Densité** | `minecraft:density` | ✅ Actif | Masse | **10** *(5 / 10)* | Augmente les dégâts par bloc de chute supplémentaire. |
| **70** | **Empalement** | `minecraft:impaling` | ✅ Actif | Tridents | **10** *(5 / 10)* | +2.5 dégâts/niv contre les créatures aquatiques et cibles mouillées. |
| **71** | **Loyauté** | `minecraft:loyalty` | ✅ Actif | Tridents | **10** *(5 / 10)* | Vitesse de retour du trident. Compatible avec Propulsion (Riptide). |
| **72** | **Propulsion** | `minecraft:riptide` | ✅ Actif | Tridents | **10** *(5 / 10)* | Propulse le joueur dans l'eau ou sous la pluie. Compatible avec Loyauté. |
| **73** | **Rafale Éolienne** | `minecraft:wind_burst` | ✅ Actif | Masse | **10** *(3 / 10)* | Rebondit dans les airs avec une explosion de vent lors d'un smash réussi. |

---

## 🛡️ 6. Boucliers (1 enchantement actif)

| # | Nom de l'Enchantement | Identifiant Technique | Statut | Équipement Éligible | Niv. Max (Std / Transc.) | Effet & Règles Définies |
| :-: | :--- | :--- | :---: | :---: | :---: | :--- |
| **74** | **Riposte** | `chouchou:counterguard` | ✅ Actif | **Boucliers exclusivement** | **10** *(5 / 10)* | Bloquer un coup au bouclier renforce votre prochaine frappe (+10%/niv, 3s). |

---

## 🎣 7. Pêche, Malédictions & Utilitaires (7 enchantements actifs)

| # | Nom de l'Enchantement | Identifiant Technique | Statut | Équipement Éligible | Niv. Max (Std / Transc.) | Effet & Règles Définies |
| :-: | :--- | :--- | :---: | :---: | :---: | :--- |
| **75** | **Malédiction du Lien**| `minecraft:binding_curse` | ✅ Actif | Armures | **1** *(Malédiction)* | Empêche de retirer l'armure une fois équipée. |
| **76** | **Appât des Profondeurs**| `chouchou:deepwater_bait` | ✅ Actif | Canne à pêche | **10** *(5 / 10)* | Accélère la vitesse de morsure des poissons en eau profonde. |
| **77** | **Ligne Solide** | `chouchou:firm_line` | ✅ Actif | Canne à pêche | **10** *(5 / 10)* | Évite l'usure de la ligne de pêche lors du ferrage d'entités. |
| **78** | **Appât** | `minecraft:lure` | ✅ Actif | Canne à pêche | **10** *(5 / 10)* | Réduit le temps d'attente avant la touche (-1s par niveau). |
| **79** | **Raccommodage** | `minecraft:mending` | ✅ Actif | Tout équipement | **1** *(Toggle)* | Répare l'objet grâce à l'expérience ramassée. |
| **80** | **Chasseur de Trésors**| `chouchou:treasure_seeker` | ✅ Actif | Canne à pêche | **10** *(5 / 10)* | Augmente les chances de pêcher des trésors rares (remplace Luck of the Sea). |
| **81** | **Malédiction de Disparition**| `minecraft:vanishing_curse`| ✅ Actif | Tout équipement | **1** *(Malédiction)* | L'objet disparaît définitivement à la mort. |
| **82** | **Poumons Profonds** | `chouchou:deep_lungs` | ✅ Actif | Casque | **10** *(5 / 10)* | Prolonge considérablement votre temps d'apnée sous l'eau. |

---

## ❌ 8. Les 4 Enchantements Vanilla Retirés / Remplacés

Pour équilibrer le gameplay et éviter les doublons ou effets surpuissants :
1. `minecraft:protection` : **Retiré** afin de revaloriser les protections spécialisées (Feu, Explosions, Projectiles) et le nouvel enchantement *Inébranlable*.
2. `minecraft:feather_falling` : **Retiré**, intégralement remplacé par *Amortissement* (`chouchou:cushioning`) qui couvre à la fois la chute libre et les impacts en Élytre.
3. `minecraft:luck_of_the_sea` : **Retiré**, remplacé par *Chasseur de Trésors* (`chouchou:treasure_seeker`).
4. `minecraft:punch` : **Retiré** pour équilibrer le combat à distance.
