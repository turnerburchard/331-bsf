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
            <button style={{"width":"20%","alignItems":"center","backgroundImage":"linear-gradient(144deg,#AF40FF," +
                    " #5B42F3 50%,#00DDEB)","border":"0","borderRadius":"8px","boxShadow":"rgba(151, 65, 252, 0.2) 0" +
                    " 15px 30px -5px","boxSizing":"border-box","color":"#FFFFFF","fontFamily":"Phantomsans," +
                    " sans-serif","fontSize":"14px","justifyContent":"center","lineHeight":"1em","maxWidth":"100%","minWidth":"140px","padding":"10px 20px","textDecoration":"none","userSelect":"none","WebkitUserSelect":"none","touchAction":"manipulation","whiteSpace":"nowrap","cursor":"pointer","margin":"1em"}}><CSVLink style={{color: "white", textDecoration: "None"}}{...csvreport}>Export to CSV</CSVLink></button>
        </div>

    );

}

export default CsvDownload;