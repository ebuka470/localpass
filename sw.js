self.addEventListener('install', e => {
  console.log('LocalPass installed');
});

self.addEventListener('fetch', e => {
  // Let browser handle network requests
});