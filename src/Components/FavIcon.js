import { useState } from "react";

export default function StarIcon ()  {
    //color = '#104C4F'
    const [clicked, setClicked] = useState(false);
    return (
    <svg id="favIcon" width="25px" height="21px" viewBox="0 0 25 21" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={() => setClicked(!clicked)} style={{marginLeft:'5px'}}>
        <title>heart</title>
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Card/Asset/Superpower" transform="translate(-89, -172)" fill={clicked ? '#D469A2' :'#104C4F'} fill-rule="nonzero">
                <path d="M102.559326,192.545301 L111.629616,183.179707 C114.268709,180.456295 114.113986,175.946921 111.170252,173.4344 C108.601517,171.245379 104.781214,171.639101 102.423416,174.071926 L101.499971,175.023477 L100.576527,174.071926 C98.2233984,171.639101 94.3984258,171.245379 91.8296911,173.4344 C88.8859573,175.946921 88.7312335,180.456295 91.3656114,183.179707 L100.435902,192.545301 C101.021838,193.150005 101.973389,193.150005 102.559326,192.545301 Z" id="heart"></path>
            </g>
        </g>
    </svg>
    );
  };