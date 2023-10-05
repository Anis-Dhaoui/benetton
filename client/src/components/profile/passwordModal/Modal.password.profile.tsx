import React, { useState } from 'react'
import './style.passwordModal.profile.scss'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { SubmitHandler, useForm } from 'react-hook-form';


type PASSWORD = {
    currentPassword: string,
    newPassword: string
}


export default function ChangePasswordModal() {
    const [isOpen, setIsOpen] = useState(false);

    let { register, handleSubmit, watch, formState: { errors }, reset } = useForm<any>({ mode: 'all' });

    const onSubmit: SubmitHandler<any> = (data: PASSWORD | any) => {
        console.log("Password changed...")
        console.log(data)
    }

    return (
        <>
                <span onClick={() => setIsOpen(!isOpen)} className="text-danger" data-toggle="modal" data-target="#form"
                style={{
                    marginTop: "20px",
                    cursor: "pointer"
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
                                <label htmlFor="curentPassword">Mot de passe actuel</label>
                                <input type="password" className="form-control" id="curentPassword" aria-describedby="curentPassword" placeholder="Entrer mot de passe actuelle"
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
                                <input type="password" className="form-control" id="newPassword" placeholder="Nouveau mot de passe"
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
                                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirmer mot de passe" />
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button className='modal-buttons' color="primary" onClick={handleSubmit(onSubmit)}>
                        Changer
                    </Button>{' '}
                    <Button className='modal-buttons btn-danger' color="secondary" onClick={() => setIsOpen(!isOpen)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
