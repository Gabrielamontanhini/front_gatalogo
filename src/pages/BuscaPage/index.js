import axios from "axios";
import { InfosPerfil } from "../../components/InfosPerfil/InfosPerfil";
import { BuscaRalha } from "./styled";
import { url } from "../../constants/constante";
import { useEffect, useState } from "react";

export default function BuscaPage() {
    const [usuarios, setUsuarios] = useState([{foto: "https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg",nome: "Caralho",nickname:"fdsvc", biografia: "QUero q vc se foda", id: "7"}])
    const [search, setSearch] = useState("")
    const searchLowerCase = search.toLocaleLowerCase()
    const pesquisar = usuarios.filter((usuario) => usuario.nome.toLocaleLowerCase().includes(searchLowerCase) || usuario.nickname.toLocaleLowerCase().includes(searchLowerCase));
    useEffect(()=> {
        const pegarUsuarios = axios.get(`${url}/usuarios`)
        pegarUsuarios.then((res) => {
            setUsuarios(res.data)
        }
        )
        pegarUsuarios.catch((err) => console.log(err.response.message))
    })

    return (
        <BuscaRalha>
            <div className="pesquisa">
            <input type="search"
                    placeholder="Pesquise aqui usuarios"
                    name="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="scroll">
            {pesquisar.map((s) => (
                <InfosPerfil 
                    nome={s.nome}
                    nickname={s.nickname}
                    foto={s.foto}
                        biografia={s.biografia}
                        id={s.id}/>
            ))}
            </div>
            
        </BuscaRalha>
    )
}