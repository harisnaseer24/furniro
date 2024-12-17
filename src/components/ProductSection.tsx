import Image from "next/image";

export default function ProductSection() {
  interface Card {
    name: string;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
   
 
    {
      name: "Coffee Table",
      price: "Rs 20,000",
      image: "/images/home/coffee.png",
      description: "Elegant coffee table for quality time.",
    },
    {
      name: "White Stool",
      price: "Rs 7,000",
      image: "/images/home/stool.png",
      description: "A luxurious stool comfort.",
    }, {
        name: "Grey Sofa",
        price: "Rs 20,000",
        image: "/images/home/greysofa.png",
        description: "Compact and stylish greysofa for your living room.",
      },
    {
      name: "Drawing room set",
      price: "Rs 100,000",
      image: "/images/home/drawing-room.png",
      description: "Drawing room set to light up your space in style.",
    },
    {
      name: "Modern Lamp",
      price: "Rs 10,000",
      image: "/images/home/lamp.png",
      description: "Minimalist lamp to light up your space in style.",
    },
    {
      name: "Sofa Set",
      price: "Rs 50,000",
      image: "/images/home/sofa-set.png",
      description: "Spacious wooden bookshelf for your favorite books.",
    },
    {
        name: "Living room set",
        price: "Rs 25,000",
        image: "/images/home/living-set.png",
        description: "Stylish and comfortable living room set with a modern design.",
      },
      {
        name: "Luxe Sofa",
        price: "Rs 150,000",
        image: "/images/home/sofa.png",
        description: "Premium leather sofa for your living room comfort.",
      },
  ];

  return (
    <>
     

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-12">
        {data.map((card, index) => (
          <div
            className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            key={index}
          >
            <Image
              src={card.image}
              alt={card.name}
              width={400}
              height={400}
              className="w-[100%] h-60"
            />
            <div className="card-body p-4">
              <h5 className="card-title text-lg font-semibold">{card.name}</h5>
              <p className="card-text text-sm text-gray-600 mt-2">{card.description}</p>
              <h5 className="card-title text-lg font-bold mt-4">{card.price}</h5>
            </div>
          </div>
        ))}
      </div>

  
    </>
  );
}
