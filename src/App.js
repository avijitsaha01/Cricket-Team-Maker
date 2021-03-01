import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Club from './component/Club/Club';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Club></Club>
      <Footer></Footer>
    </div>
  );
}

export default App;
