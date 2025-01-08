import { useState } from "react";
import { 
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,

 } from "@/components/ui/sheet";

 import { Button } from "@/components/ui/button";
 import { Menu as MenuIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contextProvider";


 const mobileItems = [

  {name:'Home',ref:'/'},
  {name:'Project Overview',ref:'https://hongjun820.wixsite.com/abundanceproject-1'},
];


 export default function MobileNav(){
    const [open, setOpen] = useState(false);


    const { user, logout } = useAuth();
    let navigate = useNavigate();

   const logOutRedirect = ()=>{
   
    logout();
    navigate("/");
   }




    return(
        <Sheet open={open} onOpenChange={setOpen}>

      {/* Flex container for logo, name, and menu button */}
      <div className="flex items-center justify-between w-full md:hidden border-b-2 p-6">
        {/* Logo and Company Name */}
        
        <Link className="flex items-center" to="/">
        
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.3239 1.51177L58.2446 16.0324C58.929 16.4312 59.35 17.1636 59.35 17.9557V47.0443C59.35 47.8364 58.929 48.5688 58.2446 48.9676L33.3239 63.4882C32.6313 63.8918 31.7751 63.8918 31.0825 63.4882L6.16176 48.9676C5.47735 48.5688 5.05642 47.8364 5.05642 47.0443V17.9557C5.05642 17.1636 5.47736 16.4312 6.16177 16.0324L31.0825 1.51177C31.7751 1.1082 32.6313 1.1082 33.3239 1.51177Z" fill="#00ACAC" stroke="#00ACAC" stroke-width="1.48402"/>
        <path d="M33.6416 14.6125L39.8928 18.2216C40.6684 18.6694 41.1462 19.4969 41.1462 20.3925V27.6107C41.1462 28.5063 40.6684 29.3338 39.8928 29.7816L33.6416 33.3907C32.866 33.8385 31.9105 33.8385 31.1349 33.3907L24.8837 29.7816C24.1081 29.3338 23.6304 28.5063 23.6304 27.6107V20.3925C23.6304 19.4969 24.1081 18.6694 24.8837 18.2216L31.1349 14.6125C31.9105 14.1647 32.866 14.1647 33.6416 14.6125Z" fill="#00ACAC" stroke="white" stroke-width="0.922602"/>
        <path d="M23.816 19.2867L29.3152 21.9824M40.9605 19.2867L35.677 22.198" stroke="white" stroke-width="0.754788" stroke-linecap="round"/>
        <path d="M32.7117 29.1032C32.7141 28.8948 32.5471 28.7239 32.3386 28.7216C32.1302 28.7192 31.9593 28.8862 31.957 29.0946L32.7117 29.1032ZM31.957 29.0946L31.9031 33.839L32.6578 33.8476L32.7117 29.1032L31.957 29.0946Z" fill="white"/>
        <g clip-path="url(#clip0_140_83)">
        <path d="M30.9824 24.1853C30.9824 22.6006 33.3009 21.5548 33.3009 19.8262C33.3009 18.8148 32.5509 17.9365 32.4384 17.8849C32.4472 17.9558 32.4516 18.0288 32.4516 18.0997C32.4516 20.0774 29.2067 21.4045 29.2067 23.8675C29.2067 24.9369 29.917 25.5682 30.6736 26.1931C32.1097 27.1959 32.3964 27.7263 32.3964 28.0527C32.3964 28.2696 32.2906 28.4178 32.2906 28.5316C32.5795 28.173 32.6744 27.8466 32.6766 27.5352C32.6766 26.8996 32.1979 26.3262 31.7016 25.6777C31.3486 25.1989 30.9824 24.763 30.9824 24.1853ZM35.5112 23.3479C35.2443 21.9134 33.7906 20.6765 33.4222 20.5369L33.5104 20.6916C33.5634 20.8011 33.5854 20.9256 33.5854 21.0588C33.5854 22.0186 32.3898 23.4466 32.3369 23.5647C32.2884 23.6743 32.2663 23.7902 32.2663 23.904C32.2663 24.3356 32.6016 24.8081 32.6612 24.8081C32.7141 24.8081 33.9097 23.6184 33.9428 22.9248C34.084 23.1761 34.1435 23.4101 34.1435 23.642C34.1435 24.5268 33.2215 25.7228 33.2215 25.7228C33.2215 25.9719 33.9252 26.8652 34.0046 26.8652C34.0266 26.8652 34.0531 26.8352 34.0752 26.8137C34.9112 25.9698 35.5598 24.9884 35.5598 23.8761C35.5598 23.7043 35.5443 23.5282 35.5112 23.3479Z" fill="white"/>
        </g>
        <path d="M24.4224 30.458L30.6736 34.0671C31.4491 34.5149 31.9269 35.3424 31.9269 36.238V43.4562C31.9269 44.3517 31.4491 45.1793 30.6736 45.6271L24.4224 49.2362C23.6468 49.684 22.6912 49.684 21.9157 49.2362L15.6645 45.6271C14.8889 45.1793 14.4111 44.3517 14.4111 43.4562V36.238C14.4111 35.3424 14.8889 34.5149 15.6645 34.0671L21.9157 30.458C22.6912 30.0102 23.6468 30.0102 24.4224 30.458Z" fill="#00ACAC" stroke="white" stroke-width="0.922602"/>
        <path d="M14.5968 35.1321L20.096 37.8278M31.7413 35.1321L26.4578 38.0435" stroke="white" stroke-width="0.754788" stroke-linecap="round"/>
        <path d="M23.4925 44.9487C23.4949 44.7403 23.3278 44.5694 23.1194 44.567C22.911 44.5647 22.7401 44.7317 22.7377 44.9401L23.4925 44.9487ZM22.7377 44.9401L22.6838 49.6845L23.4386 49.6931L23.4925 44.9487L22.7377 44.9401Z" fill="white"/>
        <g clip-path="url(#clip1_140_83)">
        <path d="M21.7632 40.0308C21.7632 38.446 24.0816 37.4003 24.0816 35.6716C24.0816 34.6602 23.3316 33.7819 23.2191 33.7304C23.2279 33.8013 23.2324 33.8743 23.2324 33.9451C23.2324 35.9229 19.9874 37.2499 19.9874 39.713C19.9874 40.7824 20.6977 41.4137 21.4544 42.0386C22.8904 43.0414 23.1772 43.5718 23.1772 43.8982C23.1772 44.1151 23.0713 44.2632 23.0713 44.3771C23.3603 44.0184 23.4552 43.692 23.4574 43.3807C23.4574 42.7451 22.9787 42.1717 22.4823 41.5232C22.1294 41.0443 21.7632 40.6084 21.7632 40.0308ZM26.292 39.1933C26.0251 37.7589 24.5714 36.522 24.203 36.3824L24.2912 36.537C24.3441 36.6465 24.3662 36.7711 24.3662 36.9042C24.3662 37.8641 23.1706 39.2921 23.1176 39.4102C23.0691 39.5197 23.0471 39.6357 23.0471 39.7495C23.0471 40.1811 23.3824 40.6535 23.4419 40.6535C23.4949 40.6535 24.6905 39.4639 24.7236 38.7703C24.8647 39.0215 24.9243 39.2556 24.9243 39.4875C24.9243 40.3722 24.0022 41.5683 24.0022 41.5683C24.0022 41.8174 24.7059 42.7107 24.7853 42.7107C24.8074 42.7107 24.8339 42.6806 24.8559 42.6592C25.692 41.8152 26.3405 40.8339 26.3405 39.7216C26.3405 39.5498 26.3251 39.3737 26.292 39.1933Z" fill="white"/>
        </g>
        <path d="M42.8688 30.444L49.12 34.0531C49.9005 34.5038 50.3814 35.3366 50.3814 36.238V43.4562C50.3814 44.3575 49.9005 45.1904 49.12 45.641L42.8688 49.2501C42.0882 49.7008 41.1265 49.7008 40.346 49.2501L34.0948 45.641C33.3142 45.1904 32.8334 44.3575 32.8334 43.4562V36.238C32.8334 35.3366 33.3142 34.5038 34.0948 34.0531L40.346 30.444C41.1265 29.9934 42.0882 29.9934 42.8688 30.444Z" fill="#00ACAC" stroke="white" stroke-width="0.890411"/>
        <path d="M33.0352 35.1321L38.5343 37.8278M50.1796 35.1321L44.8961 38.0435" stroke="white" stroke-width="0.754788" stroke-linecap="round"/>
        <path d="M41.9308 44.9487C41.9332 44.7403 41.7662 44.5694 41.5578 44.567C41.3493 44.5647 41.1785 44.7317 41.1761 44.9401L41.9308 44.9487ZM41.1761 44.9401L41.1222 49.6845L41.8769 49.6931L41.9308 44.9487L41.1761 44.9401Z" fill="white"/>
        <g clip-path="url(#clip2_140_83)">
        <path d="M40.2014 40.0308C40.2014 38.446 42.5199 37.4003 42.5199 35.6716C42.5199 34.6602 41.7699 33.7819 41.6574 33.7304C41.6662 33.8013 41.6706 33.8743 41.6706 33.9451C41.6706 35.9229 38.4257 37.2499 38.4257 39.713C38.4257 40.7824 39.136 41.4137 39.8926 42.0386C41.3287 43.0414 41.6154 43.5718 41.6154 43.8982C41.6154 44.1151 41.5096 44.2632 41.5096 44.3771C41.7985 44.0184 41.8934 43.692 41.8956 43.3807C41.8956 42.7451 41.4169 42.1717 40.9206 41.5232C40.5676 41.0443 40.2014 40.6084 40.2014 40.0308ZM44.7302 39.1933C44.4633 37.7589 43.0096 36.522 42.6412 36.3824L42.7294 36.537C42.7824 36.6465 42.8044 36.7711 42.8044 36.9042C42.8044 37.8641 41.6088 39.2921 41.5559 39.4102C41.5073 39.5197 41.4853 39.6357 41.4853 39.7495C41.4853 40.1811 41.8206 40.6535 41.8801 40.6535C41.9331 40.6535 43.1287 39.4639 43.1618 38.7703C43.303 39.0215 43.3625 39.2556 43.3625 39.4875C43.3625 40.3722 42.4405 41.5683 42.4405 41.5683C42.4405 41.8174 43.1441 42.7107 43.2236 42.7107C43.2456 42.7107 43.2721 42.6806 43.2942 42.6592C44.1302 41.8152 44.7787 40.8339 44.7787 39.7216C44.7787 39.5498 44.7633 39.3737 44.7302 39.1933Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_140_83">
        <rect width="11.2944" height="10.9945" fill="white" transform="translate(26.7274 17.8849)"/>
        </clipPath>
        <clipPath id="clip1_140_83">
        <rect width="11.2944" height="10.9945" fill="white" transform="translate(17.5082 33.7304)"/>
        </clipPath>
        <clipPath id="clip2_140_83">
        <rect width="11.2944" height="10.9945" fill="white" transform="translate(35.9464 33.7304)"/>
        </clipPath>
        </defs>
        </svg>




        <h1 className="text-2xl text-[#009797] ml-4 font-bold">Abundance</h1>


        </Link>

        {/* This button will trigger open the mobile sheet menu */}
         <SheetTrigger asChild>
            <MenuIcon className="size-10 text-[#009797]" />
        </SheetTrigger>
      </div>
    
        <SheetContent side="right"> 
          <div className="flex flex-col items-start gap-3 mt-[10%] ">
            {mobileItems.map((item, index) => (
              <Link to={item.ref}    
              className="border-b-2 
              justify-start w-full text-lg 
              text-[#009797]">
              <Button
             
                key={index}
                variant="link"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <SheetTitle>{item.name}</SheetTitle>
                <SheetDescription></SheetDescription>
              </Button>
              </Link>
            ))} 

                {
                    user?
                    <Button className="bg-[#009797] text-white px-7 py-5 shadow-lg" onClick={()=>{
                      logOutRedirect();
                      setOpen(false)
                    }}>Logout</Button>:

                    <div className="flex gap-4 mt-5 ml-5">
                    <Link to="/login">
                    <Button variant="link" className="bg-[#009797] text-white px-7 py-5 shadow-lg" 
                     onClick={() => setOpen(false)} // Close the menu
                    >Login</Button>                
                    </Link>

                    <Link to="/register">
                    <Button variant="link" className="border-[0.5px] px-7 py-5 text-[#009797] border-[#009797] shadow-lg"
                     onClick={() => setOpen(false)} // Close the menu
                    >Register</Button>
                    </Link>
                </div>

                }

           </div> 
        </SheetContent> 
  
      </Sheet>
    )


 }