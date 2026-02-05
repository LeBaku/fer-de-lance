# ⚔️ Fer-de-Lance Companion

Une **PWA (Progressive Web App)** légère et intuitive pour gérer tes parties de **Warhammer Age of Sigmar: Spearhead**. 
L'objectif est de garder les yeux sur la table de jeu, pas dans les bouquins !

## ✨ Fonctionnalités

- 📜 **Warscrolls Tactiques** : Toutes les stats de tes unités optimisées pour mobile.
- 🎯 **Suivi de Score** : Un compteur de Points de Victoire (PV) et Points de Commandement (PC) intégré.
- 🃏 **Aides de Jeu** : Accès rapide aux aptitudes de faction et aux tactiques de bataille.
- 🔋 **Mode Offline** : Fonctionne même dans les sous-sols des clubs grâce au mode PWA.
- 🌑 **Interface Grimdark** : Un mode sombre conçu pour l'univers AOS avec Chakra UI.

## 🛠️ Stack Technique

- **Framework** : Vite.js + React (TS)
- **UI** : Chakra UI pour des composants propres et réactifs.
- **Backend** : Supabase (Database & Auth).
- **Contenu** : Rendu Markdown avec `react-markdown`.
- **Déploiement** : Vercel (Hébergement gratuit).

## 🚀 Installation locale

1. **Cloner le projet**
```bash
git clone git@github.com:LeBaku/fer-de-lance.git
cd fer-de-lance
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**
Copie le fichier `.env.example` en `.env` et ajoute tes clés Supabase.

4. **Lancer le serveur de dev**
```bash
npm run dev
```

## 📦 Déploiement

Le projet est configuré pour être déployé sur **Vercel** ou **Netlify**. 
N'oubliez pas d'ajouter les variables d'environnement `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` dans les paramètres de votre service d'hébergement.

---

*Fait avec ❤️ par des fans pour des fans. Warhammer Age of Sigmar est la propriété de Games Workshop.*