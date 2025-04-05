import { useState } from "react"

export default function LoginInput(props) {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return(
            <input onChange={handleChange} value={value} className="border-b border-zinc-700 m-2 outline-none text-zinc-700 text-[1.5em] px-4 py-2 focus:border-zinc-300 focus:text-zinc-200 transition-all ease-in-out" type="text" placeholder={props.plhd} />
    )
}
