import { HowComponentProps } from "../../types";

interface HowProps {
  data: HowComponentProps;
}
const HowComponent = ({ data }: HowProps) => {
  return (
    <div className="flex flex-col items-center">
      <img src={data.icon} alt={data.alt} />
      <p className="font-bold text-xl">{data.title}</p>
      <p className=" opacity-40 text-center mt-2">{data.desc}</p>
    </div>
  );
};

export default HowComponent;
