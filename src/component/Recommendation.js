import React from 'react';
import {
  Pagination, Mousewheel, Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { MdOutlineSend } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import dennis from './images/dennis.jpg';
import ifeanyi from './images/ifeanyi.jpeg';
import wilfred from './images/wilfred.jpeg';

const Recommendation = () => {
  const recomend = [
    {
      img: wilfred,
      id: 1,
      name: 'Wilfred Akwarandu',
      role: 'CEO',
      recomend: 'The welder-turned-CEO, with a technical college background and a masters from Dubai, has established Weld Master Company as a reputable brand. With over 10 years of welding experience, he leads his team by example and ensures every project is delivered with excellence and speed. His staff appreciate his guidance and leadership, creating a friendly and productive work environment. As he leaves the workshop each day, he knows that his teams hard work and dedication have made Weld Master Company one of the best welding companies in the region.',
    },
    {
      img: ifeanyi,
      id: 2,
      name: 'Ifeanyi Oti',
      role: 'Project manager',
      recomend: 'Ifeanyi Oti is a seasoned Project Manager with a strong background in welding and fabrication. With years of experience managing complex projects, Ifeanyi is a key player in ensuring that Weld Masters delivers high-quality work that meets or exceeds customer expectations. His high level of productivity and attention to detail make him an invaluable member of the team.',
    },
    {
      img: dennis,
      id: 3,
      name: 'Dennis Oti',
      role: 'Human Resources',
      recomend: 'Dennis Oti is a highly skilled HR professional who brings a wealth of experience to Weld Masters. With a proven track record of high-level productivity, Dennis is committed to attracting, retaining, and developing top talent to ensure that the company can continue to deliver exceptional service to its customers.',
    },
  ];
  return (
    <div id="recommendations">
      <h1 className="project-title">
        <MdOutlineSend />
        <b>Team</b>
      </h1>
      <Swiper
        modules={[Pagination, Mousewheel, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        mousewheel
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="swiper"
        data-aos="fade-up"
      >
        {
          recomend.map((recommended) => (
            <SwiperSlide key={recommended.id}>
              <div className="recomend-con">
                <div className="recomend-img"><img className="wrap-img" src={recommended.img} alt={recommended.name} /></div>
                <div>
                  <h2>{recommended.name}</h2>
                  <p>{recommended.role}</p>
                  <div className="quote-con">
                    <small>
                      <span>
                        <FaQuoteLeft className="quote" />
                      </span>
                      {recommended.recomend}
                      <span>
                        <FaQuoteRight className="quote" />
                      </span>
                    </small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default Recommendation;
