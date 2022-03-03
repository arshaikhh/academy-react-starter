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

function Nav(props: Properties): JSX.Element {
    return (
       
       <nav className="Nav">
            <ul>
                <li>🇵🇰</li>
                <li> 
                <a href={"#"+props.title}>{props.title}</a> 
                </li>
                
            </ul>
        </nav>
    )
}

export default Nav