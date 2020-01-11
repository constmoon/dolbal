import React from 'react';

class Accident {
  constructor(props) {
    this.type = props.acc_type;
    this.desc = props.acc_info;
    this.name = '';
    this.color = Accident._getAccidentColor(this.name);
  }
  static _getAccidentColor = name => {
    switch (name) {
      case '집회및행사':
        return '#F02928';
      case '기타':
        return '#2C873A';
      default:
        return '#1234A8';
    }
  }
}

const AccidentListItem = accident => {
  const [type, desc, name, color] = accident;

  name = getTypeName(type);
  color = _getAccidentColor(name);

  return (
    <>
      <div className="desc">
        <button type="button" className="btn-idx" style={{ backgroundColor: color }}>{i + 1}</button>
        <p className="info">{desc}</p>
        <span className="type">{name}</span>
      </div>
      <button type="button" className="btn-detail">+</button>
    </>
  )
};

const TempAccList = props => {
  return (
    <div className="acclist-container">
      <ul className="acclist">
        {/* {props.accidentList.map((row, i) => {
          const accident = new Accident(row);
          return (
            <li key={`row-${i}`} className="acc-item">
              <AccidentListItem accident={accident} />
            </li>
          );
        })} */}
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
          width: 30%;
          height: 100%;
        }
        .acclist {
          border: 1px solid #333;
        }
        .acclist .acc-item {
          padding: 10px;
          display: flex;
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
        .acclist .desc {
          flex-basis: 90%;
          align-items: center;
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
        .acclist .btn-detail {
          display: flex;
          flex-basis: 10%;
          align-items: center;
          justify-content: center;
          padding-right: 0;
          background-color: #fff;
          cursor: pointer;
          border: 0;
          font-size: 1.2rem;
        }
        .acclist .acc-item + .acc-item {
          border-top: 1px solid #333;
        }
      `}</style>
    </div>
  )
}

export default TempAccList;