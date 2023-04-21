import React from 'react'
import Link from 'next/link'
const forgot = (el) => {
  return (
    <div>
    
    <body class = "body bg-white dark:bg-[#280f2a]">
        <div class = "bg-black before:animate-pulse before:bg-gradient-to-b before:from-gray-900 overflow-hidden before:via-[#00FF00] before:to-gray-900 before:absolute ">
            <div id="myDIV" >
                <div class = "w-[100vw] h-[100vh] px-3 sm:px-5 flex items-center justify-center absolute">
                    <div class = "w-full sm:w-1/2 lg:2/3 px-6 bg-gray-500 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4  rounded-lg">
                        <div class = "w-full flex justify-center text-[#ff00ee] text-xl mb:2 md:mb-5">
                           Forgot Password
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-xs font-medium text-black">Email</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required/>
                        </div>
                        <div class = "flex flex-row justify-between">
                            <Link href={'/login'} ><div class = "text-[#ff00d9] text-sm md:text-md">Login</div></Link>
                        </div>
                        <div class = "mt-4 md:mt-10 w-full flex justify-center text-sm md:text-xl bg-[#ff00f2] py-2 rounded-md">
                            Continue
                        </div>
            
                    </div>
                </div>
            </div>
        </div>
    </body>
        
        
        <script>
            const para = document.createElement("div");
            para.className = 'flex flex-wrap gap-0.5 h-screen items-center justify-center  relative';
                let el = '<div class = "  transition-colors duration-[1.5s] hover:duration-[0s] border-[#00FF00] h-[calc(5vw-2px)] w-[calc(5vw-2px)] md:h-[calc(4vw-2px)] md:w-[calc(4vw-2px)] lg:h-[calc(3vw-4px)] lg:w-[calc(3vw-4px)] bg-gray-900 hover:bg-[#00FF00]"></div>'
                for (var k = 1; k=1000; k++)
                    {el+= '<div class = " transition-colors duration-[1.5s] hover:duration-[0s] border-[#00FF00] h-[calc(5vw-2px)] w-[calc(5vw-2px)] md:h-[calc(4vw-2px)] md:w-[calc(4vw-2px)] lg:h-[calc(3vw-4px)] lg:w-[calc(3vw-4px)] bg-gray-900 hover:bg-[#00FF00]"></div>'}
                
        
                para.innerHTML = el;
            document.getElementById("myDIV").appendChild(para);
        </script>
        </div>
      )
    }

export default forgot