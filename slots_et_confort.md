---
layout: default
title: "Slots Dédiés & Confort de Jeu — ChouChou Mod"
---

# 🛡️ Slots Dédiés, Trade Cycler & Confort de Jeu

> **Modules** : `slots`, `trade_cycler`, `autobackup`, `core`  
> Améliorations de confort (*Quality of Life*) intégrées pour fluidifier l'expérience sans dénaturer le gameplay Vanilla.

---

## 🦺 1. Slots d'Équipement Dédiés (Élytre & Sac à Dos)

L'inventaire du joueur intègre une colonne de deux emplacements dédiés à droite de l'aperçu 3D du personnage :

| Slot | Équipement Accepté | Comportement & Rendu |
| :--- | :--- | :--- |
| **Slot Élytre (Slot `46`)** | Tout planeur (`DataComponents.GLIDER`, Élytres) | Permet de **porter simultanément un Plastron d'armure et une Élytre**. Vol plané natif, usure normale et rendu des ailes dans le dos. |
| **Slot Sac à Dos (Slot `47`)** | Tout sac à dos du mod ou compatible | Équipe le sac directement sur le dos du joueur (modèle 3D visible par tous). **Protégé à la mort** (`copyOnDeath`). |

- **Équipement Rapide** : faire `Maj + Clic` sur une Élytre dans l'inventaire l'envoie automatiquement dans le slot dédié plutôt que dans le slot Plastron.
- **Raccourci `Touche B`** : ouvre en priorité absolue le sac installé dans le slot dédié.

---

## 🔄 2. Relance des Échanges & Enchantements (`trade_cycler`)

Un bouton compact `20×20` pixels est injecté directement à gauche des fenêtres de marchandage et d'enchantement :

### 👨‍🌾 Relance des Villageois (Marchand)
- **Coût** : **100 % Gratuit**.
- **Condition** : le villageois ne doit avoir effectué aucun échange avec un joueur (sa barre de progression d'expérience doit être vide).
- **Fonctionnement** : clique sur le bouton pour rafraîchir instantanément les offres du villageois jusqu'à obtenir le livre enchanté ou l'objet souhaité, sans avoir à casser et reposer son pupitre manuellement.

### ✨ Relance de la Table d'Enchantement
- **Coût** : **1 Lapis-lazuli**.
- **Fonctionnement** : régénère immédiatement la seed d'enchantement et les 3 propositions sans obliger le joueur à enchanter un objet poubelle à 1 niveau.

---

## 💾 3. Sauvegarde Automatique Sécurisée (`autobackup`)

Pour sécuriser vos parties coopératives contre les crashs ou les corruptions de données :
- **Instantané Asynchrone** : le monde est compressé en archive ZIP horodatée en arrière-plan sans **aucun gel d'image ni chute de TPS (0 ms de freeze)**.
- **Sauvegarde Périodique** : déclenchée automatiquement par défaut toutes les **30 minutes** de jeu.
- **Rotation Automatique** : conserve automatiquement les **5 sauvegardes les plus récentes** et purge les plus anciennes.
- **Commande Manuelle** : tapez `/chouchou backup` à tout moment pour forcer une sauvegarde avant une expédition périlleuse.
