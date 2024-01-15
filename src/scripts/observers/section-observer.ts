import { sectionObserverOptions } from "@/configs/sections-observer.config";
import { changeSectionsStyles } from "@/helpers/observers-callbacks/change-sections-styles";

export const sectionObserver = new IntersectionObserver(
  changeSectionsStyles,
  sectionObserverOptions
);
