import Loading from "react-fullscreen-loading";
import { LoaderPropsType } from "../types";

const Loader = ({ loading }: LoaderPropsType) => {
  return (
    <Loading loading={loading} background="#ffffff" loaderColor="#be123c" />
  );
};

export default Loader;
