import React from 'react';
import ContactUs from 'components/contact_us';
import Employees from 'components/employees';
import Faqs from 'components/faqs';
import NavbarPage from 'components/navbar';
import Subscribe from 'components/subscribe';
import WhoAreWe from 'components/who_are_we';
import ScrollToTopButton from 'components/scroll_to_top_button';
import SocialMedia from 'components/social_media';
import Ratings from 'components/ratings';
import Testimonials from 'components/testimonials';

function Homepage() {
    return (
        <div>
            <NavbarPage />
            <WhoAreWe />
            <Employees />
            <Testimonials />
            <Ratings />
            <Faqs />
            <Subscribe />
            <ContactUs />
            <ScrollToTopButton />
            <SocialMedia />
        </div>
    );
}

export default Homepage;
