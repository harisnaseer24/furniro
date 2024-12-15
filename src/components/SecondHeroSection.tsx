import Image from "next/image"

export default function SecondHero(){

    return (
      <>
      {/* Title Section */}
      <div className="subText text-center my-3">
        <h3 className="text-2xl font-semibold mb-2">Browse The Range</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    
      {/* Grid Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-4">
        {/* Dining Section */}
        <div className="col-span-1">
          <Image
            src="/images/home/dinning.png"
            alt="Dining room"
            width={381}
            height={480}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h6 className="text-center text-lg font-medium mt-3">Dining</h6>
        </div>
    
        {/* Living Section */}
        <div className="col-span-1">
          <Image
            src="/images/home/living.png"
            alt="Living Room"
            width={381}
            height={480}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h6 className="text-center text-lg font-medium mt-3">Living</h6>
        </div>
    
        {/* Bedroom Section */}
        <div className="col-span-1">
          <Image
            src="/images/home/bedroom.png"
            alt="Bedroom"
            width={381}
            height={480}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h6 className="text-center text-lg font-medium mt-3">Bedroom</h6>
        </div>
      </div>
    </>
    
    )
}