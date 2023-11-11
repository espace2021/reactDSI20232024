import ListArticles from "./components/ListArticles";
import AjoutArticle from "./components/AjoutArticle";
import Menu from './Menu'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import EditArticle from './components/EditArticle';
import ListCards from './components/clientSide/ListCards';
import { CartProvider } from "use-shopping-cart";
import Cart from "./components/clientSide/Cart";
import PdfCart from "./components/clientSide/PdfCart";

function App() {
  return (
    <CartProvider>
    <Router>
     <Menu />
      <Routes>
      <Route path='/articles' element={<ListArticles/>}/>
      <Route path='/addArticle' element={<AjoutArticle/>}/>
      <Route path='/editArticle/:id' element={<EditArticle/>}/>
      <Route path='/' element={<ListCards/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/pdfCart' element={<PdfCart/>}/>
     </Routes>
    </Router>
    </CartProvider> 
  );
}
export default App;