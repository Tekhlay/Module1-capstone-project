const menubar = document.querySelector('.nav-mobile-popup');
const closebtn = document.querySelector('.close-popup');
const menuLink = document.querySelector('.menu-link');
const FeatureSpeaker = document.querySelector('.feature-container');
const btnspeak = document.querySelector('.speakers-btn');

menuLink.addEventListener('click', () => {
  menubar.style.display = 'flex';
});

closebtn.addEventListener('click', () => {
  menubar.style.display = 'none';
});

const adddata = [
  {
    id: 0,
    img: 'images/speaker1.png',
    name: 'Yochai Benkler',
    status: 'Berkman Professor of Enterpreanurial Legal Studies of Harvard Law School',
    desc: 'Benlder studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    id: 1,
    img: 'images/speaker2.png',
    name: 'Kilnam Chon',
    status: '',
    desc: 'Kinam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital com mons. In 2012, he was inducted into the inaugural class of the Internet Society\'s (SOC) Internet Hall of Fame.',
  },
  {
    id: 2,
    img: 'images/speaker3.png',
    name: 'SohYeong Noh',
    status: 'Director of Art Centre Nabl and a board member of CC Korea',
    desc: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    id: 3,
    img: 'images/speaker4.png',
    name: 'Julia Leda',
    status: 'President of Young Pirates of Europe',
    desc: 'European ingetration, political democracy and participa tion of youth through online as her major condern, Reda\'s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    id: 4,
    img: 'images/speaker5.png',
    name: 'JLila Tretikov',
    status: 'Executive Director of the Wikimedia Foundation',
    desc: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia Wikipedia is freely available in 290 languag es and used by nearly half a billion people around the world every month',
  },
  {
    id: 5,
    img: 'images/speaker6.png',
    name: 'JRyan Merkley',
    status: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    desc: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source move ment',
  },
];
const speakerData = (x) => `
<img src=${adddata[x].img} alt=${adddata[x].name}>
<div class="speaker-detail">
  <h2 class="speaker-name">${adddata[x].name}</h2>
  <p class="speaker-status">${adddata[x].status}</p>
  <p class="speaker-profile">${adddata[x].desc}</p>
</div>
`;

const displaytwo = () => {
  for (let i = 0; i < 2; i += 1) {
    const speaker = document.createElement('article');
    speaker.classList.add('feature-card');
    speaker.innerHTML = speakerData(i);
    FeatureSpeaker.appendChild(speaker);
  }
};
const displayAll = () => {
  FeatureSpeaker.innerHTML = ' ';
  for (let i = 0; i < Object.keys(adddata).length; i += 1) {
    const speaker = document.createElement('div');
    speaker.classList.add('feature-card');
    speaker.innerHTML = speakerData(i);
    FeatureSpeaker.appendChild(speaker);
  }
};

btnspeak.addEventListener('click', () => {
  const regex = /MORE/;
  const flag = regex.test(btnspeak.textContent);
  if (flag) {
    btnspeak.innerHTML = 'LESS <i class="fas fa-chevron-up"></i>';
    displayAll();
  } else {
    btnspeak.innerHTML = 'MORE <i class="fas fa-chevron-down"></i>';
    displaytwo();
  }
});

function myscreen(x) {
  if (x.matches) {
    displaytwo();
  } else {
    displayAll();
  }
}
const x = window.matchMedia('(max-width: 768px)');
myscreen(x);
x.onchange(myscreen);