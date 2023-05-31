import React, { useCallback } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Ic_Media_1 from 'assets/icon/Ic_Media_1.svg';
import Ic_Media_2 from 'assets/icon/Ic_Media_2.svg';
import Ic_Media_3 from 'assets/icon/Ic_Media_3.svg';
import Ic_Media_4 from 'assets/icon/Ic_Media_4.svg';
import Ic_Media_5 from 'assets/icon/Ic_Media_5.svg';
import Ic_Media_6 from 'assets/icon/Ic_Media_6.svg';
import Ic_Media_7 from 'assets/icon/Ic_Media_7.svg';
import Ic_Media_8 from 'assets/icon/Ic_Media_8.svg';
import Img_video from 'assets/icon/Img_video.svg';

const Section_4 = () => {

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

    return (
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
    )
}

export default Section_4