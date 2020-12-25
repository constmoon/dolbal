import React from 'react';

export default function SideLayout(props) {
  return (
    <section className="sidebar">
      {props.children}
      <style jsx>{`
        .sidebar {
          display: inline-block;
          position: relative;
          max-width: 24rem;
          padding: 0 0.6rem;
          background-color: rgba(255,255,255,0.9);
          z-index: 2;
          height: 100vh;
          overflow-y: auto;
        }
      `}</style>
    </section>
  )
}