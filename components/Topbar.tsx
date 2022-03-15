import ThemeSwitcher from "./ThemeSwitcher";

export default function Topbar() {
  return (
    <div className="w-full">
      <div className="float-right mr-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
