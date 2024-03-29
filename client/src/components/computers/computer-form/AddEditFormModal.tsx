import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { useAppDispatch, useAppSelector } from '../../../state/store.state';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createComputer, updateComputer } from '../../../state/actions-creators/computer.actions-creators';
import Multiselect from 'multiselect-react-dropdown';
import { networkDrivesList, softwaresList, groupList } from './defaultData';

type PROPSTYPE = {
    show: boolean,
    onClose: () => void,
    targetPC?: any,
    editMode?: boolean
}

function ModalForm(props: PROPSTYPE) {
    const dispatch = useAppDispatch();
    /* eslint-disable @typescript-eslint/no-unused-vars */
    let { creating, createdComputer, createError, updating, updatedComputer, updateError } = useAppSelector(state => state.computers);
    const { targetPC, editMode, show, onClose } = props;

    const [netDrivesList, setNetDrivesList] = useState<string[]>(editMode ? targetPC!.networkDriveAccess : []);
    const [softList, setSoftList] = useState<string[]>(editMode ? targetPC.softwares : []);
    const [inputValues, setInputValues] = useState<string[]>(editMode ? [...targetPC.sessions] : []);
    const [inputCount, setInputCount] = useState(editMode ? targetPC.sessions.length : 1);

    let { register, handleSubmit, watch, formState: { errors }, reset } = useForm<any>({ mode: 'all' });
    /* eslint-disable @typescript-eslint/no-unused-vars */

    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ HANDLE ADD NEW COMPUTER FORM $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    const onSubmit: SubmitHandler<any> = (data: IComputer | any) => {
        data.usedBy = data.usedBy + ' / ' + data.usedByFullname;
        delete data.usedByFullname;

        data.softwares = softList;
        data.networkDriveAccess = netDrivesList;
        data.sessions = inputValues;

        if (!editMode) {
            dispatch(createComputer(data, reset, setNetDrivesList, setSoftList));
        } else {
            dispatch(updateComputer(data, targetPC._id, reset));
        }
    }
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ HANDLE ADD NEW COMPUTER FORM $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ START HANDLE SESSIONS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        const temp = [...inputValues];
        if (event.key === " " && !inputValues[index].includes("/")) {
            temp[index] = temp[index] + " /";
            setInputValues(temp);
        } else if (event.key === " ") {
            temp[index] = temp[index] + " ";
            setInputValues(temp);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newValues = [...inputValues];
        newValues[index] = event.target.value;
        setInputValues(newValues);
    };

    const handleAddNewInput = (op: string, index: number) => {
        if (op === 'add') {
            setInputCount(inputCount + 1);
        } else {
            inputValues.splice(index, 1);
            document.getElementById(`sessionContainer${index}`)?.remove();
        }
    }
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ END HANDLE SESSIONS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    return (
        <Modal size='lg' id='modal-add-new' isOpen={props.show}>
            <ModalHeader toggle={props.onClose}>Ajouter nouveau PC</ModalHeader>
            <ModalBody>
                <Form id='new_pc_form' onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="reference">
                                    REF
                                </Label>
                                <input className={errors.ref ? 'form-control is-invalid' : 'form-control'}
                                    id="ref"
                                    placeholder="Référence PC"
                                    type="text"
                                    {...register("ref",
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
                                    name="ref"
                                    defaultValue={editMode ? targetPC?.ref : undefined}
                                />
                                {
                                    errors.ref &&
                                    <div className="invalid-feedback">
                                        {errors.ref?.message?.toString()}
                                    </div>
                                }

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
                                    defaultValue={editMode ? targetPC?.brandName : 'DELL'}
                                >
                                    <option disabled>Choisir la marque du PC</option>
                                    <option>DELL</option>
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
                                <input className={errors.model ? 'form-control is-invalid' : 'form-control'}
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
                                                value: 50,
                                                message: "Maximum 50 caractères long SVP"
                                            }
                                        })
                                    }
                                    name="model"
                                    defaultValue={editMode ? targetPC?.model : undefined}
                                />
                                {
                                    errors.model &&
                                    <div className="invalid-feedback">
                                        {errors.model?.message?.toString()}
                                    </div>
                                }
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
                                    defaultValue={editMode ? targetPC?.os : 'WIN-10'}

                                >
                                    <option disabled>Choisir OS</option>
                                    <option>WIN-XP</option>
                                    <option>WIN-7</option>
                                    <option>WIN-10</option>
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
                                <input className={errors.cpu ? 'form-control is-invalid' : 'form-control'}
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
                                                value: 50,
                                                message: "Maximum 50 caractères long SVP"
                                            }
                                        })
                                    }
                                    defaultValue={editMode ? targetPC?.cpu : undefined}
                                    name="cpu"
                                />
                                {
                                    errors.cpu &&
                                    <div className="invalid-feedback">
                                        {errors.cpu?.message?.toString()}
                                    </div>
                                }
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
                                    defaultValue={editMode ? targetPC?.status : 'Active'}
                                    name="status"
                                >
                                    <option disabled>Choisir status</option>
                                    <option>Active</option>
                                    <option>En panne</option>
                                    <option>Inactif</option>
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
                                        <input className={errors.usedBy ? 'form-control is-invalid' : 'form-control'}
                                            id="idUsedBy"
                                            placeholder="Utenty"
                                            type="text"
                                            {...register("usedBy",
                                                {
                                                    required: "Required field",
                                                    minLength: {
                                                        value: 2,
                                                        message: "Minimum 2 caractères long SVP"
                                                    },
                                                    maxLength: {
                                                        value: 50,
                                                        message: "Maximum 50 caractères long SVP"
                                                    }
                                                })
                                            }
                                            defaultValue={editMode ? targetPC?.usedBy.split(" / ")[0] : undefined}
                                            name="usedBy"
                                        />
                                        {
                                            errors.usedBy &&
                                            <div className="invalid-feedback">
                                                {errors.usedBy?.message?.toString()}
                                            </div>
                                        }
                                    </FormGroup>
                                </Col>
                                <Col md={8} style={{ marginTop: '31px' }}>
                                    <FormGroup>
                                        <input className={errors.usedByFullname ? 'form-control is-invalid' : 'form-control'}
                                            id="usedByFullname"
                                            placeholder="Nom Prénom"
                                            type="text"
                                            {...register("usedByFullname",
                                                {
                                                    required: "Required field",
                                                    minLength: {
                                                        value: 2,
                                                        message: "Minimum 2 caractères long SVP"
                                                    },
                                                    maxLength: {
                                                        value: 50,
                                                        message: "Maximum 50 caractères long SVP"
                                                    }
                                                })
                                            }
                                            defaultValue={editMode ? targetPC?.usedBy.split(" / ")[1] : undefined}
                                            name="usedByFullname"
                                        />
                                        {
                                            errors.usedByFullname &&
                                            <div className="invalid-feedback">
                                                {errors.usedByFullname?.message?.toString()}
                                            </div>
                                        }
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
                                    defaultValue={editMode ? targetPC?.type : 'Desktop'}
                                    name="type"
                                >
                                    <option disabled>Choisir type</option>
                                    <option>Desktop</option>
                                    <option>Laptop</option>
                                </select>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            {
                                [...Array(inputCount)].map((_, index) => (
                                    <Row id={`sessionContainer${index}`} key={index} style={index !== 0 ? { marginTop: '-12px' } : {}}>
                                        <Col md={12} xs={12} >
                                            <FormGroup>
                                                {index === 0 ? <Label for="Session utenty"> Sessions </Label> : null}
                                                <Input className={errors.session ? 'form-control is-invalid' : 'form-control'}
                                                    id={`session${index}`}
                                                    placeholder="Utenty / Nom Prénom"
                                                    type="text"
                                                    value={inputValues[index] || ''}
                                                    onChange={(e) => handleChange(e, index)}
                                                    onKeyDown={(e) => handleKeyPress(e, index)}
                                                    name={`session${index}`}
                                                />
                                                {
                                                    errors.session &&
                                                    <div className="invalid-feedback">
                                                        {errors.usedByFullname?.message?.toString()}
                                                    </div>
                                                }
                                            </FormGroup>
                                        </Col>
                                        {
                                            index === 0 ? <Col id='new-input-form-btn'> <Button onClick={() => handleAddNewInput('add', index)} style={{marginLeft: '-28px'}}> <i className="fa fa-user-plus" aria-hidden="true"></i> </Button> </Col>
                                                :
                                                <Col id='close-input-form-btn'> <Button style={{ marginTop: '-36px', marginLeft: '-19px'}} onClick={() => handleAddNewInput('remove', index)}> <i className="fa fa-times" aria-hidden="true"></i> </Button> </Col>
                                        }
                                    </Row>
                                ))
                            }
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
                                    selectedValues={netDrivesList}
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
                                    defaultValue={editMode ? targetPC?.group : undefined}
                                >
                                    <option disabled selected>Choisir groupe</option>
                                    {
                                        groupList.map((item: any, index: number) =>{
                                            return(
                                                <option key={index}>{item}</option>
                                            )
                                        })
                                    }
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
                                    selectedValues={softList}

                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>


            <ModalFooter>
                <Button disabled={creating || updating} form='new_pc_form' id='add-new-pc-btn' onClick={handleSubmit(onSubmit)}>
                    {editMode ? 'MODIFIER' : 'AJOUTER'}  {creating || updating ? <i className="fa fa-spinner fa-spin"></i> : null}
                </Button>{' '}
                <Button id='cancel-add-new-pc-btn' onClick={props.onClose}>
                    FERMER
                </Button>
            </ModalFooter>
        </Modal>

    )
}

export default ModalForm