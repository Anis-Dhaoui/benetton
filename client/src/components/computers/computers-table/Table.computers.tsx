import React, { useEffect } from 'react'
import { BootstrapTable, TableHeaderColumn, ExportCSVButton } from 'react-bootstrap-table'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import './style.computer-table.scss';


function TableComputer({ computersList }: any) {

    // var accounts = [
    //     {
    //         "_id": "646b8eb966c560690bb4d4c4",
    //         "ref": "abdabb11c2cw",
    //         "brandName": "Dell",
    //         "model": "3020",
    //         "os": "win7",
    //         "type": "desktop",
    //         "cpu": "i5-12500",
    //         "status": "running",
    //         "usedBy": "Mabrouk",
    //         "sessions": [
    //             "Mabrouk ",
    //             "Sahraoui ",
    //             "Mouez"
    //         ],
    //         "softwares": [
    //             "tims",
    //             "citrix",
    //             "iris"
    //         ],
    //         "networkDriveAccess": "T:/U:/X:",
    //         "group": "Modelaria",
    //         "createdAt": "2023-05-22T15:48:09.797Z",
    //         "updatedAt": "2023-05-22T15:48:09.797Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "646c7b3b05c15370259a425b",
    //         "ref": "PC0454-GDN34S3",
    //         "brandName": "Dell",
    //         "model": "OptiPlex 3000",
    //         "os": "win10",
    //         "type": "desktop",
    //         "cpu": "i5-12500",
    //         "status": "running",
    //         "usedBy": "ussj/Dhaoui anis",
    //         "sessions": [
    //             "ust6/Zid Safa ",
    //             "u09k/Zaag Hamadi ",
    //             "uspw/gazzah ghada "
    //         ],
    //         "softwares": [
    //             "tims ",
    //             "citrix ",
    //             "abaco "
    //         ],
    //         "networkDriveAccess": "T:/U:/F:",
    //         "group": "Service-IT",
    //         "createdAt": "2023-05-23T08:37:15.350Z",
    //         "updatedAt": "2023-05-23T08:37:15.350Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "646c7c3e05c15370259a4260",
    //         "ref": "PC0450-5XXWVL3",
    //         "brandName": "Dell",
    //         "model": "Latitude 5530",
    //         "os": "win10",
    //         "type": "laptop",
    //         "cpu": "i7-1265U",
    //         "status": "running",
    //         "usedBy": "nbouhlel/Bouhlel Nabil",
    //         "sessions": [
    //             "uspx/bel hadj majdi "
    //         ],
    //         "softwares": [
    //             "tims"
    //         ],
    //         "networkDriveAccess": "T:/U:/F:",
    //         "group": "Service-IT",
    //         "createdAt": "2023-05-23T08:41:34.154Z",
    //         "updatedAt": "2023-05-23T08:41:34.154Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "646c7d4105c15370259a4262",
    //         "ref": "PC0418-G4H6BL3",
    //         "brandName": "Dell",
    //         "model": "OptiPlex 3090",
    //         "os": "win10",
    //         "type": "desktop",
    //         "cpu": "i5-10500T",
    //         "status": "running",
    //         "usedBy": "upvy/Skhiri Wiem",
    //         "sessions": [
    //             "upvy/Skhiri Wiem ",
    //             "u09k/Zaag Hamadi "
    //         ],
    //         "softwares": [
    //             "abaco "
    //         ],
    //         "networkDriveAccess": "T:",
    //         "group": "Programmation",
    //         "createdAt": "2023-05-23T08:45:53.156Z",
    //         "updatedAt": "2023-05-23T08:45:53.156Z",
    //         "__v": 0
    //     }
    // ];


    // const cellEdit: any = {
    //     mode: 'dbclick', // double click cell to edit
    // };

    // const selectRow: any = {
    //     mode: 'checkbox' // or radio
    // };


    const handleExportCSVButtonClick = (onclick: any) => {
        onclick();
    }

    const createCustomExportCSVButton = (onClick: any) => {
        return (
            <ExportCSVButton
                btnText='Télécharger la liste'
                onClick={() => handleExportCSVButtonClick(onClick)} />
        );
    }

    return (
        <div id='computer-table'>
            <BootstrapTable data={computersList} striped hover condensed pagination={true}
                options={{
                    withoutNoDataText: true,
                    clearSearch: true,
                    noDataText: 'Tableau est vide',
                    exportCSVBtn: createCustomExportCSVButton
                }}

                search
                searchPlaceholder="Que cherchez-vous?..."

                exportCSV
                csvFileName='Computers List.csv'

            // cellEdit={cellEdit}
            // selectRow={selectRow}
            >
                <TableHeaderColumn dataField="ref" dataAlign="center" dataSort isKey>REF</TableHeaderColumn>
                <TableHeaderColumn dataField="usedBy" dataAlign="center" dataSort width='200'>UTILISÉ PAR</TableHeaderColumn>
                <TableHeaderColumn dataField="group" dataAlign="center" dataSort>GPE</TableHeaderColumn>
                <TableHeaderColumn dataField="sessions" dataAlign="center" dataSort>SESSIONS</TableHeaderColumn>
                <TableHeaderColumn dataField="softwares" dataAlign="center" dataSort width='170px'>PROGS-UTILISÉ</TableHeaderColumn>
                <TableHeaderColumn dataField="networkDriveAccess" dataAlign="center" dataSort>A.L.R</TableHeaderColumn>
                <TableHeaderColumn dataField="brandName" dataAlign="center" dataSort>MARQ</TableHeaderColumn>
                <TableHeaderColumn dataField="model" dataAlign="center" dataSort>MODEL</TableHeaderColumn>
                <TableHeaderColumn dataField="os" dataAlign="center" dataSort>OS</TableHeaderColumn>
                <TableHeaderColumn dataField="type" dataAlign="center" dataSort>TYPE</TableHeaderColumn>
                <TableHeaderColumn dataField="cpu" dataAlign="center" dataSort>CPU</TableHeaderColumn>
                <TableHeaderColumn dataField="status" dataAlign="center" dataSort>STATUS</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}

export default TableComputer