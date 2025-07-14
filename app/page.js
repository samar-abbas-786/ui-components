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
export default function Home() {
  return (
    <div>
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
        <BackgroundLines className="z-0 absolute " />
        <div className="text-center font-medium relative text-white z-10 flex flex-col h-[100vh] px-32 justify-center items-center">
          <h1 className="text-white text-6xl font-bold px-44 ">
            Sanjana Airlines, Sajana Textiles.
          </h1>
          <p className="text-2xl mt-6 px-28 font-light">
            {" "}
            I'm able to merge pull requests that look safe from time to time but
            no commitment on timelines here.{" "}
          </p>
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
      <ContainerScroll titleComponent={"Transcriptify"}>
        <Image width={8000} height={600} src="/fileimg.png" alt="Description" />
      </ContainerScroll>
      {/* <FloatingDock></FloatingDock> */}
      {/* <Globe></Globe> */}
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
