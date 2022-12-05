import React from 'react';
import AddEntry from './AddEntry.jsx';
import CurrentEntries from './CurrentEntries.jsx';
import Footer from './footer/Footer.jsx'
import Header from "./header/Header";
import Csvbutton from "./csvbutton";

function Home() {

    return (
        <div className="App">
            <h1>Entries</h1>

            <AddEntry />
            <hr />
            <CurrentEntries />
            <Csvbutton />
            <hr />
        </div>
    )
}

export default Home;

