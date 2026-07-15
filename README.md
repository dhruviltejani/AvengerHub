# ⚡ AvengerHub

AvengerHub is a responsive superhero profile platform built using React and Tailwind CSS. The application dynamically displays Avengers and Marvel character profiles including their superpowers, hobbies, roles, hourly rates, and descriptions using reusable React components.

This project was created to practice core React concepts such as components, props, array mapping, nested mapping, and dynamic UI rendering.

## 🌐 Live Demo

🚀 **Check out the live project:**

[View AvengerHub Live](https://avenger-7z2ghafqn-dhruviltejanis-projects.vercel.app/)

## 🚀 Features

- 🦸 Dynamic Avenger profile cards
- ⚡ Display character superpowers
- 🎯 Dynamic hobbies and skills
- 💰 Hourly rate display
- 🦸 Hero and villain role identification
- 🖼️ Character profile images
- ♻️ Reusable React components
- 📦 Dynamic rendering using JavaScript arrays
- 🎨 Modern UI using Tailwind CSS
- 📱 Responsive card layout

## 🛠️ Tech Stack

- React
- JavaScript
- Tailwind CSS
- Vite
- Lucide React

## 📂 Project Structure

```text
AvengerHub/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Card.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/AvengerHub.git
```

Navigate to the project directory:

```bash
cd AvengerHub
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 💡 React Concepts Used

This project demonstrates several important React concepts:

- Functional Components
- Props
- Reusable Components
- JavaScript Arrays and Objects
- Array `map()` Method
- Nested `map()`
- Dynamic Data Rendering
- Component-Based UI Development

## 🧠 How It Works

Avenger data is stored inside a JavaScript array of objects.

Each object contains character information:

```js
{
  name: "Iron Man",
  superpower: "Advanced Technology and Genius Intelligence",
  type: "Hero",
  hobbies: ["Inventing", "Driving Cars", "Partying"],
  description: "Genius billionaire inventor protects humanity using advanced technology.",
  perHourRate: 5000,
  photo: "character-image-url"
}
```

The application uses the JavaScript `map()` method to dynamically render a reusable `Card` component for every character.

```jsx
{avengers.map(function (obj, idx) {
  return (
    <Card
      key={idx}
      name={obj.name}
      photo={obj.photo}
      superpower={obj.superpower}
      type={obj.type}
      hobbies={obj.hobbies}
      description={obj.description}
      perHourRate={obj.perHourRate}
    />
  );
})}
```

The hobbies array is also dynamically rendered using a nested `map()` method.

## 🎯 Purpose of the Project

The main purpose of AvengerHub is to strengthen understanding of React fundamentals and learn how dynamic data can be rendered using reusable components and props.

## 🔮 Future Improvements

- Add character search functionality
- Add Hero and Villain filters
- Add individual character profile pages
- Add sorting based on hourly rates
- Add character details modal
- Add dark mode
- Add animations and transitions

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

Feel free to fork the repository and submit a pull request.

## ⭐ Support

If you like this project, consider giving the repository a star ⭐.
