import React from 'react';
import AddEntry from './AddEntry.jsx';
import CurrentEntries from './CurrentEntries.jsx';
import Footer from './footer/Footer.jsx'
import Header from "./header/Header";

function Home() {

    return (
        <div className="App">
            <h1>Entries</h1>

            <AddEntry />
            <hr />
            <CurrentEntries />
            <hr />
        </div>
    )
}

export default Home;

