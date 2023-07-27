import GlobalStyle from '../../assets/globalStyles';
import SidebarContextProvider from '../../context/SidebarContext';

export default function MainWrapper({ children }) {
  return (
    <SidebarContextProvider>
      {children}
      <GlobalStyle />
    </SidebarContextProvider>
  );
}
