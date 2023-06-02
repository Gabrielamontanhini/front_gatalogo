import { useState } from "react";
import { MeuHeaderEstilizado } from "./styled";
import { FaBars } from 'react-icons/fa'
import Menu from "../Menu/Menu";
import { useNavigate } from "react-router-dom";

export default function Header(){
const navigate = useNavigate()
    const [menu, setMenu]=useState(false)
    function mostreMenu(){
        setMenu(!menu)
    }
    function irFeed(){
        navigate("/")
    }
    return (
        <MeuHeaderEstilizado>
            <div className="menu">
                <FaBars onClick={mostreMenu} />
                {menu && <Menu active={setMenu}/>}
                </div><div className="titulo" onClick={irFeed}>
                <h1>Gatálogo</h1> 
            </div>
        </MeuHeaderEstilizado>
    )
}