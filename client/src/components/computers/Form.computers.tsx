import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/store.state';
import { createComputer } from '../../state/actions-creators/computer.actions-creators';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';


function ComputerForm() {
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
    <>
      <div>Computerform</div>
      {/* <button onClick={handleCreateNewComputer}>Create</button> */}
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} style={{ minWidth: '700px'}}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody style={{ width: '700px' }}>
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">
                    Email
                  </Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">
                    Password
                  </Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">
                Address
              </Label>
              <Input
                id="exampleAddress"
                name="address"
                placeholder="1234 Main St"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress2">
                Address 2
              </Label>
              <Input
                id="exampleAddress2"
                name="address2"
                placeholder="Apartment, studio, or floor"
              />
            </FormGroup>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">
                    City
                  </Label>
                  <Input
                    id="exampleCity"
                    name="city"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">
                    State
                  </Label>
                  <Input
                    id="exampleState"
                    name="state"
                  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="exampleZip">
                    Zip
                  </Label>
                  <Input
                    id="exampleZip"
                    name="zip"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup check>
              <Input
                id="exampleCheck"
                name="check"
                type="checkbox"
              />
              <Label
                check
                for="exampleCheck"
              >
                Check me out
              </Label>
            </FormGroup>
            <Button>
              Sign in
            </Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
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

//     const [selectedItems, setSelectedItems] = useState<INTERESTS[]>([]);
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
//                         onRemove={(items: INTERESTS[]) => { setSelectedItems([...items]) }}
//                         onSelect={(items: INTERESTS[]) => { setSelectedItems([...items]) }}
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