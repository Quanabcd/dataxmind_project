import { DownOutlined } from '@ant-design/icons';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Ic_Arrowup from 'assets/icon/Ic_Arrow-up.png';
import Ic_Friendly from 'assets/icon/Ic_Friendly.png';
import Ic_Logo from 'assets/icon/Ic_Logo.svg';
import { BUTTON_STYLES } from 'components/button/types';
import { Button } from 'components/button';

export const Navbar = () => {

    return (
        <div className='header-container'>
            <div className='container'>
                <div className='menu-bar--navigation'>
                    <div className='menu-left'>
                        <div className='logo'>
                            <Link to="/">
                                <img src={Ic_Logo} alt='logo' />
                            </Link>
                        </div>
                        <div className='menu'>
                            <div className='navigation'>
                                <ul className='nav-menu'>
                                    <li className='nav-item'><Link className='active' to='/'>Solutions <DownOutlined rev={undefined} /></Link></li>
                                    <li className='nav-item'><Link to='/'>Features <DownOutlined rev={undefined} /></Link></li>
                                    <li className='nav-item'><Link to='/'>Customer Stories <DownOutlined rev={undefined} /></Link></li>
                                    <li className='nav-item'><Link to='/'>Resources <DownOutlined rev={undefined} /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='menu-right'>
                        <div className='button_sellect'>

                            <Button
                                label={'Friendly Support'}
                                buttonStyle={BUTTON_STYLES.GREEN}
                                textStyle={BUTTON_STYLES.BLACK}
                                rightIcon={Ic_Friendly}
                                isLowerCase
                                customStyles={{ borderRadius: 50 }}
                            />

                            <Button
                                label={'Build an App'}
                                buttonStyle={BUTTON_STYLES.GREEN}
                                textStyle={BUTTON_STYLES.BLACK}
                                rightIcon={Ic_Arrowup}
                                isLowerCase
                                customStyles={{ borderRadius: 50 }}
                            />
                            
                        </div>
                        <div className='sellect-language'>
                            <select name='select_language' className='select_language'>
                                <option defaultValue='/en/' value='/en/'>English </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


