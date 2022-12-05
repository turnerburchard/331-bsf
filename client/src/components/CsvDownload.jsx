import React, {Component, useEffect, useState} from 'react';
import { CSVLink } from "react-csv";
import axios from 'axios';


const CsvDownload = () => {
    const headers = [
        {label: "First_Name", key: "firstName"},
        {label: "Last_Name", key: "lastName"},
        {label: "Email", key: "email"},
    ];

    const [entryList, setEntryList] = useState([])


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/read`).then((response) => {
            setEntryList(response.data)
        })
    }, [entryList])

    class CsvDownload extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            }
            this.csvLinkEl = React.createRef();
        }


        getUserList = () => {
            return entryList
        }

        downloadReport = async () => {
            const data = entryList;
            this.setState({data: data}, () => {
                setTimeout(() => {
                    this.csvLinkEl.current.link.click();
                });
            });
        }

        render() {
            const {data} = this.state;

            return (
                <div>
                    <input type="button" value="Export to CSV (Async)" onClick={this.downloadReport}/>
                    <CSVLink
                        headers={headers}
                        filename="bsf_volunteers.csv"
                        data={data}
                        ref={this.csvLinkEl}
                    />
                </div>
            );
        }
    }
}

export default CsvDownload;