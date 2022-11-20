import "./Task.css";

export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1>Mi primer tarea</h1>
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
