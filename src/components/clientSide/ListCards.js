import axios from 'axios';
import { useEffect, useState } from 'react';
import ElementArticleCard from './ElementsArticleCard';

function ListArticlesCard() {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3001/produits')
      .then((res) => {
         setArticles(res.data);
            })
      .catch((error) => {
        console.error(error);
        });
  }, []);

   return (
    <div className="container">
          <ElementArticleCard articles={articles}  />
    </div>
  );
}

export default ListArticlesCard;