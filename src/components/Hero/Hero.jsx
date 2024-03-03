import React from "react";
import profile from '../../assets/myprofile.jpeg'

function Hero(){
    return(
        <div className="bg-[url('https://i2.wp.com/zeevector.com/wp-content/uploads/Colorful-Background-HD.png?fit=1942%2C1476&ssl=1')] w-full h-[250px] flex items-center backdrop-blur-sm">
            <div>
                <img src={profile} className="h-[220px] w-[220px] rounded-full border-4 m-5 object-cover"/>
            </div>
            <div className="text-white text-left m-4">
                <div className="font-bold text-4xl">Prajwal Dabekar</div>
                <div className="font-semibold">SIES Graduate School Of Technology, Nerul Navi Mumbai</div>
            </div>
        </div>
    )
}
export default Hero