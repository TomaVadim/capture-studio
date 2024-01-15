const testIsSupportedWebP = (): Promise<boolean> => {
  return new Promise((res) => {
    const webP = new Image();
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    webP.onload = webP.onerror = () => {
      res(webP.height === 2);
    };
  });
};

const changeImagesFormatToPng = () => {
  const images = document.querySelectorAll(
    "[data-set='webp']"
  ) as NodeListOf<HTMLImageElement>;
  images.forEach((img) => {
    const currentSrc = img.src;
    const webpSrc = currentSrc.replace(/\.([a-z]+)$/, ".png");
    img.src = webpSrc;
    console.log("Replaced image source with WebP:", img.src);
  });
};

export { testIsSupportedWebP, changeImagesFormatToPng };
