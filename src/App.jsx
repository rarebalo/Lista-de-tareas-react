import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <section className="conteiner">
      <div />
      <label
        htmlFor="exampleDataList"
        className="form-label text-center display-5"
      >
        Ingresa tus tareas
      </label>
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Tu tarea"
      />
      <datalist id="datalistOptions" />
      <datalist />
      <div />
    </section>
  );
}

export default App;
