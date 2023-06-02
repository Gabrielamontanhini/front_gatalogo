import { useContext, useState } from "react";
import { Pagina } from "../SignUpPage/styled";
import { useNavigate } from "react-router-dom";
import { url } from "../../constants/constante";
import axios from "axios";
import { UsuarioContext } from "../../contexts/UsuarioContext";
import {  NicknameUsuarioContext } from "../../contexts/NicknameUsuarioContext";

export default function LoginPage(){
    const { setSessao } = useContext(UsuarioContext)
    const { setNicknameUsuario } = useContext(NicknameUsuarioContext)
    const [form, setForm] = useState({ nickname: "", senha: "" })
    const navigate = useNavigate()
    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    function entrarGatalogo(e) {
        e.preventDefault()
        const body = form
        console.log(body)
        const entrar = axios.post(`${url}/entrar`, body)
        entrar.then((res) => {
            const token = res.data
            setSessao(token)
            localStorage.setItem("sessao", JSON.stringify(token))
            setNicknameUsuario(form.nickname)
            localStorage.setItem("nicknameUsuario", JSON.stringify(form.nickname))
            navigate(`/${form.nickname}`)
        }) 
        entrar.catch((err) => {
            alert(err.response.message)})
        
    }
        function irCadastrar(){
            navigate("/cadastro")
        }
    return (
        <Pagina>
            <form onSubmit={entrarGatalogo}>
                <h1>Entrar</h1>
                    <input
                        required
                        type="text"
                        placeholder="nickname"
                        name="nickname"
                        value={form.nickname}
                        onChange={handleForm} />
                    <input
                        type="password"
                        name="senha"
                        onChange={handleForm}
                        value={form.senha}
                        placeholder="Senha" />
                    <button type="submit"><h1>Entrar!</h1></button>
                    <p onClick={irCadastrar}>Não tem conta? Cadastre-se aqui!</p>
                </form>
        </Pagina>
    )
}