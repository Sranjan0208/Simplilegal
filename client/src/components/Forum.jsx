import React from "react";

function Card({ imageSrc, title, bulletPoints, email }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden mb-6">
      <div className="flex">
        <div className="w-1/3 p-4">
          <img src={imageSrc} alt={title} className="w-full h-auto" />
        </div>
        <div className="w-2/3 p-4">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <ul className="list-disc pl-5">
            {bulletPoints.map((point, index) => (
              <li key={index} className="mb-2">
                {point}
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${email}`}
            className="inline-block mt-4 px-6 py-2 bg-[#001845] text-white rounded-full hover:[bg-blue-600] transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

function Forum() {
  const cardData = [
    {
      imageSrc: "image1.jpg",
      title: "Harvey Specter",
      bulletPoints: ["Best CLoser in The City", "Point 2", "Point 3"],
      email: "example1@example.com",
    },
    {
      imageSrc: "image2.jpg",
      title: "Jessica Pearson",
      bulletPoints: ["Lorem Ipsum dolor amet", "Point 2", "Point 3"],
      email: "example2@example.com",
    },
    {
        imageSrc: "image2.jpg",
        title: "Mike Ross",
        bulletPoints: ["Point 1", "Point 2", "Point 3"],
        email: "example2@example.com",
    },
    {
        imageSrc: "image2.jpg",
        title: "Louis Litt",
        bulletPoints: ["Point 1", "Point 2", "Point 3"],
        email: "example2@example.com",
    },
    {
        imageSrc: "image2.jpg",
        title: "Alex Williams",
        bulletPoints: ["Point 1", "Point 2", "Point 3"],
        email: "example2@example.com",
    }, 
    {
        imageSrc: "image2.jpg",
        title: "Robert Zane",
        bulletPoints: ["Point 1", "Point 2", "Point 3"],
        email: "example2@example.com",
    }, 
    // Add more card data as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Forum;
