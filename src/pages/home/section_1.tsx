import { Button } from 'components/button'
import { BUTTON_STYLES } from 'components/button/types'
import React, { useMemo } from 'react'
import Img_item from 'assets/icon/item.svg';
import Ic_Play from 'assets/icon/Ic_Play.png';

const Section_1 = () => {

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


    return (
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
    )
}

export default Section_1