import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Club from './component/Club/Club';

function App() {
  return (
    <div className="container-fluid">
    <h3 className="text-center mt-5 mb-5">Bangladesh Cricket Team Maker</h3>
      <Club></Club>
    </div>
  );
}

export default App;
