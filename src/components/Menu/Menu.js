import { FaTimes, FaCat, FaDove, FaCandyCane, FaShoePrints, FaSkullCrossbones, FaAirFreshener, FaAffiliatetheme, FaAngry } from 'react-icons/fa'
import { MenuEstilizado, Opções, ContainerIcone } from './styled'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UsuarioContext } from '../../contexts/UsuarioContext'
import { useContext } from 'react'
import { url } from '../../constants/constante'
import { NicknameUsuarioContext } from '../../contexts/NicknameUsuarioContext'



export default function Menu({ active }) {
    const { sessao } = useContext(UsuarioContext)
    const { nicknameUsuario, setNicknameUsuario } = useContext(NicknameUsuarioContext)

    function irSair() {
        if (!nicknameUsuario) {
            return navigate("/login")
        }
        const config = { headers: { Authorization: `Bearer ${sessao}` } }
        const sair = axios.delete(`${url}/sair/sessoes`, config)
        sair.then((res) => {
            localStorage.removeItem("sessao");
            localStorage.removeItem("nicknameUsuario");
            setNicknameUsuario(null)
            navigate("/login")
        })
        sair.catch((err) => console.log(err.response.message))
    }

    const navigate = useNavigate()

    function irNovo() {
        if (nicknameUsuario) {
            return navigate("/novo")
        }
        navigate("/login")
    }
    function irPerfil() {
        if (nicknameUsuario) {
            return navigate(`/${nicknameUsuario}`)
        }
        navigate("/login")
    }
    function irPesquisar() {
        navigate("/pesquisar")
    }
    function irFeed() {
        navigate("/")
    }
    function irEntrar() {
        if (nicknameUsuario) {
            return navigate(`/${nicknameUsuario}`)
        }
        navigate("/login")
    }
    function fecheMenu() {
        active(false)
    }
    return (
        <MenuEstilizado menu={active}>

            <div className='fechar'>
                Olá, {nicknameUsuario}  <FaTimes onClick={fecheMenu} />
            </div>


            <Opções>
                <ContainerIcone onClick={irEntrar}>
                    <FaCandyCane />
                    Entrar
                </ContainerIcone>

                <ContainerIcone onClick={irPerfil}>
                    <FaCat />
                    Meu Perfil
                </ContainerIcone>


                <ContainerIcone onClick={irNovo}>
                    <FaAirFreshener />
                    Novo Post
                </ContainerIcone>
                
                <ContainerIcone onClick={irPesquisar}>
                    <FaDove />
                    Pesquisar
                </ContainerIcone>

                <ContainerIcone onClick={irFeed}>
                    <FaShoePrints />
                    Feed
                </ContainerIcone>

                <ContainerIcone onClick={irSair}>
                    <FaSkullCrossbones />
                    Sair
                </ContainerIcone>
            </Opções>
        </MenuEstilizado>
    )
}