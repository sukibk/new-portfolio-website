import { TypeAnimation } from "react-type-animation";

/**
 * IntroText Component
 *
 * Displays a typing animation introducing the developer.
 *
 * @component
 * @returns JSX.Element
 *
 * @example
 * <IntroText/>
 */
const IntroText = () => (
  <TypeAnimation
    className="h-[8rem] p-4 !text-foreground-title lg:max-w-1/2 font-light"
    sequence={[
      "Hi!",
      1000,
      "My name is Marko Sudar",
      2000,
      "I have been developing apps for a couple of years now",
      2000,
      "I have worked as Cloud Engineer and Web developer at Oracle, " +
        "and Software Engineer at AUVSI",
      2000,
      "Graduated with 4.0 GPA from Catawba College in CS Major",
      2000,
      "Welcome to my portfolio!",
    ]}
    wrapper="p"
    speed={50}
    deletionSpeed={90}
    cursor
    repeat={0}
    style={{
      fontSize: "2em",
      display: "inline-block",
      color: "white",
    }}
  />
);

export default IntroText;
