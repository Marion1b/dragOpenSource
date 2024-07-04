

Ce guide vous accompagne tout au long de la configuration de votre compte GitHub et de des modification à faire pour personnaliser votre page.

Bien démarrer avec votre compte GitHub
Avec un compte personnel sur GitHub, vous pouvez importer ou créer des référentiels, collaborer avec d’autres personnes et vous connecter à la communauté GitHub.
(https://docs.github.com/fr/get-started/onboarding/getting-started-with-your-github-account)
(video tuto:    https://www.google.com/search?q=tuto+ouverture+compte+github&rlz=1CAUPFP_enFR1097&oq=tuto+ouverture+compte+github&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTc5NzFqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:54b40483,vid:O7zG0Kmy30c,st:0)

Partie 1 : Configuration de votre compte GitHub
Les premières étapes à suivre pour commencer à utiliser GitHub sont de créer un compte, de choisir un produit qui répond au mieux à vos besoins, de vérifier votre e-mail, de configurer une authentification à deux facteurs et d’afficher votre profil.

Il existe plusieurs types de comptes sur GitHub. Chaque personne qui utilise GitHub possède son propre compte personnel, qui peut faire partie de plusieurs organisations et équipes. Votre compte personnel est votre identité sur GitHub.com, et vous représente en tant qu’individu.

1. Création d’un compte
Pour créer un compte sur GitHub.com, accédez à https://github.com/ et suivez les instructions.
Renseignez votre mail, votre password et votre nom d'utilisateur.

Pour sécuriser votre compte GitHub, vous devriez utiliser un mot de passe fort et unique (au moins 10 caractère une majuscule une minuscule un chiffre et un caractere special). Pour plus de securite faites generer un mot de passe par votre gestionnaire de mot de passe.

2. Choisir votre produit GitHub
Vous pouvez choisir GitHub Free ou GitHub Pro pour avoir accès à différentes fonctionnalités pour votre compte personnel. Vous pouvez effectuer une mise à niveau à tout moment si vous n’êtes pas certain du produit souhaité.

(Pour plus d’informations sur tous les plans de GitHub, consultez « Plans de GitHub ».)

3. Vérification de votre adresse e-mail
 Un test vous sera demandé pour verifier votre condition d'humain puis à la creation de votre compte gitHub un mail vous sera envoyé avec un code de validation à renseigner sur la page github pour valider votre inscription et accéder à votre espace GitHub. Pour vous assurer de pouvoir utiliser toutes les fonctionnalités de votre plan GitHub, vérifiez votre adresse e-mail après avoir créé un compte. Pour plus d’informations, consultez « Vérification de votre adresse e-mail ».

4. Une faille Microsoft oblige desormais l'utilisation de "jeton de connexion" appelé token. Pour créer un token il vous faut vous rendre dans les parametres de votre compte github, tout en bas du menu à gauche trouver "development settings" puis Personnal Token (classic) regler la date d'expiration du jeton et cliquez en bas sur generate token. Attention pensez bien à copier la serie de caractères qui sera générée car elle n'apparaitra qu une seule fois (cliquer sur l'icone de copie les 2 carrés imbriqués à droite de la chaine de caractère, sinon il faudra generer un nouveau token afin de pouvoir le copier et le conserver). Le token est garant de votre identité il remplace le username et le password dans vos demandes de connexions ou pour l'execution de certaines fonctionnalités.

Partie 2: Fork (copie à modifier) du repository ou se trouve le code source de la page 

1. Acceder au repository Source https://github/Marion1b/dragOpenSource et cliquer sur l'option "Fork". Cela crée une copie modifiable du repo dans votre gihub perso. Vous pourrez ensuite accéder aux differents fichiers à modifier pour personnaliser votre page.

2. Pour modifier le code, utiliser un IDE comme vscode ou autre: créer un dossier dans le lequel vous allez cloner votre repo. 
Rendez vous sur votre github perso et copier l'adresse de votre repo (cliquez sur code puis cliquez sur les 2 carrés imbriqués à droite de l'url indiquée)
Dans la fenetre du terminal de votre IDE rendez vous dans le dossier que vous avez créer puis taper la commande

git clone urldevotrerepo(entrée)       (git clone https://.... et entrée)

Une fois cette copie effectuée vous pouvez modifiez les differents fichiers de code selon vos besoins. 

Partie 3: Personnalisation de votre page. Le code est à votre disposition si vous souhaitez le modifier néanmoins pour une personnalisation simple et pratique il suffira de modifier les fichiers .json qui contiennent les informations à modifier.

1.le fichier appearance.json permet de modifier l'aspect visuel de la page (couleurs police de texte etc)

Dans le fichier "appearance.json", vous trouverez les différentes informations que vous pouvez modifier.

"backgroundColor" -> entrez une couleur, en code hexadecimal ou en rgb. La couleur de la police sera automatiquement adaptée pour rester lisible.

Vous pouvez aussi modifier la police en utilisant google font.

a. Trouvez la police de votre choix sur google font
b. Cliquez sur get font
c. Cliquez sur le panier en haut à droite
d. Cliquez sur get embed code
e. Copiez ce qui est écrit dans l'encart en dessous de "Embed code in the <head> of your html "
f. Collez le au début du fichier "index.html" en dessous de <link rel="stylesheet" href="styles/styles.css" />
g. Revenez sur google font, dans l'encart "/Nom-de-votre-police/: CSS classes" vous trouverez à la deuxième ligne quelque chose qui ressemble à ça :
"font-family: "/nom-de-votre-police/", serif;" 
copiez le /nom-de-votre-police/
h. Collez le dans appearance.json : "fontFamily"


2. le fichier content.json permet de modifier le contenu (nom, phrase d'accroche, images, evenements etc).Attention de bien respecter le format du fichier pour que cela fonctionne.

Dans le fichier "contenu.json", vous trouverez les différentes informations que vous pouvez modifier.

"profile_name" -> entrez votre nom de drag

"profile_picture" -> entrez une url pour une image de profil

"picture_description" -> entrez une description de votre image de profil. Pensez aux personnes qui utilisent un lecteur d'écran et ne peuvent pas voir cette image.

"media_instagram" -> entrez le lien de votre profil instagram

"media_tiktok"  -> entrez le lien de votre profil tiktok

"media youtube" -> entrez le lien de votre profil youtube

"email_contact" -> entrez votre email de contact

"dragFamily_name" -> entrez le nom de votre famille drag

"family_instagram" -> entrez le lien du profil insta de votre famille drag

"family_tiktok" ->entrez le lien du profil tiktok de votre famille drag

"family_youtube" -> entrez le lien du profil youtube de votre famille

"regular_events" : {
    "event1": "description event 1",
    "event2" : "description event 2"
},

Dans cette partie vous pouvez ajouter autant d'event que vous souhaitez, pensez à bien mettre une virgule à la fin sauf pour la dernière ligne et à bien conserver les guillemets.

Ex : 

"regular_events" : {
    "event1":"Watching Party drag race saison 3 tous les vendredi",
    "event2" : "Loto tous les dimanches matin au bar gay",
    "event3" : "atelier drag tous les premiers mercredis du mois à 18h à la librairie violette and co"
},

"exceptional_events":{
    "event1": "description event 1",
    "event2" : "description event 2"
},

Cette partie marche pareil que la précédente, vous pouvez y entrez tous vos évènements ponctuels à venir.

"talent" -> vous pouvez copier le code d'intégration d'une de vos vidéos youtube, ou si vous vous y connaissez un peu en html, vous pouvez entrer une image, un lien ou autre avec le code html.
Pour le lien d'intégration youtube : clic droit sur la vidéo, puis "copier le code d'intégration". Et voilà, vous pouvez le copier ici. Attention à remplacer tous les double guillemets de votre copie (") par des guillemets simple (').

ex :
"talent" : "<iframe width='593' height='334' src='https://www.youtube.com/embed/0CAjqaLZ9xk' title='✨ Drag Race France - Le Filip VS. Leona Winter (Céline Dion - Pour que tu m&#39;aimes encore)' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"

3. Une fois les modifs terminées vous revenez sur votre fenetre de terminal (verifier que vous etes bien dans la copie de votre repos) et executer les commandes suivantes :
git add .(entrée)
git commit -m"decrivez les modifs apportées"(entrée)
git push(entrée)
il vous sera alors demandé votre username : recupérez votre token et remplacer votre username par la chaine de caractère de votre token(entrée)
idem pour le password: coller votre token(entrée)

les modifications sont alors apportées à votre repo sur votre github : votre projet est mis à jour avec les modifications que vous avez apportées.


4.Pour la mise en ligne de votre page. Rendez-vous dans les settings de votre repository mis à jour sur votre git perso et selectionner Pages, choisissez la branche que vous voulez mettre ligne "Deployment from a branch" (par defaut ce sera la branche principale main). Cliquez sur Save puis GitHub s'occupe de récupérer vos fichiers dans votre repo et de mettre en ligne votre page qui appaitra sous le nom https://votreusername.github.io./lenomdevotrerepo

Etvoilà votre page est en ligne !
