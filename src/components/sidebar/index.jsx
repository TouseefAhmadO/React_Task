import style from './style.module.scss'
import { NavLink, useLocation } from 'react-router-dom'
import HomeIcon from '../../assets/Icon/Home.svg'
import AHomeIcon from '../../assets/Icon/AHome.svg'
import ShoopingList from '../../assets/Icon/Shopping-list.svg'
import AShoopingList from '../../assets/Icon/AShopping-list.svg'
import Box from '../../assets/Icon/Box.svg'
import ABox from '../../assets/Icon/ABox.svg'
import User from '../../assets/Icon/User.svg'
import AUser from '../../assets/Icon/AUser.svg'
import News from '../../assets/Icon/News.svg'
import ANews from '../../assets/Icon/ANews.svg'
import Sales from '../../assets/Icon/Sales.svg'
import ASales from '../../assets/Icon/ASales.svg'
import Discount from '../../assets/Icon/Discount.svg'
import ADiscount from '../../assets/Icon/ADiscount.svg'

const SideBar = () => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");


    return (
        <div className={style.mainContainer}>
            <ul className='p-0'>
                <li className={splitLocation[1] === "home" ? style.activeItemStule : style.itemStyle}>
                    <img className={style.icon} src={splitLocation[1] === "home" ? AHomeIcon : HomeIcon} alt="" />
                    <NavLink to="/home" > Home</NavLink>
                </li>
                <li className={splitLocation[1] === "orders" ? style.activeItemStule : style.itemStyle}>
                    <img className={style.icon} src={splitLocation[1] === "orders" ? AShoopingList : ShoopingList} alt="" />
                    <NavLink to="/orders">Orders</NavLink>
                </li>
                <li className={splitLocation[1] === "products" ? style.activeItemStule : style.itemStyle}>
                    <img className={style.icon} src={splitLocation[1] === "products" ? ABox : Box} alt="" />
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li className={splitLocation[1] === "customers" ? style.activeItemStule : style.itemStyle}>
                    <img className={style.icon} src={splitLocation[1] === "customers" ? AUser : User} alt="" />
                    <NavLink to="/customers">Customers</NavLink>
                </li>
                <li className={splitLocation[1] === "analytics" ? style.activeItemStule : style.itemStyle}>
                    <img className={style.icon} src={splitLocation[1] === "analytics" ? ANews : News} alt="" />
                    <NavLink to="/analytics">Analytics</NavLink>
                </li>
                <li className={splitLocation[1] === "marketing" ? style.activeItemStule : style.itemStyle}>
                    <img className={style.icon} src={splitLocation[1] === "marketing" ? ASales : Sales} alt="" />
                    <NavLink to="/marketing">Marketing</NavLink>
                </li>
                <li className={splitLocation[1] === "discounts" ? style.activeItemStule : style.itemStyle}>
                    <img className={style.icon} src={splitLocation[1] === "discounts" ? ADiscount : Discount} alt="" />
                    <NavLink to="/discounts">Discounts</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar