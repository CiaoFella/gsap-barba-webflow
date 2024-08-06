import heroAnimation from '../animations/hero';

function init() {
  console.log('hero init');
  heroAnimation.init();
}

function cleanup() {
  heroAnimation.cleanup();
}

export default {
  init,
  cleanup,
};
