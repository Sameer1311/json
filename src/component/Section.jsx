import React from "react";

const Section = () => {
  return (
    <section
      id="section"
      className="max-w-4xl mx-auto my-12 p-8 text-center transition-colors"
    >
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
        Hello, User!
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-4 leading-relaxed">
        Welcome to the user management section. Here you can add, view, and manage users effectively.
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
        Use the navigation bar to go through different sections.
      </p>
    </section>
  );
};

export default Section;
