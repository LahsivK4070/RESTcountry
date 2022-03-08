import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faCoins, faSquare, faPerson, faMapLocation } from '@fortawesome/free-solid-svg-icons'

function Modal(props) {
  return (
    <>
      <div
        className="modal fade text-white"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-dark">
            <div className="modal-body">
              <div className="d-flex container justify-content-between">
                <div>
                  <h1 className="modal-country-name">{props.countryName}</h1>
                  <h5>{props.countryCapital}</h5>
                </div>
                <div className="flag-container">
                <img src={props.countryFlag} className="rounded float-end" alt="flag" />
                </div>
              </div>
              <div>
                <ul className="data-ul">
                  <li><FontAwesomeIcon icon={faLanguage} /> Language : <strong>{props.language}</strong></li>
                  <li>
                  <FontAwesomeIcon icon={faCoins} /> Currency : <strong>{props.currency} ({props.currSymbol})</strong>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faSquare} /> Area : <strong>{props.area} Km<sup>2</sup></strong>
                  </li>
                  <li><FontAwesomeIcon icon={faPerson} /> Population : <strong>{props.population}</strong></li>
                  <li>Status : <strong>{props.status}</strong></li>
                  <li>UN Member : <strong>{props.un}</strong></li>
                </ul>
              </div>
              <div className="container text-center">
                <a
                  href={props.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-warning"
                >
                  <FontAwesomeIcon icon={faMapLocation} /> Click to see map
                </a>
              </div>
            </div>
            <div className="modal-footer text-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
