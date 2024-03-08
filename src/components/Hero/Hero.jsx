import React from "react";
import profile from '../../assets/myprofile.jpeg'

function Hero(){
    return(
        <div className="bg-[url('https://i2.wp.com/zeevector.com/wp-content/uploads/Colorful-Background-HD.png?fit=1942%2C1476&ssl=1')] space-x-7 sm:w-full h-[250px] flex items-center backdrop-blur-sm ">
            <div>
                <img src={profile} className="h-[130px] w-[130px] m-2 sm:h-[220px] sm:w-[220px] rounded-full border-2 m-5 object-cover sm:border-4"/>
            </div>
            <div className="text-white text-left m-4">
                <div className="text-lg font-semibold sm:font-bold text-4xl">Prajwal Dabekar</div>
                <div className="hidden sm:block font-semibold">SIES Graduate School Of Technology, Nerul Navi Mumbai</div>
                <div className="block sm:hidden">
                    SIES GST, Nerul
                </div>
            </div>
        </div>
    )
}
export default Hero