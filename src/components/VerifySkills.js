import React from 'react';

const SkillVerification = () => {
  const handleTestClick = (level) => {
    console.log(`Starting ${level} test...`);
  };

  return (
    <div className=" text-black max-w-4xl mx-auto h-screen mt-36 px-6 flex flex-col">
      <div className='shadow-lg p-3 mb-4'>
      <section className="mb-5 ">
        <h1 className="text-lg font-medium mb-2">Skill Name: JavaScript</h1>
        <p className="text-sm leading-relaxed">
          JavaScript is a versatile programming language used for web development.
          It is the foundation for front-end frameworks and has grown to support back-end development as well.
        </p>
      </section>
      <section className="mb-4">
        <h2 className="font-medium mb-2">Test Information</h2>
        <p className="text-sm leading-relaxed">
          This test is designed to evaluate your knowledge and skills in JavaScript. It contains questions for multiple levels of expertise:
          beginner, intermediate, and advanced. Choose the level that best fits your current experience.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Select Your Test Level</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => handleTestClick('Beginner')} 
            className="bg-[#0DB198] text-white px-3 py-1 rounded-lg  transition duration-300"
          >
            Beginner
          </button>
          <button 
            onClick={() => handleTestClick('Intermediate')} 
            className="bg-[#0DB198] text-white px-3 py-1 rounded-lg  transition duration-300"
          >
            Intermediate
          </button>
          <button 
            onClick={() => handleTestClick('Advanced')} 
            className="bg-[#0DB198] text-white px-3 py-1 rounded-lg  transition duration-300"
          >
            Advanced
          </button>
        </div>
      </section>
      </div>
      <div className='shadow-lg p-3'>
      <section className="mb-5 ">
        <h1 className="text-lg font-medium mb-2">Skill Name: PHP</h1>
        <p className="text-sm leading-relaxed">
          PHP is a versatile programming language used for web development.
          It is the foundation for front-end frameworks and has grown to support back-end development as well.
        </p>
      </section>
      <section className="mb-4">
        <h2 className="font-medium mb-2">Test Information</h2>
        <p className="text-sm leading-relaxed">
          This test is designed to evaluate your knowledge and skills in PHP. It contains questions for multiple levels of expertise:
          beginner, intermediate, and advanced. Choose the level that best fits your current experience.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Select Your Test Level</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => handleTestClick('Beginner')} 
            className="bg-[#0DB198] text-white px-3 py-1 rounded-lg  transition duration-300"
          >
            Beginner
          </button>
          <button 
            onClick={() => handleTestClick('Intermediate')} 
            className="bg-[#0DB198] text-white px-3 py-1 rounded-lg  transition duration-300"
          >
            Intermediate
          </button>
          <button 
            onClick={() => handleTestClick('Advanced')} 
            className="bg-[#0DB198] text-white px-3 py-1 rounded-lg  transition duration-300"
          >
            Advanced
          </button>
        </div>
      </section>
      </div>

    </div>
  );
};

export default SkillVerification;
