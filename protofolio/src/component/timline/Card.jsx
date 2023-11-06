import React from 'react'
import "./style.css"
const Card = () => {
  return (
    <div className='card-items ' >
        <div className="place-content-center place-items-center grid grid-cols-1 gap-6 mt-8 xl:mt-0 mb-0 xl:gap-8 lg:grid-cols-3">
          
  <div className="w-80  rounded-lg py-2 shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
   <div className='row'>
    <div className='column'>
      <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{
                backgroundImage:
                  "url('https://www.arageek.com/_next/image?url=https%3A%2F%2Fcdn.arageek.com%2Fmagazine%2F%D8%AF%D9%8A%D9%83%D8%B3%D8%AA%D8%B1.jpg&w=3840&q=75')",
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className=" tracking-tight  title text-sm font-black text-white capitalize">
                  <p className="discription-text">
                    My career started when I finished my bachelor's degree in
                    laboratory medical sciences and after a few time I had the
                    opportunity to work in a hospital.
                  </p>
                </h2>
               
              </div>
            </div>
            </div>
  </div>
</div>
      
<div className="min-h-screen  flex items-center justify-center">
  <div className="w-80  rounded-lg py-2 shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
  <div className='column'>
  <div
                  className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                  style={{
                    backgroundImage:
                      "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/15f9f6fa-d673-450a-aca0-8cc7b50c5bba/dddtac6-22514575-8965-4b5a-9a9b-e0bc7b14a3b6.png/v1/fit/w_375,h_384,q_70,strp/dexter_s_lab_by_thejollybin_dddtac6-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzE1ZjlmNmZhLWQ2NzMtNDUwYS1hY2EwLThjYzdiNTBjNWJiYVwvZGRkdGFjNi0yMjUxNDU3NS04OTY1LTRiNWEtOWE5Yi1lMGJjN2IxNGEzYjYucG5nIiwid2lkdGgiOiI8PTEyNTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.miZvqj-cp8ha6Dlj5icox1vF2DaL6hZyHSN7YJlDlLk')",
                  }}
                >
                  <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 tracking-tight  title text-xl font-black text-white capitalize">
                      <p className="discription-text">
                        After some time in this work, I found that it is not my
                        passion and I did not find a soul in it, and because I
                        am a person who loves learning and I love development, I
                        decided to change, but at that time I was not doing what
                        is my passion or how I will reach it.
                      </p>
                    </h2>
              </div>
            </div></div>
  </div>
</div>
<div className="min-h-screen flex items-center justify-center">
  <div className="w-80  rounded-lg py-2 shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
  <div className='column'>
  <div
  
    className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
    style={{
      backgroundImage:
        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkagnrkkimv3L6vd2bBR2QqhYs7DVdgAJIjty2ktjS1mDUV4aURkPV7lo6UNO9KrrCq0&usqp=CAU')",
    }}
  >
    <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
      <h2 className="mt-4 tracking-tight  title text-xl font-black text-white capitalize">
        <p className="discription-text">
          At that time, I thought a lot to find something that
          suits my passion and because I like to keep up with
          developments. I searched for something that is
          constantly evolving and is also commensurate with what
          the local and global market demands, so I decided to
          enter the world of programming.
        </p>
      </h2>
   
</div>
</div>
</div>
</div>
  </div>
</div>
    </div>
    
  )
}

export default Card