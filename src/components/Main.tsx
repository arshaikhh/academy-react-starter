interface Properties {
  image: string;
  imagedesc: string;
  title: string;
  location: {
    city: string;
    country: string;
  };
  description: string;
  link: string;
}

function Main(props: Properties): JSX.Element {
  return (
    <main className="Main" id={props.title}>
      <img src={props.image} className="images" alt={props.imagedesc} />
      <h3>{props.title}</h3>
      <h4>
        {props.location.city},{props.location.country} (
        <a href={props.link}>map link</a>)
      </h4>
      <p>{props.description}</p>
    </main>
  );
}
export default Main;
