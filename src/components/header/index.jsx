import style from './style.module.scss'
import { Col, Input, Row } from 'reactstrap'
import SearchIcon from '@mui/icons-material/Search'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import Logo from '../../assets/Icon/Logo.svg'

const Header = () => {
  return (
    <div className={style.mainContainer}>
      <Row>
        <Col lg="3" className={style.logoContainer}>
          <div className={style.logoStyle}>
            <img src={Logo} alt='' width="37px" height="39px" />
            <h1>oub</h1>
          </div>
        </Col>
        <Col lg="6" className={style.searchContainer}>
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
        <Col lg="3" className={style.profileContainer}>
          <Col lg="4"></Col>
          <Col lg="3" className='d-flex'>
            <div className={style.iconContainer}>
              <SupportAgentIcon className={style.icon} />
            </div>
            <div className={style.iconContainer}>
              <NotificationsNoneOutlinedIcon className={style.icon} />
            </div>
          </Col>
          <Col lg="5">
            <div className={style.profilePicContainer}>
              <div className={style.profilePicStyle}></div>
              <div>
                <h1>Ahmed Reza</h1>
                <h2>Peak Outfitters</h2>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Header
