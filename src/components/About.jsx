import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import AboutImg from '../../public/assets/about.jpg';
import ImageCarousel from './ImageCarousel';

const About = () => {
  return (
    <section
      id='about'
      className='target:outline-dashed w-full p-2 flex items-center pb-2 mt-36'>
      <div className='max-w-[1240px] m-auto  grid-cols-3 gap-8'>
        <div className='flex justify-between'>
          <span className='uppercase text-2xl tracking-widest text-[#1e1c58] pl-4 pt-16'></span>

          {/* <div class='widget' id='tt-review-widget-star'>
            <img
              src='https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg'
              alt='Thumbtack'
              class='tt-logo'
            />
            <a
              target='_blank'
              href='https://www.thumbtack.com/nj/hopatcong/vinyl-siding-repair/glf-siding-garage-doors/service/234261171779593399'>
              <div>GLF Siding and Garage Doors</div>
              <script src='https://www.thumbtack.com/profile/widgets/scripts/?service_pk=234261171779593399&widget_id=review&type=star'></script>
            </a>
            <div id='tt-dynamic'>
              <img src='https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg' />
              <img src='https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg' />
              <img src='https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg' />
              <img src='https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg' />
              <img src='https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg' />
              <span>9 reviews</span>
            </div>
          </div>
*/}
          <a
            className='widget'
            href='https://www.thumbtack.com/nj/hopatcong/vinyl-siding-repair/glf-siding-garage-doors/service/234261171779593399'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              style={{ height: '128px', width: '128px' }}
              alt='Thumbtack Widget'
              src='https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/pro-svg/white/2022.svg'
            />
            <script src='https://www.thumbtack.com/profile/widgets/scripts/?service_pk=234261171779593399&widget_id=profile'></script>
          </a>
        </div>
        <div className='col-span-2'>
          <p className='uppercase text-2xl tracking-widest text-[#1e1c58] pl-4 pt-8'>
            About Us
          </p>
          <p className='py-2 text-gray-800'>
            We at GLF Siding are a proud family-owned business boasting 42 years
            of dedicated service to Northern New Jersey. While we have pivoted
            to specializing in garage door installations over the past several
            years, we continue to offer our expertise in siding repairs, window
            replacements, and entry doors. At GLF Siding, our hallmarks are
            meticulous attention to detail, a clean work site, utmost
            professionalism, and an unwavering commitment to customer
            satisfaction. We invite you to reach out with any inquiries or to
            request a complimentary estimate.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          {/* <Image src={AboutImg} className='rounded-xl' alt='/' /> */}
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
};

export default About;
