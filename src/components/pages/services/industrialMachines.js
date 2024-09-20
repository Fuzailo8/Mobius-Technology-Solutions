import React from "react";
import img from "../../../assets/images/moreServices/industrialMachines2.png"
import { useTranslation } from 'react-i18next';
import AnimatedBackground from "../../animatedBackground";
import { useMediaQuery } from 'react-responsive';
import CustomSwiper from "../swiper";
import Cursor from "../../cursor";

const IndustrialMachines = ({ isBg }) => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <>
            <Cursor />
            <AnimatedBackground />
            <section style={{ marginTop: '40px', position: 'relative' }}>
                <div style={{ position: 'relative', textAlign: 'center' }}>
                    <h2 className="display-6 heading">{t('IndustrialMachines')}</h2>
                    <div className="section-divider divider-traingle_color" style={{ display: 'flex', margin: '50px auto 50px auto' }}></div>
                </div>
            </section>

            <section
                id="hero"
                className={`hero hero__padding overflow-hidden position-relative
                    }`}
                style={{ paddingTop: isMobile ? '0px' : '100px', zIndex: 0 }}
            >
                <div className="circle x1"></div>
                <div className="circle x2"></div>
                <div className="circle x3"></div>
                <div className="circle x4"></div>
                <div className="circle x5"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div>
                                <h3 className="display-6 heading">
                                    {t('Machinery Expertise:')}
                                </h3>
                                <p className="mb-5 heading" style={{ fontSize: '18px' }}>
                                    {t('Machinery Expertise Desc')}
                                </p>
                            </div>

                        </div>
                        <div className="col-lg-6" style={{ paddingBottom: isMobile ? '50px' : '0px' }}>
                            <div className="hero__author text-center">
                                <div className="hero__author--inner3">
                                    <div className="hero__author--inner3--wrapper">
                                        <img
                                            width="500"
                                            className="img-fluid"
                                            src={img}
                                            alt="Mobius Technology Solutions"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="display-7 heading">
                                {t('Key Machinery:')}
                            </h3>
                            <p className="mb-5 heading" style={{ fontSize: '18px' }}>
                                {t('Key Machinery Desc')}
                            </p>
                        </div>
                        <div>
                            <h3 className="display-7 heading">
                                {t('Advanced Industrial Technologies:')}
                            </h3>
                            <p className="mb-5 heading" style={{ fontSize: '18px' }}>
                                {t('Advanced Industrial Technologies Desc')}
                            </p>
                        </div>
                    </div>
                </div>
                <CustomSwiper dataType="machines" />
            </section>
        </>
    );
};

export default IndustrialMachines;
