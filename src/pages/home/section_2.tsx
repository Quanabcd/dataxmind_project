import React, { useCallback } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Section_2 = () => {

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

    return (
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
    )
}

export default Section_2