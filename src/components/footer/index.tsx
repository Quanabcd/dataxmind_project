import React, { memo } from 'react';
import styles from './footer.module.scss';
import Ic_Logo from 'assets/icon/Ic_Logo.svg';
import { Link } from 'react-router-dom';
import Ic_Phone from 'assets/icon/Ic_Phone.png';
import Ic_globe from 'assets/icon/Ic_globe.png';
import Ic_mail from 'assets/icon/Ic_mail.png';
import Ic_MapPinLine from 'assets/icon/Ic_MapPinLine.png';
import Facebook from 'assets/icon/Facebook.png';
import Linkedin from 'assets/icon/Linkedin.png';
import Youtube from 'assets/icon/Youtube.png';
import Twitter from 'assets/icon/Twitter.png';
import Img_Bct from 'assets/icon/Img_Bct.png';
import Img_Dcma from 'assets/icon/Img_Dcma.png';

function Footer() {
    return (
        <div className='footerContainer'>
            <div className='container'>
                <div className='col-xs-12 col-sm-5 col-md-3'>
                    <div className='info_company_us'>
                        <Link to={'/'} title='trang chủ'>
                            <img src={Ic_Logo} alt="trang chủ" className='logo' />
                        </Link>
                        <div className='name_company'>
                            <h3>DATAXMIND</h3>
                            <p>YOUR DATA WE GROW</p>
                        </div>
                        <div className='contact_flow'>
                            <ul>
                                <li>
                                    <img src={Ic_MapPinLine} alt='Ic_MapPinLine' />
                                    No 172 Le Lai Street, Nguyen Trai Ward,
                                    Ha Dong District, Ha Noi City, Viet Nam
                                </li>
                                <li><img src={Ic_globe} alt='Ic_MapPinLine' /> htpp/dataxmind.com</li>
                                <li><img src={Ic_mail} alt='Ic_MapPinLine' />contact@dataxmind.com</li>
                                <li><img src={Ic_Phone} alt='Ic_MapPinLine' /><Link to={'tel:0326668151'}>+84 32 666 8151</Link></li>
                            </ul>
                        </div>
                        <div className='social'>
                            <div className='list_social'>
                                <Link to={'/'}>
                                    <img src={Facebook} alt='Facebook' />
                                </Link>
                                <Link to={'/'}>
                                    <img src={Linkedin} alt='Linkedin' />
                                </Link>
                                <Link to={'/'}>
                                    <img src={Youtube} alt='Youtube' />
                                </Link>
                                <Link to={'/'}>
                                    <img src={Twitter} alt='Twitter' />
                                </Link>
                            </div>
                            <div className='confirm_img_business'>
                                <img src={Img_Bct} alt='Img_Bct' />
                                <img src={Img_Dcma} alt='Img_Dcma' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xs-12 col-sm-7 col-md-9'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 col-md-3'>
                            <div className='menu_direct'>
                                <h3>
                                    Features
                                </h3>
                                <ul>
                                    <li><Link to={'/'}>Platform Features</Link></li>
                                    <li><Link to={'/'}>Marketplace</Link></li>
                                    <li><Link to={'/'}>Developers</Link></li>
                                    <li><Link to={'/'}>Customer Apps</Link></li>
                                    <li><Link to={'/'}>Features</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-3'>
                            <div className='menu_direct'>
                                <h3>
                                    Resources
                                </h3>
                                <ul>
                                    <li><Link to={'/'}>How to create a mobile App</Link></li>
                                    <li><Link to={'/'}>How much Does it costs to make an App?</Link></li>
                                    <li><Link to={'/'}>SDK API Does</Link></li>
                                    <li><Link to={'/'}>Customer Stories</Link></li>
                                    <li><Link to={'/'}>Blogs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-3'>
                            <div className='menu_direct'>
                                <h3>
                                    Company
                                </h3>
                                <ul>
                                    <li><Link to={'/'}>About Us</Link></li>
                                    <li><Link to={'/'}>Contact Us</Link></li>
                                    <li><Link to={'/'}>Customer Reviews</Link></li>
                                    <li><Link to={'/'}>FAQ</Link></li>
                                    <li><Link to={'/'}>Terms</Link></li>
                                    <li><Link to={'/'}>Cookie Policy</Link></li>
                                    <li><Link to={'/'}>Privacy Policy</Link></li>
                                    <li><Link to={'/'}>Projects</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-3'>
                            <div className='menu_direct'>
                                <h3>
                                    Solutions
                                </h3>
                                <ul>
                                    <li><Link to={'/'}>Custom Mobile App Development</Link></li>
                                    <li><Link to={'/'}>Ecommerce Apps</Link></li>
                                    <li><Link to={'/'}>Vehicle Services Apps</Link></li>
                                    <li><Link to={'/'}>Delivery Apps</Link></li>
                                    <li><Link to={'/'}>Entertainment Apps</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='clear'></div>
                    </div>
                </div>
                <div className='col-xs-12 col-md-12'>
                    <div className='coppy_right'>
                        Copyright 2023 DataXmind | TLD, All Rights Reserved
                    </div>
                </div>
                <div className='clear'></div>
            </div>
        </div>
    );
}

export default memo(Footer);
