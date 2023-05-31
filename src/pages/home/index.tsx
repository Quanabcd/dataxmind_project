import classNames from 'classnames/bind';
import React, { useCallback, useMemo, useState, useRef, ChangeEvent } from 'react';
import styles from './home.module.scss';
import { Navbar } from 'components/menu';
import Ic_arrowRight from 'assets/icon/Ic_arrow-right.png';
import Ic_Play from 'assets/icon/Ic_Play.png';
import Img_Laptop from 'assets/icon/img_laptop.png';
import Img_Phone_2 from 'assets/icon/Img_Phone_2.svg';
import Img_Phone_3 from 'assets/icon/Img_Phone_3.svg';
import Ic_Calendar from 'assets/icon/Ic_Calendar.png';
import Ic_Linked from 'assets/icon/Ic_linked.png';
import Ic_Facebook from 'assets/icon/Ic_fb.png';
import Ic_Tele from 'assets/icon/Ic_tele.png';
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
import Ic_dowload from 'assets/icon/Ic_dowload.svg';
import Ic_UploadSimple from 'assets/icon/Ic_UploadSimple.svg';
import Img_idea_1 from 'C:/Users/Admin/Documents/GitHub/quan/dataxmind_project/src/assets/icon/Img_idea_1.svg';
import Img_idea_2 from 'C:/Users/Admin/Documents/GitHub/quan/dataxmind_project/src/assets/icon/Img_idea_2.svg';
import Img_idea_3 from 'C:/Users/Admin/Documents/GitHub/quan/dataxmind_project/src/assets/icon/Img_idea.svg';
import Img_idea_4 from 'C:/Users/Admin/Documents/GitHub/quan/dataxmind_project/src/assets/icon/Img_idea4.svg';
import { DoubleRightOutlined } from '@ant-design/icons';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MyTextInput } from 'components/input';
import { MyTextAreaInput } from 'components/text-area';
import { TextFieldActions } from 'components/input/types';
import formValidate from 'utils/form-validate';
import Languages from 'commons/languages';
import { Modal } from 'antd';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface Item {
    id: number;
    title: string;
    img: any;
}

function Home() {

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [transition, setTransition] = useState<boolean>(false);

    const [name, setName] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const [content, setContent] = useState<any>('');

    const refName = useRef<TextFieldActions>(null);
    const refEmail = useRef<TextFieldActions>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event);
    };

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setContent(event);
    };

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFileName(`${file.name} (${file.type})`);
            // Xử lý file tại đây
        }
    };

    const handleSubmit = () => {


        const errMsgName = formValidate.inputNameEmpty(name, Languages.errorMsg.nameRequired, Languages.errorMsg.userNameRegex)
        const errMsgEmail = formValidate.emailValidate(email)

        refEmail.current?.setErrorMsg(errMsgEmail)
        refName.current?.setErrorMsg(errMsgName)

        if (`${errMsgName}${errMsgEmail}`.length === 0) {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('content', content);
            // formData.append('file', fileInputRef.current?.files?.[0] || '');
            fetch('https://formspree.io/f/xlekkykg', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json'
                }
            }).then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        Modal.success({
                            title: 'Message sent successfully',
                            content: (
                                <div>
                                    <p style={{ margin: 0 }}>We will contact you as soon as possible.</p>
                                    <p style={{ margin: 0 }}>Thank you you have interest.</p>
                                </div>
                            )
                        });
                    }
                })
                .catch(error => {
                    console.error(error);
                });

        } else {
            return false
        }
    };

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
        return <div className='col-xs-12 col-sm-6 col-md-4 fadeIn3'>
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
            return <div className='col-xs-12 col-sm-6 col-md-3'>
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
                <AnimationOnScroll
                    animateIn="animate__zoomIn"
                    offset={0}
                    duration={2}
                >
                    <div className='bg_item_icon'>
                        <img src={img} alt={title} />
                    </div>
                    <h4 className='text'>{title}</h4>
                </AnimationOnScroll>
            </div >
        },
        [],
    )

    const settingsSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000

    };

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
                        <div className='col-xs-12 col-sm-12 col-md-6'>
                            <div className='slide_box_left'>
                                <h1 className='title_web fadeIn1'>DataXmind - Leading Mobile App Partner in vietnam</h1>
                                <p className='descreption fadeIn2'>The most powerfull Mobile App maker for app Store & CH Play </p>
                                <div className='content fadeIn3'>
                                    <p>DataXmind Mobile’s powerfull and easy to build mobile app builder makes it. So you can make rapidly mobile apps for IOS & Android in a Fraction of the time and cost. Based on both cross platform and native languages</p>
                                    <ul>
                                        <li><img src={Ic_arrowRight} alt='Ic_arrowRight' /> Build custom functionality with our developer SDK</li>
                                        <li><img src={Ic_arrowRight} alt='Ic_arrowRight' /> Simple and intuitive app builder</li>
                                        <li><img src={Ic_arrowRight} alt='Ic_arrowRight' /> Personalise the Experience </li>
                                        <li><img src={Ic_arrowRight} alt='Ic_arrowRight' /> Increase pace of change</li>
                                    </ul>
                                </div>
                                <div className='button animate__fadeInLeft_phone'>
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
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-6'>
                            <div className='swapper_slider-box fadeIn2'>
                                <Slider {...settingsSlider}>
                                    <div className='item_slide'>
                                        <img src={Img_Laptop} alt='Img_Laptop' />
                                    </div>
                                    <div className='item_slide'>
                                        <img src={Img_Phone_2} alt='Img_Laptop' />
                                    </div>
                                    <div className='item_slide'>
                                        <img src={Img_Phone_3} alt='Img_Laptop' />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className='clear'></div>
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
                                <AnimationOnScroll

                                    animateIn="animate__fadeInLeft"
                                    offset={0}
                                    duration={2}
                                >
                                    {renderItemSquareBox('Years of experience', '10+')}
                                </AnimationOnScroll>
                                <AnimationOnScroll

                                    animateIn="animate__fadeInUp"
                                    offset={0}
                                    duration={2}
                                >
                                    {renderItemSquareBox('Projects issuesed', '1.000+')}
                                </AnimationOnScroll>
                                <AnimationOnScroll

                                    animateIn="animate__fadeInDown"
                                    offset={0}
                                    duration={2}
                                >
                                    {renderItemSquareBox('App & Website', '2.540+')}
                                </AnimationOnScroll>
                                <AnimationOnScroll

                                    animateIn="animate__fadeInRight"
                                    offset={0}
                                    duration={2}
                                >
                                    {renderItemSquareBox('Our customer', '10.000+')}
                                </AnimationOnScroll>



                                <div className='clear'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section_3'>
                <div className='wrapper_choose-us0'>
                    <div className='container'>
                        <div className='hidden-xs col-sm-6 col-md-6'>
                            <AnimationOnScroll

                                animateIn="animate__fadeInLeft"
                                offset={0}
                                duration={2}
                            >
                                <div className='wrapper_choose_box_left'>
                                    <img src={Img_Why} alt='imgchooseleft' />
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-6'>
                            <AnimationOnScroll

                                animateIn="animate__fadeInRight"
                                offset={0}
                                duration={2}
                            >
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
                            </AnimationOnScroll>
                        </div>
                        <div className='col-xs-12 hidden-sm hidden-md hidden-lg'>
                            <AnimationOnScroll

                                animateIn="animate__fadeInRight"
                                offset={0}
                                duration={2}
                            >
                                <div className='wrapper_choose_box_left'>
                                    <img src={Img_Why} alt='imgchooseleft' />
                                </div>
                            </AnimationOnScroll>
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
                                    <div className='clear'></div>
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
                                        <AnimationOnScroll

                                            animateIn="animate__fadeInRight"
                                            offset={0}
                                            duration={2}
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
                                        </AnimationOnScroll>
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
                            <AnimationOnScroll
                                animateIn="animate__fadeInLeft"
                                offset={0}
                                duration={2}
                            >
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
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </section>
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

            <section className='section section_8'>
                <div className='form_wrappper'>
                    <div className='container'>
                        <div className='wrap_box_style_cover'>
                            <div className='head'>
                                <h2>Survey and Contact</h2>
                            </div>
                        </div>
                        <div className='form_wrapper_input'>
                            <div className='dowloadFile'>
                                <div className='text_file_dowload'>
                                    <h3>Download file survey</h3>
                                    <p>Survey file helps us better understand your wishes</p>
                                </div>
                                <div className='file'>
                                    <input type='file' name='file' />
                                    <img src={Ic_dowload} alt='dowload' />
                                </div>
                            </div>
                            <div className='box_input_group'>
                                <div className='title'>
                                    Whatever you still have questions about our service
                                </div>
                                <MyTextInput
                                    ref={refName}
                                    value={name}
                                    type={'text'}
                                    placeHolder='Your name'
                                    maxLength={30}
                                    onChangeText={handleNameChange}
                                />

                                <MyTextInput
                                    ref={refEmail}
                                    value={email}
                                    type={'text'}
                                    placeHolder='Your email or your phone'
                                    onChangeText={handleEmailChange}
                                />

                                <div className='input_file_box'>
                                    <input
                                        ref={fileInputRef}
                                        id="file"
                                        type='file'
                                        name='file'
                                        className='input_file'
                                        onChange={handleFileChange} />
                                    <label
                                        htmlFor="file"
                                    > {selectedFileName ? 'Tên file đã chọn:' + `${selectedFileName}` : 'Attach file survey here'}
                                        <img src={Ic_UploadSimple} alt='Ic_UploadSimple' />
                                    </label>

                                </div>


                                <MyTextAreaInput
                                    value={content}
                                    type={'text'}
                                    placeHolder='What are you wondering?'
                                    maxLength={300}
                                    onChangeText={handleTextChange}
                                />


                                <Button
                                    label={'Send'}
                                    buttonStyle={BUTTON_STYLES.LINEAR_GREEN}
                                    textStyle={BUTTON_STYLES.WHITE}
                                    width={50}
                                    customStyles={{ justifyContent: 'center', margin: 'auto', marginTop: 30 }}
                                    onPress={handleSubmit}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default Home;
