import React, {Fragment} from 'react';

const Contact = () => {
    return (
        <Fragment>
            <section className="py-[30px] md:py-[80px]">
                <div style={{position: "fixed", zIndex: "9999", inset: "16px", pointerEvents: "none"}}></div>
                <div className="container">
                    <div className="menuBox">
                        <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
                            <div className="flex items-center gap-[6px]"><span><svg stroke="currentColor"
                                                                                    fill="currentColor" strokeWidth="0"
                                                                                    viewBox="0 0 512 512"
                                                                                    className="fa-light fa-user text-[14px] text-white"
                                                                                    height="1em" width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"><path
                                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path></svg></span><span
                                className="pl-[6px] text-[14px] text-white">Contact</span></div>
                        </div>
                    </div>
                    <br/>
                    <div className="mt-[10px] md:mt-[20px]"><h2
                        className="text-[32px] font-semibold uppercase  leading-tight text-white md:text-[52px] md:w-[70%]">LET’S
                        DISCUSS ABOUT AN<span className="text-theme"> PROJECT!</span></h2><p
                        className="mt-[20px] text-text lg:w-[60%]">The imperative for integrated, expansive, and
                        seamless digital experiences is fueling software product design and development across
                        organizations at an unprecedented scale. These demands require capabilities to imagine, build,
                        and run digital products and services for new and existing.</p></div>
                    <div className="mt-[60px] md:mt-[80px]">
                        <div><h2 className="text-[32px] font-semibold">Let's Work Together!</h2></div>
                        <div className="grid grid-cols-12 gap-[30px]">
                            <div className="col-span-12 mt-[30px] lg:col-span-7">
                                <div className="contact-form">
                                    <div className="grid gap-[30px] md:flex"><input className="inputBox"
                                                                                    placeholder="Enter Your Name"
                                                                                    required="" type="text"/><input
                                        className="inputBox" id="email" required="" placeholder="Enter Your Email"
                                        type="email" name="email"/></div>
                                    <div className="mt-[30px]"><input className="inputBox" placeholder="Website Link:"
                                                                      id="website" required="" type="url"
                                                                      name="website"/></div>
                                    <div className="mt-[30px]"><textarea name="message" id="massage"
                                                                         placeholder="Enter Your Massage" rows="10"
                                                                         cols="50"
                                                                         className="w-full rounded-lg border bg-transparent p-[15px] pl-[10px] text-text focus:outline-none dark:border-btn"></textarea>
                                    </div>
                                    <div className="wow fadeIn  animated mt-[30px]"
                                         style={{visibility: "visible", animationName: "fadeIn"}}>
                                        <button className="btn block" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-5">
                                <div className="mt-[30px] rounded-xl bg-card p-[10px]">
                                    <div className="contact-map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!4v1735914592220!6m8!1m7!1s-To_3Zppvtt0waWYjSnjvQ!2m2!1d24.80267812138053!2d88.44263457121785!3f222.54424!4f0!5f0.7820865974627469"
                                            width="100%" height="390"  allowFullScreen="" loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"></iframe>
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

export default Contact;