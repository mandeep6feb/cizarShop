import './App.css';
import Router from './routers/Router';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
  <div >
      <Header />
      <div className='main_page'>
        <Router />
      </div>
      <Footer />
   </div>
  );
}

export default App;
