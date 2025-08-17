import { Logo } from "./components/Logo/Logo";
import { Button } from "../../common/Button/Button";

export function Header() {
  return (
    <header className="header">
      <Logo />
      <Button buttonText="LOGIN" onClick={() => alert("Button Clicked!")} />
    </header>
  );
}
