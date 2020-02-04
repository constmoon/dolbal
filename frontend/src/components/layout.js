

const layoutStyle = {
  position: `relative`
};

export default function Layout(props) {
  return (
    <div className="wrap" style={layoutStyle}>
      {props.children}
    </div>
  )
}