import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img_feedback from 'assets/icon/Img_feedback.svg';
import Ic_partner from 'assets/icon/Ic_partner.svg';
import Ic_Linked from 'assets/icon/Ic_linked.png';
import Ic_Facebook from 'assets/icon/Ic_fb.png';
import Ic_Tele from 'assets/icon/Ic_tele.png';
import { Link } from 'react-router-dom';

const Section_7 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    };

    const settingsPartner = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1903,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]

    };

    return (
        <section className='section section_7 '>
            <div className='wrapper_box_team'>
                <div className='container'>
                    <div className='team_box_show'>
                        <div className='wrap_box_style_cover'>
                            <div className='head'>
                                <h2>Who are our team?</h2>
                            </div>
                        </div>
                        <div className='list_show_team'>
                            <AnimationOnScroll
                                animateIn="animate__fadeInDown"
                                offset={0}
                                duration={2}
                            >
                                <Slider {...settings}>
                                    <div className='item_person'>
                                        <div className='box_effect_image'>
                                            <div className='border-box-around'>
                                                <img src={Img_feedback} alt='feedback' />
                                                <div className='social_link_customer'>
                                                    <Link to={'/'} >
                                                        <img src={Ic_Linked} alt="linked" />
                                                    </Link>
                                                    <Link to={'/'} >
                                                        <img src={Ic_Facebook} alt="fb" />
                                                    </Link>
                                                    <Link to={'/'} >
                                                        <img src={Ic_Tele} alt="linked" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='position_job'>
                                            <h4>Jennifer Shapiro</h4>
                                            <span>CTO</span>
                                        </div>
                                    </div>
                                    <div className='item_person'>
                                        <div className='box_effect_image'>
                                            <div className='border-box-around'>
                                                <img src={Img_feedback} alt='feedback' />
                                                <div className='social_link_customer'>
                                                    <Link to={'/'} >
                                                        <img src={Ic_Linked} alt="linked" />
                                                    </Link>
                                                    <Link to={'/'} >
                                                        <img src={Ic_Facebook} alt="fb" />
                                                    </Link>
                                                    <Link to={'/'} >
                                                        <img src={Ic_Tele} alt="linked" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='position_job'>
                                            <h4>Jennifer Shapiro</h4>
                                            <span>CTO</span>
                                        </div>
                                    </div>
                                    <div className='item_person'>
                                        <div className='box_effect_image'>
                                            <div className='border-box-around'>
                                                <img src={Img_feedback} alt='feedback' />
                                                <div className='social_link_customer'>
                                                    <Link to={'/'} >
                                                        <img src={Ic_Linked} alt="linked" />
                                                    </Link>
                                                    <Link to={'/'} >
                                                        <img src={Ic_Facebook} alt="fb" />
                                                    </Link>
                                                    <Link to={'/'} >
                                                        <img src={Ic_Tele} alt="linked" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='position_job'>
                                            <h4>Jennifer Shapiro</h4>
                                            <span>CTO</span>
                                        </div>
                                    </div>
                                    <div className='item_person'>
                                        <div className='box_effect_image'>
                                            <div className='border-box-around'>
                                                <img src={Img_feedback} alt='feedback' />
                                                <div className='social_link_customer'>
                                                    <Link to={'/'} >
                                                        <img src={Ic_Linked} alt="linked" />
                                                    </Link>
                                                    <Link to={'/'} >
                                                        <img src={Ic_Facebook} alt="fb" />
                                                    </Link>
                                                    <Link to={'/'} >
                                                        <img src={Ic_Tele} alt="linked" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='position_job'>
                                            <h4>Jennifer Shapiro</h4>
                                            <span>CTO</span>
                                        </div>
                                    </div>
                                </Slider>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className='partner_box'>
                        <div className='wrap_box_style_cover'>
                            <div className='head'>
                                <h2>DataXmind Strategic Partners</h2>
                            </div>
                        </div>
                        <div className='slider_partner'>
                            <Slider {...settingsPartner}>
                                <div className='item_partner'>
                                    <img src={Ic_partner} alt='parnter' />
                                </div>
                                <div className='item_partner'>
                                    <img src={Ic_partner} alt='parnter' />
                                </div>
                                <div className='item_partner'>
                                    <img src={Ic_partner} alt='parnter' />
                                </div>
                                <div className='item_partner'>
                                    <img src={Ic_partner} alt='parnter' />
                                </div>
                                <div className='item_partner'>
                                    <img src={Ic_partner} alt='parnter' />
                                </div>
                                <div className='item_partner'>
                                    <img src={Ic_partner} alt='parnter' />
                                </div>
                                <div className='item_partner'>
                                    <img src={Ic_partner} alt='parnter' />
                                </div>
                                <div className='item_partner'>
                                    <img src={Ic_partner} alt='parnter' />
                                </div>
                                <div className='item_partner'>
                                    <img src={Ic_partner} alt='parnter' />
                                </div>
                                <div className='item_partner'>
                                    <img src={Ic_partner} alt='parnter' />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section_7