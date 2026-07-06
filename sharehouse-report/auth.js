(function(){
  var HASH = '8bc564a29cf3f5cd043d8a27f73e8a98d67dc723650d0565769ee22e704b699d';
  if (sessionStorage.getItem('hr-auth') === HASH) return;
  var base = window.location.pathname.replace(/\/[^/]*$/, '');
  if (!window.location.pathname.endsWith('/login.html')) {
    window.location.replace(base + '/login.html');
  }
})();
