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
    <main className="Main">
      <img src={props.image} className="images" alt={props.imagedesc} />
      <h3 className="Format">{props.title}</h3>
      <h4 className="Format">
        {props.location.city},{props.location.country} (
        <a href={props.link}>map link</a>)
      </h4>
      <p className="Format">{props.description}</p>
    </main>
  );
}
export default Main;
