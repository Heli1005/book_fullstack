import React from "react";
import { Button, Container, Nav, Navbar, } from "react-bootstrap";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { BooklogSvg } from "../assets/SVG";
import useWindowDimens from "./commonComponents/useWindowDimens";
import { useAuth } from "./authentication/useAuthentication";
import "./header.css";
import { toast } from "react-toastify";

const Header = () => {
    const navigate = useNavigate()
    const { width } = useWindowDimens();
    const { user, handleLogout } = useAuth()

    const handleLogoutBtn = async () => {
       try {
         await handleLogout()
         await navigate('/');
         await toast.success('You have been logged out successfully. See you next time!');
       } catch (error) {
        await toast.error("Something went wrong")
       }
    };

    const list = {
        home: {
            id: 'home',
            path: '/',
            title: 'Home',
            as: NavLink
        },
        booklist: {
            id: 'booklist',
            path: '/books',
            title: 'Book List',
            as: NavLink
        },
        logout: {
            id: 'logout',
            path: '/logout',
            title: 'Log Out',
            as: 'label'
        }
    }

    return <>
        <Navbar className="bg-gray-300 px-3" expand="lg">
            <Navbar.Brand as={Link} to="/">
                <div className="bg-gray-200 p-2 border-0 rounded-2xl" onClick={() => navigate('/')}>
                    {BooklogSvg()}
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto w-full">
                    <CustomNavLink child={list.home} />
                    {
                        user
                            ?
                            <>
                                <CustomNavLink child={list.booklist} />
                                {
                                    width > 768
                                        ?
                                        <Button className="bg-gray-400 border-white ml-auto font-bold" onClick={() => handleLogoutBtn()} >Log Out</Button>
                                        :
                                        <Nav.Link as={'label'} className={'font-bold px-2'} onClick={() => handleLogoutBtn()} >Log Out</Nav.Link>

                                }
                            </>
                            :
                            <></>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>;
};

export default Header;

export const CustomNavLink = ({ child }) => {
    return <NavLink as={child.as} to={child.path} className={({ isActive }) => `${(isActive) ? 'text-teal-700' : 'text-gray-700'} font-bold px-2 py-2`}>{child.title}</NavLink>
}
