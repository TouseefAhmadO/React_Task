import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import style from './style.module.scss'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CustomDropdown = ({ show }) => {
    return (
        <div style={{ display: show ? "block" : "none" }} className={style.mainContainer}>
            <div className={style.itemContainer}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="1"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="1" control={<Radio />} label="Last update" />
                    <FormControlLabel value="2" control={<Radio />} label="Amount spent" />
                    <FormControlLabel value="3" control={<Radio />} label="Total orders" />
                    <FormControlLabel value="4" control={<Radio />} label="Last order date" />
                    <FormControlLabel value="5" control={<Radio />} label="First order date" />
                    <FormControlLabel value="6" control={<Radio />} label="Date added as customer" />
                    <FormControlLabel value="7" control={<Radio />} label="Last abandoned order date" />
                    <FormControlLabel value="8" control={<Radio />} label="Fulfillment status " />
                    <FormControlLabel value="9" control={<Radio />} label="Label status " />
                    <FormControlLabel value="10" control={<Radio />} label="Iteams " />
                </RadioGroup>
            </div>
            <div className={style.sortContainer}> <ArrowUpwardIcon className={style.icon} /> A-Z</div>
            <div className={style.sortContainer}> <ArrowDownwardIcon className={style.icon} /> Z-A</div>
        </div>
    )
}

export default CustomDropdown
