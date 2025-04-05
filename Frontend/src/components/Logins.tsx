import LoginInput from "../components/LoginInput"

export default function Login(props) {

    return (
        <main className="h-screen bg-zinc-950 flex justify-center items-center">
            <div className="flex flex-col justify-around items-center text-zinc-700 rounded-lg h-120 p-10">
                <h1 className="font-bold text-zinc-600 text-[5em] mb-10">{props.title}</h1>
                <LoginInput plhd="Username" />
                <LoginInput plhd="Email" />
                <button className="hover:text-zinc-300 rounded-lg px-6 w-50 py-2 m-4 text-[1.5em] hover:bg-zinc-900">{props.p}</button>
            </div>
        </main>
    )
}
