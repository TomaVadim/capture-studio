import { header } from "@/constants/nodes/nodes";

export const addStylesToHeader = (): void => {
  if (window.scrollY > 100) {
    header.classList.add("blur");
  } else {
    header.classList.remove("blur");
  }
};
