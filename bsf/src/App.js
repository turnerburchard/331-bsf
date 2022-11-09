import './App.css';

function App() {

    function sendEmails(){
    }

  return (
    <div className="App">
        <h1>Welcome to BSF</h1>
        <form className="form" onSubmit={sendEmails}>
            <label htmlFor="emailIn">Enter comma separated list of emails here: </label>
            <input id="emailIn" type="file"/>
            <button type="submit">Submit</button>

        </form>
    </div>
  );
}

export default App;
