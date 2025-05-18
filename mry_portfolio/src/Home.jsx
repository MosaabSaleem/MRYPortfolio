import "./Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="homeTitle">Turning Your <span className="titleHighlight">Ideas </span>Into Reality</h1>
      <div className="homeTextContainer">
        <p className="homeText">Explore some of our projects or contact us now!</p>
        <button className="homeEnquireButton">Enquire Now</button>
      </div>
    </div>
  );
}

export default Home;