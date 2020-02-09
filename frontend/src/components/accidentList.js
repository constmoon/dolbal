import React from 'react';

function getColotByType(accident) {
  return;
};

const AccidentListItem = ({ accident }) => {
  const { type, description } = accident;
  // TODO: accident type에 따른 색상 부여

  return (
    <div>
      <div className="item-type">{type}</div>
      <p className="item-info">{description}</p>
      <style jsx>{`
        .item-type {
          font-weight: bold;
        }
        .item-info {
          margin-top: 0.3rem;
        }
      `}
      </style>
    </div>
  )
};

const AccidentList = ({ accidentList }) => {
  return (
    <div className="acclist-container">
      <h3>사고 및 통제</h3>
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
          margin-top: 1.6rem;
        }
        .acclist-container h3 {
          display: inline-block;
          padding: 0.6rem;
          border: 1px solid #333;
        }
        .acclist .acclist-item {
          padding: 0.6rem;
        }
        .acclist-item + .acclist-item {
          border-top: 1px solid #333;
        }
      `}</style>
    </div>
  )
}

export default AccidentList;