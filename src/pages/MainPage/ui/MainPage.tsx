import { ServicesList } from "widgets/Services";
import { Slider } from "widgets/Slider";
import {FirmStyle} from "../../../widgets/FirmStyle";

type Props = {};

export const MainPage = (props: Props) => {
  return (
    <>
      <Slider />
      <ServicesList />
      <FirmStyle/>
    </>
  );
};
