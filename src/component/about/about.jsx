import React from 'react';
import myImg from '../../assets/image/myimg.png'

const About = () => {
    return (
        <div className='relative z-[999]'>
            <div className='main_body'>
                <div className='py-[30px] md:py-[80px]'>
                    <div className='container'>
                        <div className='grid grid-cols-12 gap-[20px]'>
                            <div className='col-span-12 lg:col-span-4 lg:pr-[30px]'>
                                <div className='rounded-[20px] bg-card px-[30px] py-[40px]'>
                                    <div>
                                        <div className='mt-[25px] '>
                                            <div className='text-center'>
                                                <h3 className='wow fadeIn animated text-[24px] font-semibold text-white'>
                                                    Hy! I'm
                                                    <span className='text-theme'> SIFAT</span>
                                                </h3>
                                                <p className='mt-[6px] text-text'>Web Developer</p>
                                            </div>
                                            <div className='mt-[26px] flex justify-center'>
                                                <img src={myImg} className='w-full rounded-2xl object-cover'/>
                                            </div>
                                            <div className='mt-[26px] text-center'>
                                                <p className='text-[20px] text-text'>sifat355y@gmail.com</p>
                                                <p className='mt-[10px] text-text'>Rajshahi Nowgawn 6520</p>
                                            </div>
                                            <div className='mt-[30px] flex justify-center gap-3'>
                                                <a href className='block'>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                         viewBox="0 0 320 512" className=" socialRound" height="1em"
                                                         width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                                    </svg>
                                                </a>
                                                <a href className='block'>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 512 512" className=" socialRound" height="1em"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                                </svg>
                                            </a>
                                                <a href className='block'>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                         viewBox="0 0 448 512" className=" socialRound" height="1em"
                                                         width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                                    </svg>
                                                </a> <a href className='block'>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 448 512" className=" socialRound" height="1em"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"></path>
                                                </svg>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-8'>
                                <div className='mt-[80px]'>
                                    <h2 className='text-[32px] font-semibold uppercase  leading-tight text-white md:text-[52px]'>
                                        I CAN DEVELOP THAT HELP
                                        <span className='text-theme'> PEOPLE!
                                        </span>
                                    </h2>
                                    <p className='mt-[20px] text-text'>
                                        Since starting my excursion as an independent creator almost quite a while back, I've accomplished remote work for organizations, counseled for new companies, and teamed up with capable individuals to make computerized items for both business and purchaser use. I'm discreetly sure, normally inquisitive, and ceaselessly dealing with further developing my chops each plan issue in turn.
                                    </p>
                                </div>
                                <div className='mt-[60px]'>
                                    <h2 className='text-[32px] font-semibold'>
                                        My Details
                                    </h2>
                                    <div className='mt-[20px] grid grid-cols-12 '>
                                        <div className='col-span-6'>
                                            <p className=' text-[18px] font-medium'>
                                                Name:
                                            </p>
                                            <p className='mt-2 text-[16px] text-text'>
                                                Saharul Sifat
                                            </p>
                                        </div>
                                        <div className='col-span-6'>
                                            <p className=' text-[18px] font-medium'>
                                                Birthday:
                                            </p>
                                            <p className='mt-2 text-[16px] text-text'>
                                                10, Dec, 2003
                                            </p>
                                        </div>
                                    </div>
                                    <div className='mt-[20px] grid grid-cols-12 '>
                                        <div className='col-span-6'>
                                            <p className=' text-[18px] font-medium'>
                                                Email:
                                            </p>
                                            <p className='mt-2 text-[16px] text-text'>
                                                sifat355y@gmail.com
                                            </p>
                                        </div>
                                        <div className='col-span-6'>
                                            <p className=' text-[18px] font-medium'>
                                                Skype:
                                            </p>
                                            <p className='mt-2 text-[16px] text-text'>
                                                saharulsifat
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-[60px]'>
                                    <h2 className='text-[32px] font-semibold'>
                                        Working
                                        <span className='text-theme'> Experience:
                                        </span>
                                    </h2>
                                    <div className='items mt-[40px] grid gap-[40px]'>
                                        <div
                                            className='item relative grid gap-[40px] border-l-[2px] border-text pb-[16px] pl-[35px]'>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                 viewBox="0 0 384 512"
                                                 className="absolute left-[-16px] top-[-25px] text-[30px] text-text"
                                                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M112.5 301.4c0-73.8 105.1-122.5 105.1-203 0-47.1-34-88-39.1-90.4.4 3.3.6 6.7.6 10C179.1 110.1 32 171.9 32 286.6c0 49.8 32.2 79.2 66.5 108.3 65.1 46.7 78.1 71.4 78.1 86.6 0 10.1-4.8 17-4.8 22.3 13.1-16.7 17.4-31.9 17.5-46.4 0-29.6-21.7-56.3-44.2-86.5-16-22.3-32.6-42.6-32.6-69.5zm205.3-39c-12.1-66.8-78-124.4-94.7-130.9l4 7.2c2.4 5.1 3.4 10.9 3.4 17.1 0 44.7-54.2 111.2-56.6 116.7-2.2 5.1-3.2 10.5-3.2 15.8 0 20.1 15.2 42.1 17.9 42.1 2.4 0 56.6-55.4 58.1-87.7 6.4 11.7 9.1 22.6 9.1 33.4 0 41.2-41.8 96.9-41.8 96.9 0 11.6 31.9 53.2 35.5 53.2 1 0 2.2-1.4 3.2-2.4 37.9-39.3 67.3-85 67.3-136.8 0-8-.7-16.2-2.2-24.6z"></path>
                                            </svg>
                                            <div>
                                                <p className='text-text'>2022 - Present</p>
                                                <h3 className='mt-[10px] text-[20px] font-medium text-white md:text-[25px]'>
                                                    Wordpress Web Designer & developer
                                                </h3>
                                                <p className='mt-[5px] text-[18px] font-medium text-text'>WebBattalion</p>
                                                <p className='mt-[10px] text-text'>
                                                    Since starting my excursion as an independent creator almost quite a while back, I've accomplished remote work for organizations, counseled for new companies, and teamed up with capable individuals to make computerized items for both business and purchaser use.
                                                </p>
                                            </div>
                                            <div>
                                                <p className='text-text'>2020 - 2022</p>
                                                <h3 className='mt-[10px] text-[20px] font-medium text-white md:text-[25px]'>
                                                    Web Application Manager
                                                </h3>
                                                <p className='mt-[5px] text-[18px] font-medium text-text'>Ultra Luca Company</p>
                                                <p className='mt-[10px] text-text'>
                                                    Since starting my excursion as an independent creator almost quite a while back, I've accomplished remote work for organizations, counseled for new companies, and teamed up with capable individuals to make computerized items for both business and purchaser use.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;