import "../App.css";

function Banner() {
  const scrollToMovies = () => {
    window.scrollTo(0, 600);
    console.log("sa");
  };
  return (
    <div className="banner">
      <h3>Sample Header</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas adipisci
        eum molestiae. Fuga corporis sunt reiciendis totam vero pariatur dolores
        enim, ducimus iusto consequuntur repellendus nobis porro eaque officia
        nostrum.
      </p>
      <button onClick={scrollToMovies}>SEE MOVIES</button>
    </div>
  );
}

export default Banner;
