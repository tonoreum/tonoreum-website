import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import MagicButton from "./MagicButton";
import { SiGitbook } from "react-icons/si";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Grid = () => {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center">
        <TextGenerateEffect
          words="Find out about Tonoreum on GitBook"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />
        <a href="https://tonoreum.gitbook.io/tonoreum">
          <MagicButton title="GitBook" icon={<SiGitbook />} position="right" />
        </a>
      </div>

      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
