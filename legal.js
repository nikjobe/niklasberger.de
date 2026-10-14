// Same language logic and storage key as index.html
function setLanguage(lang) {
  document.body.classList.toggle('en', lang === 'en');
  document.documentElement.lang = lang;
  document.getElementById('lang-de').classList.toggle('active', lang === 'de');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  const title = document.body.dataset['title' + (lang === 'en' ? 'En' : 'De')];
  if (title) document.title = title;
  try { localStorage.setItem('preferredLanguage', lang); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  let lang = null;
  try { lang = localStorage.getItem('preferredLanguage'); } catch (e) {}
  if (!lang) lang = (navigator.language || '').startsWith('de') ? 'de' : 'en';
  setLanguage(lang === 'en' ? 'en' : 'de');

  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();

  // Email assembled in JS, as on index.html
  document.querySelectorAll('.email').forEach(el => {
    const email = 'berger' + '@' + 'uni-bremen.de';
    el.href = 'mailto:' + email;
    el.textContent = email;
  });
});
