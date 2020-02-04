import React from 'react';

function getColotByType(accident) {
  return;
};

const AccidentListItem = ({accident}) => {
  const {type, description} = accident;
  // TODO: accident type에 따른 색상 부여

  return (
    <>
      <div className="desc">
        <p className="info">{type}</p>
        <span className="type">{description}</span>
      </div>
    </>
  )
};

const AccidentList = ({accidentList}) => {
  return (
    <div className="acclist-container">
      <ul className="acclist">
        {accidentList.map((accident, i) => (
          <li key={`acc-${i}`} className="acclist-item">
            <AccidentListItem accident={accident} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        a {
          text-decoration: none;
          color: #000;
        }
        a:hover {
          opacity: 0.6;
        }
        .acclist-container {
          position: relative;
          display: inline-block;
          vertical-align: top;
          max-width: 24rem;
          height: calc(100vh - 3.4rem);
          z-index: 2;
          background-color: #fff;
          color: #000;
        }
        .acclist .acclist-item {
          padding: 0.6rem;
        }
        .acclist .btn-idx {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 50%;
          font-size: 1rem;
          font-weight: bold;
          background-color: #f00;
          color: #fff;
          cursor: pointer;
          border: 0;
        }
        .acclist .info {
          margin-top: 10px;
        }
        .acclist .type {
          display: inline-block;
          vertical-align: top;
          padding: 3px;
          border-radius: 6px;
          margin-top: 10px;
          font-size: 0.85rem;
          font-weight: bold;
          background-color: #b1b1b1;
          color: #fff;
        }
        .acclist .acclist-item + .acclist-item {
          border-top: 1px solid #333;
        }
      `}</style>
    </div>
  )
}

export default AccidentList;