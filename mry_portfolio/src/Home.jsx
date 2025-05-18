import "./Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeTitleContainer">
        <h1 className="homeTitle">Turning Your <span className="titleHighlight">Ideas </span>Into Reality</h1>
        <button className="homeEnquireButton">Enquire Now</button>
      </div>
      <p className="homeText">Explore some of our projects or contact us now!</p>
    </div>
  );
}

export default Home;