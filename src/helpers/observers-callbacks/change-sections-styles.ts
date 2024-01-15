export const changeSectionsStyles = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const { target } = entry;

      target.classList.add("scroll-effect");
      observer.unobserve(entry.target);
    }
  });
};
