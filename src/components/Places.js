import one from "../assets/images/1.jpg"
import two from "../assets/images/2.jpg"
import three from "../assets/images/3.jpg"
import four from "../assets/images/4.jpg"
import five from "../assets/images/5.jpg"
import six from "../assets/images/6.jpg"
import seven from "../assets/images/9.jpg"
import eight from "../assets/images/7.jpg"

function Places(){
    return(
        <div className="places">
        <div className="box">
          <img src={one} alt="Amazon RainForest" />
          <h3>Amazon RainForest</h3>
          <p>The Amazon Rainforest, often called the "lungs of the Earth," is the largest tropical rainforest, covering over 5.5 million square kilometers across South America. 
            It is home to unparalleled biodiversity, housing millions of species of plants, animals, and indigenous tribes.</p>
        </div>
        <div class="box">
          <img src={three} alt="Sundarbans" />
          <h3>Sundarbans</h3>
          <p>The Sundarbans is the largest mangrove forest in the world, located in the delta of the Ganges, Brahmaputra, and Meghna rivers in India and Bangladesh. 
            It is a UNESCO World Heritage site, known for its rich biodiversity, including the endangered Bengal tiger.</p>
        </div>
        <div class="box">
          <img src={two} alt="Alps" />
          <h3>Alps</h3>
          <p>The Alps are a major mountain range in Europe, stretching across eight countries, including France, Switzerland, and Italy. 
            Known for their breathtaking landscapes, they are a popular destination for skiing, hiking, and mountaineering.</p>
        </div>
        <div class="box">
          <img src={four} alt="Northern Lights" />
          <h3>Northern Lights</h3>
          <p>The Northern Lights, or Aurora Borealis, are vibrant displays of natural light seen in the polar regions, caused by the interaction of solar winds with Earth's magnetic field. 
            These colorful phenomena create stunning green, purple, and red light patterns in the night sky.</p>
        </div>
        <div class="box">
          <img src={five} alt="Himalayas" />
          <h3>Himalayas</h3>
          <p>The Himalayas are a vast mountain range in Asia, home to the planet's highest peaks, including Mount Everest. 
            Stretching across five countries, they are a vital source of rivers and a hub for biodiversity.</p>
        </div>
        <div class="box">
          <img src={six} alt="Sahara" />
          <h3>Sahara</h3>
          <p>The Sahara Desert is the largest hot desert in the world, spanning over 9 million square kilometers across North Africa.
            Known for its vast sand dunes, extreme temperatures, and harsh conditions, it is home to unique wildlife and ancient civilizations.</p>
        </div>
        <div class="box">
          <img src={seven} alt="Niagara" />
          <h3>Niagara Falls</h3>
          <p>Niagara Falls is a massive waterfall located on the border between Canada and the United States, renowned for its breathtaking beauty and immense power. 
            It consists of three distinct waterfalls: the Horseshoe Falls, the American Falls, and the Bridal Veil Falls.</p>
        </div>
        <div class="box">
          <img src={eight} alt="Norway" />
          <h3>Norway</h3>
          <p>Norway is a Scandinavian country known for its stunning natural landscapes, including majestic fjords, mountains, and the Northern Lights. 
            It is renowned for its high quality of life, rich cultural heritage, and commitment to sustainability.</p>
        </div>
      </div>
    )
}

export default Places