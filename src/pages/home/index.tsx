import classNames from 'classnames/bind';
import React, { useCallback, useMemo, useState } from 'react';
import styles from './home.module.scss';
import { Navbar } from 'components/menu';
import { Row, Col } from 'antd';
import Ic_arrowRight from 'assets/icon/Ic_arrow-right.png';
import Ic_Play from 'assets/icon/Ic_Play.png';
import Img_Laptop from 'assets/icon/img_laptop.png';
import Ic_Calendar from 'assets/icon/Ic_Calendar.png';
import { Button } from 'components/button';
import { BUTTON_STYLES } from 'components/button/types';
import Img_item from 'assets/icon/item.svg';
import Img_Why from 'assets/icon/Img_Why.svg';
import Ic_Media_1 from 'assets/icon/Ic_Media_1.svg';
import Ic_Media_2 from 'assets/icon/Ic_Media_2.svg';
import Ic_Media_3 from 'assets/icon/Ic_Media_3.svg';
import Ic_Media_4 from 'assets/icon/Ic_Media_4.svg';
import Ic_Media_5 from 'assets/icon/Ic_Media_5.svg';
import Ic_Media_6 from 'assets/icon/Ic_Media_6.svg';
import Ic_Media_7 from 'assets/icon/Ic_Media_7.svg';
import Ic_Media_8 from 'assets/icon/Ic_Media_8.svg';
import Img_video from 'assets/icon/Img_video.svg';
import Img_feedback from 'assets/icon/Img_feedback.svg';
import Ic_partner from 'assets/icon/Ic_partner.svg';
import Img_idea_1 from 'C:/Users/Admin/Documents/GitHub/quan/dataxmind_project/src/assets/icon/Img_idea_1.svg';
import Img_idea_2 from 'C:/Users/Admin/Documents/GitHub/quan/dataxmind_project/src/assets/icon/Img_idea_2.svg';
import Img_idea_3 from 'C:/Users/Admin/Documents/GitHub/quan/dataxmind_project/src/assets/icon/Img_idea.svg';
import Img_idea_4 from 'C:/Users/Admin/Documents/GitHub/quan/dataxmind_project/src/assets/icon/Img_idea.svg';
import { DoubleRightOutlined } from '@ant-design/icons';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

interface Item {
    id: number;
    title: string;
    img: any;
}

function Home() {

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [transition, setTransition] = useState<boolean>(false);

    const items: Item[] = [
        {
            id: 1,
            title: 'Implement New Ideas',
            img: Img_idea_1
        },
        {
            id: 2,
            title: 'Design & Plan with Architect and Designers',
            img: Img_idea_2
        },
        {
            id: 2,
            title: 'Develop with Top Engineers',
            img: Img_idea_3
        },
        {
            id: 2,
            title: 'Grow your app with strategic Consulting',
            img: Img_idea_4
        }
    ];

    const getVisibleItems = (): Item[] => {
        const endIndex = (activeIndex + 3) % items.length;
        if (endIndex >= activeIndex) {
            return items.slice(activeIndex, endIndex + 1);
        } else {
            return [...items.slice(activeIndex), ...items.slice(0, endIndex + 1)];
        }
    };

    const handleClick = (index: number): void => {
        setActiveIndex(index % items.length);
        setTransition(true);
    };

    const renderItemProduct = useMemo(() => {
        return <div className='col-xs-12 col-md-4'>
            <div className='item'>
                <div className='box-image'>
                    <img src={Img_item} alt='item' />
                    <div className='button_on-abs'>
                        <Button
                            label={'Get Started'}
                            buttonStyle={BUTTON_STYLES.LINEAR_GREEN}
                            rightIcon={Ic_Play}
                            isLowerCase
                            customStyles={{ borderRadius: 50 }}
                        />
                    </div>
                </div>
                <div className='box_wrapper_content' >
                    <h3>Ecommerce Apps</h3>
                    <p>Increase revenue per customer and customer engagement for your e-commercial platform</p>
                </div>
            </div>
        </div>
    }, [])

    const renderItemSquareBox = useCallback(
        (title: string, count: string) => {
            return <div className='col-xs-12 col-sm-4 col-md-3'>
                <div className='square_box'>
                    <p>{title}</p>
                    <div className='square'>
                        <p>{count}</p>
                    </div>
                </div>
            </div>
        },
        [],
    )

    const renderItemSolution = useCallback(
        (title: string, img: any) => {
            return <div className='item_solution'>
                <div className='bg_item_icon'>
                    <img src={img} alt={title} />
                </div>
                <h4 className='text'>{title}</h4>
            </div>
        },
        [],
    )

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
        <div className={cx('page')}>
            <div className='wrap_header'>
                <Navbar />
                <div className='wrap_box_slide'>
                    <div className='container'>
                        <Row gutter={[16, 16]}>
                            <Col span={12}>
                                <div className='slide_box_left'>
                                    <h1 className='title_web'>DataXmind - Leading Mobile App Partner in vietnam</h1>
                                    <p className='descreption'>The most powerfull Mobile App maker for app Store & CH Play </p>
                                    <div className='content'>
                                        <p>DataXmind Mobile’s powerfull and easy to build mobile app builder makes it. So you can make rapidly mobile apps for IOS & Android in a Fraction of the time and cost. Based on both cross platform and native languages</p>
                                        <ul>
                                            <li><img src={Ic_arrowRight} alt='Ic_arrowRight' /> Build custom functionality with our developer SDK</li>
                                            <li><img src={Ic_arrowRight} alt='Ic_arrowRight' /> Simple and intuitive app builder</li>
                                            <li><img src={Ic_arrowRight} alt='Ic_arrowRight' /> Personalise the Experience </li>
                                            <li><img src={Ic_arrowRight} alt='Ic_arrowRight' /> Increase pace of change</li>
                                        </ul>
                                    </div>
                                    <div className='button'>
                                        <Button
                                            label={'Get Started'}
                                            buttonStyle={BUTTON_STYLES.LINEAR}
                                            rightIcon={Ic_Play}
                                            isLowerCase
                                            customStyles={{ borderRadius: 50 }}
                                        />

                                        <Button
                                            label={'Get a free consultation'}
                                            buttonStyle={BUTTON_STYLES.GREEN}
                                            textStyle={BUTTON_STYLES.BLACK}
                                            rightIcon={Ic_arrowRight}
                                            isLowerCase
                                            customStyles={{ borderRadius: 50 }}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className='swapper_slider-box'>
                                    <div className='item_slide'>
                                        <img src={Img_Laptop} alt='Img_Laptop' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <section className='section section_1'>
                <div className='section_wrap_box_business'>
                    <div className='container'>
                        <div className='wrap_box_style_cover'>
                            <div className='head'>
                                <h2>
                                    Mobile App Development to Add value  to Your Business Goals
                                </h2>
                            </div>
                            <div className='item_list_worked'>

                                {renderItemProduct}
                                {renderItemProduct}
                                {renderItemProduct}
                                {renderItemProduct}
                                {renderItemProduct}
                                {renderItemProduct}

                                <div className='clear'></div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='section section_2'>
                <div className='wrapper_bridge_idea '>
                    <div className='container'>
                        <div className='wrapper_style'>
                            <div className='wrap_box_style_cover'>
                                <div className='head'>
                                    <h2>We will be the bridge from idea to reality for you</h2>
                                </div>
                            </div>
                            <div className='list_square_box'>
                                {renderItemSquareBox('Years of experience', '10+')}
                                {renderItemSquareBox('Projects issuesed', '1.000+')}
                                {renderItemSquareBox('App & Website', '2.540+')}
                                {renderItemSquareBox('Our customer', '10.000+')}
                                <div className='clear'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section_3'>
                <div className='wrapper_choose-us0'>
                    <div className='container'>
                        <div className='col-xs-12 col-sm-6 col-md-6'>
                            <div className='wrapper_choose_box_left'>
                                <img src={Img_Why} alt='imgchooseleft' />
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-6'>
                            <div className='wrapper_choose_box_right'>
                                <div className='content'>
                                    <h2>Why should you choose us?</h2>
                                    <p>We have experience and a team of experienced and talented technicians.</p>
                                    <ul>
                                        <li><img src={Ic_arrowRight} alt='Ic_arrowRight' /> No downtime</li>
                                        <li><img src={Ic_arrowRight} alt='Ic_arrowRight' /> No crashes</li>
                                        <li><img src={Ic_arrowRight} alt='Ic_arrowRight' /> Fast loading speeds </li>
                                        <li><img src={Ic_arrowRight} alt='Ic_arrowRight' /> Top-notch security</li>
                                    </ul>
                                </div>
                                <div className='button'>
                                    <Button
                                        label={'Schedule a consultation '}
                                        buttonStyle={BUTTON_STYLES.GREEN}
                                        textStyle={BUTTON_STYLES.BLACK}
                                        rightIcon={Ic_Calendar}
                                        isLowerCase
                                        customStyles={{ borderRadius: 50 }}
                                    />
                                    <Button
                                        label={'Get Stared now'}
                                        buttonStyle={BUTTON_STYLES.LINEAR}
                                        rightIcon={Ic_Play}
                                        isLowerCase
                                        customStyles={{ borderRadius: 50 }}
                                    />


                                </div>
                            </div>
                        </div>
                        <div className='clear'></div>
                    </div>
                </div>
            </section>
            <section className='section section_4'>
                <div className='wrapper_box_solution'>
                    <div className='container'>
                        <div className='box_solution_style'>
                            <div className='wrap_box_style_cover'>
                                <div className='head'>
                                    <h2>We are the best solution for your Business</h2>
                                </div>
                            </div>

                            <div className='solution_business_item'>

                                <div className='top'>
                                    {renderItemSolution('Application Servers', Ic_Media_1)}
                                    {renderItemSolution('Load Balancers', Ic_Media_2)}
                                    {renderItemSolution('Database Servers', Ic_Media_3)}
                                </div>

                                <div className='bottom'>
                                    {renderItemSolution('App Publishing platforms', Ic_Media_4)}
                                    {renderItemSolution('SDKs -Software Development Kits', Ic_Media_5)}
                                    {renderItemSolution('APIs', Ic_Media_6)}
                                    {renderItemSolution('CND - Content Delivery Network', Ic_Media_7)}
                                    {renderItemSolution('Object Storage', Ic_Media_8)}
                                </div>

                            </div>

                            <div className='video_box_solutions'>
                                <img src={Img_video} alt="video" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section_5'>
                <div className='wrapper_idea_reality'>
                    <div className='container'>
                        <div className='idea_reality_sytlelist'>
                            <div className='wrap_box_style_cover'>
                                <div className='head'>
                                    <h2>Bring your Mobile app idea to reality life with to experts</h2>
                                    <p>Our team of talented developers and designers will work one-on-one with you to take your app from idea to reality. We’ve helped small local businesses build powerful mobile apps and we’re ready to help you to</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='container'>
                        <div className="slide ">
                            <div className={`slide-container ${transition ? 'transition' : ''}`}>
                                {getVisibleItems().map((item, index) => (
                                    <div
                                        key={index}
                                        className={`slide-item ${index === 1 ? 'active' : ''}`}
                                        onClick={() => handleClick(activeIndex + 1)}
                                    >
                                        <div className='box_image_scroll'>
                                            <img src={item?.img} alt={item?.title} />
                                        </div>
                                        <div className='title'>
                                            <h4>{item?.title}</h4>
                                        </div>

                                        <div className='icon'>
                                            <div className={`icon_Round ${index === 1 ? 'active' : ''}`}>
                                                <DoubleRightOutlined rev={undefined} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='button'>
                            <Button
                                label={'Schedule a consultation '}
                                buttonStyle={BUTTON_STYLES.GREEN}
                                textStyle={BUTTON_STYLES.BLACK}
                                rightIcon={Ic_Calendar}
                                isLowerCase
                                customStyles={{ borderRadius: 50 }}
                            />
                            <Button
                                label={'Get Stared now'}
                                buttonStyle={BUTTON_STYLES.LINEAR}
                                rightIcon={Ic_Play}
                                isLowerCase
                                customStyles={{ borderRadius: 50 }}
                            />


                        </div>
                    </div>
                </div>
            </section >
            <section className='section section_6'>
                <div className='wrapper_box_feedback'>
                    <div className='container'>
                        <div className='slide_box_feedback'>
                            <div className='wrap_box_style_cover'>
                                <div className='head'>
                                    <h2>What did our customers say about us?</h2>
                                </div>
                            </div>
                            <div className='list_slider'>

                                <Slider {...settings}>

                                    <div className='item'>
                                        <div className='item_slider'>
                                            <div className='image'>
                                                <img src={Img_feedback} alt='face' />
                                            </div>
                                            <div className='descreptions'>
                                                <p>“ (lời phản hồi) Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since type specimencluding versions of Lorem Ipsum. ”</p>
                                            </div>
                                            <div className='job_custommer'>
                                                <span>Nhân viên văn phòng</span>
                                                <h4>Jennifer Shapiro</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='item'>
                                        <div className='item_slider'>
                                            <div className='image'>
                                                <img src={Img_feedback} alt='face' />
                                            </div>
                                            <div className='descreptions'>
                                                <p>“ (lời phản hồi) Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since type specimencluding versions of Lorem Ipsum. ”</p>
                                            </div>
                                            <div className='job_custommer'>
                                                <span>Nhân viên văn phòng</span>
                                                <h4>Jennifer Shapiro</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='item'>
                                        <div className='item_slider'>
                                            <div className='image'>
                                                <img src={Img_feedback} alt='face' />
                                            </div>
                                            <div className='descreptions'>
                                                <p>“ (lời phản hồi) Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since type specimencluding versions of Lorem Ipsum. ”</p>
                                            </div>
                                            <div className='job_custommer'>
                                                <span>Nhân viên văn phòng</span>
                                                <h4>Jennifer Shapiro</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='item'>
                                        <div className='item_slider'>
                                            <div className='image'>
                                                <img src={Img_feedback} alt='face' />
                                            </div>
                                            <div className='descreptions'>
                                                <p>“ (lời phản hồi) Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since type specimencluding versions of Lorem Ipsum. ”</p>
                                            </div>
                                            <div className='job_custommer'>
                                                <span>Nhân viên văn phòng</span>
                                                <h4>Jennifer Shapiro</h4>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section_7'>
                <div className='wrapper_box_team'>
                    <div className='container'>
                        <div className='team_box_show'>
                            <div className='wrap_box_style_cover'>
                                <div className='head'>
                                    <h2>Who are our team?</h2>
                                </div>
                            </div>
                            <div className='list_show_team'>
                                <Slider {...settings}>
                                    <div className='item_person'>
                                        <div className='box_effect_image'>
                                            <img src={Img_feedback} alt='feedback' />
                                        </div>
                                        <div className='position_job'>
                                            <h4>Jennifer Shapiro</h4>
                                            <span>CTO</span>
                                        </div>
                                    </div>
                                    <div className='item_person'>
                                        <div className='box_effect_image'>
                                            <img src={Img_feedback} alt='feedback' />
                                        </div>
                                        <div className='position_job'>
                                            <h4>Jennifer Shapiro</h4>
                                            <span>CTO</span>
                                        </div>
                                    </div>
                                    <div className='item_person'>
                                        <div className='box_effect_image'>
                                            <img src={Img_feedback} alt='feedback' />
                                        </div>
                                        <div className='position_job'>
                                            <h4>Jennifer Shapiro</h4>
                                            <span>CTO</span>
                                        </div>
                                    </div>
                                    <div className='item_person'>
                                        <div className='box_effect_image'>
                                            <img src={Img_feedback} alt='feedback' />
                                        </div>
                                        <div className='position_job'>
                                            <h4>Jennifer Shapiro</h4>
                                            <span>CTO</span>
                                        </div>
                                    </div>
                                </Slider>
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
        </div >
    );
}

export default Home;
