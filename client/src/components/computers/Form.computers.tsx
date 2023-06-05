import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/store.state';
import { createComputer } from '../../state/actions-creators/computer.actions-creators';

function ComputerForm() {
  const dispatch = useAppDispatch();
  let { computers, creating, createdComputer, createError } = useAppSelector(state => state.computers);

  var x = {
    ref: "VVVVVVVVVVV",
    brandName: "Dell",
    model: "OptiPlex 3090",
    os: "win10",
    type: "desktop",
    cpu: "i5-10500T",
    status: "running",
    usedBy: "upvy / Skhiri Wiem",
    sessions: [
      "upvy / Skhiri Wiem",
      "u09k / Zaag Hamadi"
    ],
    networkDriveAccess: "T:",
    softwares: [
      "abaco"
    ],
    group: "Programmation"
  }

  const handleCreateNewComputer = () => {
    dispatch(createComputer(x))
  }

  return (
    <>
      <div>Computerform</div>
      <button onClick={handleCreateNewComputer}>Create</button>
    </>
  )
}

export default ComputerForm