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

const prop1: Properties = {
  image: "/images/Badshahi-Mosque.jpg",
  imagedesc: "Badshahi Mosque",
  title: "Badshahi Mosque",
  location: { city: "Lahore", country: "Pakistan" },
  description:
    "The Badshahi Mosque is a Mughal-era congregational mosque in Lahore, capital of the Pakistani province of Punjab, Pakistan.",
  link: "https://www.google.com/maps/dir/24.8392762,67.0345444/badshahi+mosque+location+google+maps/@28.1586346,66.1963078,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x39191c9dbf0ddeb1:0x13bfcdb10fb490de!2m2!1d74.3107136!2d31.5879664",
};

const prop2: Properties = {
  image: "/images/dodarya.jpg",
  imagedesc: "Do Darya",
  title: "Do Darya",
  location: { city: "Karachi", country: "Pakistan" },
  description:
    "A calm, serene, peaceful restaurant on top of an ocean is a must visit place in Karachi, Pakistan.",
  link: "https://www.google.com/maps?q=do+darya+location&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiO8bG0zaf2AhVTPcAKHY4bBlIQ_AUoAXoECAIQAw",
};

const prop_arr = [prop1, prop2];

export default prop_arr;
