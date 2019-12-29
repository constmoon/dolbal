import React from 'react';

class Accident {
  constructor(props) {
    this.type = props.acc_type;
    this.desc = props.acc_info;
    this.name = '';
    this.color = '';
  }
  getAccidentColor = () => {
    switch (this.name) {
      case '집회및행사':
        this.color = '#F02928';
        break;
      case '기타':
        this.color = '#2C873A';
        break;
      default:
        this.color = '#1234A8';
    }
    return this.color;
  }
}

const TempAccList = (props) => {
  return (
    <div className="acclist-container">
      <ul className="acclist">
        {props.data.map((row, i) => {
          const accident = new Accident(row);
          accident.name = props.getAccidentType(accident.type);
          accident.color = accident.getAccidentColor();
          return (
            <li key={`row-${i}`} className="acc-item">
              <div className="desc">
                <button type="button" className="btn-idx" style={{ backgroundColor: accident.color }}>{i + 1}</button>
                <p className="info">{accident.desc}</p>
                <span className="type">{accident.name}</span>
              </div>
              <button type="button" className="btn-detail">+</button>
            </li>
          );
        })}
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
          margin-top: 15px;
        }
        .acclist .type {
          display: inline-block;
          vertical-align: top;
          padding: 3px 10px;
          border-radius: 6px;
          margin-top: 20px;
          font-size: 0.85rem;
          border: 1px solid #888;
          color: #333;
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