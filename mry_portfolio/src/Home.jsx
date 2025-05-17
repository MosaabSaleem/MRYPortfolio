import "./Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="homeTitle">Turning Your <span className="titleHighlight">Ideas </span>Into Reality</h1>
      <div className="homeTextContainer">
        <p className="homeText">Feel free to explore some of our projects.</p>
        <p className="homeText">or <a href="http">click here to contact us and start building!</a></p>
      </div>
    </div>
  );
}

export default Home;