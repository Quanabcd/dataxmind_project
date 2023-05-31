import classNames from 'classnames/bind';
import React, { useState, useRef, ChangeEvent } from 'react';
import styles from './home.module.scss';
import { Navbar } from 'components/menu';
import Ic_arrowRight from 'assets/icon/Ic_arrow-right.png';
import Ic_Play from 'assets/icon/Ic_Play.png';
import Img_Laptop from 'assets/icon/img_laptop.png';
import Img_Phone_2 from 'assets/icon/Img_Phone_2.svg';
import Img_Phone_3 from 'assets/icon/Img_Phone_3.svg';
import { Button } from 'components/button';
import { BUTTON_STYLES } from 'components/button/types';
import Ic_dowload from 'assets/icon/Ic_dowload.svg';
import Ic_UploadSimple from 'assets/icon/Ic_UploadSimple.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MyTextInput } from 'components/input';
import { MyTextAreaInput } from 'components/text-area';
import { TextFieldActions } from 'components/input/types';
import formValidate from 'utils/form-validate';
import Languages from 'commons/languages';
import { Modal } from 'antd';
import Section_1 from './section_1';
import Section_2 from './section_2';
import Section_3 from './section_3';
import Section_4 from './section_4';
import Section_5 from './section_5';
import Section_6 from './section_6';
import Section_7 from './section_7';

const cx = classNames.bind(styles);


function Home() {

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

    const settingsSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000

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
            <Section_1 />
            <Section_2 />
            <Section_3 />
            <Section_4 />
            <Section_5 />
            <Section_6 />
            <Section_7 />
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
