import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

// Arguement: sectionName, threshold
// default threshold = 0.75, when 75% of the element is in the view
// sectionName canbe either "home", "about", "projects"..
export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // use useEffect when want to synchronize the state with some external system. Here example is we want to synchronize the useState in active-section-context(external system).
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName); // disable for a second
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]); // useEffect run when thsese value change

  return {
    ref,
  };
}
