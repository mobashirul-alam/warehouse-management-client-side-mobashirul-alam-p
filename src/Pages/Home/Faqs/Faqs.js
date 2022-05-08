import React from 'react';
import { Accordion } from 'react-bootstrap';
import logo from '../../../images/logo/Fitness-Pro.png'

const Faqs = () => {
    return (
        <div className='container'>
            <p className='display-6 text-center'>Fitness Pro Equipment Warehouse FAQS</p>
            <p className='fs-2 text-center'>Frequently Asked Question</p>
            <div className='row'>
                <div className='col-7 my-auto'>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Why should your choose Fitness Pro ?</Accordion.Header>
                            <Accordion.Body>
                                We have been providing our services successfully since 2010. Fitness Pro is the best solution for our customers home and commercial fitness needs. We will try our best to provide services to our new & existing customer more consistently with the best level of our customer satisfaction.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How can I contact you to get exercise equipment ?</Accordion.Header>
                            <Accordion.Body>
                                We can be easily reached by calling at our store location, or you can contact with us online through our contact email or number given at our websites contact page.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How do I know that i'm getting best price for my equipment ?</Accordion.Header>
                            <Accordion.Body>
                                At Fitness Pro Warehouse, we have been working with our customers for more than a decades. And we are providing the perfect solution for their needs and their budget. We strive to achieve this while making sure that we provide you with only the best in customer service as well.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Can I purchase equipment for my personal gym or fitness center ?
                            </Accordion.Header>
                            <Accordion.Body>
                                Basically, we provide Wholesale service. But, we also provide Retail service to our customers. So, you have full flexibility to buy as your own wish. We have the expertise to help you to get the perfect solution for your exercise equipment that you need, at the best prices and with the best customer satisfaction service available.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className='col-5'>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faqs;