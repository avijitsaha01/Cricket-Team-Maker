import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Club from './component/Club/Club';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Club></Club>
    </div>
  );
}

export default App;
