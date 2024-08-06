import barba from './barba';

let currentAnimationModule = null;

document.addEventListener('DOMContentLoaded', () => {
  console.log('main.js init');
  barba.init();
});

function cleanupCurrentModule() {
  if (currentAnimationModule && currentAnimationModule.cleanup) {
    currentAnimationModule.cleanup();
  }
}

barba.hooks.beforeEnter(({ next }) => {
  cleanupCurrentModule();
});

barba.hooks.after(({ next }) => {
  const pageName = next.namespace;
  import(`./pages/${pageName}.js`)
    .then(module => {
      currentAnimationModule = module.default;
      if (currentAnimationModule.init) {
        currentAnimationModule.init();
      }
    })
    .catch(err => {
      console.error(`Failed to load module for page: ${pageName}`, err);
    });
});
