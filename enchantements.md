# 📜 Catalogue Intégral Fusionné des 89 Enchantements (Minecraft 1.21.1 & ChouChou Mod)

> **Statut global** : Mis à jour avec les directives et commentaires utilisateur.  
> **Source de vérité absolue** : Tous les enchantements sont classés **par catégorie d'équipement**, sans aucune séparation entre Vanilla et Mod.  
> **Règle générale de Transcendance** : Les enchantements progressifs sont **plafonnés au Niveau 5 en jeu standard** (tables, loot, villageois). Les **Niveaux 6 à 10** (ou niveaux ultimes spécifiques) sont débloqués uniquement via le système de **Transcendance** (table d'artisanat dédiée).

---

## ⛏️ 1. Outils, Minage & Récolte (13 enchantements actifs, 1 supprimé)

| # | Nom de l'Enchantement | Identifiant Technique | Statut | Équipement Éligible | Niv. Max (Std / Transc.) | Effet & Règles Définies |
| :-: | :--- | :--- | :---: | :---: | :---: | :--- |
| **1** | **Fonte Instantanée** | `chouchou:auto_smelt` | ✅ **Validé** | Pioches, Pelles, Haches | **1** *(Toggle)* | Cuit instantanément le bloc miné. Houes exclues. **Incompatible avec Toucher de Soie**. |
| **2** | **Récolte Abondante** | `chouchou:bountiful_harvest` | ✅ **Validé** | **Houes exclusivement** | **10** *(5 / 10)* | $+10\%$/niv de chance de doubler les récoltes (inclut la canne à sucre). |
| **3** | **Toucher Délicat** | `chouchou:delicate_touch` | ✅ **Validé** | **Houes exclusivement** | **1** *(Toggle)* | Empêche d'écraser la terre labourée en sautant avec la houe en main. |
| **4** | **Efficacité** | `minecraft:efficiency` | ⏳ À valider | Tous outils & Cisailles | **10** *(5 / 10)* | Vitesse de minage augmentée ($\text{lvl}^2 + 1$). |
| **5** | **Endurance** | `chouchou:endurance` | ✅ **Validé** | Outils (Pioches, Pelles, Haches, Houes) | **10** *(5 / 10)* | Économise 1 durabilité tous les 2 à 6 blocs minés en continu. |
| **6** | **Excavatrice** | `chouchou:excavator` | ✅ **Validé** | **Pioches & Pelles uniquement** | **3** *(N1-2 std / N3 Transc.)* | Minage en zone en Sneak (N1: 1×2, N2: 3×3, N3: 5×5 via Transcendance). Haches/houes exclues. |
| **7** | **Fortune** | `minecraft:fortune` | ⏳ À valider | Tous outils | **10** *(5 / 10)* | Multiplie les drops de minerais/cultures. Incompatible avec Toucher de Soie. |
| **8** | **Bûcheron** | `chouchou:lumberjack` | ✅ **Validé** | **Haches exclusivement** | **3** *(N1-2 std / N3 Transc.)* | Abat l'arbre connecté en Sneak (N1: 8, N2: 32 bûches standard, N3: 200 bûches via Transcendance). |
| **9** | **Replantation** | `chouchou:replenish` | ✅ **Validé** | **Houes exclusivement** | **1** *(Toggle)* | Replante automatiquement la graine correspondante à la récolte. |
| **10** | **Tamisage** | `chouchou:sifting` | ✅ **Validé** | **Pelles exclusivement** | **10** *(5 / 10)* | $+10\%$/niv d'extraire pépites, gemmes et graines de terre/sable/gravier. |
| **11** | **Toucher de Soie** | `minecraft:silk_touch` | ⏳ À valider | Tous outils | **1** *(Toggle)* | Récolte le bloc tel quel. Incompatible avec Fortune et Fonte Instantanée. |
| **12** | **Solidité** | `minecraft:unbreaking` | ⏳ À valider | Tout équipement avec durabilité (incluant le briquet) | **10** *(5 / 10)* | Réduit l'usure de l'outil ($\frac{\text{lvl}}{\text{lvl}+1}$). |
| **13** | **Mineur de Filon** | `chouchou:vein_miner` | ✅ **Validé** | **Pioches exclusivement** | **5** *(N1-3 std / N4-5 Transc.)* | Mine le filon en Sneak (N1: 4, N2: 8, N3: 16 blocs std ; N4: 32, N5: 64 blocs via Transcendance). |
| ❌ | *Pas de Plume* | `chouchou:featherstep` | 🗑️ **SUPPRIMÉ** | *Bottes* | — | Supprimé du mod : doublon avec Toucher Délicat (houe) et Pied Sûr. |

---

## ⚔️ 2. Combat de Mêlée & Armes (18 enchantements)

| # | Nom de l'Enchantement | Identifiant Technique | Statut | Équipement Éligible | Niv. Max (Std / Transc.) | Effet & Règles Définies |
| :-: | :--- | :--- | :---: | :---: | :---: | :--- |
| **14** | **Fléau des Arthropodes**| `minecraft:bane_of_arthropods`| ⏳ À valider | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | $+2.5$ dégâts par niveau contre les arthropodes + Lenteur. |
| **15** | **Berserker** | `chouchou:berserker` | 🆕 **Nouveau & Validé** | **Haches exclusivement (Dual Wield)** | **10** *(5 / 10)* | **Requiert 1 hache dans chaque main**. SFX rouge sang. Après un kill : déclenche *Soif de Sang* pendant 5s (+5% dégâts/stack). Chaque kill réinitialise le timer à 5s et ajoute 1 stack (plafonné au niveau de l'enchantement). À l'expiration du timer : subit *Épuisement* (impossible de courir) pendant *(Niveau de Soif atteint)* secondes. |
| **16** | **Exécuteur** | `chouchou:executioner` | ✅ **Validé** | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | $+10\%$/niv de dégâts sur les cibles ayant $\le 35\%$ de leurs PV max. |
| **17** | **Aura de Feu** | `minecraft:fire_aspect` | ⏳ À valider | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | $+2\text{s}$ de brûlure par niveau (N10 = 20s de feu). |
| **18** | **Morsure du Givre** | `chouchou:frostbite` | ⏳ À valider | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | Gèle et ralentit la cible (+40 ticks/niv). |
| **19** | **Recul** | `minecraft:knockback` | ⏳ À valider | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | $+1$ bloc de recul par niveau. |
| **20** | **Butin** | `minecraft:looting` | ⏳ À valider | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | $+1$ drop max supplémentaire par niveau. |
| **21** | **Magnétisme** | `chouchou:magnetism` | ⏳ À valider | Outils, Toutes armes & **Plastron** | **10** *(5 / 10)* | Aspire les butins et XP dans un rayon de $3 + 2 \times \text{lvl}$ blocs. |
| **22** | **Acharnement** *(ex-Élan)*| `chouchou:momentum` | 🔄 **Renommé & Validé** | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | $+4\%$/coup/niv sur frappes consécutives sur la même cible (fenêtre 2s à 7s). |
| **23** | **Élan** *(ex-Précision)* | `chouchou:precision` | 🔄 **Renommé & Validé** | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | $+20\%$/niv de dégâts en coup critique (saut) ou en sprint. |
| **24** | **Faucheur** | `chouchou:reaper` | ⏳ À valider | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | Orbes d'XP bonus (+2 XP/niv) et répare l'arme au kill (+2 durabilité/niv). |
| **25** | **Représailles** | `chouchou:retaliation` | ✅ **Validé** | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | $+10\%$/niv de dégâts sur la prochaine frappe dans les 3s après avoir pris un coup. |
| **26** | **Tranchant** | `minecraft:sharpness` | ⏳ À valider | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | $+0.5 \times \text{lvl} + 0.5$ dégâts nets. |
| **27** | **Châtiment** | `minecraft:smite` | ⏳ À valider | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | $+2.5$ dégâts par niveau contre les morts-vivants. |
| **28** | **Chancellement** | `chouchou:stagger` | ⏳ À valider | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | Ralentit lourdement la cible à l'impact (aucun recul provoqué). |
| **29** | **Affilage** | `minecraft:sweeping_edge` | ⏳ À valider | Épées exclusivement | **10** *(5 / 10)* | Ratio de balayage $+10\%$/niv (100% au N10). Spécifique à la mécanique de balayage de l'épée. |
| **30** | **Courant Marin** | `chouchou:undertow` | ⏳ À valider | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | $+10\%$/niv de dégâts dans l'eau ou sous la pluie. |
| **31** | **Vampirisme** | `chouchou:vampirism` | ✅ **Validé** | Toutes les armes *(Épées, Haches, Masse, Tridents, Lances)* | **10** *(5 / 10)* | $+5\%$/niv de vol de vie (25% à N5, 50% à N10). |

---

## 🦺 3. Armures, Survie & Mobilité (23 enchantements actifs, 3 supprimés)

| # | Nom de l'Enchantement | Identifiant Technique | Statut | Équipement Éligible | Niv. Max (Std / Transc.) | Effet & Règles Définies |
| :-: | :--- | :--- | :---: | :---: | :---: | :--- |
| ❌ | *Protection* | `minecraft:protection` | 🗑️ **RETIRÉ** | *Armures* | — | **Supprimé du jeu** pour valoriser les résistances spécialisées. |
| ❌ | *Chute Amortie* | `minecraft:feather_falling` | 🗑️ **RETIRÉ** | *Bottes* | — | **Supprimé du jeu** : redondant avec Amortissement (`chouchou:cushioning`). |
| ❌ | *Atterrissage Amorti* | `chouchou:soft_landing` | 🗑️ **SUPPRIMÉ** | *Élytres* | — | **Supprimé du mod en autonome** : intégré directement dans `cushioning`. |
| **32** | **Affinité Aquatique** | `minecraft:aqua_affinity` | ⏳ À valider | Casque | **1** *(Toggle)* | Vitesse de minage normale sous l'eau. |
| **33** | **Protection contre Explosions**| `minecraft:blast_protection`| ⏳ À valider | 4 armures | **10** *(5 / 10)* | $+1.5\%$/niv de réduction dégâts explosion (max 60% à 40 niv) + anti-projection. |
| **34** | **Amortissement** | `chouchou:cushioning` | ✅ **Validé** | **Bottes exclusivement** | **10** *(5 / 10)* | Réduit les dégâts de chute ET les chocs d'élytres de manière linéaire dès le Niveau 1 (jusqu'à 60% max). |
| **35** | **Agilité Aquatique** | `minecraft:depth_strider` | ⏳ À valider | Bottes | **10** *(5 / 10)* | Vitesse de nage et marche dans l'eau. **Entièrement compatible avec Semelles de Givre**. |
| **36** | **Protection contre le Feu**| `minecraft:fire_protection`| ⏳ À valider | 4 armures | **10** *(5 / 10)* | $+1.5\%$/niv de réduction dégâts feu/lave (max 60% à 40 niv) + réduction durée feu. |
| **37** | **Garde de Givre** | `chouchou:frostguard` | ✅ **Validé** | 4 pièces d'armure | **10** *(5 / 10)* | Gèle et ralentit les assaillants. Incompatible sur le même item avec Peau de Lave. Si équipé sur deux pièces différentes, **aucun effet ne s'applique (annulation mutuelle)**. |
| **38** | **Semelles de Givre** | `minecraft:frost_walker` | ⏳ À valider | Bottes | **10** *(5 / 10)* | Gèle l'eau sous les pas en glace éphémère. **Compatible avec Agilité Aquatique**. |
| **39** | **Planage** | `chouchou:glider` | ✅ **Validé** | **Élytres exclusivement** | **5** *(5 / 10)* | Portance accrue en vol plané, vole beaucoup plus loin sans perdre d'altitude. |
| **40** | **Baroud d'Honneur** | `chouchou:last_stand` | ✅ **Validé** | **Plastrons exclusivement** | **10** *(5 / 10)* | Seuil $\le 25\%$ PV : Absorption (jusqu'à 10 cœurs au N10) + Résistance. Cooldown 90s. |
| **41** | **Peau de Lave** | `chouchou:molten_skin` | ✅ **Validé** | 4 pièces d'armure | **10** *(5 / 10)* | Enflamme les assaillants. Incompatible sur le même item avec Garde de Givre. Si combiné avec Garde de Givre sur une autre pièce, **annulation mutuelle (aucun effet)**. |
| **42** | **Vision Nocturne** | `chouchou:nightwalker` | ✅ **Validé** | **Casque exclusivement** | **1** *(Toggle)* | Vision nocturne permanente automatique dans la nuit ou l'obscurité. |
| **43** | **Protection Projectiles**| `minecraft:projectile_protection`| ⏳ À valider | 4 armures | **10** *(5 / 10)* | $+1.5\%$/niv de réduction dégâts de flèches/tridents (max 60% à 40 niv). |
| **44** | **Récupération** | `chouchou:recovery` | ✅ **Validé** | 4 pièces d'armure | **10** *(5 / 10)* | Régénération passive de santé hors-combat (jusqu'à 1 PV/s au N10). |
| **45** | **Apnée** | `minecraft:respiration` | ⏳ À valider | Casque | **10** *(5 / 10)* | **$+2\text{s}$ de temps d'apnée par niveau** (+10s au N5, +20s au N10). |
| **46** | **Second Souffle** | `chouchou:second_wind` | ✅ **Validé** | **Plastrons exclusivement** | **10** *(5 / 10)* | Seuil $\le 30\%$ PV : Soin direct (+0.5 cœur/niv) + Vitesse. Cooldown 120s. |
| **47** | **Vitesse des Âmes** | `minecraft:soul_speed` | ⏳ À valider | Bottes | **10** *(5 / 10)* | Vitesse accélérée sur Soul Sand / Soul Soil. |
| **48** | **Inébranlable** | `chouchou:steadfast` | ✅ **Validé** | 4 pièces d'armure | **10** *(5 / 10)* | $-1.5\%$/niv de dégâts de mêlée subis (plafond 60% max) + Anti-recul. |
| **49** | **Pied Sûr** | `chouchou:surefooted` | ✅ **Validé** | **Bottes exclusivement** | **1** *(Toggle)* | Annule le ralentissement sur Soul Sand et Miel, annule le glissement sur la glace. |
| **50** | **Furtivité Rapide** | `minecraft:swift_sneak` | ⏳ À valider | Jambières | **10** *(5 / 10)* | Vitesse de déplacement augmentée en mode accroupi (Sneak). |
| **51** | **Épines** | `minecraft:thorns` | ⏳ À valider | 4 armures | **10** *(5 / 10)* | Renvoie des dégâts à l'attaquant au contact. |
| **52** | **Piste Battue** | `chouchou:trailblazer` | ✅ **Validé** | **Bottes exclusivement** | **5** *(Max 5)* | Vitesse I à III accrue sur les chemins de terre battue (*Dirt Path*). |
| **53** | **Vitalité** | `chouchou:vitality` | ✅ **Validé** | 4 pièces d'armure | **10** *(5 / 10)* | $+1$ PV (0.5 cœur) max par niveau (jusqu'à +20 cœurs cumulés sur 4 pièces N10). |
| **54** | **Adhérence Murale** | `chouchou:wall_grip` | ✅ **Validé** | **Bottes exclusivement** | **1** *(Toggle)* | S'agripper en Sneak aux parois verticales, descente lente contrôlée et anti-chute. |

---

## 🏹 4. Tir à Distance : Arcs & Arbalètes (12 enchantements actifs, 2 supprimés)

| # | Nom de l'Enchantement | Identifiant Technique | Statut | Équipement Éligible | Niv. Max (Std / Transc.) | Effet & Règles Définies |
| :-: | :--- | :--- | :---: | :---: | :---: | :--- |
| ❌ | *Frappe* | `minecraft:punch` | 🗑️ **RETIRÉ** | *Arcs & Arbalètes* | — | **Supprimé du jeu** (recul à distance retiré pour équilibrage). |
| ❌ | *Dégainage Rapide* | `chouchou:quickdraw` | 🗑️ **SUPPRIMÉ** | *Arcs* | — | **Supprimé du mod** : fusionné dans Charge Rapide (`quick_charge`). |
| **55** | **Flamme** | `minecraft:flame` | ⏳ À valider | Arcs & Arbalètes | **1** *(Toggle)* | Enflamme les flèches tirées. **Incompatible avec Flèche de Givre**. |
| **56** | **Flèche de Givre** | `chouchou:frostshot` | ⏳ À valider | Arcs & Arbalètes | **10** *(5 / 10)* | Gèle et ralentit la cible. **Incompatible avec Flamme**. |
| **57** | **Marque du Chasseur**| `chouchou:hunters_mark` | ⏳ À valider | Arcs & Arbalètes | **10** *(5 / 10)* | Dégâts progressifs (+5%/tir/niv) sur tirs consécutifs sur la même cible. |
| **58** | **Infinité** | `minecraft:infinity` | ⏳ À valider | Arcs & Arbalètes | **1** *(Toggle)* | Tir illimité sans consommer de flèche (1 flèche requise). Compatible Mending. |
| **59** | **Tir Lointain** | `chouchou:longshot` | ⏳ À valider | Arcs & Arbalètes | **10** *(5 / 10)* | $+6\%$/tranche de 10m au-delà de 18 mètres par niveau. |
| **60** | **Tir Multiple** | `minecraft:multishot` | ⏳ À valider | Arcs & Arbalètes | **10** *(5 / 10)* | Tire en éventail (3 flèches à N1, $+1$/niv, jusqu'à 12 flèches au N10). |
| **61** | **Perforation** | `minecraft:piercing` | ⏳ À valider | Arcs & Arbalètes | **10** *(5 / 10)* | Traverse $+1$ entité par niveau. **Incompatible avec Ricochet**. |
| **62** | **Immobilisation** | `chouchou:pinning` | ⏳ À valider | Arcs & Arbalètes | **10** *(5 / 10)* | N1 à N5: Slowness I ; N6: Slowness II ; N7-N8: Slowness III ; N9: Slowness III (durée augmentée) ; N10: Slowness IV (Immobilisation totale). |
| **63** | **Puissance** | `minecraft:power` | ⏳ À valider | Arcs & Arbalètes | **10** *(5 / 10)* | $+25\% \times (\text{lvl} + 1)$ de dégâts sur flèches. |
| **64** | **Charge Rapide** | `minecraft:quick_charge` | ⏳ À valider | **Arcs & Arbalètes** | **10** *(5 / 10)* | Accélère le rechargement de l'arbalète ET la tension de l'arc (+1 tick de vitesse/niv). |
| **65** | **Ricochet** | `chouchou:ricochet` | ⏳ À valider | Arcs & Arbalètes | **10** *(5 / 10)* | Rebondit vers 1 à 3 cibles secondaires. **Incompatible avec Perforation**. |
| **66** | **Récupérateur** | `chouchou:salvage` | ⏳ À valider | Arcs & Arbalètes | **10** *(5 / 10)* | N1-N5 : $+20\%$/niv de chance que la flèche tirée survive au sol (100% à N5). N6-N10 (Transcendance) : chance de ramassage auto direct dans l'inventaire (N6: 5%, N7: 10%, N8: 15%, N9: 20%, N10: 100%). |

---

## 🔱 5. Armes Spéciales : Tridents & Masse (7 enchantements)

| # | Nom de l'Enchantement | Identifiant Technique | Statut | Équipement Éligible | Niv. Max (Std / Transc.) | Effet & Règles Définies |
| :-: | :--- | :--- | :---: | :---: | :---: | :--- |
| **67** | **Brèche** | `minecraft:breach` | ⏳ À valider | Masse | **10** *(5 / 10)* | Réduit l'efficacité de l'armure de la cible (-15% d'armure/niv). |
| **68** | **Canalisation** | `minecraft:channeling` | ⏳ À valider | Tridents | **1** *(Toggle)* | Déclenche la foudre par temps d'orage. |
| **69** | **Densité** | `minecraft:density` | ⏳ À valider | Masse | **10** *(5 / 10)* | Augmente les dégâts par bloc de chute supplémentaire. |
| **70** | **Empalement** | `minecraft:impaling` | ⏳ À valider | Tridents | **10** *(5 / 10)* | $+2.5$ dégâts/niv contre les créatures aquatiques et cibles mouillées. |
| **71** | **Loyauté** | `minecraft:loyalty` | ⏳ À valider | Tridents | **10** *(5 / 10)* | Vitesse de retour du trident ultra-rapide. **Entièrement compatible avec Propulsion (Riptide)**. |
| **72** | **Propulsion** | `minecraft:riptide` | ⏳ À valider | Tridents | **10** *(5 / 10)* | Propulse le joueur dans l'eau ou sous la pluie. **Entièrement compatible avec Loyauté (Loyalty)**. |
| **73** | **Rafale Éolienne** | `minecraft:wind_burst` | ⏳ À valider | Masse | **5** *(3 / 5)* | Rebondit dans les airs avec une explosion de vent lors d'un smash réussi. |

---

## 🛡️ 6. Boucliers (1 enchantement actif, 1 supprimé)

| # | Nom de l'Enchantement | Identifiant Technique | Statut | Équipement Éligible | Niv. Max (Std / Transc.) | Effet & Règles Définies |
| :-: | :--- | :--- | :---: | :---: | :---: | :--- |
| **74** | **Riposte** | `chouchou:counterguard` | ✅ **Validé** | **Boucliers exclusivement** | **10** *(5 / 10)* | Bloquer un coup au bouclier octroie $+10\%$/niv de dégâts pendant 3s sur la prochaine frappe. |
| ❌ | *Garde Protectrice* | `chouchou:guarding` | 🗑️ **SUPPRIMÉ** | *Boucliers* | — | **Supprimé du mod** : redondant avec Solidité (`unbreaking`). |

---

## 🎣 7. Pêche, Malédictions & Utilitaires (7 enchantements actifs, 1 supprimé)

| # | Nom de l'Enchantement | Identifiant Technique | Statut | Équipement Éligible | Niv. Max (Std / Transc.) | Effet & Règles Définies |
| :-: | :--- | :--- | :---: | :---: | :---: | :--- |
| ❌ | *Chance de la Mer* | `minecraft:luck_of_the_sea` | 🗑️ **RETIRÉ** | *Canne à pêche* | — | **Supprimé du jeu** : remplacé par `chouchou:treasure_seeker`. |
| **75** | **Malédiction du Lien**| `minecraft:binding_curse` | ⏳ À valider | Armures | **1** *(Malédiction)* | Empêche de retirer l'armure une fois équipée. |
| **76** | **Appât des Profondeurs**| `chouchou:deepwater_bait` | ⏳ À valider | Canne à pêche | **10** *(5 / 10)* | $+10\%$/niv de chance de pêcher des poissons bonus en pleine mer. |
| **77** | **Ligne Solide** | `chouchou:firm_line` | ⏳ À valider | Canne à pêche | **10** *(5 / 10)* | Réduit l'usure de la ligne de pêche au ferrage (-0.5 point d'usure/niv). |
| **78** | **Appât** | `minecraft:lure` | ⏳ À valider | Canne à pêche | **10** *(5 / 10)* | $-1\text{s}$ d'attente avant la touche par niveau. |
| **79** | **Raccommodage** | `minecraft:mending` | ⏳ À valider | Tout équipement avec durabilité | **1** *(Toggle)* | Répare l'objet grâce à l'expérience ramassée. |
| **80** | **Chasseur de Trésors**| `chouchou:treasure_seeker` | ⏳ À valider | Canne à pêche | **10** *(5 / 10)* | $+5\%$/niv de chance de ferrer des trésors rares (remplace Luck of the Sea). |
| **81** | **Malédiction de Disparition**| `minecraft:vanishing_curse`| ⏳ À valider | Tout équipement | **1** *(Malédiction)* | L'objet disparaît définitivement à la mort. |
