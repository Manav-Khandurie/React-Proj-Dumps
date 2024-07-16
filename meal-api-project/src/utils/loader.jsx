import { square } from "ldrs";

square.register();

const loader = () => {
  return (
    <l-square
      size="35"
      stroke="5"
      stroke-length="0.25"
      bg-opacity="0.1"
      speed="1.2"
      color="black"
    ></l-square>
  );
};

export default loader;
