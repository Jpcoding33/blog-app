import "./sidebar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data);
        }
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImage" src="https://images.unsplash.com/photo-1650227794474-0f7b2c23dd4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure qui soluta harum nemo libero! Aliquam placeat, inventore,
                    id possimus excepturi atque similique est cupiditate ducimus temporibus adipisci nostrum quidem perspiciatis.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                        
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="topIcon fa-brands fa-facebook-square"></i>
                    <i className="topIcon fa-brands fa-twitter-square"></i>
                    <i className="topIcon fa-brands fa-pinterest-square"></i>
                    <i className="topIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
