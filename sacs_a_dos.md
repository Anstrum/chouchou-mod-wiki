# 🎒 Analyse & Spécifications des Sacs à Dos des Monstres (Mob Backpacks)

> **Référence** : Implémentation du système inspiré de *Sophisticated Backpacks* dans ChouChou Mod (`com.anstrum.chouchou.features.backpacks.mob`).

---

## 🔍 1. Diagnostic de l'Implémentation Actuelle

En inspectant le code source de `MobBackpackEvents.java`, voici le constat :

| Paramètre | État Actuel dans le Code | Problème Identifié |
| :--- | :--- | :--- |
| **Monstres Éligibles** | Zombie, Squelette, Piglin, Enderman | Correctement ciblés. |
| **Paliers de Sacs** | Cuir (70%), Cuivre (18%), Fer (8%), Or (3%), Diamant (1%) | Bien étagé selon la rareté. |
| **Contenu des Sacs** | Généré uniquement selon le palier du sac (`rollTierLoot`), identique pour tous les mobs | ⚠️ **Aucune distinction par mob !** Un Enderman avec un sac en cuir a du pain, du blé et des torches comme un zombie. |
| **Objets Enchantés** | **Aucun objet enchanté n'est actuellement généré** dans les sacs des monstres | ⚠️ **Manque crucial** : l'Enderman ne drope aucun équipement ou livre enchanté. |
| **Upgrades de Sac** | Modules ajoutés selon le tier (Pickup, Feeding, Smelting, Void, Everlasting...) | Très bien géré, les modules dropent à la mort. |

---

## ⚖️ 2. Tables de Butin Rééquilibrées par Monstre

Pour éviter de casser la progression en début de partie, les **objets enchantés puissants sont réservés aux Endermen**, tandis que les monstres communs conservent un loot utilitaire et thématique.

### 🔮 A. L'Enderman (Le Maître du Butin Enchanté)
L'Enderman est rare dans l'Overworld, difficile à affronter, et le monde de l'End est une zone de fin de jeu. Son sac doit être une vraie récompense :
- **Paliers de sacs** : Exclusivement **Fer (50%)**, **Or (35%)**, ou **Diamant (15%)**.
- **Objets Enchantés Garantis (100% de chance)** :
  - **Livres enchantés rares** (*Mending*, *Silk Touch*, *Glider*, *Wall Grip*, *Endurance*, *Vampirisme*).
  - **Outils ou Armures en diamant enchantés** (ex: Bottes avec *Amortissement* ou Pioche avec *Fortune*).
- **Trésors complémentaires** : Perles de l'Ender (2-6), Yeux de l'Ender, Fruits de chorus, Diamants, Obsidienne.
- **Modules de sac** : *Void Upgrade*, *Everlasting Upgrade*, *Stack Upgrade Tier 2*.

---

### 🧟 B. Le Zombie (Ressources de Base & Exploration)
Le zombie est omniprésent. Son sac ne doit pas donner d'objets surpuissants :
- **Paliers de sacs** : Principalement **Cuir (80%)** et **Cuivre (20%)**.
- **Butin utilitaire** : Pain, Bœuf cuit, Charbon, Torches, Lingots de fer (1-3), Cuivre brut, Cordes.
- **Objets enchantés** : **Aucun livre rare**. Très faible chance (5%) d'avoir un outil en fer usagé avec un enchantement mineur (*Efficacité I* ou *Solidité I*).
- **Modules de sac** : *Pickup Upgrade*, *Feeding Upgrade*.

---

### 🏹 C. Le Squelette (Arsenal de Flèches)
- **Paliers de sacs** : **Cuir (75%)** et **Cuivre (25%)**.
- **Butin utilitaire** : Flèches ordinaires (8-24), Os, Plumes, Cordes.
- **Objets enchantés** : **Aucun livre**. Faible chance (10%) de trouver un arc standard avec *Puissance I* ou *Charge Rapide I*, ou 2-4 flèches spectrales / de faiblesse.
- **Modules de sac** : *Restock Upgrade*.

---

### 🐷 D. Le Piglin (Or & Ressources du Nether)
- **Paliers de sacs** : **Cuir (60%)**, **Cuivre (30%)**, **Or (10%)**.
- **Butin utilitaire** : Lingots d'or (2-6), Pépites d'or, Quartz du Nether, Porc cuit, Briques du Nether.
- **Objets enchantés** : Uniquement sur les sacs en Or (10% de chance), une épée/hache en or avec *Aura de Feu I*.
- **Modules de sac** : *Deposit Upgrade*, *Smelting Upgrade*.

---

## ⚙️ 3. Plan d'Implémentation Technique dans `MobBackpackEvents.java`

Pour activer ces tables de loot riches immédiatement :
1. **Créer une méthode dédiée `generateThematicMobLoot(Mob mob, BackpackTier tier, RandomSource random)`** :
   - Inspecte le type de mob (`if (mob instanceof Enderman) ...`).
   - Tire 1 à 2 objets enchantés garantis si le sac est de palier Fer, Or ou Diamant (via `EnchantmentHelper.enchantItem`).
2. **Ajout des Livres Enchantés (`Items.ENCHANTED_BOOK`)** avec pioche aléatoire dans les tables d'enchantements actives de ChouChou.
3. **Configuration dans `ChouChouConfig`** :
   - `CHANCE_FOR_ENCHANTED_LOOT_IN_MOB_BACKPACKS` (par défaut 40% sur Fer, 75% sur Or, 100% sur Diamant).
