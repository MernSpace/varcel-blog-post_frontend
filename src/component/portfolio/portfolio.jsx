import React, {Fragment} from 'react';

const Portfolio = () => {
    return (
        <Fragment>
            <section className="py-[30px] md:py-[80px]">
                <div className="container">
                    <div className="menuBox">
                        <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
                            <div className="flex items-center gap-[6px]"><span><svg stroke="currentColor"
                                                                                    fill="currentColor" stroke-width="0"
                                                                                    viewBox="0 0 448 512"
                                                                                    className="fa-light fa-user text-[14px] text-white"
                                                                                    height="1em" width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"><path
                                d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32.4 97.2c28-12.4 47.6-40.5 47.6-73.2c0-44.2-35.8-80-80-80S0 35.8 0 80c0 32.8 19.7 61 48 73.3V358.7C19.7 371 0 399.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V272c26.7 20.1 60 32 96 32h86.7c12.3 28.3 40.5 48 73.3 48c44.2 0 80-35.8 80-80s-35.8-80-80-80c-32.8 0-61 19.7-73.3 48H208c-49.9 0-91-38.1-95.6-86.8zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM344 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path></svg></span><span
                                className="pl-[6px] text-[14px] text-white">Portfolio</span></div>
                        </div>
                    </div>
                    <br/>
                    <div className=" mt-[10px] md:mt-[20px]"><h2
                        className="text-[32px] font-semibold uppercase  leading-tight text-white md:text-[52px] md:w-[70%]">NEVER
                        COMPROMISE FOR OUR PORTFOLIO TO<span className="text-theme"> QUALITY!</span></h2><p
                        className="mt-[20px] text-text lg:w-[60%]">The imperative for integrated, expansive, and
                        seamless digital experiences is fueling software product design and development across
                        organizations at an unprecedented scale. These demands require capabilities to imagine, build,
                        and run digital products and services for new and existing.</p></div>
                    <div className="mt-[60px] md:mt-[80px]">
                        <div className="grid  gap-y-[30px] md:grid-cols-12  md:gap-x-[30px]">
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group rounded-2xl bg-btn p-[30px] ">
                                    <div className="overflow-hidden rounded-2xl"><img
                                        src="https://lariv-next-js.vercel.app/assets/images/projects/project-1.png"
                                        alt=""
                                        className="w-full object-cover transition-all duration-500 group-hover:scale-[110%]"/>
                                    </div>
                                    <div><p className="mt-[16px] text-[14px] text-text">Mobile Application</p>
                                        <div
                                            className="portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme">
                                            <a target="_blank" href="#"><h2
                                                className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">Minto
                                                - Ai Resume Builder Case Study- UI/UX Design</h2></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group rounded-2xl bg-btn p-[30px] ">
                                    <div className="overflow-hidden rounded-2xl"><img
                                        src="https://lariv-next-js.vercel.app/assets/images/projects/project-2.png"
                                        alt=""
                                        className="w-full object-cover transition-all duration-500 group-hover:scale-[110%]"/>
                                    </div>
                                    <div><p className="mt-[16px] text-[14px] text-text">Mobile Application</p>
                                        <div
                                            className="portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme">
                                            <a target="_blank" href="#"><h2
                                                className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">Crypto &amp; Stocks
                                                Wallet Design - UI/UX | Mobile App</h2></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group rounded-2xl bg-btn p-[30px] ">
                                    <div className="overflow-hidden rounded-2xl"><img
                                        src="https://lariv-next-js.vercel.app/assets/images/projects/project-3.png"
                                        alt=""
                                        className="w-full object-cover transition-all duration-500 group-hover:scale-[110%]"/>
                                    </div>
                                    <div><p className="mt-[16px] text-[14px] text-text">Mobile Application</p>
                                        <div
                                            className="portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme">
                                            <a target="_blank" href="#"><h2
                                                className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">E-Commerce
                                                Dashboard Case Study Application</h2></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group rounded-2xl bg-btn p-[30px] ">
                                    <div className="overflow-hidden rounded-2xl"><img
                                        src="https://lariv-next-js.vercel.app/assets/images/projects/project-4.png"
                                        alt=""
                                        className="w-full object-cover transition-all duration-500 group-hover:scale-[110%]"/>
                                    </div>
                                    <div><p className="mt-[16px] text-[14px] text-text">Desktop Application</p>
                                        <div
                                            className="portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme">
                                            <a target="_blank" href="#"><h2
                                                className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">Pry
                                                Finance CRM - Mobile App &amp; UX UI Design</h2></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group rounded-2xl bg-btn p-[30px] ">
                                    <div className="overflow-hidden rounded-2xl"><img
                                        src="https://lariv-next-js.vercel.app/assets/images/projects/project-5.png"
                                        alt=""
                                        className="w-full object-cover transition-all duration-500 group-hover:scale-[110%]"/>
                                    </div>
                                    <div><p className="mt-[16px] text-[14px] text-text">Design Application</p>
                                        <div
                                            className="portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme">
                                            <a target="_blank" href="#"><h2
                                                className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">Citisum
                                                - Real Estate Dashboard Design Application</h2></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="group rounded-2xl bg-btn p-[30px] ">
                                    <div className="overflow-hidden rounded-2xl"><img
                                        src="https://lariv-next-js.vercel.app/assets/images/projects/project-6.png"
                                        alt=""
                                        className="w-full object-cover transition-all duration-500 group-hover:scale-[110%]"/>
                                    </div>
                                    <div><p className="mt-[16px] text-[14px] text-text">Mobile Application</p>
                                        <div
                                            className="portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme">
                                            <a target="_blank" href="#"><h2
                                                className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">SmartLock
                                                - Branding &amp; Smart Home UX UI Design</h2></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Portfolio;