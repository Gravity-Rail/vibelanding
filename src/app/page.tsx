import Image from 'next/image'
import { getImagePath } from '@/utils/getImagePath'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full px-5 py-4 flex justify-between items-center bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="flex items-center gap-8">
          <Image 
            src={getImagePath('images/gravityrail-logo-150x150.jpg')}
            alt="Gravity Rail"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <div className="hidden md:flex gap-8">
            <a 
              href="#how-it-works" 
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Features
            </a>
            <a 
              href="#get-started" 
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition transform hover:-translate-y-0.5"
        >
          Request Access
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-gray-900 overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:flex lg:items-center lg:gap-12">
            {/* Content side */}
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-0 lg:w-1/2">
              <div className="pt-4 sm:pt-8 lg:pt-8">
                <div className="text-center lg:text-left">
                  <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight text-shadow-lg">
                    AI automation made simple
                  </h1>
                  <p className="text-xl text-gray-400 mb-8">
                    Gravity Rail gets work done. Gravity Rail signs BAAs.
                  </p>
                  <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start">
                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
                      <input
                        type="text"
                        placeholder="Enter invite code"
                        className="flex-grow px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                      />
                      <button 
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition transform hover:-translate-y-1"
                      >
                        Join Chat
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Image section */}
            <div className="lg:w-1/2">
              <div className="h-56 w-full sm:h-72 md:h-96 lg:h-[400px] flex items-center justify-center">
                <Image
                  src={getImagePath('images/grfireworks-1-2048x1955.png')}
                  alt="Decorative fireworks"
                  width={2048}
                  height={1955}
                  className="object-contain h-full w-auto mx-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="scroll-mt-20 py-20 px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-blue-500 text-sm mb-2">How Gravity Rail Works</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Build tasks for agents to complete</h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              {/* Lightweight CRM */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.728-2.728" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Lightweight CRM</h3>
                  <p className="text-gray-400 text-base">
                    Manage relationships directly over email, phone, sms, or web chat. Full audit trail of all AI Agent communications.
                  </p>
                </div>
              </div>

              {/* Task Management */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Task Management</h3>
                  <p className="text-gray-400 text-base">
                    Give a task an SOP and the forms and data required to get the job done. Get this information, give this update, look this up, etc.
                  </p>
                </div>
              </div>

              {/* AI Agents */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Agents</h3>
                  <p className="text-gray-400 text-base">
                    Assign your tasks to agents. They&apos;ll call, text, email, search the internet and your database, following your SOP until the job is done.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Image placeholder */}
            <div className="hidden lg:block relative">
              <Image
                src={getImagePath('images/basic_flow.png')}
                alt="VIP Guest Concierge Flow Diagram"
                width={800}
                height={600}
                className="rounded-xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="scroll-mt-20 py-20 px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-blue-500 text-sm mb-2">How We Work</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Our goal is to get you automated</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-500">
                  1
                </div>
                <h3 className="text-xl font-bold pt-2">Get an Invite Code</h3>
              </div>
              <p className="text-gray-400">
                Enter a valid invite code and you&apos;ll be able to chat with our onboarding agent who will gather the information needed to get you automated.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-500">
                  2
                </div>
                <h3 className="text-xl font-bold pt-2">Meet the GR team</h3>
              </div>
              <p className="text-gray-400">
                Our assistant will schedule your first call with our team to discuss your needs and the scope of required integration.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-500">
                  3
                </div>
                <h3 className="text-xl font-bold pt-2">Get Automated</h3>
              </div>
              <p className="text-gray-400">
                We will work with your team to integrate and tailor the platform to your needs. The Gravity Rail team will train your staff on how to manage and continually improve your automations.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            You can talk to our agent about custom development work. Fair warning, it&apos;ll be expensive.
          </div>
        </div>
      </section>
    </main>
  )
}