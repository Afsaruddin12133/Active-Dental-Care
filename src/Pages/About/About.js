import React from 'react';
import img from '../../Photos/logo/afsar.jpg';

const About = () => {
    return (
        <div className='md:flex md:gap-20 p-10 md:mt-20 mt-10 '>
           <div className='md:w-2/5'>
               <img src={img} alt=""  className='rounded-lg drop-shadow-2xl w-full'/>
           </div>
           <div className='md:w-3/5 mt-10'>
               <h1 className='text-4xl font-bold mb-16 text-[#00B4D8]'>Name : Md.Afar uddin</h1>
                <h2 className='text-2xl text-center font-bold mb-10'>My Mission or Goal</h2>
                <p>Hello There , <br /> My main goal in my life is  a successful Google Top One developer.This is my main goal in life because I want to help world wide.My short term goals this year to become Full Stack web developer.Right now i am Learning web developing with Programming hero.Often we are complete main course.i hope after 3 week later we are complete our Main course. Then we are talking our next course from programming hero.com . I hope i will be able to reach  my goal.</p>
           </div>
        </div>
    );
};

export default About;