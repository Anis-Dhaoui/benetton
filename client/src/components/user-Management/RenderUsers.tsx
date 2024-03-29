import React, { useEffect, useState } from 'react'
import './style.user-management.scss';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { darkMode } from '../navbar/Plugins';
import { useAppDispatch, useAppSelector } from '../../state/store.state';
import { createUser, fetchUsers, updateUser } from '../../state/actions-creators/user.actions-creators';
import { resetPassword } from '../../state/actions-creators/password.actions-creators';
import DeleteUserBtn from './DeleteUserBtn.user-management';

export default function RenderUsers({ usersList }: any) {
    const dispatch = useAppDispatch();
    const [isDarkMode, setisDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkModeStatus')!) || true);
    const { loading, user, errMsg, isAuthenticated } = useAppSelector(state => state.login);
    // console.log(user)


    useEffect(() => {
        localStorage.setItem('darkModeStatus', JSON.stringify(isDarkMode));
        darkMode(isDarkMode);
    }, [isDarkMode]);

    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ CUSTOMIZING ADD NEW USER MODAL INTERFACE $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    useEffect(() => {
        let newBtn = document.querySelector('.react-bs-table-add-btn');
        newBtn!.innerHTML = "Nouveau utilisateur";
    }, [])
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ CUSTOMIZING ADD NEW USER MODAL INTERFACE $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

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
        afterSaveCell: afterSaveCell,
        // Prevent the authenticaticated Admin from Editing his own information from this page...
        // nonEditableRows: function () {
        //     const authenticatedAdmin = user?.user._id
        //     return usersList?.filter((user: any) => user._id === authenticatedAdmin).map((user: any) => user.username);
        // }
    }

    const actionsColumns = (cell?: any, row?: IUser) => {
        const userID = cell;
        return (
            <DeleteUserBtn user={userID} />
        )
    }

    const afterInsertRow = (row: any) => {
        delete row._id;
        dispatch(createUser(row))
    }

    return (
        <div id='users-table' >
            <BootstrapTable data={manipulatedData} striped hover condensed
                options={{
                    clearSearch: true,
                    noDataText: 'Tableau est vide',
                    afterInsertRow: afterInsertRow
                }}
                cellEdit={cellEdit}
                search
                searchPlaceholder="Que cherchez-vous?..."
                insertRow
            >
                <TableHeaderColumn dataField="username" dataAlign="center" dataSort isKey>USERNAME</TableHeaderColumn>
                <TableHeaderColumn dataField="firstName" dataAlign="center" dataSort>NOM</TableHeaderColumn>
                <TableHeaderColumn dataField="lastName" dataAlign="center" dataSort>PRENOM</TableHeaderColumn>
                <TableHeaderColumn dataField="role" editable={{ type: 'select', options: { values: ["Admin", "User"] } }} dataAlign="center" dataSort>ROLE</TableHeaderColumn>
                <TableHeaderColumn dataField="password" dataAlign="center" dataSort>Mot de passe</TableHeaderColumn>
                <TableHeaderColumn dataField="_id" hiddenOnInsert dataFormat={actionsColumns} dataAlign="center" width='50px'><i className="fa fa-cog" style={{ fontSize: '17px', marginLeft: '-10px' }}></i></TableHeaderColumn>
            </BootstrapTable>
        </div >
    )
}
