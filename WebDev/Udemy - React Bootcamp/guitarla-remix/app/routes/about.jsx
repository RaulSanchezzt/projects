import image from "../../public/img/nosotros.jpg";
import styles from "~/styles/about.css";

export function meta() {
  return {
    title: "GuitarLA - About us",
    description: "Guitar Sales",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

function About() {
  return (
    <main className="container about">
      <h2 className="heading">About Us</h2>
      <div className="content">
        <img src={image} alt="About us" />
        <div>
          <p>
            Duis arcu nunc, consectetur vel quam a, pellentesque efficitur
            ipsum. Ut dictum non ipsum ac volutpat. Proin semper faucibus
            vestibulum. Aenean sed ipsum quam. Vivamus et nisl id mauris
            pellentesque euismod. Sed a nisl diam. Integer felis ligula, rutrum
            in lacinia in, pellentesque eget tortor. Nunc ac condimentum arcu.
            Phasellus at placerat felis. Sed eu varius nisi. Aliquam consectetur
            tempus sem, vitae rutrum nunc. Proin non cursus tellus, eget
            efficitur arcu. Ut sit amet sollicitudin tellus.
          </p>
          <p>
            Sed volutpat, urna ac luctus lacinia, nulla elit mollis nisi, vel
            lacinia nibh odio eget neque. Aliquam erat volutpat. Nullam
            ultricies a turpis non pellentesque. Nam molestie pulvinar
            hendrerit. Suspendisse eu sapien urna. Duis suscipit est lobortis,
            molestie nibh quis, ultricies magna. In hac habitasse platea
            dictumst. In nec diam tincidunt, condimentum dolor a, pharetra
            felis. Donec magna turpis, laoreet sit amet ante nec, gravida
            gravida nisl.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
