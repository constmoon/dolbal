

const layoutStyle = {
  margin: 20,
  pading: 20
};

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      {props.children}
    </div>
  )
}