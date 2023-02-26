import React, { useState } from 'react';
import './InterfaceA.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function InterfaceA() {
  const [activeTab, setActiveTab] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const articles = [
    {
      id: 1,
      title: 'Article #1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sapien quis mauris blandit, vitae varius velit iaculis. Mauris placerat, augue quis feugiat imperdiet, velit orci viverra lorem, quis venenatis ex elit sit amet est.'
    },
    {
      id: 2,
      title: 'Article #2',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget ante vel augue sagittis lacinia. Morbi sodales ligula non nibh hendrerit lacinia. Praesent non lacus id augue sollicitudin mollis nec vel quam.'
    }
  ];
  const usefulLinks = [
    {
      id: 1,
      url: 'https://www.example.com/link1',
      label: 'Link 1'
    },
    {
      id: 2,
      url: 'https://www.example.com/link2',
      label: 'Link 2'
    }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <header>
        <h1>Header Title</h1>
        <nav>
          <ul>
            <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Tab 1</li>
            <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Tab 2</li>
            <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>Tab 3</li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="left-column">
          {filteredArticles.map(article => (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
          ))}
        </div>
        <div className="right-column">
          <div className="search-bar">
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
          <div className="useful-links">
            <h3>Useful Links</h3>
            <ul>
              {usefulLinks.map(link => (
                <li key={link.id}><a href={link.url}>{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <footer>
        <span>All rights reserved</span>
        <span>Company Name</span>
      </footer>
    </div>
  );
}

export default InterfaceA;
