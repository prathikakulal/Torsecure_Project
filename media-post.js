const cardData = [
  {
    img: "assets/img/portfolio/forbes.jpg",
    src: "Forbes",
    desc: "Vivek Raj Redefines Agriculture with Hydroponic Saffron Farming"
  },
  {
    img: "assets/img/portfolio/2.jpg",
    src: "The Indian Express",
    desc: "Panama to develop Coal, Iron Ore Blocks in Zimbabwe"
  },
  {
    img: "assets/img/portfolio/3.jpg",
    src: "Udayavani",
    desc: "Panama becomes Mangalore's Pride"
  },
  {
    img: "assets/img/portfolio/4.jpg",
    src: "The Indian Express",
    desc: "City's Vivek Raj to attend World Economic Summit in New Delhi"
  },
  {
    img: "assets/img/portfolio/5.jpg",
    src: "The Times Of India",
    desc: "City man to co-host economic summit"
  },
  {
    img: "assets/img/portfolio/6.jpg",
    src: "Udayavani",
    desc: "Panama Corporation gains respect in presence of guests"
  },
  {
    img: "assets/img/portfolio/7.jpg",
    src: "The Indian Express",
    desc: "Panama Group heads to World Economic Forum"
  },
  {
    img: "assets/img/portfolio/8.jpg",
    src: "Sakshi",
    desc: "Grown by Graft - Newston, Bangalore"
  },
  {
    img: "assets/img/portfolio/9.jpg",
    src: "Praja Vani",
    desc: "Diligence: Efforts of Vivek Raj and his success"
  },
  {
    img: "assets/img/portfolio/10.jpg",
    src: "The Times Of India",
    desc: "City's CEO heads for WEF in China"
  },
  {
    img: "assets/img/portfolio/11.jpg",
    src: "Jayakirana",
    desc: "Let's Distribute the Kits to the Need"
  },
  {
    img: "assets/img/portfolio/12.jpg",
    src: "Jayakirana",
    desc: "Organized Struggle against MRPL Necessary"
  },
  {
    img: "assets/img/portfolio/13.jpg",
    src: "Kannada Prabha",
    desc: "Purchase of farmers' vegetables, fruits from Panama Company"
  },
  {
    img: "assets/img/portfolio/14.jpg",
    src: "Deccan Herald",
    desc: "Firm to buy vegetables from farmers in distress"
  },
  {
    img: "assets/img/portfolio/15.jpg",
    src: "Vijaya Karnataka",
    desc: "Vivek Raj Pujari is the Chairman of Panama Institute"
  },
  {
    img: "assets/img/portfolio/16.jpg",
    src: "Vijaya Karnataka",
    desc: "Covid Kit distribution to 4350 families"
  },
  {
    img: "assets/img/portfolio/17.jpg",
    src: "Jayakirana",
    desc: "Farmers' Dear Friend: Vivek Raj Poojary"
  },
  {
    img: "assets/img/portfolio/18.jpg",
    src: "Deccan Herald",
    desc: "Experts give out success mantra for UPSC aspirants"
  },
  {
    img: "assets/img/portfolio/19.jpg",
    src: "Deccan Herald",
    desc: "Discipline, Determination and Dedication - Key to clear Exams"
  },
  {
    img: "assets/img/portfolio/20.jpg",
    src: "Prajavani",
    desc: "No thirst for power, money, popularity"
  },
  {
    img: "assets/img/portfolio/21.jpg",
    src: "Deccan Herald",
    desc: "Congress Covid-19 Helpline to distribute 3000 kits"
  },
  {
    img: "assets/img/portfolio/22.jpg",
    src: "Insights IAS Event",
    desc: "Insights IAS - Simplifying IAS Exam Preparation"
  },
];

function createCard(card) {
    return `
      <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 card-spacing">
        <div
          class="card justify-content-center card-fluid border-0 shadow max-w-md mx-auto"
          style="width: 18rem; height: 27rem"
        >
          <div class="card-header bg-white">
            <img
              src="${card.img}"
              style="height: 310px"
              class="card-img-top img-fluid"
              alt="..."
            />
            <br /><br />
            <h6
              class="oldprice counter"
              style="
                font-family: 'Lucida Sans', 'Lucida Sans Regular',
                  'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
                  sans-serif;
                color: gray;
                font-size: 12px;
              "
            >
              ${card.src}
            </h6>
            <h6>
              <strong
                ><a
                  href="${card.img}"
                  class="stretched-link"
                  style="color: black"
                  >
                  ${card.desc}
                  </a
                ></strong
              >
            </h6>
          </div>
        </div>
      </div>
    `;
}
  

function renderCards() {
  const portfolioCards = document.getElementById("portfolio-cards");
  cardData.forEach((card) => {
    portfolioCards.innerHTML += createCard(card);
  });
}

document.addEventListener("DOMContentLoaded", renderCards);
