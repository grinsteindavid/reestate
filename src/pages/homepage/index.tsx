import ControlledCarousel from 'components/carousel';
import ContactUs from 'components/contact_us';
import Employees from 'components/employees';
import Faqs from 'components/faqs';
import NavbarPage from 'components/navbar';
import Subscribe from 'components/subscribe';
import WhoAreWe from 'components/who_are_we';
import React from 'react';

function Homepage() {
    return (
        <div>
            <NavbarPage />
            <ControlledCarousel />
            <WhoAreWe />
            <Employees />
            <Faqs />
            <Subscribe />
            <ContactUs />
        </div>
    );
}

export default Homepage;
