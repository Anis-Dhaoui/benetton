import React, { useEffect } from 'react'
import { BootstrapTable, TableHeaderColumn, ExportCSVButton } from 'react-bootstrap-table'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import './style.computer-table.scss';

function TableComputer({ computersList }: any) {

    function addSpaceToArrayitems(arr: string[]) {
        console.log(arr)
        return arr.map((item: string) => item = item + " ");
    }

    if (computersList != undefined) {
        var manipulatedComputersList = computersList.map((obj: IComputer) => {
            return {
              ...obj,
              softwares: addSpaceToArrayitems(obj.softwares),
              networkDriveAccess: addSpaceToArrayitems(obj.networkDriveAccess),
              sessions: addSpaceToArrayitems(obj.sessions)
            };
          });
    }


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
            <BootstrapTable data={manipulatedComputersList} striped hover condensed pagination={true}
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