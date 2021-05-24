import "../App.css";
import Navbar from "./_partials/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about">
        <h3 className="about-header text-center">About Us</h3>
        <p className="about-text text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
          adipisci eum molestiae. Fuga corporis sunt reiciendis totam vero
          pariatur dolores enim, ducimus iusto consequuntur repellendus nobis
          porro eaque officia nostrum.
        </p>
      </div>
    </div>
  );
}

export default About;
