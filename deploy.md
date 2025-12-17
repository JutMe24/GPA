# Guide de déploiement GPA Assurances

## 🚀 Option 1: GitHub Pages (Recommandé - Gratuit)

### Étape 1: Créer un compte GitHub
1. Allez sur https://github.com
2. Créez un compte gratuit si vous n'en avez pas

### Étape 2: Initialiser Git et pousser le code
```bash
# Dans le dossier du projet (C:\Users\Lenovo\CascadeProjects\gpa-assurances)
git init
git add .
git commit -m "Initial commit - GPA Assurances website"

# Créez un nouveau repository sur GitHub nommé "gpa-assurances"
# Puis connectez-le:
git remote add origin https://github.com/VOTRE-NOM/gpa-assurances.git
git push -u origin main
```

### Étape 3: Activer GitHub Pages
1. Allez dans votre repository GitHub
2. Cliquez sur "Settings" (Paramètres)
3. Dans le menu de gauche, cliquez sur "Pages"
4. Sous "Build and deployment", sélectionnez:
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
5. Cliquez sur "Save"

### Étape 4: Attendez le déploiement
- Votre site sera disponible à: https://VOTRE-NOM.github.io/gpa-assurances
- Le déploiement prend 1-2 minutes

---

## 🌐 Option 2: Netlify (Très simple - Gratuit)

### Étape 1: Créer un compte Netlify
1. Allez sur https://netlify.com
2. Inscrivez-vous avec GitHub

### Étape 2: Déployer
1. Cliquez "New site from Git"
2. Choisissez GitHub
3. Sélectionnez votre repository "gpa-assurances"
4. Paramètres par défaut sont OK
5. Cliquez "Deploy site"

### Étape 3: Obtenez votre domaine
- Netlify vous donnera un domaine comme: https://amazing-tesla-123456.netlify.app
- Vous pouvez le changer gratuitement en: https://gpa-assurances.netlify.app

---

## 🎯 Option 3: Vercel (Moderne - Gratuit)

### Étape 1: Créer un compte Vercel
1. Allez sur https://vercel.com
2. Inscrivez-vous avec GitHub

### Étape 2: Importer le projet
1. Cliquez "New Project"
2. Choisissez votre repository "gpa-assurances"
3. Cliquez "Deploy"

### Étape 3: Votre site est en ligne !
- Domaine: https://gpa-assurances.vercel.app

---

## 📋 Avant de déployer - Checklist

### ✅ Vérifications importantes:
1. **Tous les liens fonctionnent**
2. **Images s'affichent correctement**
3. **Responsive design OK sur mobile**
4. **Formulaires de contact** (si utilisés)

### 📁 Structure finale:
```
gpa-assurances/
├── index.html
├── a-propos.html
├── mentions-legales.html
├── politique-confidentialite.html
├── cgu.html
├── assurance-auto.html
├── assurance-moto.html
├── assurance-habitation.html
├── rc-decennale.html
├── assurance-vtc.html
├── rc-professionnelle.html
├── styles.css
├── script.js
├── moto-sportive.jfif
├── moto sport.jfif
├── Motos Trail.jfif
├── Cyclomoteurs & VAE
└── README.md
```

---

## 🎯 Recommandation

**Pour débuter: GitHub Pages**
- ✅ 100% gratuit
- ✅ Très fiable
- ✅ Facile à utiliser
- ✅ Intégré à GitHub

**Pour plus de fonctionnalités: Netlify**
- ✅ Formulaires gratuits
- ✅ Analytics
- ✅ Plus rapide

---

## ⚡ Déploiement rapide (GitHub)

Si vous voulez la méthode la plus rapide:

1. **Upload direct sur GitHub:**
   - Allez sur github.com
   - Créez un nouveau repository "gpa-assurances"
   - Cliquez "uploading an existing file"
   - Glissez-déposez tous vos fichiers
   - Cliquez "Commit changes"

2. **Activez GitHub Pages:**
   - Settings → Pages
   - Source: Deploy from branch → main
   - Votre site est en ligne !

---

## 🔧 Après le déploiement

### 🌍 Nom de domaine personnalisé:
- GitHub Pages: Gratuit avec des domaines personnalisés
- Netlify: Inclus gratuitement
- Vercel: Inclus gratuitement

### 📊 Analytics:
- Google Analytics (gratuit)
- Netlify Analytics (gratuit sur Netlify)

### 🔄 Mises à jour:
- Git push → Déploiement automatique
- Modifications en temps réel

---

## 🚨 Important

### 📱 Mobile-first:
- Votre site est déjà responsive ✅
- Testez sur différents appareils

### ⚡ Performance:
- Images optimisées ✅
- CSS minifié ✅
- JavaScript moderne ✅

### 🔒 Sécurité:
- HTTPS automatique sur toutes les plateformes
- Pas de données sensibles dans le code

---

## 🎉 Félicitations !

Votre site GPA Assurances est maintenant prêt à être en ligne avec:
- ✅ Design professionnel
- ✅ Conformité légale française
- ✅ Responsive design
- ✅ Performances optimisées
- ✅ SEO optimisé

Choisissez la méthode qui vous convient le mieux et votre site sera en ligne en quelques minutes !
