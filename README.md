## <a name="introduction">🤖 Introduction</a>

Une application LMS (Learning Management System) en mode SaaS intégrant l’authentification des utilisateurs, la gestion des abonnements et des paiements via Next.js, Supabase et Stripe — avec en plus l’intégration de Vapi AI, un agent vocal intelligent permettant des sessions d’apprentissage interactives et fluides.

<img src="" />

## <a name="tech-stack">⚙️ Tech Stack</a>

* **Next.js 14**	Framework React full-stack avec App Router
* 
* **Supabase**	Base de données en temps réel + authentification
* 
* **Stripe**	Gestion des paiements et abonnements
* 
* **Clerk**	Authentification et gestion des utilisateurs
* 
* **Vapi**	Agent vocal IA pour les sessions conversationnelles
* 
* **Tailwind CSS**	Framework CSS utilitaire-first
* 
* **shadcn/ui**	Bibliothèque de composants accessibles et personnalisables
* 
* **TypeScript**	Typage statique pour un code robuste
* 
* **Sentry**	Suivi des erreurs et performance monitoring
* 

## <a name="features">🔋 Fonctionnalités</a>

👉 Agents vocaux IA : Suis des sessions de tutorat interactives avec des IA vocales spécialisées dans les sujets que tu souhaites approfondir.

👉 Authentification : Inscription et connexion sécurisées via Clerk, avec prise en charge de Google et d’autres fournisseurs OAuth.

👉 Facturation et abonnements : Gère facilement tes formules, mises à niveau et informations de paiement grâce à Stripe.

👉 Favoris et historique de sessions : Permets aux utilisateurs d’organiser leur apprentissage en mettant en favoris des tuteurs et en consultant leurs sessions passées.

👉 Réutilisabilité du code : Profite d’une base de code modulaire et de composants réutilisables pour un développement rapide et maintenable.

👉 Création de tuteur personnalisé : Crée ton propre tuteur IA en choisissant la matière, le sujet et le style de conversation.

👉 Compatibilité multi-appareils : Interface entièrement responsive, fluide et adaptée à tous les écrans (mobile, tablette, desktop).

👉 Intégration de base de données : Exploite Supabase pour la gestion en temps réel des données et du stockage.

👉 Interface moderne : Design sobre, intuitif et réactif, conçu avec Tailwind CSS et shadcn/ui pour une expérience utilisateur haut de gamme.

👉 Stack technologique évolutive : Développé avec Next.js, garantissant des performances élevées et une mise à l’échelle fluide en production.

👉 Fonctionnalité de recherche : Trouve rapidement des tuteurs grâce à un moteur de recherche performant et des filtres intelligents.

<a name="quick-start">🤸 Démarrage rapide</a>

Suis ces étapes pour configurer le projet localement sur ta machine.

**Prerequisites**

Assure-toi d’avoir les outils suivants installés sur ton ordinateur :

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)


**Cloner le dépôt**

```bash
git clone https://github.com/nwantou/Language-management-system.git
cd saas-app
```

**Installation**

Installe les dépendances nécessaires au projet :

```bash
npm install
```

**Configurer les variables d’environnement**

Crée un fichier nommé .env à la racine du projet et ajoute-y les variables suivantes :

```env
# Sentry
SENTRY_AUTH_TOKEN=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Remplace les valeurs par les clés réelles obtenues auprès des services suivants : ImageKit, NeonDB, Upstash, and Resend credentials.

**Lancer le projet**

```bash
npm run dev
