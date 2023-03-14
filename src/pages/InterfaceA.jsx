import React, { useState } from "react";
import "./InterfaceA.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function InterfaceA() {
  const [activeTab, setActiveTab] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const articles = [
    {
      id: 1,
      title: "Titre de l'article",
      content:
        ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sapien quis mauris blandit, vitae varius velit iaculis. Mauris placerat, augue quis feugiat imperdiet, velit orci viverra lorem, quis venenatis ex elit sit amet est.",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget ante vel augue sagittis lacinia. Morbi sodales ligula non nibh hendrerit lacinia. Praesent non lacus id augue sollicitudin mollis nec vel quam."],
      date: "01/12/2020",
      author: "Nom de l'auteur",
    },
    {
      id: 2,
      title: "Titre de l'article",
      content:
        ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget ante vel augue sagittis lacinia. Morbi sodales ligula non nibh hendrerit lacinia. Praesent non lacus id augue sollicitudin mollis nec vel quam.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sapien quis mauris blandit, vitae varius velit iaculis. Mauris placerat, augue quis feugiat imperdiet, velit orci viverra lorem, quis venenatis ex elit sit amet est."],
      date: "01/12/2020",
      author: "Nom de l'auteur",
    },
  ];
  const categories = [
    {
      id: 1,
      url: "https://www.example.com/link1",
      label: "Catégorie A",
    },
    {
      id: 2,
      url: "https://www.example.com/link2",
      label: "Catégorie B",
    },
    {
      id: 3,
      url: "https://www.example.com/link2",
      label: "Catégorie C",
    },
    {
      id: 4,
      url: "https://www.example.com/link2",
      label: "Catégorie D",
    },
    {
      id: 5,
      url: "https://www.example.com/link2",
      label: "Catégorie E",
    },
    {
      id: 6,
      url: "https://www.example.com/link2",
      label: "Catégorie F",
    },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header>
        <h1>LOGO</h1>
        <nav className="menu">
          <ul>
            <li
              className={activeTab === 1 ? "active" : ""}
              onClick={() => handleTabClick(1)}
            >
              Accueil
            </li>
            <li
              className={activeTab === 2 ? "active" : ""}
              onClick={() => handleTabClick(2)}
            >
              Blogue
            </li>
            <li
              className={activeTab === 3 ? "active" : ""}
              onClick={() => handleTabClick(3)}
            >
              A propos
            </li>
            <li
              className={activeTab === 4 ? "active" : ""}
              onClick={() => handleTabClick(4)}
            >
              Nous joindre
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="articles">
          {filteredArticles.map((article) => (
            <div className="article" key={article.id}>
              <div>
                <h2>{article.title}</h2>
                {article.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="article-footer">
                <ul className="article-infos">
                  <li className="article-date">
                    <FontAwesomeIcon icon={faCalendar} />
                    {article.date}
                  </li>
                  <li className="article-author">
                    <FontAwesomeIcon icon={faUser} />
                    {article.author}
                  </li>
                </ul>
                <button>Lire la suite</button>
              </div>
            </div>
          ))}
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="categories">
          <h3>Catégories</h3>
          <ul>
            {categories.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer>
        <span>&copy; Nom du blogue &#x2022; Tous droits réservés</span>
        <span>Crédits agence web</span>
      </footer>
    </div>
  );
}

export default InterfaceA;
