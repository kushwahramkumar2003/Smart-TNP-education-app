

// Define coursesList outside the component
const courseList = [
    {
      id: "1",
      tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
      title: "how to add numbers in c++ using add method",
      status: "Personal",
      
      lession: "8"
    },
    {
      id: "2",
      tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
      title: "how to add numbers in c++ using add method",
      status: "Personal",
      lession: "8"
    },
    {
      id: "3",
      tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
      title: "how to add numbers in c++ using add method",
      status: "Personal",
      lession: "8"
    },
    {
      id: "4",
      tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
      title: "how to add numbers in c++ using add method",
      status: "Personal",
      lession: "8"
    },
    {
      id: "5",
      tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
      title: "how to add numbers in c++ using add method",
      status: "Finance",
      
      lession: "8"
    },
    {
      id: "6",
      tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
      title: "how to add numbers in c++ using add method",
      status: "Profesional",
      
      lession: "8"
    },
    {
      id: "7",
      tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
      title: "how to add numbers in c++ using add method",
      status: "Profesional",
      
      lession: "8"
    },
    {
      id: "8",
      tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
      title: "how to add numbers in c++ using add method",
      status: "Personal",
      
      lession: "8"
    },
    {
      id: "9",
      tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
      title: "how to add numbers in c++ using add method",
      status: "Finance",
      
      lession: "8"
    },
    {
      id: "10",
      tambnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jOI8gCbADkP1mtC9FeKHurdmxa7hoD4J3z_Lm79TjQ&s",
      title: "how to add numbers in c++ using add method",
      status: "Finance",
      
      lession: "8"
    }
  ];
  
  export default function Course() {
    const bgColor = status === 'personal' ? 'bg-red-500' : 'bg-blue-500';
    return (
      <div>
        <h1 className='py-3 font-semibold text-2xl'>courses</h1>
        <div className='py-3 flex flex-row gap-6'>
          <p className='hover:bg-blue-200 hover:text-blue-500 p-3 rounded-xl cursor-pointer'>All</p>
          <p className='hover:bg-blue-200 hover:text-blue-500 p-3 rounded-xl cursor-pointer'>Personal</p>
          <p className='hover:bg-blue-200 hover:text-blue-500 p-3 rounded-xl cursor-pointer'>Fianance</p>
          <p className='hover:bg-blue-200 hover:text-blue-500 p-3 rounded-xl cursor-pointer'>Live Events</p>
        </div>
        <div className='grid grid-cols-3  gap-6 p-5'>
          {/* Use curly braces for map and return statement */}
          {courseList.map((course) => (
            // Add key prop for each element in the map
            <div className='bg-white rounded-xl p' key={course.id}>
              <div className=''>
           <div className='flex flex-col'>
              <img className='rounded-t-xl' src={course.tambnail} alt={course.title} />
              <p className='px-3'>{course.title}</p>
              </div>
              <div className='py-4 flex flex-row justify-around gap-28'>
              {/* <p className='bg-blue-200 px-2 hover:text-blue-500 rounded-xl cursor-pointer'>{course.status==='Finance'}</p> */}
              <p className={`px-2 rounded-md ${course.status === 'Personal' ? 'bg-red-500 text-white' : 'bg-blue-500 text-black'} hover:bg-opacity-75 transition-colors duration-300`}> {course.status}</p>
              {/* <p>{course.duration}</p> */}
              <p>{course.lession} Lession </p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  