import React from "react";

const App = () => {
  return (
    <>
      <div className="w-full bg-[#1999F2] h-[8px]"></div>
      {/* section */}
      <div className="bg-[#2A74A71A] flex justify-between px-24 min-h-[200px] items-center">
        <div className="flex items-center gap-5">
          <img src="/images/group.svg" alt="Group" />
          <div className="w-[5px] h-[70px] bg-[#A147A1]"></div>
          <div className="flex flex-col ">
            <span className="text-darkGrey font-Montserrat text-[28px] leading-[120%]">
              30+ years
            </span>
            <span className="text-darkGrey text-[16px] uppercase leading-[110%]">
              Lorem ipsum dolor
            </span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <img src="/images/icon-asset-manager.svg" alt="Asset Manager" />
          <div className="w-[5px] h-[70px] bg-[#349D9E]"></div>
          <div className="flex flex-col ">
            <span className="text-darkGrey font-Montserrat text-[28px] leading-[120%]">
              $20 billion
            </span>
            <span className="text-darkGrey text-[16px] uppercase leading-[110%]">
              Lorem ipsum dolor
            </span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <img src="/images/icon-5-star.svg" alt="5-star" />
          <div className="w-[5px] h-[70px] bg-[#1999F2]"></div>
          <div className="flex flex-col ">
            <span className="text-darkGrey font-Montserrat text-[28px] leading-[120%]">
              5-star dealership
            </span>
            <span className="text-darkGrey text-[16px] uppercase leading-[110%]">
              Lorem ipsum dolor
            </span>
          </div>
        </div>
      </div>

      {/* section */}
      <div className="contain justify-center flex flex-col items-center bg-[rgba(204, 204, 204, 0.15)] min-h-[700px]">
        <div className="w-full flex flex-col items-center gap-4 ">
          <h4 className="text-darkNavy text-[28px] font-bold">
            Lorem ipsum dolor
          </h4>
          <p className="text-darkGrey text-lg max-w-[1000px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-20 mt-14">
          <div className="flex items-start gap-5">
            <img
              src="/images/icon-client-management.png"
              alt="client-management"
            />
            <div className="grid gap-1 font-openSans">
              <span className="text-[#2A74A7] text-lg font-[700]">
                Lorem ipsum dolor
              </span>
              <p className="text-darkGrey max-w-[300px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img src="/images/icon-online-profile.png" alt="online-profile" />
            <div className="grid gap-1 font-openSans">
              <span className="text-[#2A74A7] text-lg font-[700]">
                Lorem ipsum dolor
              </span>
              <p className="text-darkGrey max-w-[300px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img
              src="/images/icon-financial-management.png"
              alt="financial-management"
            />
            <div className="grid gap-1 font-openSans">
              <span className="text-[#2A74A7] text-lg font-[700]">
                Lorem ipsum dolor
              </span>
              <p className="text-darkGrey max-w-[300px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img src="/images/icon-partnership.png" alt="partnership" />
            <div className="grid gap-1 font-openSans">
              <span className="text-[#2A74A7] text-lg font-[700]">
                Lorem ipsum dolor
              </span>
              <p className="text-darkGrey max-w-[300px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img
              src="/images/icon-user-profile-exchange.png"
              alt="user-profile-exchange"
            />
            <div className="grid gap-1 font-openSans">
              <span className="text-[#2A74A7] text-lg font-[700]">
                Lorem ipsum dolor
              </span>
              <p className="text-darkGrey max-w-[300px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img src="/images/icon-processing.png" alt="processing" />
            <div className="grid gap-1 font-openSans">
              <span className="text-[#2A74A7] text-lg font-[700]">
                Lorem ipsum dolor
              </span>
              <p className="text-darkGrey max-w-[300px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
        <button className="btn-primary mx-auto w-[160px] mt-14">
          Get in touch
        </button>
      </div>

      {/* section */}
      <div className="w-full bg-[#F2F2F2] min-h-[450px] items-center flex ">
        <div className="flex contain gap-14">
          <div className="w-full flex flex-col gap-8">
            <h2 className="text-[28px] font-Montserrat text-darkGrey leading-[121.429%] font-bold max-w-[580px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p className="text-darkGrey font-openSans leading-[137.5%] max-w-[520px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Eleifend quam adipiscing vitae proin sagittis. Gravida rutrum
              quisque non tellus. Eleifend quam adipiscing vitae proin sagittis.
              Gravida rutrum quisque non tellus.
            </p>
            <button className="btn-primary w-[160px]">Let’s talk</button>
          </div>
          <img
            src="/images/smiling-woman.png"
            alt="smiling-woman "
            className="w-full"
          />
        </div>
      </div>

      {/* section */}
      <div className="bg-[#2A74A733] flex flex-col min-h-[580px] justify-center">
        <div className="contain flex flex-col gap-10">
          <h2 className="text-darkNavy text-[28px] font-bold">
            News & insights
          </h2>
          <div className="flex justify-between">
            <div className="max-w-[300px]">
              <img src="/images/chess.png" alt="Chess" className="w-full" />
              <div className="w-full bg-white text-[14px] font-openSans px-3 pt-3 pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
            </div>
            <div className="max-w-[300px]">
              <img src="/images/typing.png" alt="typing" className="w-full" />
              <div className="w-full bg-white text-[14px] font-openSans px-3 pt-3 pb-6">
                Eleifend quam adipiscing vitae proin sagittis.
              </div>
            </div>
            <div className="max-w-[300px]">
              <img
                src="/images/checkmark.png"
                alt="checkmark"
                className="w-full"
              />
              <div className="w-full bg-white text-[14px] font-openSans px-3 pt-3 pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
            </div>
          </div>
          <button className="btn-primary w-[160px] self-center mt-2">
            View more
          </button>
        </div>
      </div>

      {/* section */}
      <div className="bg-[#012639]">
        <div className="flex justify-between items-start">
          <img src="/images/270x60.png" alt="270 x 60" />
          <div className="text-white font-openSans flex gap-28 font-[400]">
            <span>Advisors</span>
            <span>Investors</span>
            <div className="flex flex-col gap-4">
              <span>About Us</span>
              <span>Leadership</span>
              <span>Careers</span>
            </div>
            <div className="flex flex-col gap-4">
              <span>News and insights</span>
              <span>Resource centre</span>
              <span>Media relations</span>
            </div>
            <span>Contact us</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
