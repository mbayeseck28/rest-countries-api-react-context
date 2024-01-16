import { useCountriesContext } from "../providers/Provider"

import './Carte.css';
import '../App.css';

const Carte = () => {

    const {data, detailsPays} = useCountriesContext();

    return (
        <div className="row m-0 p-0">
            {data.map((pays, index) => (
                <div className='col-sm-6 col-md-4 col-lg-3 mb-3' key={index}>
                    <div className='card shadow border-0'>
                        <button type="button" className="btn m-0 p-0 text-start border-0" onClick={() => detailsPays(pays.population)} >
                            <div className="drapeau">
                                <img src={pays.flags.png} alt="" />
                            </div>
                            <div className="card-body py-4">
                                <span>
                                    <h5><span className="fw-semibold">{pays.name.common}</span></h5>
                                </span>
                                <span>
                                    <h6>Population: <span className="fw-light">{pays.population}</span></h6>
                                </span>
                                <span>
                                    <h6>Région: <span className="fw-light">{pays.continents}</span></h6>
                                </span>
                                <span>
                                    <h6>Capital: <span className="fw-light">{pays.capital}</span></h6>
                                </span>
                            </div>       
                        </button>
                    </div>
                </div>
            ))}
        </div>
            

    
    )
}

export default Carte
