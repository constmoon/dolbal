import React from 'react';

export default function Layout(props) {
  return (
    <div className="site-info">
      {props.children}
      <style jsx>{`
        .site-info {
          display: inline-block;
          position: relative;
          width: 24rem;
          height: 100vh;
          background-color: #fff;
          z-index: 2;
        }
      `}</style>
    </div>
  )
}