import { Button, Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import style from './style.module.scss'
import { Checkbox } from '@mui/material';

const ImportModal = ({ open, handleClose }) => {
    return (
        <div>
            <div className={style.mainContainer}>
                <Modal
                    isOpen={open}
                    fullscreen
                    toggle={handleClose}
                >
                    <ModalHeader toggle={handleClose}>Import customers by CSV</ModalHeader>
                    <ModalBody>
                        <h1><span>Download a sample</span> CSV to see an example of the required format</h1><br />
                        <h1>Make sure that customers set to ”Accepts Email Marketing”  and ”Accepts SMS Marketing”<br />
                            have given you permission. <span>Read more</span>
                        </h1>
                        <div className={style.fileContainer}>
                            <Button className={style.btnStyle} >Add File</Button>
                        </div>
                        <div className={style.checkboxContainer}>
                            <Checkbox />
                            <h1>Overwrite existing customers that have the same email or phone</h1>
                        </div>
                        <Row className={style.footerStyle} >
                            <Col lg="4">
                                <h1><span>Need help importing customers?</span></h1>
                            </Col>
                            <Col lg="8" className={style.btnContainer}>
                                <Button className={style.importBtn}>Import Customers</Button>                                                            
                                <Button className={style.cancelBtn}>Cancel</Button>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    )
}

export default ImportModal
