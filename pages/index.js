import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

import Button from "../components/elements/Button"

export default function Home() {

  const social = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/ahcitysupremeliving",
      bgColor: "#3b5998",
      icon: <Facebook />
    },
    {
      name: "t",
      link: "https://www.twitter.com/TheAHcity",
      bgColor: "#00acee",
      icon: <Twitter />
    },
    {
      name: "i",
      link: "https://www.instagram.com/ah_city",
      bgColor: "#fbad50",
      icon: <Instagram />
    },
  ]

  return (
    <div className="dark:bg-[#97b4ce]">
      <div className="container mx-auto py-9 md:py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
            <div className="lg:w-4/12 flex justify-center items-center">
                <div>
                    <h1 className="dark:text-[#b9805a] text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 w-7/12">AH CITY</h1>
                    <h2 className="dark:text[#b9805a] text-3xl font-semibold text-[#b9805a] uppercase">supreme living</h2>
                    <p className="dark:text-white md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 leading-normal text-lg">AH City, is the epitome of revolution, the junction of four provinces, Punjab, Islamabad, Balochistan, and Sindh, making the project strategically located in D.I.Khan. Offering a new standard of living by bringing masterpiece facilities like healthcare, education, and hospitals, with the aim to become the benchmark for supreme living in D.I.Khan.</p>
                    <br />
                    <div className="flex justify-start items-start mb-10 sm:mb-20 gap-x-1">
                      {social.map((item) => (
                        <Link href={item.link} passHref>
                          <a target="_blank"><Button value={item.icon} bgColor={item.bgColor} /></a>
                        </Link>
                      ))}
                    </div>
                </div>
            </div>
            <div className="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
                <div className="relative w-full h-full">
                    <Image src="/hero.jpg" alt="A lounge sofa" className="w-full h-full relative hidden lg:block object-cover" width={832} height={947} />
                    {/* <Image src="/hero-1.png" alt="A lounge sofa" className="w-full h-full lg:hidden" width={843} height={960} /> */}
                    <div className="hidden lg:block absolute bottom-0 right-0 bg-red-200 w-1/2">
                        <button className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-xl xl:text-2xl font-medium text-white flex justify-between w-full items-center p-5 xl:p-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                            Coming Soon!
                            <div>
                                <svg className="fill-stroke dark:hover:text-gray-200" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66663 16H25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 21.3333L25.3333 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 10.667L25.3333 16.0003" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="mt-6 md:mt-8 lg:hidden">
                    <button className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-base md:text-xl font-semibold leading-tight text-white flex justify-between items-center px-5 py-4 lg:py-7 lg:px-7 w-full md:w-5/12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                        Discover More
                        <div>
                            <svg className="fill-stroke" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path d="M0.453735 12H14.4537" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.4539 16L14.4539 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.4539 8L14.4539 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="21.7269" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
