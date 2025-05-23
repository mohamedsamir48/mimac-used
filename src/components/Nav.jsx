import React, { useState, useEffect } from 'react';
import {NavLink, useLocation} from 'react-router' 


const Nav = () => {

const location = useLocation();


  
  const [scrollY, setScrollY] = useState(0);
 useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <div className=" w-full bg-transparent max-h-[50px] fixed top-0 left-0 z-[1000]">
    <div className={`p-2  flex justify-between items-center  ${scrollY > 100 ? "text-black": location.pathname == '/' ?"text-white":'text-black'} 
      ${scrollY > 100 ? "bg-gradient-to-t": location.pathname == '/' ?"bg-tansparent":"bg-gradient-to-t"}
      
       from-white to-gray-200`}>
      {/* LEFT SIDE */}
      <div className="">
                       <NavLink style={{ color:'inherit'}} className="text-inherit" to="/" end>
        
        <h3 className="text-xl  font-black  strokeme  text-transparent" >Ahmed Samir</h3>
        </NavLink>
      </div>
 

    {/* RIGHT SIDE */}
     <div className="flex justify-ccenter text-xl h-full min-w-[50%]  items-center">
       <ul className='flex w-full font-black  items-center h-full justify-evenly'>
                     

            <li className="text-inherit">
              
                     01094594657

              </li>

                       {/* <NavLink style={{color:'inherit'}} className="" to="/" end>
            <li className="text-inherit">
              رئيسية
              </li>
               </NavLink> */}


        </ul>
                      
      </div>
      </div>
    </div>
  )
}

export default Nav
