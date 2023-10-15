import Loading from "react-fullscreen-loading";

const Loader = ({ loading }) => {
  return (
    <Loading loading={loading} background="#ffffff" loaderColor="#be123c" />
  );
};

export default Loader;
