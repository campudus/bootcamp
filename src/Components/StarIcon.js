import { useState } from "react";

export default function StarIcon ()  {
    //color = '#104C4F'
    const [clicked, setClicked] = useState(false);
    return (
        <svg id="starIcon" width="27px" height="24px" viewBox="0 0 27 24" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={() => setClicked(!clicked)} style={{marginRight:'5px'}}>
        <title>star</title>
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Card/Asset/Superpower" transform="translate(-45, -169)" fill={clicked ? '#E3C252' :'#104C4F'} fill-rule="nonzero">
                <path d="M52.3734108,192.826547 L58.4999678,189.606233 L64.6265249,192.826547 C65.7140314,193.398429 67.0124292,192.4797 66.8014922,191.246854 L65.62962,184.426557 L70.5843048,179.598444 C71.4749277,178.731259 70.9827414,177.217209 69.7546102,177.039093 L62.9062073,176.040667 L59.8452863,169.834414 C59.2968409,168.728185 57.7077639,168.714132 57.1546494,169.834414 L54.0937283,176.040667 L47.2453255,177.039093 C46.0171942,177.217209 45.5250079,178.731259 46.4156308,179.598444 L51.3703156,184.426557 L50.1984434,191.246854 C49.9875064,192.4797 51.2859042,193.403099 52.3734108,192.826547 Z" id="star"></path>
            </g>
        </g>
        </svg>
    );
  };