import { createContext, useState } from 'react';

export const SidebarContext = createContext();

export default function SidebarContextProvider({ children }) {
  const [display, setDisplay] = useState(() => {
    if (window.innerWidth <= 1024) {
      return false;
    } else {
      return true;
    }
  });

  function toggleSidebar() {
    setDisplay((prev) => !prev);
  }

  return (
    <SidebarContext.Provider value={{ display, toggleSidebar }}>{children}</SidebarContext.Provider>
  );
}
