import axios from 'axios';
import { useEffect, useState } from 'react';
import ElementArticle from './ElementsArticle';

function ListArticles() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [mot, setMot] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/produits')
      .then((res) => {
        const data = res.data;
        setArticles(data);
        setFilteredArticles(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deleteProd = async (id) => {
    if (!window.confirm('Are you sure you want to delete')) {
      return;
    }

    await axios.delete('http://localhost:3001/produits/' + id)
      .then(() => {
        console.log('successfully deleted!');
        setArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
        setFilteredArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const rechProd = (e) => {
    const searchTerm = e.target.value;
    setMot(searchTerm);

    if (searchTerm === '') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter((item) => {
        return item.designation.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      }));
    }
  };

  return (
    <div className="container">
      Recherche:
      <input
        type="text"
        value={mot}
        onChange={(event) => rechProd(event)}
      />
      <ElementArticle articles={filteredArticles} deleteProd={deleteProd} />
    </div>
  );
}

export default ListArticles;