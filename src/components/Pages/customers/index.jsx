import { Col, Input, Row, Table } from 'reactstrap'
import style from './style.module.scss'
import { Button, Checkbox } from '@mui/material'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import SearchIcon from '@mui/icons-material/Search'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import ExportModal from '../../common/exportModal'
import { useState } from 'react'
import ImportModal from '../../common/importModal'
import EmailModal from '../../common/emailModal'
import CustomDropdown from '../../common/dropDown'

const Customers = () => {
    const [isExport, setIsExport] = useState(false)
    const [isImport, setIsImport] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [dropDown, setDropDown] = useState(false)

    return (
        <div className={style.mainContainer}>
            <ExportModal open={isExport} handleClose={() => setIsExport(false)} />
            <ImportModal open={isImport} handleClose={() => setIsImport(false)} />
            <EmailModal open={isEmail} handleClose={() => setIsEmail(false)} />
            <Row>
                <Col lg="6">
                    <h1>Customers</h1>
                </Col>
                <Col lg="6">
                    <div className={style.BtnContainer}>
                        <h2 onClick={() => setIsExport(true)} >Export</h2>
                        <h2 onClick={() => setIsImport(true)} >Import</h2>
                        <h2 onClick={() => setIsEmail(true)} >Email segment</h2>
                        <Button className={style.btnStyle} >Add customer</Button>
                    </div>
                </Col>
            </Row>

            <div className={style.customerContainer}>
                <Row>
                    <Col lg="9">
                        <Row className={style.searchStyle}>
                            <Col lg="1" className='p-0 text-center'>
                                <SearchIcon className={style.iconStyle} />
                            </Col>
                            <Col lg="11" className='p-0'>
                                <Input
                                    className={style.inputStyle}
                                    placeholder='Search for anything'
                                    onChange={e => e.target.value}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="3" className={style.sortBtnContainer}>
                        <Button
                            onClick={() => setDropDown(!dropDown)}
                            className={style.sortBtnStyle}
                            startIcon={<FilterListOutlinedIcon />}>
                            Sort
                        </Button>
                        <CustomDropdown show={dropDown} />
                    </Col>
                </Row>

                <Table>
                    <thead>
                        <tr>
                            <th>
                                <Checkbox />
                            </th>
                            <th>
                                Customer Name
                            </th>
                            <th>
                                Location
                            </th>
                            <th>
                                Orders
                            </th>
                            <th>
                                Order Value
                            </th>
                            <th>
                                Last Order
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <Checkbox />
                            </th>
                            <td>
                                Ahmed Reza
                            </td>
                            <td>
                                Islamabad, Pakistan
                            </td>
                            <td>
                                0
                            </td>
                            <td>
                                PKR 0
                            </td>
                            <td>
                                -
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className={style.customerInfoContainer}>
                <HelpOutlineOutlinedIcon className={style.icon} />
                <h1>Learn more about <span> customers </span></h1>
            </div>
        </div>
    )
}

export default Customers
