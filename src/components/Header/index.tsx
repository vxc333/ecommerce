import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href="/">
        <h1 className="w-16 h-16 content-center text-2xl font-bold">
          {" "}
          BigCommerce
        </h1>
      </Link>

      <div className="flex items-center space-x-2.5 text-sm">
        <Button>Entrar</Button>
        <Button variant={"secondary"}>Cadastrar</Button>
      </div>
    </header>
  );
}

export default Header;
