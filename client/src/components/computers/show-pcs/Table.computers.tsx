import React, { useEffect, useMemo, useState } from 'react'
import { BootstrapTable, TableHeaderColumn, ExportCSVButton } from 'react-bootstrap-table'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import './style.computer-table.scss';
import ActionsBtn from './actionsButton/ActionsBtn.computers';
import { darkMode } from '../../navbar/Plugins';
import TableOptionsBtns from './TableOptionsBtns';
import { useAppSelector } from '../../../state/store.state';

function TableComputer({ computersList }: any) {

    const [isDarkMode, setisDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkModeStatus')!) || true);
    const { loading, user, errMsg, isAuthenticated } = useAppSelector(state => state.login);


    useEffect(() => {
        localStorage.setItem('darkModeStatus', JSON.stringify(isDarkMode));
        darkMode(isDarkMode);
    }, [isDarkMode]);

    function addSpaceToArrayitems(arr: string[]) {
        return arr.map((item: string) => item = item + " ");
    }

    if (computersList !== undefined) {
        var manipulatedComputersList = computersList.map((obj: IComputer) => {
            return {
                ...obj,
                softwares: addSpaceToArrayitems(obj.softwares),
                networkDriveAccess: addSpaceToArrayitems(obj.networkDriveAccess),
                sessions: addSpaceToArrayitems(obj.sessions)
            };
        });
    }

    const actionsColumns = (cell?: any, row?: IComputer) => {
        return (
            <ActionsBtn computer={row} />
        )
    }

    const softColumn = (cell?: any, row?: any) => {
        if (cell.length !== 0) {
            return cell
        } else {
            return <span style={{ fontWeight: '500' }}>none</span>
        }
    }

    const netDrivesColumn = (cell?: any, row?: any) => {
        if (cell.length !== 0) {
            return cell
        } else {
            return <span style={{ fontWeight: '500' }}>none</span>
        }
    }

    const [exportedData, setExportedData] = useState<object[]>(manipulatedComputersList);
    const afterSearch = (searchText: string, result: object[]) => {
        if (exportedData.length !== result.length)
            setExportedData(result)
    }

    return (
        <div id='computer-table'>
            <div className='col-md-6'>
                <TableOptionsBtns list={exportedData} />
            </div>
            <BootstrapTable data={manipulatedComputersList} striped hover condensed pagination={true}
                options={{
                    clearSearch: true,
                    noDataText: 'Tableau est vide',
                    afterSearch: afterSearch
                }}

                search
                searchPlaceholder="Que cherchez-vous?..."
            >
                <TableHeaderColumn dataField="ref" dataAlign="center" dataSort isKey>REF</TableHeaderColumn>
                <TableHeaderColumn dataField="usedBy" dataAlign="center" dataSort width='200'>UTILISÉ PAR</TableHeaderColumn>
                <TableHeaderColumn dataField="group" dataAlign="center" dataSort width='160px'>GPE</TableHeaderColumn>
                <TableHeaderColumn dataField="sessions" dataAlign="center" dataSort>SESSIONS</TableHeaderColumn>
                <TableHeaderColumn dataField="softwares" dataFormat={softColumn} dataAlign="center" dataSort width='170px'>PROGS-UTILISÉ</TableHeaderColumn>
                <TableHeaderColumn dataField="networkDriveAccess" dataFormat={netDrivesColumn} dataAlign="center" dataSort>A.L.R</TableHeaderColumn>
                <TableHeaderColumn dataField="brandName" dataAlign="center" dataSort>MARQ</TableHeaderColumn>
                <TableHeaderColumn dataField="model" dataAlign="center" dataSort>MODEL</TableHeaderColumn>
                <TableHeaderColumn dataField="os" dataAlign="center" dataSort>OS</TableHeaderColumn>
                <TableHeaderColumn dataField="type" dataAlign="center" dataSort>TYPE</TableHeaderColumn>
                <TableHeaderColumn dataField="cpu" dataAlign="center" dataSort>CPU</TableHeaderColumn>
                <TableHeaderColumn dataField="status" dataAlign="center" dataSort>STATUS</TableHeaderColumn>
                {
                    user?.user.role === 'Admin' ?
                        <TableHeaderColumn dataField="ref" dataFormat={actionsColumns} dataAlign="center" width='50px'><i className="fa fa-cog" style={{ fontSize: '17px', marginLeft: '-10px' }}></i></TableHeaderColumn>
                        :
                        null
                }
            </BootstrapTable>
        </div>
    )
}

export default TableComputer