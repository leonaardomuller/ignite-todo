import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego Fernandes",
        role: "CTO at Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "mayk.design/doctorcare" },
      ],
      publishedAt: new Date("2022-06-09 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/maykbrito.png",
        name: "Mayk Britovski",
        role: "Educator at Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "mayk.design/doctorcare" },
      ],
      publishedAt: new Date("2022-06-10 09:00:00"),
    },
  ];

  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}
