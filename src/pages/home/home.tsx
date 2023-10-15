import { useEffect, useState } from "react";
import Grid from "../../components/Grid";
import NavBar from "../../components/Navbar";
import { useUserContext } from "../../context/UserContext";
import { useNavContext } from "../../context/NavContext";
import axios from "axios";
import Loader from "../../components/Loader";
import { Card } from "../../types";

const Home = () => {
  const { user, setUser } = useUserContext();
  const { nav } = useNavContext();
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCards = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/cards`,
          {
            headers: {
              Authorization: `bearer ${user.token}`,
            },
            params: {
              userId: user.id,
            },
          }
        );
        const cloneUser = { ...user };
        cloneUser.cards = data;
        setUser(cloneUser);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    getCards();
  }, []);

  useEffect(() => {
    let cardsFiltered: Card[] = [];
    if (nav === "active&pending") {
      cardsFiltered = user.cards.filter(
        ({ status }) => status === "pending" || status === "active"
      );
    }
    if (nav === "expired") {
      cardsFiltered = user.cards.filter(({ status }) => status === "expired");
    }
    setCards(cardsFiltered);
  }, [nav]);

  return (
    <>
      <Loader loading={loading} />
      <div className="w-100 h-full flex flex-col gap-6">
        <NavBar />
        <div className="w-100 h-full flex justify-center">
          <Grid cards={cards} />
        </div>
      </div>
    </>
  );
};

export default Home;
