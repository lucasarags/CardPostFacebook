import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Avatar from "./assets/perfil.png";
import Avatar2 from "./assets/perfil2.png";

const posts = [
  {
    id: 1,
    user: "Fulano de Tal",
    content: "Conteúdo do meu post",
    avatar: Avatar,
    since: "12 h",
    likes: 12,
    comments: [
      { id: 1, content: "Que legal esse post" },
      // { id: 2, content: "Muito bom esse curso" },
    ],
    banner: "./path da imagem",
  },
  {
    id: 2,
    user: "Sicrano",
    content: "Conteúdo do meu post",
    avatar: Avatar2,
    since: "1 h",
    likes: 0,
    comments: [
      { id: 1, content: "muito ruim esse post" },
      { id: 2, content: "Muito bom esse curso" },
    ],
    banner: "./path da imagem",
  },
];

function App() {
  return (
    <>
      <Header />
      <Card posts={posts} />
    </>
  );
}

export default App;
