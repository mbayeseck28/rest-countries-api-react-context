import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Provider from './providers/Provider';
import Contain from './Components/Contain';


function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <Contain />
      </Provider>
    </div>
  );
}

export default App;
