const isElementInViewport = (el) => {
  const { top, height } = el.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return top <= viewportHeight && top + height >= 0;
};
