import { useState, useRef, useEffect } from 'react';
import React, { Component } from 'react';
import axios from 'axios'
import { CSVLink } from "react-csv";

const CsvDownload = () => {

    const SECRET = process.env.REACT_APP_PASSCODE

    const [entryList, setEntryList] = useState([])


    // READ (GET)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/read`).then((response) => {
            setEntryList(response.data)
        })
    }, [entryList])

    const headers = [
        { label: "First Name", key: "firstName" },
        { label: "Last Name", key: "lastName" },
        { label: "Email", key: "email" }
    ];

    class CsvDownload extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            }
            this.csvLinkEl = React.createRef();
        }
        downloadReport = async () => {
            const data = entryList;
            this.setState({data: data}, () => {
                setTimeout(() => {
                    this.csvLinkEl.current.link.click();
                });
            });
        }
    }

        return(

    <div id= {
        'async'
    }

>
    <input type="button" value="Export to CSV (Async)" onClick={this.downloadReport}/>
    <CSVLink
        headers={headers}
        filename="bsf_volunteers.csv"
        data={data}
        ref={this.csvLinkEl}
    />
</div>
)
}

export default CsvDownload;