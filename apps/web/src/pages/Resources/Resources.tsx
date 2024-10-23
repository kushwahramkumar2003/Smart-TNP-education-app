

// Define ResourcesList outside the component
const ResourcesList = [
  {
    id: "1",
    tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
    title: "how to add numbers in c++ using add method",
    category: "book",
    duration: "84 pages",
    size: "32 mb"
  },
  {
    id: "2",
    tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
    title: "how to add numbers in c++ using add method",
    category: "book",
    duration: "84 pages",
    size: "32 mb"
  },
  {
    id: "3",
    tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
    title: "how to add numbers in c++ using add method",
    category: "book",
    duration: "84 pages",
    size: "32 mb"
  },
  {
    id: "4",
    tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
    title: "how to add numbers in c++ using add method",
    category: "book",
    duration: "84 pages",
    size: "32 mb"
  },
  {
    id: "5",
    tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
    title: "how to add numbers in c++ using add method",
    category: "book",
    duration: "84 pages",
    size: "32 mb"
  },
  {
    id: "6",
    tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
    title: "how to add numbers in c++ using add method",
    category: "book",
    duration: "84 pages",
    size: "32 mb"
  },
  {
    id: "7",
    tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
    title: "how to add numbers in c++ using add method",
    category: "book",
    duration: "84 pages",
    size: "32 mb"
  },
  {
    id: "8",
    tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
    title: "how to add numbers in c++ using add method",
    category: "book",
    duration: "84 pages",
    size: "32 mb"
  },
  {
    id: "9",
    tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
    title: "how to add numbers in c++ using add method",
    category: "book",
    duration: "84 pages",
    size: "32 mb"
  },
  {
    id: "10",
    tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
    title: "how to add numbers in c++ using add method",
    category: "book",
    duration: "84 pages",
    size: "32 mb"
  }
];

export default function Resources() {
  return (
    <div>
      <h1 className='py-3 font-semibold text-2xl'>Resources</h1>
      <div className='py-3 flex flex-row gap-6'>
        <p className='hover:bg-blue-200 hover:text-blue-500 p-3 rounded-xl cursor-pointer'>All</p>
        <p className='hover:bg-blue-200 hover:text-blue-500 p-3 rounded-xl cursor-pointer'>Videos</p>
        <p className='hover:bg-blue-200 hover:text-blue-500 p-3 rounded-xl cursor-pointer'>Books</p>
      </div>
      <div className='grid grid-cols-3  gap-6'>
        {/* Use curly braces for map and return statement */}
        {ResourcesList.map((resource) => (
          // Add key prop for each element in the map
          <div className='bg-white rounded-xl' key={resource.id}>
            <div className=''>
         <div className='flex flex-col'>
            <img className='rounded-t-xl' src={resource.tambnail} alt={resource.title} />
            <p className='px-3'>{resource.title} </p>
            </div>
            <div className='p-4 flex flex-row gap-3'>
            <p className='bg-blue-200 px-2 hover:text-blue-500 rounded-xl cursor-pointer'>{resource.category}</p>
            <p>{resource.duration}</p>
            <p>{resource.size}</p>
            </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
