import React from "react";

function AnimatedCard({ imageSrc, title, description }) {
  return (
    <div className="relative overflow-hidden group border border-gray-300 rounded-lg shadow-lg mx-5">
      <div className="w-full h-60 bg-cover bg-center transition-transform transform group-hover:scale-105">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="bg-white p-4 text-center absolute bottom-0 left-0 right-0 transform translate-y-0 transition-transform group-hover:translate-y-2">
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

function App() {
  const cardData = [
    {
      imageSrc: "image1.jpg",
      title: "Card 1",
      description: "Description for Card 1",
    },
    {
      imageSrc: "image2.jpg",
      title: "Card 2",
      description: "Description for Card 2",
    },
    {
      imageSrc: "image2.jpg",
      title: "Card 2",
      description: "Description for Card 2",
    },
    {
      imageSrc: "image2.jpg",
      title: "Card 2",
      description: "Description for Card 2",
    },
    {
      imageSrc: "image2.jpg",
      title: "Card 2",
      description: "Description for Card 2",
    },
    {
      imageSrc: "image2.jpg",
      title: "Card 2",
      description: "Description for Card 2",
    },
    // Add more card data as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <AnimatedCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;
