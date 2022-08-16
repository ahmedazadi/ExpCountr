export default function Container(props) {
  return (
    <div className="container p-8 max-w-7xl mx-auto mt-7">{props.children}</div>
  );
}
