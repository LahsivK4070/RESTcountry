import React from 'react';

function CountryItem(props) {
    
    return (
        <>
            <div className="card text-white my-3">
                <img src={props.countryFlag} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title ">{props.countryName}</h5>
                    <p className="card-text">Capital: <strong>{props.countryCapital}</strong></p>
                    <button onClick={props.getModalDetails} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" id={props.countryName}>Learn More</button>
                </div>
            </div>
        </>
    );
}

export default CountryItem