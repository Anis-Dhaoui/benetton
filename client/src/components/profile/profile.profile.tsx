import React, { useState } from 'react'
import './style.profile.scss'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../../state/store.state';
import { updateUser } from '../../state/actions-creators/user.actions-creators';

function Profile() {
  console.log(localStorage.getItem('loggedUser'))
  const dispatch = useAppDispatch();

  const [isChecked, setIsChecked] = useState(false);
  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    // Toggle the isChecked state when the checkbox changes
    setIsChecked(!isChecked);
  };

  const [editMode, setEditMode] = useState<boolean>(false);

  const { loading, user, errMsg, isAuthenticated } = useAppSelector(state => state.login);
  const { updating } = useAppSelector(state => state.user);
  console.log(updating)

  let { register, handleSubmit, watch, formState: { errors }, reset } = useForm<any>({ mode: 'all' });

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
    dispatch(updateUser(data, user?.user._id))
    setEditMode(!editMode)
    console.log("... onSubmit method Invoked ...")
  }

  const handleEditMode = () => {
    console.log("handleEditMode method invoked...")
    setEditMode(!editMode);
  }

  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1 className="page-title">Account</h1>
        <div className="settings-section">
          <h2 className="settings-title">General Information</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12 col-md-6 mb-md-0 mb-2">
                <input type="text" className="form-control" placeholder="Nom"
                  {...register("firstName",
                    {
                      required: "Required field",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 caractères long SVP"
                      },
                      maxLength: {
                        value: 50,
                        message: "Maximum 50 caractères long SVP"
                      }
                    })
                  }
                  name="firstName"
                  defaultValue={user?.user.firstName}
                  disabled={!editMode}
                />
              </div>
              <div className="col-12 col-md-6">
                <input type="text" className="form-control" placeholder="Prénom"
                  {...register("lastName",
                    {
                      required: "Required field",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 caractères long SVP"
                      },
                      maxLength: {
                        value: 50,
                        message: "Maximum 50 caractères long SVP"
                      }
                    })
                  }
                  name="lastName"
                  defaultValue={user?.user.lastName}
                  disabled={!editMode}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12 col-md-6 mb-md-0 mb-2">
                <input type="text" className="form-control" placeholder="Username"
                  {...register("username",
                    {
                      required: "Required field",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 caractères long SVP"
                      },
                      maxLength: {
                        value: 50,
                        message: "Maximum 50 caractères long SVP"
                      }
                    })
                  }
                  name="username"
                  defaultValue={user?.user.username}
                  disabled={!editMode}
                />
              </div>
              <div className="col col-12 col-md-6 mb-md-0 mb-2">
                <input type="text" className="form-control" placeholder="Role"
                  name="Role"
                  defaultValue={user?.user.role}
                  disabled
                />
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
              <div className="col-md-12 col-4 d-flex justify-content-md-end">
                {
                  editMode ?
                    <>
                      <span onClick={handleEditMode} className="save-btn text-danger"> Annuler </span> &nbsp;&nbsp;
                      <button type='submit' className="save-btn mr-5"> {updating ? <i className="fas fa-cog fa-spin"></i> : 'Enregistrer'} </button>
                    </>
                    :
                    <span onClick={handleEditMode} className="save-btn"> Modifier </span>
                }
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile