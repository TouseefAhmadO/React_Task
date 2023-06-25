import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import style from './style.module.scss'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

const EmailModal = ({ open, handleClose }) => {
    return (
        <div className={style.mainContainer}>
            <Modal
                isOpen={open}
                fullscreen
                toggle={handleClose}
            >
                <ModalHeader toggle={handleClose}>
                    <h3>Import customers by CSV</h3>
                    <h2>Only email subscribers will receive this email</h2>
                </ModalHeader>
                <ModalBody>
                    <div className={style.mailContainer}>
                        <MailOutlineIcon className={style.icon} />
                        <div>
                            <h1>Email segment using email </h1>
                            <h2>10,000 free emails per month; $1 per 1,000 additional emails</h2>
                        </div>
                    </div>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Export segment</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="cvs"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="cvs" control={<Radio />} label="CSV for Excel, Numbers, or other spreadsheet programs" />
                                    <FormControlLabel value="file" control={<Radio />} label="Plain CSV file" />
                                </RadioGroup>
                                <Button className={style.exportBtn}>Export segment</Button>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </ModalBody>
                <ModalFooter>
                    <Button className={style.cancelBtn}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EmailModal
