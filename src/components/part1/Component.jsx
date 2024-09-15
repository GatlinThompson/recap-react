export default function Component(props) {
  return (
    <div className="Component">
      <h2 style={{ color: props.color }}>
        {!props.title ? "Basic Component" : props.title}
      </h2>
    </div>
  );
}
