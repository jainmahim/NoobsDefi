  import React from 'react'
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="">
    <div
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-36 lg:py-32 px-5">
     
      <div className="text-center">
        <h1 className="text-2xl font-bold  text-gray-900 sm:text-6xl"> 
        Welcome to the LoanFusionX
        </h1>
        <p className="mt-6 text-lg  text-gray-600">
        where the power of blockchain and smart contracts meet to redefine how you interact with cryptocurrency. Explore a new era of decentralized finance, where lending, borrowing, and redepositing crypto is <b>safer</b>, <b>faster</b>, and more  <b>transparent</b> than ever before.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/lend"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Lend Money
          </Link>
          <a href="https://github.com/LoanFusionX/LoanFusionX#readme" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
    <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
    {/*  */}
    <div className="mb-12 space-y-2 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Why choose us?</h2>
        {/* <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
          Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia
          aliquid explicabo? Excepturi, voluptate?
        </p> */}
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 containers mx-auto my-16">
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <img src="https://www.drupal.org/files/project-images/reg_confirm_email_with_button_0.png"
            alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Decentralized Security
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            Your funds are secured by the blockchain, eliminating the need for intermediaries and ensuring trust through smart contracts.
            </p>
           
          </div>
          
        </div>
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <img src="https://it.wisc.edu/wp-content/uploads/Secure-Website-900x400.jpg"
            alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Lend with Confidence
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            Put your crypto assets to work by lending them to the community, earning interest on your terms.
            </p>
           
          </div>
          
        </div>
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <img src="https://www.thoughtco.com/thmb/LeLKKn5JeptxHxXqOYY6rgDrI5c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-538807532-59c441cb9abed500113df68c.jpg"
            alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Borrow Responsibly
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            Access liquidity when you need it, with flexible loan options that fit your financial goals.
            </p>
           
          </div>
          
        </div>
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <img src="https://assets-global.website-files.com/62e17765d63bf58b55b9c94e/62fa96bdef70a18bcc7ab52f_61fc2ab789e440807ed61162_script-automation.jpeg"
            alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Smart contracts
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            Smart contracts automatically manage your earnings, so your crypto works for you 24/7.
            </p>
           
          </div>
          
        </div>
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <img src="https://www.shutterstock.com/image-photo/stay-updated-written-on-speechbubble-260nw-420981622.jpg"
            alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Advanced Risk Management
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            Our cutting-edge risk management tools and algorithms continuously monitor the crypto market to protect your assets. 
            </p>
           
          </div>
          
        </div>
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <img src="https://www.freeiconspng.com/uploads/feedback-icon-21.png"
            alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Transparency
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            Every transaction is recorded on the blockchain, providing complete transparency and traceability.
            </p>
          </div>
        </div>
      </div>
  </div>

  )
}
