import React, { useState } from 'react'
import './style.profile.scss'

function Profile() {
  const [isChecked, setIsChecked] = useState(false);
  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    // Toggle the isChecked state when the checkbox changes
    setIsChecked(!isChecked);
  };
  console.log(isChecked)

  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1 className="page-title">Account</h1>
        <div className="settings-section">
          <h2 className="settings-title">General Information</h2>
          <form>
            <div className="row">
              <div className="col-12 col-md-6 mb-md-0 mb-2">
                <input type="text" className="form-control" placeholder="Nom" />
              </div>
              <div className="col-12 col-md-6">
                <input type="text" className="form-control" placeholder="Prénom" />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12 col-md-6 mb-md-0 mb-2">
                <input type="text" className="form-control" placeholder="Username" />
              </div>
              <div className="col col-12 col-md-6 mb-md-0 mb-2">
                <select className="form-control" name="role" id="role">
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Changer Mot de passe
                </label>
              </div>
            </div>
            {
              isChecked ?
                <div className="row mt-2">
                  <div className="col-12 col-md-6 mb-md-0 mb-2">
                    <input type="password" className="form-control" placeholder="Ancien Mot de passe" />
                  </div>
                  <div className="col-12 col-md-6 mb-md-0 mb-2">
                    <input type="password" className="form-control float-right" placeholder="Nouveau Mot de passe" />
                  </div>
                </div>
                :
                null
            }

            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <button type='submit' className="save-btn">Enregistrer</button>
                {/* <button className='btn btn-success'>helloooooooo</button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile