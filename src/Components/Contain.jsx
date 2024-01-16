import 'bootstrap/dist/css/bootstrap.min.css';
import { useCountriesContext } from "../providers/Provider"
import Recherche from './Recherche';
import Carte from './Carte';
import Details from './Details';


function Contain() {
    
    const { showContent } = useCountriesContext();

  return (
    <div className="App">
        <div>
            {
            showContent ? (
                <div className='container'>
                    <Recherche />
                    <div className='row'>
                        <Carte />
                    </div>
                </div>
            ) : (
                <div className='container'>
                    <Details />
                </div>
            )
            }
        </div>
    </div>
  );
}

export default Contain;
