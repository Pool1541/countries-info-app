import useSidebar from '../../hooks/useSidebar';
import { StyledMain } from './Main.styled';

export default function Main({ children }) {
  const { display } = useSidebar();

  return <StyledMain isActive={display}>{children}</StyledMain>;
}
