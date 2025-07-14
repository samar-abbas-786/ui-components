"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Boxes } from "@/components/ui/background-boxes";
import { BackgroundLines } from "@/components/ui/background-lines";
import { CodeBlock } from "@/components/ui/code-block";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Globe } from "@/components/ui/globe";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import { jsx } from "react/jsx-runtime";
import { Button } from "@/components/ui/moving-border";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [c, setC] = useState(false);

  const [cod, setCod] = useState();
  // useEffect(() => {
  //   setInterval(() => {
  //     setC(!c);
  //   }, [10000]);
  // }, [c]);
  const code = `const DummyComponent = () => {
  const [count, setCount] = React.useState(0);
 
  const handleClick = () => {
    setCount(prev => prev + 1);
  };
 
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};
`;

  const code2 = `const FightCounter = () => {
  const [fights, setFights] = React.useState(0);

  const handleFight = () => {
    setFights(prev => prev + 1);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl text-white max-w-sm mx-auto mt-10">
      <h2 className="text-3xl font-extrabold mb-4 text-center">
        🥊 Fight Club Tracker
      </h2>
      <p className="text-lg mb-6 text-center">
        Total Fights Recorded: <span className="font-semibold">{fights}</span>
      </p>
      <button
        onClick={handleFight}
        className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 active:scale-95 transition-all rounded-lg font-medium"
      >
        Add a Fight
      </button>
    </div>
  );
};

export default FightCounter;`;

  useEffect(() => {
    if (c) {
      setCod(code);
    } else {
      setCod(code2);
    }
  }, [c]);
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="w-full min-h-screen relative bg-stone-950">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={300}
        className="fixed top-0 left-0 w-full h-full z-0"
        particleColor="#ae09b8"
      />
      <FloatingNav
        className="fixed right-0 top-0 bg-white text-black"
        navItems={navItems}
      />
      {/* <AuroraBackground>
        <div className="text-white text-center">
          <h1 className="text-white font-bold text-7xl px-28">
            Background lights are cool you know.
          </h1>
          <p className="text-4xl">And this, is chemical burn.</p>
        </div>
      </AuroraBackground>
      <div className="relative h-screen overflow-hidden">
        <BackgroundBeams className="z-0" />

        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-white">Welcome to My Page</h1>
        </div>
      </div> */}
      {/* 3rd background */}
      <div>
        {/* <BackgroundLines className="z-10 relative " /> */}
        <div className="flex justify-around items-center">
          <div className="text-start pl-5 font-medium relative text-white z-10 flex flex-col h-[100vh]  justify-center items-center w-[20w]">
            <h1 className="text-white text-4xl font-bold">
              Sanjana Airlines, Sajana Textiles.
            </h1>
            <p className="text-xl text-center px-14 mt-6 font-light">
              {" "}
              I'm able to merge pull requests that look safe from time to time
              but no commitment on timelines here.{" "}
            </p>
            <div className="mt-8">
              <Button className="bg-slate-950 text-white">
                Start Creating Magic
              </Button>
            </div>
          </div>
          <div className="w-[50vw] h-[70vh] pr-3 overflow-x-scroll scrollbar-hide">
            <CodeBlock
              bg={"bg-stone-950"}
              code={cod}
              highlightLines={[9, 13, 14, 18]}
              filename="dummy.jsx"
            />
          </div>
        </div>
      </div>

      {/* 4th Background */}
      {/* <div>
        <Boxes className="z-0 absolute " />
        <div className="text-content z-10 text-white h-[100vh] w-[100vw] bg-slate-950 flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-6xl">Tailwind is Awesome</h1>
          <p className="text-3xl font-bold">
            Framer motion is the best animation library ngl
          </p>
        </div>
      </div> */}
      <div className=" flex">
        {/* <div className="text-gray-100 font-extrabold text-6xl">
          Side Section
        </div> */}

        <ContainerScroll
          titleComponent={
            <h1 className="text-slate-200 font-extrabold text-4xl mb-6">
              Transcriptify
            </h1>
          }
        >
          <Image
            width={8000}
            height={600}
            src="/fileimg.png"
            alt="Description"
            className="object-fill"
          />
        </ContainerScroll>
      </div>
      {/* <FloatingDock></FloatingDock> */}
      {/* <Globe /> */}
      {/* <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      /> */}
    </div>
  );
}
