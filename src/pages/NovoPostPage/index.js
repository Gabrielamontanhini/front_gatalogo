import { useContext, useState } from "react";
import { NovoPostContainer } from "../../components/AdicionarPost/styled";
import { MeuPostPadronizado } from "../../components/Postagem/styled";
import { UsuarioContext } from "../../contexts/UsuarioContext";
import { url } from "../../constants/constante";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NovoPostPage() {
    const [form, setForm] = useState({ foto_post: '', descrição: '', hora: '' })
    const [display, setDisplay]=useState("none")
    const { sessao } = useContext(UsuarioContext)
    const navigate = useNavigate()
    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    function verPreview(e){
        e.preventDefault()
        if (display === "none"){
            return setDisplay("flex")
        }
        setDisplay("none")
        
    }
    function postarPost(){
        const body = form
        console.log(body)
        const config = { headers: { Authorization: `Bearer ${sessao}` } }
        const enviarPost = axios.post(`${url}/post`, body, config)
        enviarPost.then((res)=>{
           setForm({ foto_post: '', descrição: '', hora: '' })
           navigate("/")
        })
        enviarPost.catch((err) => console.log(err.response.message))

    }
    return (
        <NovoPostContainer display={display}>
            <form onSubmit={verPreview}>
                <h2>Nova Postagem</h2>
<label htmlFor="foto_post">URL da imagem do post</label>
                <input
                    required
                    id="foto_post"
                    name="foto_post"
                    value={form.foto_post}
                    onChange={handleForm}
                    placeholder="Foto"
                />
                <label htmlFor="descrição">Descrição</label>
                <textarea
                id="descrição"
                    type="Textarea"
                    name="descrição"
                    value={form.descrição}
                    onChange={handleForm}
                    placeholder="Descrição"
                />
              <div className="botao">  <button type="submit"><p>Ver Preview</p></button></div>
            </form>
<div className="mostrarPreview">
            <MeuPostPadronizado>
            <h2>Preview do seu novo post</h2>
                <div className="foto_post">
                    <img src={form.foto_post} alt="preview da foto" />
                </div>
                <div className="detalhes">
                    <div className="curtidas"> <div ><p> 66 pessoas curtiram isso! </p></div> <div>MOmento da postagem</div></div>
                    <div className="descrição_post">
                        <p> {form.descrição}</p>
                    </div>
                </div>
                <button onClick={postarPost}><p>Postar</p></button>
            </MeuPostPadronizado>
            </div>
        </NovoPostContainer>
    )
}