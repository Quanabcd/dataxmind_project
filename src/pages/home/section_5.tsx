import React, { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { DoubleRightOutlined } from '@ant-design/icons';
import Img_idea_1 from 'https://gitlab.com/dataxmind1/app1/-/blob/master/src/assets/icon/Img_idea_1.svg';
import Img_idea_2 from 'https://gitlab.com/dataxmind1/app1/-/blob/master/src/assets/icon/Img_idea_2.svg';
import Img_idea_3 from 'https://gitlab.com/dataxmind1/app1/-/blob/master/src/assets/icon/Img_idea.svg';
import Img_idea_4 from 'https://gitlab.com/dataxmind1/app1/-/blob/master/src/assets/icon/Img_idea4.svg';
import { Button } from 'components/button';
import { BUTTON_STYLES } from 'components/button/types';
import Ic_Calendar from 'assets/icon/Ic_Calendar.png';
import Ic_Play from 'assets/icon/Ic_Play.png';

interface Item {
    id: number;
    title: string;
    img: any;
}

const Section_5 = () => {

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


    return (
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
    )
}

export default Section_5