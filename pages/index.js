import Image from "next/image"
import Link from "next/link"

import Button from "../components/elements/Button"

export default function Home() {

  const social = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/ahcitysupremeliving",
      bgColor: '#3b5998'
    },
    {
      name: "Twitter",
      link: "https://www.twitter.com/TheAHcity",
      bgColor: "#00acee"
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ah_city",
      bgColor: "#fbad50"
    },
  ]

  return (
    <div className="py-12 bg-gray-100 overflow-y-hidden">
      <dh-component>
        <nav className="w-full">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center" aria-label="Home" role="img">
              <Link href='/' passHref>
                <a><Image className="cursor-pointer w-8 sm:w-auto" src="/ahcity.png" width={60} height={60} alt="logo" title="AH City" /></a>
                {/* <p className="ml-2 lg:ml-4 text-base lg:text-2xl font-bold text-gray-800">AH City</p> */}
              </Link>
              
            </div>
            <div>
              <div id="menu">
                <ul className="flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  z-20">
                  <li key="uniqueId" className="text-gray-600 text-3xl font-extrabold hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                    <Link href='/' passHref><a title="Supreme living">AH CITY</a></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="w-full px-6">
          <div className="mt-8 relative rounded-lg bg-[#97b4ce] container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
            <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
            <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
            <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#b9805a] font-bold leading-tight uppercase">AH City - Supreme Living. Coming Soon</h1>
            </div>
            <div className="flex justify-center items-center mb-10 sm:mb-20 gap-x-3">
              {social.map((item) => (
                <Link href={item.link} passHref>
                  <a target="_blank"><Button value={item.name} bgColor={item.bgColor} /></a>
                </Link>
              ))}
            </div>
          </div>
          <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
            <div className="relative sm:w-2/3 w-11/12">
              <img src="/hero.jpg" className="rounded-md object-cover hover:shadow-lg opacity-60" alt="Sample Page" layout="fill" role="img" />
            </div>
          </div>
        </div>
      </dh-component>
    </div>
  )
}
