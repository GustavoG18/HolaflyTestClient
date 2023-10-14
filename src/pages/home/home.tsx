import { useEffect, useState } from "react";
import Grid from "../../components/Grid";
import NavBar from "../../components/Navbar";
import { useUserContext } from "../../context/UserContext";
import { useNavContext } from "../../context/NavContext";

const Home = () => {
  const { user } = useUserContext();
  const { nav } = useNavContext();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    let cardsFiltered = [];
    console.log(nav);
    if (nav === "active&pending") {
      cardsFiltered = user.user.cards.filter(
        ({ status }) => status === "pending" || status === "active"
      );
    }
    if (nav === "expired") {
      cardsFiltered = user.user.cards.filter(
        ({ status }) => status === "expired"
      );
    }
    setCards(cardsFiltered);
  }, [nav]);

  return (
    <div className="w-100 h-full flex flex-col gap-6">
      <NavBar />
      <div className="w-100 h-full flex justify-center">
        <Grid cards={cards} />
      </div>
    </div>
  );
};

export default Home;
