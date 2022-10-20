const speaker = document.getElementById('speakers');
const humburger = document.querySelector('.mobile-menu-bar');
const navmenu = document.querySelector('.desktop-menu');
const menu = document.querySelector('.desktop-menu');
const link = document.querySelectorAll('.nav-link')

const speakerObj = [
    { 
      name: 'Emily Brook',
      image: './img/speaker-1.jpg',
      role: 'Music Media Directior',
      text: 'Emily is a successful media director',
    },
    {
      name: 'Dante James',
      image: './img/speaker-2.jpg',
      role: 'Lead Drummer for Brooklyn Music',
      text: 'Dante is a big drum lover with alot of experience',
    },
    {
      name: 'Mason Bundy',
      image: './img/speaker7.jpg',
      role: 'Sound Engineer',
      text: 'Mason: I can make the sound come alive',
    },
    {
      name: 'Aliyah Brown',
      image: './img/speaker-4.jpg',
      role: 'YAMAHA Drums Marketer Expert',
      text: 'Aliyah can teach you more about purchasing drums',
    },
    {
      name: 'Henry Barnes',
      image: './img/speaker-8.jpg',
      role: 'Drum Music Directior',
      text: 'Let\'s talk about drum rudiments!',
    },
    {
      name: 'Mark Enze',
      image: './img/speaker-6.jpg',
      role: 'Lead Drummer:Maverrick City Music',
      text: 'We can all be successful in playing the drums',
    },
]

let presenter = '';
speakerObj.forEach((child) => {
  presenter = `
  <div class="speaker">
  <div class="speaker-photo"></div>
  <img class="speaker-image" src="${child.image}" alt="image of speaker">
  <div class="speaker-details">
      <p class="speaker-name">${child.name}</p>
      <p class="speaker-business">${child.role}</p>
      <p>${child.text}</p>
  </div>
  </div>
  `;
  if (speaker != null) {
    speaker.innerHTML += presenter;
  }
});

humburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  humburger.classList.toggle('active');
});

link.forEach((nav) => {
  nav.addEventListener('click', () => {
    navmenu.classList.toggle('active');
    humburger.classList.toggle('active');
  })
})