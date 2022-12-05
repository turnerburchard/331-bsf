import React, {Component, useEffect, useState} from 'react';
import { CSVLink } from "react-csv";
import axios from 'axios'

const CsvDownload = () => {
const headers = [
    { label: "First Name", key: "first_name" },
    { label: "Last Name", key: "last_name" },
    { label: "Email", key: "email_address" },
];
    const [entryList, setEntryList] = useState([])


    // READ (GET)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/read`).then((response) => {
            setEntryList(response.data)
        })
    }, [entryList])

////

const csvreport = {
    data: entryList,
    headers: headers,
    filename: 'bsf_volunteers.csv'
};

    return (
        <div classname="App">
            <h3>Export data to CSV in React - <a href="https://cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
            <csvlink {...csvreport}>Export to CSV</csvlink>
        </div>
    );
        // return (
        //     <div>
        //         <input type="button" value="Export to CSV (Async)" onClick={this.downloadReport} />
        //         <CSVLink
        //             headers={headers}
        //             filename="Clue_Mediator_Report_Async.csv"
        //             data={data}
        //             ref={this.csvLinkEl}
        //         />
        //     </div>
        // );
    }

export default CsvDownload;