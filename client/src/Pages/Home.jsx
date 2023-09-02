import "../App.css";
import Carousel from "../Components/Carousel/Carousel";
import Main from "../Components/Main-News/Main";
import Adv from "../Components/Adv/Adv";
import LocalNews from "../Components/LocalNews/LocalNews"
import NationalNews from "../Components/NationalNews/NationalNews"

function Home() {
  return (
    <div>
      <div className="center-desktop">
      <Carousel />
        <Main />
        <Adv />
        <NationalNews />
        <Adv />
        <LocalNews />
      </div>
    </div>
  );
}

export default Home;


