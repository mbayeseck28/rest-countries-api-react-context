import { createContext, useContext, useEffect, useState, useRef } from "react"

const Context = createContext()

const CountriesProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('https://restcountries.com/v3.1/all');
  const [showContent, setShowContent] = useState(true);
  const [detail, setDetail] = useState('');
  const originalDataRef = useRef([]);


  useEffect(() => {
    setIsLoading(true); // Mettre à jour isLoading pour indiquer le chargement des données
  
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsLoading(false); // Mettre à jour isLoading pour indiquer la fin du chargement des données
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); // Mettre à jour isLoading en cas d'erreur
      });
  });
  // useEffect(() => {
  //   if (data.length !== 0) {
  //     setIsLoading(false);
  //   }
  // }, [data]);

  function detailsPays(cle) {
    const cleRecherche = 'population';
    const valeurRecherche = cle;
    const objetTrouve = data.find(
      (objet) => objet[cleRecherche] === valeurRecherche
    );
    setShowContent(false);
    setDetail(objetTrouve);
  }

  function cherchePays(e) {
    const searchTerm = e.target.value.toLowerCase();

    if (originalDataRef.current.length === 0) {
      originalDataRef.current = data.slice();
    }

    const filteredCountries = originalDataRef.current.filter((pays) => {
      return pays.name.common.toLowerCase().includes(searchTerm);
    });

    setData(filteredCountries);
  }

  function chercheRegion(e) {
    const countrySearch = e.target.value.toLowerCase();
    countrySearch === 'all'
      ? setUrl('https://restcountries.com/v3.1/all')
      : setUrl(`https://restcountries.com/v3.1/region/${countrySearch}`);
        fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error));
  }

  const contextValue = {
    data,
    detailsPays,
    detail,
    showContent,
    setShowContent,
    cherchePays,
    chercheRegion
  }

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export const useCountriesContext = () => useContext(Context)

export default CountriesProvider