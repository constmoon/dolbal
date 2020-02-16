import React from 'react';

const SiteInformation = () => {
  // TODO: description 문구 추가하기
  return (
    <section className="site-info">
      <h1 className="title">DOLBAL informations</h1>
      <p className="desc">서울시 도로에서 발생하는 돌발 상황을 실시간으로 제공하여 안전한 외출을 도와줍니다.</p>
    <style jsx>{`
      .site-info {
        padding: 0.6rem;
      }
      .title {
        font-size: 1.65rem;
      }
    `}</style>
    </>
  )
}
export default SiteInformation;