import React from 'react';

export default function Layout(props) {
  return (
    <div className="site-info">
      {props.children}
      <style jsx>{`
        .site-info {
          display: inline-block;
          position: relative;
          max-width: 24rem;
          height: calc(100vh - 3.4rem);
          background-color: #fff;
          z-index: 2;
        }
      `}</style>
    </div>
  )
}