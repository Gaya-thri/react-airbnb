import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";


export default function Home() {
  return (
    <div className='home'>  
      <Banner/>
      <div className="home__section">
         <Card
         src="https://www.joblo.com/assets/images/joblo/posters/2019/08/joker-poster-main2.jpg" 
         title="Joker"
         description="Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society."/>
         <Card 
         src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/09/09/866417-theskyispink-poster.jpg"
         title="Sky is Pink"
         description="It is based on the true story of Aisha Chaudhary, who suffered from severe combined immunodeficiency and pulmonary fibrosis, and tells the story of her parents Aditi and Niren as they navigate their illness."/>
         <Card
         src="https://static.toiimg.com/thumb/msid-71740889,width-1200,height-900,resizemode-4/.jpg"
         title="Jathiranthanalu"
         description="A hilarious misadventure where three buddies travel to Hyderabad in search for king-size lives only to stumble into some dangerous events."/>
      </div>
       <div className="home__section">
          <Card
         src="https://www.dccomics.com/sites/default/files/imce/2019/04-APR/JokerPoster1200_5ca3c435318d42.29270548.jpg" 
         title="Joker"
         description="Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society."/>
         <Card 
         src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/09/09/866417-theskyispink-poster.jpg"
         title="Sky is Pink"
         description="It is based on the true story of Aisha Chaudhary, who suffered from severe combined immunodeficiency and pulmonary fibrosis, and tells the story of her parents Aditi and Niren as they navigate their illness."/>
         <Card
         src="https://static.toiimg.com/thumb/msid-71740889,width-1200,height-900,resizemode-4/.jpg"
         title="Jathiranthanalu"
         description="A hilarious misadventure where three buddies travel to Hyderabad in search for king-size lives only to stumble into some dangerous events."/>
      </div>
    </div>
  )
}
