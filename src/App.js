import logo from "./logo.svg";
import "./App.css";

function App() {
  const readGoogleSheet = () => {
    // Sort results by id in descending order, take two
    // and return the age as an integer.

    fetch("https://sheetdb.io/api/v1/eu7qvl6qathr7")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const updateGoogleSheet = () => {
    fetch("https://sheetdb.io/api/v1/eu7qvl6qathr7/id/1", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          id: "101",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const deleteGoogleSheet = () => {
    fetch("https://sheetdb.io/api/v1/eu7qvl6qathr7/id/5", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const createGoogleSheet = () => {
    fetch("https://sheetdb.io/api/v1/eu7qvl6qathr7", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            id: "10",
            phone: 4364733,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code>
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener norefereer">
          Lean React
        </a>
        <button onClick={()=>readGoogleSheet()}>Read</button>
        <button onClick={()=>updateGoogleSheet()}>Update</button>
        <button onClick={()=>deleteGoogleSheet()}>Delete</button>
        <button onClick={()=>createGoogleSheet()}>Create</button>

      </header>
    </div>
  );
}

export default App;