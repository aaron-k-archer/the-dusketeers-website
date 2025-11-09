/* The Dusketeers — main JS */
window.DUSK = (function(){
  const api = {};

  // Simple in-memory "subscribe" demo; replace with a real endpoint later (Workers/Pages Functions).
  api.notify = function(e){
    e.preventDefault();
    const email = document.getElementById('email');
    const status = document.getElementById('notify-status');
    if(!email.checkValidity()){
      email.reportValidity();
      return false;
    }
    // Simulate a quick success
    status.textContent = 'Thanks! We\'ll email you when we launch.';
    email.value = '';
    return false;
  };

  // Footer year
  document.addEventListener('DOMContentLoaded', () => {
    const y = document.getElementById('year');
    if(y){ y.textContent = new Date().getFullYear(); }
  });

  return api;
})();