// Cette ligne récupère la barre de navigation qui doit se masquer au scroll.
const siteHeader = document.querySelector('.site-header');
// Cette ligne récupère le bouton burger utilisé sur mobile.
const menuButton = document.querySelector('.menu-button');
// Cette ligne récupère la fenêtre dialog qui sert de menu overlay.
const menuDialog = document.querySelector('.menu-dialog');
// Cette ligne récupère le bouton qui ferme le menu mobile.
const menuClose = document.querySelector('.menu-close');
// Cette ligne récupère tous les liens du menu mobile.
const menuLinks = document.querySelectorAll('.menu-link');
// Cette ligne mémorise la dernière position verticale de la page.
let previousScroll = window.scrollY;

// Cette condition vérifie que le header existe avant d'ajouter le comportement de scroll.
if (siteHeader) {
  // Cette ligne écoute le défilement de la page.
  window.addEventListener('scroll', () => {
    // Cette ligne lit la position actuelle du scroll.
    const currentScroll = window.scrollY;
    // Cette condition garde le header visible tout en haut de la page.
    if (currentScroll <= 0) {
      // Cette ligne indique que le header doit rester visible.
      siteHeader.setAttribute('data-scroll', 'visible');
    // Cette condition masque le header quand on descend.
    } else if (currentScroll > previousScroll) {
      // Cette ligne indique que le header doit se cacher.
      siteHeader.setAttribute('data-scroll', 'hidden');
    // Cette condition réaffiche le header quand on remonte.
    } else {
      // Cette ligne indique que le header doit revenir.
      siteHeader.setAttribute('data-scroll', 'visible');
    }
    // Cette ligne met à jour la dernière position connue.
    previousScroll = currentScroll;
  });
}

// Cette condition vérifie que le bouton et le menu existent avant de les utiliser.
if (menuButton && menuDialog) {
  // Cette ligne ouvre le menu mobile au clic.
  menuButton.addEventListener('click', () => {
    // Cette ligne affiche la fenêtre overlay.
    menuDialog.showModal();
    // Cette ligne indique au lecteur d'écran que le bouton est ouvert.
    menuButton.setAttribute('aria-expanded', 'true');
  });
}

// Cette condition vérifie que le bouton de fermeture existe.
if (menuClose && menuDialog && menuButton) {
  // Cette ligne ferme le menu mobile au clic sur le bouton.
  menuClose.addEventListener('click', () => {
    // Cette ligne referme la fenêtre overlay.
    menuDialog.close();
    // Cette ligne remet l'état fermé sur le bouton burger.
    menuButton.setAttribute('aria-expanded', 'false');
  });
}

// Cette boucle ferme le menu après un clic sur un lien mobile.
menuLinks.forEach((link) => {
  // Cette ligne ajoute le comportement de fermeture à chaque lien.
  link.addEventListener('click', () => {
    // Cette condition évite une erreur si le menu n'est pas ouvert.
    if (menuDialog && menuDialog.open && menuButton) {
      // Cette ligne referme la fenêtre dialog.
      menuDialog.close();
      // Cette ligne remet le bouton burger à l'état fermé.
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
});
