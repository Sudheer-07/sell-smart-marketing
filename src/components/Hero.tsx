
const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-fluid">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Turn Unused Software Into <span className="text-softsell-blue">Revenue</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              The trusted marketplace for businesses to buy and sell software licenses. Get the best value for your idle software assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="btn-primary">
                Get a Quote
              </a>
              <a 
                href="#how-it-works" 
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                How It Works
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6">
              <div className="flex items-center">
                <div className="mr-2 text-softsell-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Verified Buyers</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 text-softsell-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>100% Secure Transactions</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 text-softsell-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Fair Market Value</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-20 h-20 bg-softsell-purple opacity-10 rounded-full"></div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-softsell-blue opacity-10 rounded-full"></div>
              
              <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl">
                <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold">Adobe Creative Cloud</span>
                    <span className="text-softsell-blue font-bold">$349</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Annual License</span>
                    <span>2 Available</span>
                  </div>
                </div>
                
                <div className="mb-6 bg-purple-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold">Microsoft Office 365</span>
                    <span className="text-softsell-purple font-bold">$199</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Business Premium</span>
                    <span>5 Available</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold">Atlassian Jira</span>
                    <span className="text-softsell-blue font-bold">$499</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Enterprise License</span>
                    <span>1 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
