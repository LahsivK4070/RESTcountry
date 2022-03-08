import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";

function Country(props) {
  let [name, setName] = useState("");
  let [flag, setFlag] = useState("");
  let [capital, setCapital] = useState("");
  let [language, setLanguage] = useState("");
  let [currency, setCurrency] = useState("");
  let [area, setArea] = useState("");
  let [population, setPopulation] = useState("");
  let [status, setStatus] = useState("");
  let [un, setUn] = useState("");
  let [mapLink, setMapLink] = useState("");
  let [currSymbol, setCurrSymbol] = useState("");
  let [loading, setLoading] = useState(true);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getAllData = async () => {
    props.setProgress(30);
    const url = `https://restcountries.com/v3.1/all`;
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(75);
      props.setCountryArr(parsedData);
      props.setTempArr(parsedData);
    setLoading(false);
    props.setProgress(100);
  };

  const getDataRegion = async () => {
    props.setProgress(30);
    const url = `https://restcountries.com/v3.1/region/${props.region}`;
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(75);
      props.setCountryArr(parsedData);
      props.setTempArr(parsedData);
    setLoading(false);
    props.setProgress(100);
  };

  const getModalDetails = (e) => {
    props.countryArr.forEach((country) => {
      if (country.name.official === e.target.id) {
        setName(country.name.official);
        setCapital(country.capital);
        setFlag(country.flags.svg);
        if (Object.keys(country.languages).length === 1) {
          setLanguage(country.languages[Object.keys(country.languages)[0]]);
        } else {
          setLanguage(
            country.languages[Object.keys(country.languages)[0]] +
              ", " +
              country.languages[Object.keys(country.languages)[1]]
          );
        }
        setCurrency(
          country.currencies[Object.keys(country.currencies)[0]].name
        );
        setCurrSymbol(
          country.currencies[Object.keys(country.currencies)[0]].symbol
        );
        setArea(country.area);
        setPopulation(country.population);
        setStatus(country.status);
        if (country.unMember === true) {
          setUn("Yes");
        } else {
          setUn("No");
        }
        setMapLink(country.maps.googleMaps);
      }
    });
  };

  useEffect(() => {
    if (props.region === "home") {
      getAllData();
    } else {
      getDataRegion();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container" style={{ marginTop: "5rem" }}>
        {props.region === "home" ? (
          <h1 className="text-center">All Countries</h1>
        ) : (
          <h1 className="text-center">
            Countries in {capitalizeFirstLetter(props.region)} Region
          </h1>
        )}
        {loading && <Spinner />}
        <div className="container my-3">
          <div className="row">
            {props.countryArr.map((country) => {
              return (
                <div className="col-md-4" key={country.name.official}>
                  <CountryItem
                    getModalDetails={getModalDetails}
                    countryName={country.name.official}
                    countryCapital={country.capital}
                    countryFlag={country.flags.svg}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Modal
          countryName={name}
          countryCapital={capital}
          countryFlag={flag}
          language={language}
          currency={currency}
          currSymbol={currSymbol}
          area={area}
          population={population}
          status={status}
          un={un}
          mapLink={mapLink}
        />
      </div>
    </>
  );
}

export default Country;
