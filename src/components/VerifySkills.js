import React from 'react';

const SkillVerification = () => {
  const handleTestClick = (level) => {
    console.log(`Starting ${level} test...`);
    // Add functionality to redirect or start the test for the selected level
  };

  return (
    <div className=" text-black  h-screen md:mt-10 px-6 flex flex-col items-center justify-center  ">
      {/* Skill Description Section */}
      <section className="text-center mb-12">
        <h1 className="text-2xl font-bold mb-4">Skill Name: JavaScript</h1>
        <p className="text-lg leading-relaxed">
          JavaScript is a versatile programming language used for web development, enabling dynamic and interactive user interfaces.
          It is the foundation for front-end frameworks and has grown to support back-end development as well.
        </p>
      </section>

      {/* Test Description Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Test Information</h2>
        <p className="text-lg leading-relaxed">
          This test is designed to evaluate your knowledge and skills in JavaScript. It contains questions for multiple levels of expertise:
          beginner, intermediate, and advanced. Choose the level that best fits your current experience with the language.
        </p>
      </section>

      {/* Buttons for the Test Levels */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-8">Select Your Test Level</h2>
        <div className="flex gap-8 justify-center">
          <button 
            onClick={() => handleTestClick('Beginner')} 
            className="bg-[#0DB198] text-white py-3 px-6 text-lg font-medium rounded-lg  transition duration-300"
          >
            Beginner
          </button>
          <button 
            onClick={() => handleTestClick('Intermediate')} 
            className="bg-[#0DB198] text-white py-3 px-6 text-lg font-medium rounded-lg  transition duration-300"
          >
            Intermediate
          </button>
          <button 
            onClick={() => handleTestClick('Advanced')} 
            className="bg-[#0DB198] text-white py-3 px-6 text-lg font-medium rounded-lg  transition duration-300"
          >
            Advanced
          </button>
        </div>
      </section>
    </div>
  );
};

export default SkillVerification;
