import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Smooth scroll to section with animation
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;
  
  const offset = 80; // Offset for fixed header
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}
