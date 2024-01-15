import { addStylesToHeader } from "@/helpers/add-styles-to-header";
import { sections } from "@/constants/nodes/nodes";
import { sectionObserver } from "@/scripts/observers/section-observer";

import "@/styles/global.scss";
import {
  changeImagesFormatToPng,
  testIsSupportedWebP,
} from "./scripts/test-webp";

document.addEventListener("scroll", addStylesToHeader);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

testIsSupportedWebP().then((isSupported) => {
  if (!isSupported) {
    changeImagesFormatToPng();
  }
});
