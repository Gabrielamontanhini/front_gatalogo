import { useState } from "react"
import { Pagina } from "./styled"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { url } from "../../constants/constante"
export default function SignUpPage() {
    const [form, setForm] = useState({ nome: "", nickname: "", foto: "", biografia: "", senha: "", confirma: "" })
    const navigate = useNavigate()
    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(form)
        const body = form
        const cadastro = axios.post(`${url}/cadastro`, body)
        cadastro.then((res) => {
            console.log(res.data)
            setForm({ nome: "", nickname: "", foto: "", biografia: "", senha: "", confirma: "" })
            navigate("/login")
        })
        cadastro.catch((err) => console.log(err.response.message))
    }

    function irEntrar(){
        navigate("/login")
    }
    return (
        <Pagina>
            <form onSubmit={cadastrarUsuario}>
                <h1>Cadastro</h1>
                <input
                    required
                    placeholder="Nome"
                    name="nome"
                    value={form.nome}
                    onChange={handleForm} />
                <input
                    required
                    type="text"
                    placeholder="nickname"
                    name="nickname"
                    value={form.nickname}
                    onChange={handleForm} />
                <input
                    required
                    type="text"
                    placeholder="Foto de Perfil"
                    name="foto"
                    value={form.foto}
                    onChange={handleForm}
                />
                <textarea
                    required
                    type="text"
                    name="biografia"
                    onChange={handleForm}
                    value={form.biografia}
                    placeholder="Biografia (até 200 caracteres)" />
                <input
                    required
                    type="password"
                    name="senha"
                    onChange={handleForm}
                    value={form.senha}
                    placeholder="Senha" />
                <input
                    required
                    type="password"
                    placeholder="Confirme sua senha"
                    name="confirma"
                    onChange={handleForm}
                    value={form.confirma} />
                <button type="submit" ><h1>Cadastrar!</h1></button>
                <p onClick={irEntrar}>Já possui conta? Entre aqui!</p>
            </form>
        </Pagina>
    )
}