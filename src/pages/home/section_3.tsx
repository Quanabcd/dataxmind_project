import React from 'react'
import { Button } from 'components/button'
import { BUTTON_STYLES } from 'components/button/types'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Img_Why from 'assets/icon/Img_Why.svg';
import Ic_arrowRight from 'assets/icon/Ic_arrow-right.png';
import Ic_Calendar from 'assets/icon/Ic_Calendar.png';
import Ic_Play from 'assets/icon/Ic_Play.png';

const Section_3 = () => {
    return (
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
    )
}

export default Section_3