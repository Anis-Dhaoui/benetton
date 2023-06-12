import React, { useState } from 'react'
import './style.computer-form.css';
import { useAppDispatch, useAppSelector } from '../../../state/store.state';
import { createComputer } from '../../../state/actions-creators/computer.actions-creators';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import Multiselect from 'multiselect-react-dropdown';
import { useForm, SubmitHandler } from "react-hook-form";
import { networkDrivesList, softwaresList } from "./defaultData";



function ComputerForm() {

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ HANDLE ADD NEW COMPUTER FORM $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  let { register, handleSubmit, watch, formState: { errors } } = useForm<any>({ mode: 'all' });
  const onSubmit: SubmitHandler<any> = (data) => {
    data.usedBy = data.usedBy + ' / ' + data.usedByFirstLastName;
    delete data.usedByFirstLastName;
    data.sessions = [data.sessionUtenty + ' / ' + data.sessionFirstLastName]
    delete data.sessionUtenty;
    delete data.sessionFirstLastName;

    data.softwares = softList;
    data.networkDriveAccess = netDrivesList;
    // data.interests = selectedItems;
    // dispatch(handleRegister(data));
    console.log(data)
  }

  const [netDrivesList, setNetDrivesList] = useState<string[]>([]);
  const [softList, setSoftList] = useState<string[]>([]);

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ HANDLE ADD NEW COMPUTER FORM $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  const dispatch = useAppDispatch();
  let { computers, creating, createdComputer, createError } = useAppSelector(state => state.computers);

  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);

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
    <div id='add-new-pc'>
      <div className="btn-group btn-group-sm" role="group">
        <button onClick={toggle} type="button" className="btn btn-success react-bs-table-csv-btn  hidden-print">
          <span>
            <i className="fa fa-plus"></i>
            &nbsp; Ajouter Nouveau PC
          </span>
        </button>
      </div>
      <Modal id='modal-add-new' isOpen={modal} toggle={toggle} style={{ minWidth: '700px' }}>
        <ModalHeader toggle={toggle}>Ajouter nouveau PC</ModalHeader>
        <ModalBody style={{ width: '700px' }}>
          <Form id='new_pc_form' onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="reference">
                    REF
                  </Label>
                  <input className='form-control'
                    id="ref"
                    placeholder="Référence PC"
                    type="text"
                    {...register("ref",
                      {
                        required: "Required field",
                        minLength: {
                          value: 6,
                          message: "Minimum 6 caractères long SVP"
                        },
                        maxLength: {
                          value: 20,
                          message: "Maximum 20 caractères long SVP"
                        }
                      })
                    }
                    name="ref"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Brand-name">
                    Marque
                  </Label>
                  <select className='form-select'
                    id="brandName"
                    {...register("brandName",
                      {
                        required: "Required field"
                      })
                    }
                    name="brandName"
                  >
                    <option disabled>Choisir la marque du PC</option>
                    <option selected>DELL</option>
                    <option>HP</option>
                    <option>TOSHIBA</option>
                    <option>ASUS</option>
                    <option>ACER</option>
                    <option>LENOVO</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="model">
                    MODEL
                  </Label>
                  <input className='form-control'
                    id="model"
                    placeholder="Modèle PC"
                    type="text"
                    {...register("model",
                      {
                        required: "Required field",
                        minLength: {
                          value: 2,
                          message: "Minimum 2 caractères long SVP"
                        },
                        maxLength: {
                          value: 20,
                          message: "Maximum 20 caractères long SVP"
                        }
                      })
                    }
                    name="model"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="os">
                    Operating System
                  </Label>
                  <select className='form-select'
                    id="os"
                    {...register("os",
                      {
                        required: "Required field"
                      })
                    }
                    name="os"
                  >
                    <option disabled>Choisir OS</option>
                    <option>WIN-XP</option>
                    <option>WIN-7</option>
                    <option selected>WIN-10</option>
                    <option>WIN-11</option>
                    <option>LINUX</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="cpu">
                    CPU
                  </Label>
                  <input className='form-control'
                    id="cpu"
                    placeholder="Processeur"
                    type="text"
                    {...register("cpu",
                      {
                        required: "Required field",
                        minLength: {
                          value: 2,
                          message: "Minimum 2 caractères long SVP"
                        },
                        maxLength: {
                          value: 20,
                          message: "Maximum 20 caractères long SVP"
                        }
                      })
                    }
                    name="cpu"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="status">
                    Status
                  </Label>
                  <select className='form-select'
                    id="status"
                    {...register("status",
                      {
                        required: "Required field"
                      })
                    }
                    name="status"
                  >
                    <option disabled>Choisir status</option>
                    <option selected>Active</option>
                    <option>En panne</option>
                    <option>Inactive</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="idUsedBy">
                        Usager
                      </Label>
                      <input className='form-control'
                        id="idUsedBy"
                        placeholder="Utenty"
                        type="text"
                        {...register("usedBy",
                          {
                            required: "Required field",
                            minLength: {
                              value: 4,
                              message: "Minimum 4 caractères long SVP"
                            },
                            maxLength: {
                              value: 10,
                              message: "Maximum 10 caractères long SVP"
                            }
                          })
                        }
                        name="usedBy"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={8} style={{ marginTop: '31px' }}>
                    <FormGroup>
                      <input className='form-control'
                        id="usedByFirstLastName"
                        placeholder="Nom/Prénom"
                        type="text"
                        {...register("usedByFirstLastName",
                          {
                            required: "Required field",
                            minLength: {
                              value: 6,
                              message: "Minimum 6 caractères long SVP"
                            },
                            maxLength: {
                              value: 25,
                              message: "Maximum 25 caractères long SVP"
                            }
                          })
                        }
                        name="usedByFirstLastName"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="type">
                    Type
                  </Label>
                  <select className='form-select'
                    id="type"
                    {...register("type",
                      {
                        required: "Required field"
                      })
                    }
                    name="type"
                  >
                    <option disabled>Choisir type</option>
                    <option selected>Desktop</option>
                    <option>Laptop</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="utenty">
                        Sessions
                      </Label>
                      <input className='form-control'
                        id="sessionUtenty"
                        placeholder="Utenty"
                        type="text"
                        {...register("sessionUtenty",
                          {
                            required: "Required field",
                            minLength: {
                              value: 4,
                              message: "Minimum 4 caractères long SVP"
                            },
                            maxLength: {
                              value: 10,
                              message: "Maximum 10 caractères long SVP"
                            }
                          })
                        }
                        name="sessionUtenty"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={8} style={{ marginTop: '31px' }}>
                    <FormGroup>
                      <input className='form-control'
                        id="sessionFirstLastName"
                        placeholder="Nom/Prénom"
                        type="text"
                        {...register("sessionFirstLastName",
                          {
                            required: "Required field",
                            minLength: {
                              value: 6,
                              message: "Minimum 6 caractères long SVP"
                            },
                            maxLength: {
                              value: 25,
                              message: "Maximum 25 caractères long SVP"
                            }
                          })
                        }
                        name="sessionFirstLastName"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="netDrives">
                    Lecteurs Réseau
                  </Label>
                  <Multiselect
                    onRemove={(items: string[]) => { setNetDrivesList([...items]) }}
                    onSelect={(items: string[]) => { setNetDrivesList([...items]) }}
                    isObject={false}
                    options={networkDrivesList}
                    showArrow
                    showCheckbox
                    hidePlaceholder
                    placeholder='Choisir les lecteurs réseau'
                    avoidHighlightFirstOption={true}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="group">
                    Groupe
                  </Label>
                  <select className='form-select'
                    id="group"
                    {...register("group",
                      {
                        required: "Required field"
                      })
                    }
                    name="group"
                  >
                    <option disabled selected>Choisir groupe</option>
                    <option>Programmation</option>
                    <option>Modelery</option>
                    <option>Qualité</option>
                    <option>UTM</option>
                    <option>Administration</option>
                    <option>Contabilité</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="softwares">
                    Logiciels
                  </Label>
                  <Multiselect
                    onRemove={(items: string[]) => { setSoftList([...items]) }}
                    onSelect={(items: string[]) => { setSoftList([...items]) }}
                    isObject={false}
                    options={softwaresList}
                    showArrow
                    showCheckbox
                    hidePlaceholder
                    placeholder='Choisir les logiciels'
                    avoidHighlightFirstOption={true}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>



        <ModalFooter>
          <Button form='new_pc_form' id='add-new-pc-btn' color="success" onClick={handleSubmit(onSubmit)}>
            Ajouter
          </Button>{' '}
          <Button id='cancel-add-new-pc-btn' color="danger" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ComputerForm
























// import React, { useState } from 'react'
// import Multiselect from 'multiselect-react-dropdown';
// import { interestsList, INTERESTS } from './interestsList.entry';
// import { useForm, SubmitHandler } from "react-hook-form";
// import { Tooltip, OverlayTrigger } from 'react-bootstrap';
// import { useAppDispatch, useAppSelector } from '../../state/store.state';
// import { handleRegister } from '../../state/actions-creators/register.actions-creators';

// /* eslint-disable @typescript-eslint/no-unused-vars */
// function RegisterCmp() {
//     const dispatch = useAppDispatch();
//     const { loading, res, errMsg } = useAppSelector(state => state.register);
//     let { register, handleSubmit, watch, formState: { errors } } = useForm<IRegisterReq>({ mode: 'all' });
//     const onSubmit: SubmitHandler<IRegisterReq> = (data) => {
//         data.interests = selectedItems;
//         dispatch(handleRegister(data));
//     }

//     const [selectedItems, setNetDrivesList] = useState<INTERESTS[]>([]);
//     // Reusable function to handle Error messages of all input fields
//     const tooltipErrMsg = (errMsg: string | undefined) => {
//         if (errMsg) {
//             return (
//                 <Tooltip> {errMsg} </Tooltip>
//             )
//         }
//         return <></>
//     }

//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
//             <h2 className="title">Register</h2>
//             <div className="row">
//                 <OverlayTrigger show={true} overlay={tooltipErrMsg(errors.firstName?.message)} >
//                     <div className={errors.firstName ? 'input-field col-md-5 offset-md-1 mr-1 col fail' : 'input-field col-md-5 offset-md-1 mr-1 col success'}>
//                         <i className="fas fa-user"></i>
//                         <input type="text" autoComplete="given-name" placeholder="First name"
//                             {...register("firstName",
//                                 {
//                                     required: "Required field",
//                                     minLength: {
//                                         value: 3,
//                                         message: "First name should have at least 3 caracters"
//                                     },
//                                     maxLength: {
//                                         value: 10,
//                                         message: "First name should have at most 10 caracters"
//                                     }
//                                 })
//                             }
//                             name='firstName'
//                         />
//                     </div>
//                 </OverlayTrigger>

//                 <OverlayTrigger show={true} overlay={tooltipErrMsg(errors.lastName?.message)}>
//                     <div className={errors.lastName ? 'input-field col-md-5 col fail' : 'input-field col-md-5 col success'}>
//                         <i className="fas fa-user"></i>
//                         <input type="text" autoComplete="given-name" placeholder="First name"
//                             {...register("lastName",
//                                 {
//                                     required: "Required field",
//                                     minLength: {
//                                         value: 3,
//                                         message: "Last name should have at least 3 caracters"
//                                     },
//                                     maxLength: {
//                                         value: 10,
//                                         message: "Last name should have at most 10 caracters"
//                                     }
//                                 })
//                             }
//                             name='lastName'
//                         />
//                     </div>
//                 </OverlayTrigger>
//             </div>

//             <OverlayTrigger show={true} placement='right' overlay={tooltipErrMsg(errors.email?.message)}>
//                 <div className={errors.email ? 'input-field fail' : 'input-field success'}>
//                     <i className="fas fa-envelope"></i>
//                     <input type="email" autoComplete="email" placeholder="Email"
//                         {...register("email",
//                             {
//                                 required: "Required field",
//                                 pattern: {
//                                     value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
//                                     message: 'Email is not valid.'
//                                 }
//                             })
//                         }
//                         name="email"
//                     />
//                 </div>
//             </OverlayTrigger>

//             <OverlayTrigger show={true} placement='right' overlay={tooltipErrMsg(errors.password?.message)}>
//                 <div className={errors.password ? 'input-field fail' : 'input-field success'}>
//                     <i className="fas fa-lock"></i>
//                     <input type="password" autoComplete='current-password' placeholder="Password" id="id_reg"
//                         {...register("password",
//                             {
//                                 required: "Required field",
//                                 pattern: {
//                                     value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
//                                     message: 'Password should be combination of [a-z, A-Z, 0-9] with at least 8 characters'
//                                 }
//                             })
//                         }
//                         name="password"
//                     />
//                     <i className="far fa-eye" id="toggleReg" style={{ cursor: 'pointer' }}></i>
//                 </div>
//             </OverlayTrigger>

//             <OverlayTrigger show={true} placement='right' overlay={tooltipErrMsg(errors.interests?.message)}>
//                 <div className={errors.interests ? 'interests-list fail' : 'interests-list success'}>
//                     <i className="fas fa-list-check"></i>
//                     <Multiselect
//                         onRemove={(items: INTERESTS[]) => { setNetDrivesList([...items]) }}
//                         onSelect={(items: INTERESTS[]) => { setNetDrivesList([...items]) }}
//                         isObject={false}
//                         options={interestsList}
//                         showArrow
//                         showCheckbox
//                         hidePlaceholder
//                         placeholder='Choose your interests'
//                         avoidHighlightFirstOption={true}
//                         {...register('interests',
//                             {
//                                 required: selectedItems.length < 3 ? 'Select at least 3 categories' : '',
//                             }
//                         )}
//                     />
//                 </div>
//             </OverlayTrigger>

//             <label className="check">
//                 <input type="checkbox" />
//                 <span className="checkmark"> I accept the <a href="terms.html">terms and services</a></span>
//             </label>
//             <button disabled={loading} type="submit" style={{ width: '180px' }} className="entry-btn solid">
//                 {loading ? <i className="fas fa-spinner fa-spin"></i> : 'Create account'}
//             </button>

//             <p className="social-text">You can register with:</p>
//             <div className="social-media">
//                 <a href="/#" className="social-icon" aria-label="Register with Google">
//                     <i className="fab fa-google"></i>
//                 </a>
//                 <a href="/#" className="social-icon" aria-label="Register with Discord">
//                     <i className="fab fa-discord"></i>
//                 </a>
//                 <a href="/#" className="social-icon" aria-label="Register with Twitter">
//                     <i className="fab fa-twitter"></i>
//                 </a>
//                 <a href="/#" className="social-icon">
//                     <i className="fab fa-facebook-f" aria-label="Register with Facebook"></i>
//                 </a>
//             </div>
//         </form>
//     )
// }

// export default RegisterCmp