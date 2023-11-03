import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
const Timline = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      id="Passion"
      className="grid min-h-screen place-content-center place-items-center overflow-hidden bg-gradient-to-b from-slate-900 via-purple-800 to-black"
    >
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h5
                  id="question"
                  className="tracking-tight font-black text-teal-400  dark:text-white"
                  style={{
                    fontFamily: "Georgia, serif",
                    gap: "5rem",
                    marginBottom:"2rem",
                  }}
                >
                  <p style={{fontSize:"1.5rem"}}>What did duha's passion for programming start?</p>
                </h5>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  additionalTransfrom={0}
                  arrows
                  autoPlaySpeed={3000}
                  centerMode={false}
                  className=""
                  containerClass="container-with-dots"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  rewind={false}
                  rewindWithAnimation={false}
                  rtl={false}
                  shouldResetAutoplay
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  pauseOnHover
                  renderArrowsWhenDisabled={false}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                >
                  <div className="item">
                    <div
                      className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                      style={{
                        backgroundImage:
                          "url('https://www.arageek.com/_next/image?url=https%3A%2F%2Fcdn.arageek.com%2Fmagazine%2F%D8%AF%D9%8A%D9%83%D8%B3%D8%AA%D8%B1.jpg&w=3840&q=75')",
                      }}
                    >
                      <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                        <h2 className=" tracking-tight  title text-sm font-black text-white capitalize">
                         <p className="discription-text"> 
                         My career started when I finished my bachelor's degree
                          in laboratory medical sciences and after a few time I
                          had the opportunity to work in a hospital.</p>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div
                      className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                      style={{
                        backgroundImage:
                          "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/15f9f6fa-d673-450a-aca0-8cc7b50c5bba/dddtac6-22514575-8965-4b5a-9a9b-e0bc7b14a3b6.png/v1/fit/w_375,h_384,q_70,strp/dexter_s_lab_by_thejollybin_dddtac6-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzE1ZjlmNmZhLWQ2NzMtNDUwYS1hY2EwLThjYzdiNTBjNWJiYVwvZGRkdGFjNi0yMjUxNDU3NS04OTY1LTRiNWEtOWE5Yi1lMGJjN2IxNGEzYjYucG5nIiwid2lkdGgiOiI8PTEyNTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.miZvqj-cp8ha6Dlj5icox1vF2DaL6hZyHSN7YJlDlLk')",
                      }}
                    >
                      <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                        <h2 className="mt-4 tracking-tight  title text-xl font-black text-white capitalize">
                          <p className="discription-text">
                          After some time in this work, I found that it is not
                          my passion and I did not find a soul in it, and
                          because I am a person who loves learning and I love
                          development, I decided to change, but at that time I
                          was not doing what is my passion or how I will reach
                          it.
                          </p>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div
                      className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                      style={{
                        backgroundImage:
                          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkagnrkkimv3L6vd2bBR2QqhYs7DVdgAJIjty2ktjS1mDUV4aURkPV7lo6UNO9KrrCq0&usqp=CAU')",
                      }}
                    >
                      <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                        <h2 className="mt-4 tracking-tight  title text-xl font-black text-white capitalize">
                          <p  className="discription-text">
                          At that time, I thought a lot to find something that
                          suits my passion and because I like to keep up with
                          developments. I searched for something that is
                          constantly evolving and is also commensurate with what
                          the local and global market demands, so I decided to
                          enter the world of programming.
                          </p>
                        </h2>
                      </div>
                    </div>
                  
                  </div>
                  
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timline;
