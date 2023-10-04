import React, { useState } from 'react'
import './style.profile.scss'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../../state/store.state';
import { updateUser } from '../../state/actions-creators/user.actions-creators';
import ChangePasswordModal from './passwordModal/Modal.password.profile';

function Profile() {
  const dispatch = useAppDispatch();

  const [editMode, setEditMode] = useState<boolean>(false);

  const { loading, user, errMsg, isAuthenticated } = useAppSelector(state => state.login);
  const { updating } = useAppSelector(state => state.user);

  let { register, handleSubmit, watch, formState: { errors }, reset } = useForm<any>({ mode: 'all' });

  const onSubmit: SubmitHandler<any> = (data: any, event: any) => {
    event.preventDefault();
    dispatch(updateUser(data, user?.user._id))
    setEditMode(!editMode)
  }
  const handleEditMode = () => {
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
                  style={{ padding: "10px 20px" }}
                  name="Role"
                  defaultValue={user?.user.role}
                  disabled
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 d-flex justify-content-start">
                <ChangePasswordModal />
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                {
                  editMode ?
                    <div className='row'>
                      <div className='col-md-6 col-12 justify-content-center'>
                        <span onClick={handleEditMode} className="save-btn text-danger"> Annuler </span>
                      </div>
                      <div className='col-md-6 col-12'>
                        <button type='submit' className="save-btn text-center"> {updating ? <i className="fas fa-cog fa-spin"></i> : 'Enregistrer'} </button>
                      </div>
                    </div>
                    :
                    <span style={{ width: "auto" }} onClick={handleEditMode} className="save-btn"> Modifier </span>
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