import React from 'react';

export default function SideLayout(props) {
  return (
    <section className="sidebar">
      {props.children}
      <style jsx>{`
        .sidebar {
          display: inline-block;
          position: relative;
          width: 24rem;
          padding: 0 0.6rem;
          background-color: #fff;
          z-index: 2;
        }
      `}</style>
    </section>
  )
}