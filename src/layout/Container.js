export default function Container(props) {
  return (
    <div className="container max-w-7xl mx-auto mt-7">{props.children}</div>
  );
}
