import TimelineCard from "./TimelineCard";

const TimelineContainer = () => {
  return (
    <article className="h-[80%] flex justify-center -ml-[2rem] md:ml-0">
      <div className="relative grid grid-cols-1 gap-y-10 resume:grid-cols-2 divide-foreground-title transition-all duration-500">
        <div className="absolute top-0 bottom-0 left-[3rem] resume:left-1/2 w-[0.3rem] bg-foreground-title rounded-full  -translate-x-1/2 transition-all duration-500" />

        <TimelineCard
          title=""
          date=""
          description=""
          variant="left"
          className="ml-[3rem] resume:ml-0 resume:col-start-2 resume:col-span-1 resume:row-start-1 transition-all duration-500"
        />
        <TimelineCard
          title=""
          date=""
          description=""
          variant="right"
          className="resume:col-start-1 resume:col-span-1 resume:justify-self-end resume:row-start-2 resume:mr-[1.25rem] transition-all duration-500"
        />

        <TimelineCard
          title=""
          date=""
          description=""
          variant="left"
          className="resume:col-start-2 ml-[3rem] resume:ml-0 resume:col-span-1 resume:row-start-3 transition-all duration-500"
        />
        <TimelineCard
          title=""
          date=""
          description=""
          variant="right"
          className="resume:col-start-1 resume:col-span-1 resume:justify-self-end resume:row-start-4 resume:mr-[1.25rem] transition-all duration-500"
        />
        <TimelineCard
          title=""
          date=""
          description=""
          variant="left"
          className="resume:col-start-2 ml-[3rem] resume:ml-0 resume:col-span-1 resume:row-start-5 transition-all duration-500"
        />
      </div>
    </article>
  );
};

export default TimelineContainer;
