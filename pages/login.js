
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



const Login = () => {
    const router=useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    useEffect(() => {
      if(localStorage.getItem('token')){
        router.push('/')
      }
    }, [])
    

    const handleChange = (e) => {

        if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { email, password }
        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        let response = await res.json()
        console.log(response)
        setEmail('')
        setPassword('')
        if(response.success){
            localStorage.setItem('token', response.token)
        toast.success('You are successfully logged in', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(()=>{
            router.push(process.env.NEXT_PUBLIC_HOST)
        }, 1000);
       
    }
    else{
        toast.error(response.error, {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
}


    return (
        <div>
            
            <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

           
                <div className="bg-black before:animate-pulse before:bg-gradient-to-b before:from-gray-900 overflow-hidden before:via-[#00FF00] before:to-gray-900 before:absolute ">
                    <div id="myDIV" >
                        <div className="w-[100vw] h-[100vh] px-3 sm:px-5 flex items-center justify-center absolute">
                            <div className="w-full sm:w-1/2 lg:2/3 px-6 bg-gray-500 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4  rounded-lg">
                                <div className="w-full flex justify-center text-[#ff00ee] text-xl mb:2 md:mb-5">
                                    Sign In
                                </div>
                                <form onSubmit={handleSubmit} className='mt-8 space-y-6' method="POST">
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-xs font-medium text-black">Your email</label>
                                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="block mb-2 text-xs font-medium text-black">Your password</label>
                                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Password' required />
                                </div>
                                <div className="flex flex-row justify-between">
                                    <Link href={'/forgot'} ><div className="text-black text-sm md:text-md ">Forgot Password</div></Link>

                                    <Link href={'/signup'} ><div className="text-[#ff00d9] text-sm md:text-md">Signup</div></Link>
                                </div>
                                <div className='flex items-center justify-between'>
                                    {/* <div className='flex items-center'>
                                        <input type="checkbox" id="remember-me" className="h-4 w-4 text-pink-600 focus:ring-pink500" />
                                        <label htmlFor="remember-me" className='ml-2 my-6 block text-sm text-black'>Remember me</label>
                                    </div> */}
                                </div>
                                <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-pink-500">
                                    <span className='absolute left-0 insert-y-0 flex items-center pl-3'>
                                        <svg className='h-5 text-pink-500 group-hover:text-pink-400' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 20 20' fill='currentColour' aria-hidden="true">
                                            <path fillRule='evenodd' d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>Sign in
                                    </button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>



{/* <script>
        const para = document.createElement("div");
        para.className = 'flex flex-wrap gap-0.5 h-screen items-center justify-center  relative';
            let el = '<div className = "  transition-colors duration-[1.5s] hover:duration-[0s] border-[#00FF00] h-[calc(5vw-2px)] w-[calc(5vw-2px)] md:h-[calc(4vw-2px)] md:w-[calc(4vw-2px)] lg:h-[calc(3vw-4px)] lg:w-[calc(3vw-4px)] bg-gray-900 hover:bg-[#00FF00]"></div>'
            for (var k = 1; k=1000; k++)
                {el+= '<div className = " transition-colors duration-[1.5s] hover:duration-[0s] border-[#00FF00] h-[calc(5vw-2px)] w-[calc(5vw-2px)] md:h-[calc(4vw-2px)] md:w-[calc(4vw-2px)] lg:h-[calc(3vw-4px)] lg:w-[calc(3vw-4px)] bg-gray-900 hover:bg-[#00FF00]"></div>'}
            
    
            para.innerHTML = el;
        document.getElementById("myDIV").appendChild(para);
    </script> */}
    </div >
  )
}

export default Login
