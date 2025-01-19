import React from 'react';
import profileImage from '../Images/Profile.jpg'
function Home() {
  return (
    <>
      <main className='bg-slate-600 min-h-screen flex items-center justify-center'>
        <div className="bg-white p-8  rounded-lg shadow-lg flex flex-col md:flex-row items-center max-w-4xl mx-auto">
        <div className="md:w-1/2 text-left space-y-4">
  <h1 className="text-4xl font-extrabold text-cyan-600">Software Developer</h1>
  <p className="text-lg text-gray-700">
    Passionate about crafting reliable and efficient software solutions.
  </p>
  <p className="text-sm text-gray-500">
    Skilled in full-stack development, cloud computing, and microservices architecture.
  </p>
  <p className="text-sm text-gray-500">
    Experience in developing scalable applications and systems for various industries.
  </p>
  <p className="text-sm text-gray-500">
    Enthusiastic about problem-solving and staying updated with the latest technology trends.
  </p>
</div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src={profileImage} alt="Profile" className="w-48 h-48 rounded-full border-4 border-white shadow-lg" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
