import Header from "./components/Header/Header";
import NicknameUsuarioProvider from "./contexts/NicknameUsuarioContext";

import UsuarioProvider from "./contexts/UsuarioContext";
import BuscaPage from "./pages/BuscaPage";
import FeedPage from "./pages/FeedPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NovoPostPage from "./pages/NovoPostPage";
import SeguidoresPage from "./pages/SeguidoresPage";
import SeguindoPage from "./pages/SeguindoPage";
import SignUpPage from "./pages/SignUpPage";
import { ContainerPrincipal } from "./styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const lsSessao = JSON.parse(localStorage.getItem("sessao"))
  return (
    <ContainerPrincipal>
      <BrowserRouter>
      <UsuarioProvider>
      <NicknameUsuarioProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/:nickname" element={<HomePage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pesquisar" element={<BuscaPage />} />
        <Route path="/novo" element={<NovoPostPage />} />
        <Route path="/:nickname/seguidores" element={<SeguidoresPage />} />
        <Route path="/:nickname/seguindo" element={<SeguindoPage />} />
      </Routes>
      </NicknameUsuarioProvider>
      </UsuarioProvider>
      </BrowserRouter>
    </ContainerPrincipal>
  );
}

export default App;
