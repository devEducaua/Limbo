import Search from "./Search";

export default function Header() {

    return (
        <header className="w-full h-15 flex justify-between items-center px-6">
            <a href="/" className="text-zinc-600 text-[1.5em]">
                <p>Limbo</p>
            </a>

            <Search />

            <a href="/" className="text-zinc-600 text-[1.5em]">
                <img src="public/amelie.webp" alt="User.image" className="w-10 h-10 rounded-full"/>
            </a>

        </header>
    )
}
