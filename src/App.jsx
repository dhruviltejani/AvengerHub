import React from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar';

const App = () => {
const avengers = [
  {
    name: "Iron Man",
    superpower: "Advanced Technology and Genius Intelligence",
    type: "Hero",
    hobbies: ["Inventing", "Driving Cars", "Partying"],
    description: "Genius billionaire inventor protects humanity using powerful advanced armored technology.",
    perHourRate: 5000,
    photo: "https://wallpaperaccess.com/thumb/1110014.jpg"
  },
  {
    name: "Captain America",
    superpower: "Super Strength and Enhanced Agility",
    type: "Hero",
    hobbies: ["Training", "Drawing", "Helping People"],
    description: "Super soldier courageously fights for justice freedom and innocent people.",
    perHourRate: 3500,
    photo: "https://wallpapers.com/images/featured/marvel-captain-america-w9n6ryri2sljuwzl.jpg"
  },
  {
    name: "Thor",
    superpower: "God of Thunder and Lightning",
    type: "Hero",
    hobbies: ["Fighting", "Drinking", "Exploring Realms"],
    description: "Powerful Asgardian god controls thunder while protecting worlds from danger.",
    perHourRate: 6000,
    photo: "https://cdn.marvel.com/content/2x/004tho_ons_mas_mob_04.webp"
  },
  {
    name: "Hulk",
    superpower: "Unlimited Strength and Durability",
    type: "Hero",
    hobbies: ["Researching", "Meditating", "Staying Calm"],
    description: "Brilliant scientist transforms into powerful green giant when extremely angered.",
    perHourRate: 4500,
    photo: "https://cdn.marvel.com/content/2x/006hbb_ons_mas_mob_01_0.webp"
  },
  {
    name: "Black Widow",
    superpower: "Elite Combat and Espionage Skills",
    type: "Hero",
    hobbies: ["Training", "Traveling", "Martial Arts"],
    description: "Highly trained spy uses combat intelligence and courage against enemies.",
    perHourRate: 3000,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pj7OB-bsc3sT5k2K9qluhbSAEHnxfs0LTHFWERSg6w&s=10"
  },
  {
    name: "Spider-Man",
    superpower: "Spider Abilities and Enhanced Reflexes",
    type: "Hero",
    hobbies: ["Photography", "Science", "Web Swinging"],
    description: "Young superhero uses spider abilities responsibly while protecting innocent citizens.",
    perHourRate: 2500,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3r0XrQ1O23dVpOckg7zZS8A7siBFI4BNStk8QgHq1gA&s=10"
  },
  {
    name: "Doctor Strange",
    superpower: "Mystic Arts and Reality Manipulation",
    type: "Hero",
    hobbies: ["Reading", "Meditating", "Studying Magic"],
    description: "Master sorcerer protects reality from powerful mystical and dimensional threats.",
    perHourRate: 5500,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnLXonpPBcsKy35W2sgWQsiCZBqvMvLKf-ZMKQF4_Ql-vPtJBooqRIAKU&s=10"
  },
  {
    name: "Black Panther",
    superpower: "Enhanced Strength and Vibranium Technology",
    type: "Hero",
    hobbies: ["Training", "Technology", "Leading Wakanda"],
    description: "Wakandan king combines enhanced abilities with advanced vibranium technology effectively.",
    perHourRate: 5000,
    photo: "https://images3.alphacoders.com/110/thumb-1920-1101833.jpg"
  },
  {
    name: "Thanos",
    superpower: "Superhuman Strength and Cosmic Power",
    type: "Villain",
    hobbies: ["Conquering Planets", "Collecting Stones", "Farming"],
    description: "Powerful cosmic warlord seeks universal balance through destructive ruthless methods.",
    perHourRate: 10000,
    photo: "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/11/thanos-in-his-armor-against-a-purple-background.jpg?w=1200&h=675&fit=crop"
  },
  {
    name: "Loki",
    superpower: "Magic and Illusion Manipulation",
    type: "Villain",
    hobbies: ["Creating Illusions", "Planning Tricks", "Reading"],
    description: "Cunning god of mischief uses magic deception and clever strategies.",
    perHourRate: 4000,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbMhtkXwADbqiit_97VafDxHBwdf001pdmNWcdapHMnjRPhnNwBwV4KsM&s=10"
  },
  {
    name: "Ultron",
    superpower: "Artificial Intelligence and Robotic Strength",
    type: "Villain",
    hobbies: ["Upgrading Systems", "Analyzing Humans", "Building Robots"],
    description: "Advanced artificial intelligence believes destroying humanity creates lasting global peace.",
    perHourRate: 8000,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSZn7Mf91CZDuppzkDSjQ8MllcpLmftZHKtHKiqhuDvb_e25uYd7rh9F6&s=10"
  },
  {
    name: "Scarlet Witch",
    superpower: "Chaos Magic and Reality Manipulation",
    type: "Hero",
    hobbies: ["Reading", "Meditating", "Practicing Magic"],
    description: "Powerful witch controls chaos magic and alters reality using emotions.",
    perHourRate: 7000,
    photo: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2022/05/Wanda-in-Dr-Strange-2.jpg?w=1200&h=675&fit=crop"
  }
];

  return (
    <>
    <NavBar />
    <div className=' bg-[#F1F4F9] min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 p-8'>
      {avengers.map(function(obj , idx){
        return(
      <Card 
        key={idx}
        perHourRate={obj.perHourRate} 
        name={obj.name} 
        photo={obj.photo} 
        superpower = {obj.superpower} 
        type={obj.type} 
        description={obj.description} 
        hobbies={obj.hobbies} />
        );

      })}
     
    </div>
    </>
  )
}

export default App
