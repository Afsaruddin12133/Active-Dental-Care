import React from 'react';

const Blogs = () => {
    return (
      <div>
            <div className='md:flex md:gap-10 md:p-8'>
            <div className='md:w-2/4 drop-shadow-lg border p-5 rounded'>
                <h1 className='text-3xl font-bold mb-10'>Q: Difference between authorization and authentication?</h1>
                <span className='font-bold underline text-2xl'>Ans.</span> <br />
                <span className='font-bold underline text-xl'>Authentication:</span>
                <ul>
                    <li>Authentication is the process to know user's identity</li>
                    <li>It process needs user's login information</li>
                    <li>It done before authorization</li>
                    <li>Authentication done by Firebase , Okta Etc.</li>
                </ul>
                <span className='font-bold underline text-xl'>Authorization:</span>
                <ul>
                   <li>Authorization is the process of giving someone permission to do or have something.</li>
                    <li>It like Admin</li>
                    <li>Authorization works through settings that are implemented and maintained by the organization</li>
                    <li>Authorization isn't visible to or changeable by the user.</li>
                </ul>
            </div>
            <div  className='md:w-2/4 drop-shadow-lg border p-5 rounded'>
                <h1 className='text-3xl font-bold mb-10'>Q :Why are you using firebase? What other options do you have to implement authentication?</h1>
                <span className='font-bold underline text-2xl'>Ans.</span> <br />
                <p>Firebase is a Google Product.It a Authentication System. you can enables developers to develop iOS, Android and Web apps. If i create a Authentication system this system is no more secure.because i am the one . But google have lot of Employee.They can secure more then me. that's why i am using this.i have lot of resons.It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and Apple,GitHub,Games etc</p>
            </div>
            
        </div>
        <div  className='md:w-2/4 drop-shadow-lg border p-5 rounded mx-auto mb-10'>
        <h1 className='text-3xl font-bold mb-10'>Q : What other services does firebase provide other than authentication?</h1>
        <span className='font-bold underline text-2xl'>Ans.</span> <br />
        <p>Firebase is a Google Product.It provide Hosting ,Cloud Storage,Cloud Function Cloud messaging,Firebase ML,Remote Config,Realtime database,Google anylatic ,Test lab and etc.</p>
    </div>
      </div>
    );
};

export default Blogs;