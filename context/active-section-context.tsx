"use client";

import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

// interface for children
interface ActiveSectionContextProviderProps {
  children: React.ReactNode;
}

// interface for createContext
interface ActiveSectionContextType {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>; // can setActiveSection from line24 to know the type
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

// createContext hook from react to create context provider
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home"); // for tracking the header section
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
// custom hook for dealing the null problem
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext); // use the context after provided

  if (context === null) {
    // the context will benull if we consume it in a component outside the provide, but in our root structure, all the component is under thhe provide
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
