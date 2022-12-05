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

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/read`).then((response) => {
            setEntryList(response.data)
        })
    }, [entryList])


const csvreport = {
    data: entryList,
    headers: headers,
    filename: 'bsf_volunteers.csv'
};

    return (
        <div>
            <button><CSVLink {...csvreport}>Export to CSV</CSVLink></button>
        </div>

    );

    }

export default CsvDownload;