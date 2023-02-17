import React from 'react';
import './landing-page.css';
import {Button, Card, Col, Row} from "antd";
import Navbar from "./navbar";
import Footer from "./footer";
import nft1 from "./1.png";
import nft11 from "./11.png";
import nft2 from "./2.png";
import nft3 from "./3.png";
import nft4 from "./4.png";
import mainPic from "./f.png"
import {SocialIcon} from 'react-social-icons';

function LandingPage() {
    // const slides = [
    //     'Wishing you health, wealth, and happiness in the New Year ahead.',
    //     'I hope all your dreams come true in 2021 — onwards and upwards!',
    //     'Wave goodbye to the old and embrace the new with hope, dreams, and ambition. Wishing you a Happy New Year full of happiness!',
    //     'May the 12 months of the New Year be full of new achievements for you. May the days be filled with eternal happiness for you and your family!',
    //     'Don’t forget the past, learn from it and go out strong for your dreams and future. My best wishes are with you.',
    //     'Wishing for a better year with new opportunities and beautiful moments. Let’s have a great year ahead.',
    //     'Years will come and go, but my love for you will always be the same. It will never stop to grow as long as there is a tomorrow.',
    //     'When I think of you, my heart overflows with joy and pleasure. I have fallen more in love with you every year. This new year will not be an exception.',
    //     'We are blessed to have each other, I could not be any more thankful. May this year bring us success and good health.'
    // ]

    return (
        <div className="app">
            <Navbar/>

            <div className="main-wrapper">
                <Row justify={"center"} align={"middle"}>
                    <Col style={{margin: '0 32px 0 0'}} span={10}>
                        <img className="main-nft-pic" width={'100%'} src={nft1} alt="nft"/>
                    </Col>
                    <Col style={{margin: '0 0 0 32px'}}>
                        <SocialIcon className="main-logo" url="https://twitter.com/_classnow_" fgColor="#FDDD4E"
                                    bgColor="#363A59"/>
                        <p className="main-sentence">COLLECT THE<br/>FIRST LAUNCH!</p>
                        <p className="main-count">5000 / 5000 NFTs</p>
                        <a href="https://veace.xyz/">
                            <Button className="main-buy-button">BUY NOW</Button>
                        </a>
                    </Col>
                </Row>
            </div>
            <hr className="solid"/>

            <div className="meet-wrapper">
                <Row justify={"center"}>
                    <Col span={20}>
                        <Row align={"middle"}>
                            <Col span={12}>
                                <Card className="card">
                                    <p className="para-title-others">MEET EMU</p>
                                    <p className="para-content-others">
                                        <strong>It's more than flex! </strong>
                                        Eager Emu is a collection of 5000 NFTs. Each emu has its own value. Authentic
                                        art treasure.</p>
                                    <p className="para-content-others">
                                        <strong>The mascot and spirit of ClassNow! </strong>
                                        Eager Emu is always eager to learn. Just like
                                        {/*&nbsp;*/}
                                        <a className="link">ClassNow</a> is always on the move,
                                        empowering new adventures in learning and discovery.</p>
                                </Card>
                            </Col>
                            <Col style={{padding: '64px'}} span={12}>
                                <Row gutter={[16, 16]}>
                                    <Col span={12}><img width={'100%'} src={nft11} alt="nft"/></Col>
                                    <Col span={12}><img width={'100%'} src={nft2} alt="nft"/></Col>
                                    <Col span={12}><img width={'100%'} src={nft3} alt="nft"/></Col>
                                    <Col span={12}><img width={'100%'} src={nft4} alt="nft"/></Col>
                                </Row>
                            </Col>
                        </Row>
                        {/*<Row gutter={[16, 16]}>*/}
                        {/*    <Card className="stage-1"><p>01</p></Card>*/}
                        {/*    <Card className="stage-2"><p>01</p></Card>*/}
                        {/*    <Card className="stage-3"><p>01</p></Card>*/}
                        {/*</Row>*/}
                    </Col>
                </Row>
            </div>
            <hr className="solid"/>

            <div className="wrapper-55efc4">
                <Row justify={"center"}>
                    <Col span={18}>
                        <p className="para-title-others">ROADMAP</p>
                    </Col>
                </Row>
                {/*<Carousel interval="4000" type="card" height="200px">*/}
                {/*    {*/}
                {/*        [1,2,3,4].map((item, index) => {*/}
                {/*            return (*/}
                {/*                <Carousel.Item key={index}>*/}
                {/*                    <h3>{item}</h3>*/}
                {/*                </Carousel.Item>*/}
                {/*            )*/}
                {/*        })*/}
                {/*    }*/}
                {/*</Carousel>*/}
                {/*<Carousel slides={slides} autoplay={true} interval={1000}/>*/}
            </div>

            <div className="wrapper-55efc4">
                <Row justify={"center"}>
                    <Col span={18}>
                        <p className="para-title-others">THE TEAM</p>
                    </Col>
                </Row>
                {/*<Carousel interval="4000" type="card" height="200px">*/}
                {/*    {*/}
                {/*        [1,2,3,4].map((item, index) => {*/}
                {/*            return (*/}
                {/*                <Carousel.Item key={index}>*/}
                {/*                    <h3>{item}</h3>*/}
                {/*                </Carousel.Item>*/}
                {/*            )*/}
                {/*        })*/}
                {/*    }*/}
                {/*</Carousel>*/}
                {/*<Carousel slides={slides} autoplay={true} interval={1000}/>*/}
            </div>

            <hr className="solid-bottom"/>
            <Footer/>
        </div>
    )
        ;
}

export default LandingPage;
