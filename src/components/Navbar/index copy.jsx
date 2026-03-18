import React, {useEffect} from 'react';
import './style.scss';
import {Link} from 'react-router-dom'
import kns from '../../Images/KNS-icon.png'
import KnsIcon from '../../Images/KnsIcon.png'
import MenuIcon from './menu.svg';
import { NavHashLink } from 'react-router-hash-link';
import $ from 'jquery';

const headers = [
    {
        "showMedium" : true,
        "label" : "Home",
        "showType" : "true",
        "path" : "home"
    },{
        "showMedium" : true,
        "label" : "About Us",
        "showType" : "true",
        "path" : "#aboutUs"
    },{
        "showMedium" : true,
        "label" : "Projects",
        "showType" : "true",
        "path" : "#projects"
    },{
        "showMedium" : true,
        "label" : "Blogs",
        "showType" : "true",
        "path" : "#blogs"
    },{
        "showMedium" : true,
        "label" : "Testimonials",
        "showType" : "true",
        "path" : "#testimonial"
    },{
        "showMedium" : false,
        "label" : "Career",
        "showType" : "false",
        "path" : "/carrier"
    },{
        "showMedium" : false,
        "label" : "NRI",
        "showType" : "false",
        "path" : "/Nri"
    },{
        "showMedium" : true,
        "label" : "Contact Us",
        "showType" : "true",
        "path" : "#contactUs"
    }
]

const NavBar = () => {
    useEffect(()=>{

        $('.menu').on('click', function(){
            $('.header').toggleClass('show');
         });
        // window.addEventListener('click', function(e){
        //     var dropdown = document.querySelector('.header'); 
        //     if (!document.querySelector('.menu').contains(e.target) && !document.querySelector('.header').contains(e.target)){
        //         dropdown.classList.remove('show');
        //     }else if(!document.querySelector('.menu').contains(e.target) && document.querySelector('.header').contains(e.target)){
        //         dropdown.classList.add('show');
        //     }else if(document.querySelector('.menu').contains(e.target)){
        //         dropdown.classList.toggle('show');
        //     }
        // });
    })
    
    const renderMenu = (item,i) =>{ 
        // const show = item.showMedium ? 
        return <div key={item.label} className={i == 0 ? `Linkactive ${item.showType}` : `${item.showType}`}> <a href={item.path} >{item.label}</a></div>
    }
    return (
        <div className="navBar ">
            {/* <div className="red-bar"></div> */}
            <div className="d-flex justify-content-between nav-header">
                <div className="img">
                    <img src={KnsIcon}  alt="image"/>
                </div>
                <div  className="d-flex justify-content-start">
                    <div className="header1 d-flex justify-content-between">
                        {
                            headers.map((item, i)=>{
                                return <div key={i} style={{display : item.showMedium ? 'flex' : 'none'}} className={i == 0 ? "Linkactive" : ""}>
                                    <NavHashLink to={`/${item.path}`} >{item.label}</NavHashLink>
                                    </div>
                            })
                        }
                    </div>
                    <div className="header d-flex justify-content-between">
                        {
                            headers.map((item, i)=>{
                                return renderMenu(item, i)
                                // <div key={i} style={{display : !item.showMedium ? 'flex' : 'none'}} className={i == 0 ? "active" : ""}>{item.label}</div>
                            })
                        }
                    </div>
                    <div className="menu">
                        <span ><img src={MenuIcon} height="20" alt="icon"/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;