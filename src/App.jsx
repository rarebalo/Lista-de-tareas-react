import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="container"/>
      <label htmlFor="exampleDataList" className="form-label">
        Datalist example
      </label>
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
      />
      <datalist id="datalistOptions" />
      <datalist />
      <div />
    </>
  );
}

export default App;
