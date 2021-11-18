const reviews = [
  {
    id: 1,
    name: 'Alexander Welton',
    image:
      require("../Student_Portraits/Alexander Welton.jpg"),
    text: "Alexander designed the logos for the North East Campus Coding Program Check them out",
    recent: "https://potato-weather-2.netlify.app/",
    github: "SchoolPotato",
  },
  {
    id: 2,
    name: 'Andrew Makris',
    image: require("../Student_Portraits/Andrew Makris.jpg"),
    text: 'Quiet talented and hardworking programmer please check out his work',
    recent: "https://angry-jones-481c91.netlify.app/",
    github: "Amakris12",
  },
  {
    id: 3,
    name: 'Barik Boley',
    image: require("../Student_Portraits/Barik Boley.jpg"),
    text: 'Fantastic Programmer and future Business Tycoon I look forward to see his accomplishments P.S. dont forget MR. B gets 10%',
    recent: "https://reviews-react-boley.netlify.app/",
    github: "xBarikadex",
  },
  {
    id: 4,
    name: 'Ethan Roldan',
    image: require("../Student_Portraits/Ethan Roldan.jpg"),
    text: 'FBLA President, hardworker and Great programmer please check out what he has accomplished',
    recent: "https://roldanreactminesweeper.netlify.app/",
    github: "TheCapn-MEC",
  },
  {
    id: 5,
    name: 'Hanad Shippy',
    image: require("../Student_Portraits/Hanad Shippy.jpg"),
    text: 'A smart and adaptable student and underestimates just how smart he is',
    recent: "https://xenodochial-davinci-cedcf4.netlify.app/",
    github: "Hshipp267",
  },
  {
    id: 6,
    name: 'JD Blackman',
    image: require("../Student_Portraits/JDBlackman.jpg"),
    text: 'A Great student. Makes the great websites on the planet, including this one!',
    recent: "https://jblack262.github.io/Vue-portfolio/",
    github: "jblack262",

  },
  {
    id: 7,
    name: 'Luca Graves',
    image: require("../Student_Portraits/Luca Graves.jpg"),
    text: 'While he may complain about prettier in JS he is a great programmer and designer',
    recent: "https://modest-nobel-6c9103.netlify.app/",
    github: "lgrave264",
  },
  {
    id: 8,
    name: 'Maverick Oleson',
    image: require("../Student_Portraits/Maverick Oleson.jpg"),
    text: 'FBLA Historian and highly successful web developer please check out his Audi Synthesizer',
    recent: "https://upbeat-agnesi-da2285.netlify.app/",
    github: "Moleso587587",
  },
  {
    id: 9,
    name: 'Lily Zalit',
    image: require("../Student_Portraits/Lily Zalit.jpg"),
    text: 'Our New Vice President of Fundraising is Already killing it with our new Mrs. Fields cookie Fundraiser',
    recent: "https://lzalit238-react-accordian-project.netlify.app/",
    github: "lzalit238",
  },
  {
    id: 10,
    name: 'Dylan Drebes',
    image: require("../Student_Portraits/Dylan Drebes.jpg"),
    text: 'A hardworking and great programmer',
    recent: "https://mattholloway04.github.io/groupProject/",
    github: "ddrebe473",
  },
  {
    id: 11,
    name: 'Emanuel Jaghrati',
    image: require("../Student_Portraits/Emanuel  Jaghrati.jpg"),
    text: 'E-Man is a great student and great webdesigner',
    recent: "https://keven82105.github.io/partner-project/",
    github: "demonlord6661",
  },
  {
    id: 12,
    name: 'Ethan Langford',
    image: require("../Student_Portraits/Ethan Langford.jpg"),
    text: 'A smart and adaptable student and underestimates just how smart he is',
    recent: "https://victormal001.github.io/sci-floors/",
    github: "captren501",
  },
  {
    id: 13,
    name: 'Justin Melore',
    image: require("../Student_Portraits/Justin Melore.jpg"),
    text: 'VP of Social Media and A highly successful and talented programmer',
    recent: "https://justinmelore.github.io/Sun-Company/",
    github: "JustinMelore",
  },
  {
    id: 14,
    name: 'Logan Rubenstein',
    image: require("../Student_Portraits/Logan Rubenstein.jpg"),
    text: 'Logan is a great programmer that is extremely successful in the program, with a slight Chungus Addiction',
    recent: "https://b1gchungus.github.io/CSS-Group-Project/",
    github: "B1gChungus",
  },
  {
    id: 15,
    name: 'Louis Win',
    image: require("../Student_Portraits/Louis Win.jpg"),
    text: 'FBLA Treasure and programmer Louis is doing great in the program despite getting of task every now and then ',
    recent: "https://b1gchungus.github.io/CSS-Group-Project/gallery.html",
    github: "lwin496",
  },
  {
    id: 16,
    name: 'Matthew Holloway',
    image: require("../Student_Portraits/Matthew Holloway.jpg"),
    text: 'Quiet but talented programmer making some ',
    recent: "https://mattholloway04.github.io/profilePage/",
    github: "mattholloway04",
  },
  {
    id: 17,
    name: 'Roger Grange',
    image: require("../Student_Portraits/Roger Grange.jpg"),
    text: 'Roger Roger... is a doing great making retro games for FBLA and FUN!!!',
    recent: "https://rogerrandomdev.github.io/Portfolio/",
    github: "RogerRandomDev",
  },
  {
    id: 18,
    name: 'TJ Anderson',
    image: require("../Student_Portraits/Thomas Anderson.jpg"),
    text: 'TJ has learned a lot, watching his growth has been a joy to watch check out what he has been up to.',
    recent: "https://justinmelore.github.io/Sun-Company/index.html",
    github: "Tj5150",
  },
  {
    id: 19,
    name: 'Victor Malhorta',
    image: require("../Student_Portraits/Victor Malhorta.jpg"),
    text: 'Victor is a talented programmer and will be doing even greater things soon enough',
    recent: "https://victormal001.github.io/sci-floors/",
    github: "VictorMal001",
  },
  {
    id: 20,
    name: 'Gianna Marotta',
    image: require("../Student_Portraits/Gianna Marotta.jpg"),
    text: 'While it took a while to catch up since the transfer Gianna has done a fantastic job in coding check out what she has been working on.',
    recent: "https://giannamar4.github.io/portfolio/",
    github: "giannamar4",
  },
];

const blogPosts = [
  {
    id: 1,
    month: 'August',
    year: "2021",
    img: require("../Student_Portraits/Coding_blue.png"),
    title: "Welcome West-Mec Coding",
    content: "Hello parents and students website and blog will be used to keep you and the students connected and showcase what they are capable of. Each Month I will be updating student quotes and information to keep everyone in the loop",
  },
  {
    id: 2,
    month: 'September',
    year: "2021",
    title: "Coding Students at work",
    content: "Year 2 students are taking their time with their summer amnesia but JS review is going well. Year 1 students are learning webdesign and JS basics and doing GREAT!!!",
  },
  {
    id: 3,
    month: 'October',
    year: "2021",
    img: require("../Student_Portraits/Alexander Welton.jpg"),
    title: "Welcome Tech-Tober",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolore unde eligendi recusandae, accusamus molestiae! Doloremque neque debitis error unde!",
  },
  {
    id: 4,
    month: 'November',
    year: "2021",
    title: "Still to Come...",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolore unde eligendi recusandae, accusamus molestiae! Doloremque neque debitis error unde!",
  },
]

export {
  reviews,
  blogPosts
};
