import React from "react";

const DemoList = () => {
  return (
    <div className="demolist-container">
      <h3>이번 주 집회/행사(예정)</h3>
      <ul className="demolist">
        <li></li>
      </ul>
      <style jsx>{`
        .demolist-container h3 {
          display: inline-block;
          padding: 0.6rem;
          border: 1px solid #333;
          margin-top: 1.8rem;
        }
      `}
      </style>
    </div>
  )
};

export default DemoList;