import React,{ useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import { SocialIcon } from 'react-social-icons'

const ContactMe = () => {
    const form = useRef();
const[messg ,setMessg]=useState('')
const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_aesfl0b",
        "template_yo3x2oa",
        form.current,
        "AeudsNtPdl-qTBqqj"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result, result.text);
          setMessg("SUCCESS!");
        
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessg("FAILED...");
        
        }
      );
  };
  return (
    <div id='Contact'><section className="place-content-center place-items-center overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-black dark:bg-gray-900">
    <div className="container px-6 py-12 mx-auto">
        <div>
            {/* <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p> */}

            <h1 className="mt-2 text-2xl font-semibold text-gray-50 md:text-3xl dark:text-white" style={{fontFamily:"serif"}}>Get In Touch</h1>

            <p className="mt-3 text-gray-50 dark:text-gray-400">if you have any questions. just fill in the contact form and we will answer you shortly.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <span className="inline-block p-3 text-blue-500 ">
                    <SocialIcon network="google" url="duhadahamsheh@gmail.com"  />
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-50 dark:text-white">Email</h2>
                   
                    <p className="mt-2 text-sm hover:bg-purple-50 text-blue-500 dark:text-blue-400"><a href='duhadahamsheh@gmail.com' style={{fontStyle:"oblique" ,fontWeight:"700"}}>duhadahamsheh@gmail.com</a></p>
                </div>

                <div>
                    <span className="inline-block p-3 text-blue-500 ">
                    <SocialIcon  network="github" url="https://github.com/DuhaDahamsheh"/>
       
       
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-50 dark:text-white">GitHub Link</h2>
                   
                    <p className="mt-2 text-sm hover:bg-purple-50  text-blue-500 dark:text-blue-400"><a href='https://github.com/DuhaDahamsheh' style={{fontStyle:"oblique" ,fontWeight:"700"}}>Duha Dahamsheh</a></p>
                </div>

                <div>
                    <span className="inline-block p-3 text-blue-500">
                    <SocialIcon network="linkedin"  url="https://www.linkedin.com/in/duhadahamsheh/"/>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-50 dark:text-white">LinkedIn</h2>
                    <p className="mt-2 text-sm  hover:bg-purple-50  text-blue-500 dark:text-blue-400"><a href='https://www.linkedin.com/in/duhadahamsheh/' style={{fontStyle:"oblique" ,fontWeight:"700"}}>Duha Dahamsheh</a></p>
                    
                </div>

                <div>
                   
                    <span className="inline-block p-4 m-2 text-blue-500 rounded-full bg-white dark:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </span>
                  
                    
                    <h2 className="mt-4 text-base font-medium text-gray-50 dark:text-white">Phone</h2>
                    
                    <p className="mt-2 text-sm hover:bg-purple-50 text-blue-500 dark:text-blue-400"><a href='tel:962791026868'style={{fontStyle:"oblique" ,fontWeight:"700"}}>+962791026868</a></p>
                </div>
            </div>

            <div className="p-4 py-6 rounded-xl bg-gradient-to-b from-slate-900 via-purple-600 to-black  dark:bg-gray-800 md:p-8">
            <form ref={form} onSubmit={sendEmail} className="contact">
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-white dark:text-gray-200">First Name</label>
                            <input type="text" placeholder="John " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name='user_firstName' onChange={(e) => {
            setName(e.target.value);
          }}/>
                        </div>
                        <div class="flex-1 px-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm text-white dark:text-gray-200">Last Name</label>
                            <input type="text" placeholder="Doe" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name='user_lastName'/>
                        </div>
                       
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-white dark:text-gray-200">Email address</label>
                        <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name='user_email'  onChange={(e) => {
            setEmail(e.target.value);
          }}/>
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-white dark:text-gray-200">Message</label>
                        <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message" name='message'onChange={(e) => {
            setMessage(e.target.value);
          }}></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-700 rounded-lg hover:bg-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50" type='submit'>
                        Send message
                    </button>
                </form>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default ContactMe