import React from 'react'
import Img_feedback from 'assets/icon/Img_feedback.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Section_6 = () => {
    
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


    return (
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
    )
}

export default Section_6