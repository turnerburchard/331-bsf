import React, {Component, useEffect, useState} from 'react';
import { CSVLink } from "react-csv";
import axios from 'axios'

const headers = [
    { label: "First Name", key: "first_name" },
    { label: "Last Name", key: "last_name" },
    { label: "Email", key: "email_address" },
];

class CsvDownload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.csvLinkEl = React.createRef();
    }


    getUserList = () => {
        const [entryList, setEntryList] = useState([])
        return useEffect(() => {
            axios.get(`${process.env.REACT_APP_HOST}/api/read`).then((response) => {
                setEntryList(response.data)
            })
        }, [entryList])
    }

    downloadReport = async () => {
        const data = await this.getUserList();
        this.setState({ data: data }, () => {
            setTimeout(() => {
                this.csvLinkEl.current.link.click();
            });
        });
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <input type="button" value="Export to CSV (Async)" onClick={this.downloadReport} />
                <CSVLink
                    headers={headers}
                    filename="Clue_Mediator_Report_Async.csv"
                    data={data}
                    ref={this.csvLinkEl}
                />
            </div>
        );
    }
}

export default CsvDownload;