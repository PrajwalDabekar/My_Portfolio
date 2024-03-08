import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Nav from './components/Nav/Nav'
import { Link } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import Activities from './components/Activities/Activities'
import Projects from './components/Projects/Projects'
import resume from '../src/assets/Resume.pdf'

function App() {
  
  return (
    <div>
      <Nav/>
      <div className='flex flex-col-reverse sm:flex-row'>
        <div className='h-full px-4 basis-1/4 m-2 text-white space-y-2'>
          <div className='bg-[#1c1b23] py-6 space-y-2'>
          <a  
          href='https://www.linkedin.com/in/prajwal-dabekar-85505522a/'
          className='w-full flex justify-center items-center'><div><img src='https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png' className='h-[50px] w-[50px]'/></div><div className='font-semibold'>LinkedIn</div></a>
          <a href='https://github.com/PrajwalDabekar' className='w-full flex justify-center items-center'>
            <div>
            <img src='https://joshuapenalba.files.wordpress.com/2014/12/github-icon.png' className='h-[50px] w-[50px]'/>
            </div>
            <div className='font-semibold'>
              GitHub
              </div>
              </a>
              </div>
              <Activities/>
              <div className='px-16 py-2 bg-blue-400'>
              <a href={resume} target='_blank'
              className='w-full'>Download Resume</a>
              </div>
        </div>
        <div className='basis-3/4 bg-[#14131a] sm:p-3 m-2'>
          <Hero/>
          <div>
          <div className='text-white text-left font-semibold my-5 text-2xl'>
          Projects
        </div>
        <div className='flex flex-col justify-center items-center space-y-3 sm:flex-row space-x-4'>
        <Card
        className="mx-2"
        hyperlink='https://github.com/PrajwalDabekar/exercise_counting_module'
        cover='https://assets-global.website-files.com/5ecf8d4fd463368e57125560/5ecf8d4fd4633682fd125584_feature-1.png'
        title='AI Fitness Trainer'
        stack='python flask opencv html css mediapipe sqlite'
        />
        <Card
        hyperlink='https://github.com/PrajwalDabekar/Trip-Budget'
        cover='https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/Imagepc39-1686153176702.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces'
        title='Trip Budget Tracker'
        stack='ReactJS NodeJS ExpressJS MongoDB ChartJS'
        />
         <Card
         hyperlink='https://github.com/PrajwalDabekar/Expense_Tracker'
          title='Expense Tracker'
          stack='HTML CSS NodeJS ExpressJS MongoDB'
          />
        </div>
        <div className='flex flex-col sm:flex-row'>
          <div className='bg-[#14131a] basis-2/3 my-4 px-4'>
        <div className='text-white text-left font-semibold my-5 text-2xl'>
          What I Know
        </div>
        <div className='flex flex-col text-white space-y-2 sm:flex-row space-x-2'>
          <div className='px-6 bg-[#1c1b23] py-4'>
            Frontend
            <div className='flex flex-wrap justify-between mt-5'>
          <div className='px-2 py-1 text-sm border-2 border-green-400 rounded-md mt-2'>HTML</div>
          <div className='px-2 py-1 text-sm border-2 border-blue-400 rounded-md mt-2'>CSS</div>
          <div className='px-2 py-1 text-sm border-2 border-red-400 rounded-md mt-2'>ReactJS</div>
          <div className='px-2 py-1 text-sm border-2 border-yellow-400 rounded-md mt-2'>Tailwind</div>
          <div className='px-2 py-1 text-sm border-2 rounded-md mt-2'>JavaScript</div>
          </div>
          </div>
          <div className='px-6 bg-[#1c1b23] py-4'>
            Backend
            <div className='flex flex-wrap justify-between mt-5'>
          <div className='px-2 py-1 text-sm border-2 border-blue-400 rounded-md mt-2'>NodeJS</div>
          <div className='px-2 py-1 text-sm border-2 border-yellow-400 rounded-md mt-2'>ExpressJS</div>
          <div className='px-2 py-1 text-sm border-2 border-green-400 rounded-md mt-2'>Flask</div>
          <div className='px-2 py-1 text-sm border-2 border-red-400 rounded-md mt-2'>Python</div>
          <div className='px-2 py-1 text-sm border-2 rounded-md mt-2'>JavaScript</div>
          </div>
          </div>
          <div className='px-6 bg-[#1c1b23] py-4'>
            Database
            <div className='flex flex-wrap justify-between mt-5'>
          <div className='px-2 py-1 text-sm border-2 border-red-400 rounded-md mt-2'>MongoDB</div>
          <div className='px-2 py-1 text-sm border-2 border-green-400 rounded-md mt-2'>MySql</div>
          <div className='px-2 py-1 text-sm border-2 border-yellow-400 rounded-md mt-2'>Sqlite</div>
          </div>
          </div>
          <div className='px-6 bg-[#1c1b23] py-4'>
            Robotics
            <div className='flex flex-wrap justify-between mt-5'>
          <div className='px-2 py-1 text-sm border-2 border-purple-400 rounded-md mt-2'>Arduino</div>
          <div className='px-2 py-1 text-sm border-2 border-zinc-400 rounded-md mt-2'>Esp8266</div>
          <div className='px-2 py-1 text-sm border-2 border-green-400 rounded-md mt-2'>Rpi</div>
          <div className='px-2 py-1 text-sm border-2 border-blue-400 rounded-md mt-2'>C++</div>
          <div className='px-2 py-1 text-sm border-2 border-yellow-400 rounded-md mt-2'>Python</div>
          </div>
          </div>
        </div>
        </div>
        <div className='basis-1/3 bg-[#1c1b23] my-4 px-4'>
        <Projects/>
        </div>
        </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
