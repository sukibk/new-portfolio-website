import TechSwitchElement from "@/app/components/about/tech/TechSwitchElement";
import ScrollWrapper from "@/app/components/layout/ScrollWrapper";
import { TECH_CONSTS } from "@/app/constants/tech";

export interface TechSwitchProps {
  activeIndex: number;
  setActiveIndex: (x: number) => void;
  indexDropped: number;
}

const TechSwitch = ({
  activeIndex,
  setActiveIndex,
  indexDropped,
}: TechSwitchProps) => {
  return (
    <ScrollWrapper className=" flex flex-wrap justify-center items-center gap-3 w-full max-w-[500px] self-center">
      {TECH_CONSTS.map((item, index) => (
        <TechSwitchElement
          key={`${item}-${indexDropped}`}
          value={item}
          id={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          indexDropped={indexDropped}
        />
      ))}
    </ScrollWrapper>
  );
};

export default TechSwitch;
