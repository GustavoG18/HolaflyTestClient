import Grid from "../../components/Grid";
import NavBar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="w-100 h-full flex flex-col gap-6">
      <NavBar />
      <div className="w-100 h-full flex justify-center">
        <Grid />
      </div>
    </div>
  );
};

export default Home;
