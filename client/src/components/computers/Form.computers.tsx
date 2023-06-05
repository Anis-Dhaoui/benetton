import React from 'react'
import { useAppDispatch, useAppSelector } from '../../state/store.state';
import { createComputer } from '../../state/actions-creators/computer.actions-creators';

function ComputerForm() {
    const dispatch = useAppDispatch();
    let { computers, creating, createdComputer, createError } = useAppSelector(state => state.computers);

    var x = {
        ref: "SSSSSSSSSSSS",
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

    const handleCreateNewComputer = () =>{
        dispatch(createComputer(x))
    }

    if (creating) {
      return <h1>Loading...</h1>
    }
    if (createError) {
      return (
        <div className="alert alert-danger my-5 mx-5" role="alert">
          {createError}
        </div>
      )
    } else if(createdComputer != undefined) {
      console.log("COMPUTER CREATED...");
      console.log(createdComputer);
    }

  return (
    <>
    <div>Computerform</div>
    <button onClick={handleCreateNewComputer}>Create</button>
    </>
  )
}

export default ComputerForm