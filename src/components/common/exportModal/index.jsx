import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import style from './style.module.scss'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const ExportModal = ({ open, handleClose }) => {
    return (
        <div className={style.mainContainer}>
            <Modal
                isOpen={open}
                fullscreen
                toggle={handleClose}
            >
                <ModalHeader toggle={handleClose}>Export Customer</ModalHeader>
                <ModalBody>
                    <h1>Export</h1>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="current-page"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="current-page" control={<Radio />} label="Current page" />
                        <FormControlLabel value="all-orders" control={<Radio />} label="All orders" />
                        <FormControlLabel value="selected" control={<Radio disabled />} label="Selected: 0 orders" />
                        <FormControlLabel value="orders" control={<Radio disabled />} label="4 orders matching your search" />
                        <FormControlLabel value="matching" control={<Radio />} label="4 orders matching your search" />
                    </RadioGroup>
                    <br/>
                    <h1>Export As</h1>

                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="cvs"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="cvs" control={<Radio />} label="CSV for Excel, Numbers, or other spreadsheet programs" />
                        <FormControlLabel value="file" control={<Radio />} label="Plain CSV file" />
                    </RadioGroup>
                    <div className={style.btnContainer}>
                        <Button className={style.cancelBtn}>Cancel</Button>
                        <Button className={style.exportBtn}>Export transaction histories</Button>
                        <Button className={style.orderBtn}>Export orders</Button>
                    </div>

                </ModalBody>
            </Modal>
        </div>
    )
}

export default ExportModal