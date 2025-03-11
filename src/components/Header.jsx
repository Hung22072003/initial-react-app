import React from 'react';
import background from '../assets/background.jpg';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
    return (
        <div className="flex h-[64px] items-center justify-end border-b-[1px] border-[#E5E7EB] bg-white px-[32px] shadow-[0_1px_0_0_rgba(0,0,0,0.1)]">
            <div className="flex items-center text-[#374151]">
                <p className="mr-[8px]">Nhat Hung</p>
                <div className="relative">
                    <div className="">
                        <img src={background} alt="" className="h-[32px] w-[32px] cursor-pointer rounded-full" />
                    </div>

                    <ul className="absolute top-[50px] right-[10px] flex flex-col items-center justify-center rounded-[8px] border-[1px] border-[#E5E7EB]">
                        <li className="block w-full cursor-pointer border-b-[1px] border-[#E5E7EB] p-[12px_24px] text-center hover:bg-[#F3F4F6]">
                            Profile
                        </li>
                        <li className="flex cursor-pointer items-center p-[12px_24px] hover:bg-[#F3F4F6]">
                            <FontAwesomeIcon icon={faRightFromBracket} className="mr-[8px]" />
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
