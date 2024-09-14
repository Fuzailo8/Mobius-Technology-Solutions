/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import image from '../../../assets/images/user/cover.jpeg'
import { useTranslation } from 'react-i18next';

const AboutUs = ({ isBg }) => {
    const { t } = useTranslation();

    return (
        <section
            id="author"
            className={`section-padding authorv3 ${isBg === "yes" ? "bg-one" : ""}`}
            style={{ marginTop: '50px' }}
        >
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-6"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div className="author-image">
                            <img className="img-fluid" src={image} alt="Mobius Technology Solutions" />
                        </div>
                    </div>
                    <div
                        className="col-lg-6"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div className="authorv3__content">
                            <h3 className="display-5 mb-0">{t('AboutUs')}</h3>
                            <p className="m-30px-b text-muted fs-5"></p>
                            <p>{t('AboutUsDesc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
