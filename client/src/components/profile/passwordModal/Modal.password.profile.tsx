import React, { useState } from 'react'
import './style.passwordModal.profile.scss'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../state/store.state';
import { updatePassword } from '../../../state/actions-creators/password.actions-creators';


export default function ChangePasswordModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const { loading, user, errMsg, isAuthenticated } = useAppSelector(state => state.login);
    const dispatch = useAppDispatch();



    let { register, handleSubmit, watch, formState: { errors }, reset } = useForm<any>({ mode: 'all' });

    const onSubmit: SubmitHandler<any> = (data: IPassword | any) => {
        if (watch().newPassword === watch().confirmPassword) {
            delete data.confirmPassword;
            dispatch(updatePassword(data, user?.user._id, reset));
        }
    }

    const isPasswordMatch: boolean = watch().newPassword === watch().confirmPassword;
    return (
        <>
            <span onClick={() => setIsOpen(!isOpen)} className="text-danger" data-toggle="modal" data-target="#form"
                style={{
                    marginTop: "20px",
                    cursor: "pointer",
                    textDecoration: "underline"
                }}
            >
                Changer mot de passe
            </span>

            <Modal isOpen={isOpen}>
                <ModalHeader toggle={() => setIsOpen(!isOpen)}>Modal title</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="modal-body">
                            <div className="form-group">
                                <div className="form-check" style={{ margin: "-17px auto -6px -23px" }} >
                                    <input onChange={handleShowPassword} className="form-check-input" type="checkbox" id="showHidePassword" />
                                    <label className="form-check-label" htmlFor="showHidePassword">
                                        Afficher Mot de passe
                                    </label>
                                </div>
                                <label htmlFor="curentPassword">Mot de passe actuel</label>
                                <input type={showPassword ? "text" : "password"} className="form-control" id="curentPassword" aria-describedby="curentPassword" placeholder="Entrer mot de passe actuelle"
                                    {...register("currentPassword",
                                        {
                                            required: "Required field"
                                        })
                                    }
                                    name="currentPassword"
                                />
                                {
                                    errors.currentPassword &&
                                    <div className="text-danger">
                                        {errors.currentPassword?.message?.toString()}
                                    </div>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="newPassword">Nouveau mot de passe:</label>
                                <input type={showPassword ? "text" : "password"} className="form-control" id="newPassword" placeholder="Nouveau mot de passe"
                                    {...register("newPassword",
                                        {
                                            required: "Required field",
                                            pattern: {
                                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                                message: 'Au moins 8 caractères [a-z, A-Z, 0-9].'
                                            }
                                        })
                                    }
                                    name="newPassword"
                                />
                                {
                                    errors.newPassword &&
                                    <div className="text-danger">
                                        {errors.newPassword?.message?.toString()}
                                    </div>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirmer mot de passe</label>
                                <input type={showPassword ? "text" : "password"} className="form-control" id="confirmPassword" placeholder="Confirmer mot de passe"
                                    {...register("confirmPassword", { required: "Required field" })}
                                    name="confirmPassword"
                                />
                                {
                                    !isPasswordMatch && watch().confirmPassword.length > 0 &&
                                    <div className="text-danger mb-n4">
                                        Mot de passe ne correspond pas!
                                    </div>
                                }
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button disabled={!isPasswordMatch || errors.newPassword?.message?.toString().length === 0} className='modal-buttons' color="primary" onClick={handleSubmit(onSubmit)}>
                        Changer
                    </Button>{' '}
                    <Button className='modal-buttons btn-danger' color="secondary" onClick={() => setIsOpen(!isOpen)}>
                        Annuler
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
