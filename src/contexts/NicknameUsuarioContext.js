import { createContext, useState } from "react";

export const NicknameUsuarioContext = createContext()

export default function NicknameUsuarioProvider({ children }) {
const lsNicknameUsuario = JSON.parse(localStorage.getItem("nicknameUsuario"))
    const [nicknameUsuario, setNicknameUsuario] = useState(lsNicknameUsuario)
    return (
        <NicknameUsuarioContext.Provider value={{ nicknameUsuario, setNicknameUsuario }}>
            {children}
        </NicknameUsuarioContext.Provider>
    )
}