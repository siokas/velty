import ThemeSwitcher from "./ThemeSwitcher";
import NavBar from "./NavBar";

export default function Topbar() {
  return (
    <div className="mt-4 w-full">
      <div className="float-left ml-12">
        <NavBar />
      </div>
      <div className="float-right mr-12">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
