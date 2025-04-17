import React from 'react'
import HomeStyle from'./Home.module.css'
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import CountUp from "react-countup";
import { BsPlusLg } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import "react-multi-carousel/lib/styles.css";   

const Home = () => {
  return (
    <section className={HomeStyle.box01}>
      <div id={HomeStyle.boxs}>
        <div id={HomeStyle.box1}>
          <div id={HomeStyle.withtext}>
            <h2>With Test Yantra Global</h2>
          </div>
          <div id={HomeStyle.sytlefont}></div>
          <div id={HomeStyle.content1}>
            <p>Test Yantra Global's 5,000+ employees provide a range of innovative technology solutions to digitally transform your organization.</p>
          </div>
          <div id={HomeStyle.content2}>
            <p>From IT consulting, application design and development, to automated AI enabled test management platform that unifies web, android, iOS, API, and DB testing, we have the expertise, technology, experience, and tools to help transform your business.

</p>
          </div>
          <div id={HomeStyle.con5}>
            <button>
            Get Started Free{" "}
            <section id={HomeStyle.arrow}>
                <FaArrowRight />
              </section>
            </button>

          </div>

        </div>
        <div id={HomeStyle.box2}>
          <div id={HomeStyle.box2banner}>

          </div>
        </div>

           
      </div>
      <section id={HomeStyle.box02}>
        <div id={HomeStyle.boxheading}>
          <h1>Leverage Test Yantra Global's range</h1>
          <h1>of Professional Services</h1>
        </div>
        <div id={HomeStyle.boxcards}>
        <div id={HomeStyle.boxcards1}>
          <div id={HomeStyle.boxcards1img}>
          <img
                src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FTaas.png&w=96&q=75"
                alt=""
              />
          </div>
          <div id={HomeStyle.boxcards1head}><h3>Software Testing Services (TaaS)<br/></h3></div>
          <div id={HomeStyle.boxcards1content}>
          <p>We offer cost-effective, reliable and scalable software testing services.<br /></p>
          </div>
        </div>
        <div id={HomeStyle.boxcards1}>
        <div id={HomeStyle.boxcards1img}>
        <img
                src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FIT.png&w=96&q=75"
                alt=""
              />
        </div>
          <div id={HomeStyle.boxcards1head}>
          <h3>IT Software Skills Enhancement</h3>
          </div>
          <div id={HomeStyle.boxcards1content}><p>Our customized and curated training models help organizations elevate their IT quotient.</p></div>
        </div>
        <div id={HomeStyle.boxcards1}>
        <div id={HomeStyle.boxcards1img}>
        <img
                src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FDSS.png&w=96&q=75"
                alt=""
              />
        </div>
          <div id={HomeStyle.boxcards1head}>
          <h3>Deployment &amp; Support Services</h3>
          </div>
          <div id={HomeStyle.boxcards1content}>
          <p>Our team of experts help you craft a winning IT strategy for your organization.</p>
          </div>
        </div>
        <div id={HomeStyle.boxcards1}>
        <div id={HomeStyle.boxcards1img}>
        <img
                src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FSDD.png&w=96&q=75"
                alt=""
              />
        </div>
          <div id={HomeStyle.boxcards1head}><h3>Software Design &amp; Development</h3></div>
          <div id={HomeStyle.boxcards1content}><p>We deliver IT solutions in a wide variety of verticals and elevate businesses to the next level.</p></div>
        </div>
        <div id={HomeStyle.boxcards1}>
        <div id={HomeStyle.boxcards1img}>
        <img
                src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2Ficons%2FcrowdTesting.png&w=96&q=75"
                alt=""
              />
        </div>
          <div id={HomeStyle.boxcards1head}>
          
          <h3 >Crowd Testing</h3>
          </div>
          <div id={HomeStyle.boxcards1content}><p>We offer comprehensive crowd-testing services, leveraging a global network of skilled testers.</p></div>
        </div>
        </div>
        <div id={HomeStyle.youtubbox}>
          <divi id={HomeStyle.youtub} >
          <Link to={"https://youtu.be/tuwxrL7Kh4E?feature=shared"}>
            <img
              src="https://www.testyantraglobal.com/images/video-thumbnail5.png"
              alt="Video"
            />
          </Link>
          </divi>
        </div>

      </section>
      <section id={HomeStyle.box03}>

      </section>
      <section id={HomeStyle.box04}>
        <div id={HomeStyle.boxheading1}>
          <h1>Our Recent Articles</h1>
        </div>
        <div id={HomeStyle.boxcards01}>
          <div id={HomeStyle.boxcards2}></div>
          <div id={HomeStyle.boxcards2}></div>
          <div id={HomeStyle.boxcards2}></div>

        </div>

      </section>
    </section>
  );
};

export default Home;
