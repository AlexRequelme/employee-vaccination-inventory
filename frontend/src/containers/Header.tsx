import SettingsMenu from "./SettingsMenu";

function Header() {
    return (
        <header className="bg-white w-full py-4 shadow-md">
            <div className="mx-4 lg:w-4/5 lg:mx-auto flex justify-between items-center">
                <h1 className="text-kc-orange-dark text-3xl lg:text-5xl flex items-center text-center italic">
                    Kruger
                </h1>
                <div>
                    <SettingsMenu />
                </div>
            </div>
        </header>
    );
}

export default Header;
