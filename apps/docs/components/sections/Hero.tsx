import React from "react";
import CommandTerminal from "../ui/CommandTerminal";

const HeroSection = () => {
  return (
    <div className="flex-1 flex items-center justify-center ">
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-12 mt-12 ">
          <div className="flex flex-col items-center mt-8 gap-6 text-center">
            <h1 className="  leading-tight text-4xl md:text-6xl font-extrabold tracking-tight pb-1 bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text md:leading-tight dark:text-gray-300">
              The fastest way <br className="md:hidden block" /> to make apps
              <br />
              for Next.js developers
            </h1>
            <p className="text-gray-700 mx-auto mb-0 text-lg lg:text-2xl lg:font-light">
              Don't spend additional time to build native apps.
            </p>
          </div>
          <div className="w-full max-w-[400px] md:max-w-xl mx-auto">
            <CommandTerminal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
