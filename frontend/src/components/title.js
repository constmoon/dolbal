import React from 'react';

const SiteInformation = () => {
  return (
    <div className="site-info">
      <h1 className="title">DOLBAL informations</h1>
      <p className="desc">서울시 교통 돌발정보를 수집하고 재구성합니다.</p>
      <style jsx>{`
      .site-info {
        margin-top: 0.6rem;
      }
      .section-title {
        font-size: 1.65rem;
      }
    `}</style>
    </div>
  )
}
export default SiteInformation;