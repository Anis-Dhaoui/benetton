import React, { useEffect, useState } from 'react'
import './style.user-management.scss';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { darkMode } from '../navbar/Plugins';
import { useAppDispatch } from '../../state/store.state';
import { fetchUsers, updateUser } from '../../state/actions-creators/user.actions-creators';
import { resetPassword } from '../../state/actions-creators/password.actions-creators';

export default function RenderUsers({ usersList }: any) {
    const dispatch = useAppDispatch();
    const [isDarkMode, setisDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkModeStatus')!) || true);
    useEffect(() => {
        localStorage.setItem('darkModeStatus', JSON.stringify(isDarkMode));
        darkMode(isDarkMode);
    }, [isDarkMode]);

    const manipulatedData = usersList?.map((item: any) => {
        return {
            ...item,
            password: "••••••••••••••••"
        }
    })

    const afterSaveCell = (row: any, cellName: any, cellValue: any) => {
        const obj: any = {}
        let key: any = cellName;
        obj[key] = cellValue;
        if (cellName !== "password") {
            dispatch(updateUser(obj, row._id));
        }
        else {
            const updatedObject = { newPassword: obj.password }
            dispatch(resetPassword(updatedObject, row._id));
        }
    }
    const cellEdit: any = {
        mode: 'dbclick',
        afterSaveCell: afterSaveCell
    };

    return (
        <div id='users-table'>
            <BootstrapTable data={manipulatedData} striped hover condensed
                options={{
                    clearSearch: true,
                    noDataText: 'Tableau est vide',
                }}
                cellEdit={cellEdit}
                search
                searchPlaceholder="Que cherchez-vous?..."
            >
                <TableHeaderColumn dataField="username" dataAlign="center" dataSort isKey>USERNAME</TableHeaderColumn>
                <TableHeaderColumn dataField="firstName" dataAlign="center" dataSort>NOM</TableHeaderColumn>
                <TableHeaderColumn dataField="lastName" dataAlign="center" dataSort>PRENOM</TableHeaderColumn>
                <TableHeaderColumn dataField="role" editable={{ type: 'select', options: { values: ["Admin", "User"] } }} dataAlign="center" dataSort>ROLE</TableHeaderColumn>
                <TableHeaderColumn dataField="password" dataAlign="center" dataSort>Changer Mot de passe</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}
