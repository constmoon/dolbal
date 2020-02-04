import React from "react";

const SiteInformation = () => {
  return (
    <div className="site-info">
      <h1 className="title">DOLBAL informations</h1>
      <style jsx>{`
      .site-info {
        padding: 0 0.6rem;
        height: 3.4rem;
        line-height: 3.4rem;
        border-bottom: 1px solid #000;
        box-sizing: border-box;
      }
      .site-info .title {
        font-size: 1.65rem;
        text-align: center;
      }
    `}</style>
    </div>
  )
}
export default SiteInformation;