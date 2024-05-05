import {useState} from 'react';
import { Button } from '@/components/ui/button';
import ResourcesList from './ResourceList'
import { IoAlertCircleOutline } from "react-icons/io5";
import { LuSquareEqual } from "react-icons/lu";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

export default function ResourceDetails() {
    const Categories = ['About', 'Discusion', 'Reviews'];
    const [selectedCategory, setSelectedCategory] = useState('About');
    return (
        <div>
            <div className='flex flex-row mt-8 gap-4'>
                <div className='bg-white rounded-lg p-4  mb-20  w-9/12'>
                    {/* title of resource */}
                    {/* define map */}
                    {/* Use curly braces for map and return statement */}
                    {/* {ResourcesList.map((resource) => (
          <div className='bg-white rounded-xl' key={resource.id}>
            <div className=''>
         <div className='flex flex-col'>
            <img className='rounded-t-xl' src={resource.tambnail} alt={resource.title} />
            <p className='px-3'>{resource.title}</p>
            </div>
            <div className='p-4 flex flex-row gap-3'>
            <p className='bg-blue-200 px-2 hover:text-blue-500 rounded-xl cursor-pointer'>{resource.category}</p>
            <p>{resource.duration}</p>
            <p>{resource.size}</p>
            </div>
            </div>
          </div>
        ))} */}
                    <h1 className='pt-1 font-semibold text-2xl text-slate-700'>Designing branch Identity</h1>
                    <div>
                        <div className=''>
                        <Button className='mt-5 py-1 text-md bg-blue-300 hover:bg-blue-700 hover:text-blue-300 text-blue-600'>Personal</Button>
                      
                        </div>
                        <div className='mt-6  rounded-md '>
                            <img className='rounded-xl w-full' src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <div className='flex justify-between'>
                      
                        <div className='flex flex-row py-4 gap-3'>
                            {Categories.map(category => (
                                <p
                                key={category}
                                className={`p-2 rounded-lg cursor-pointer ${selectedCategory === category
                                    ? 'bg-blue-200 text-blue-600'
                                    : ''
                                }`}
                                onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </p>
                            ))}
                            </div>
                            <div className='flex gap-3 mt-4 text-gray-900'>
                            <AiFillLike className='text-gray-400 hover:text-orange-300'size={24}/>
                           <AiFillDislike className='text-gray-400 hover:text-orange-300'size={24}/>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit unde totam excepturi incidunt fuga sint similique hic culpa temporibus? Blanditiis odit possimus iusto eaque libero amet accusantium officia ullam ex asperiores harum vitae qui aspernatur architecto, voluptates nostrum quo, commodi quae doloribus aliquid. Repellat repudiandae harum officia eaque nostrum voluptatum magni, ducimus optio tempora dolore omnis quibusdam, nemo alias molestias velit est sit temporibus. Maxime minus consequatur ad deleniti aperiam, vero corrupti? Atque quis nam optio illo. Ullam facere ratione tenetur quisquam totam repudiandae nihil enim illum culpa nesciunt nemo blanditiis ipsa, corrupti atque, in doloribus! Excepturi, dignissimos ratione?</p>
                    </div>
                </div>
               <div className='w-1/3 mx-3 flex flex-col gap-3'>
                <Button className='w-full bg-orange-400 hover:bg-orange-600'>Download 91.8</Button>
                <div className='w-full  bg-white rounded-xl p-2'>
                    <h3 className='text-xl text-slate-800 font-semibold p-2'>Related Resourse</h3>
                  <div className='px-1'>
                    {ResourcesList.map((resource) => (
          // Add key prop for each element in the map
          <div className='bg-white rounded-xl' key={resource.id}>
            <div className='flex gap-4'>
         <div className='flex flex-row my-3 gap-3'>
            <img className='rounded-xl w-20' src={resource.tambnail} alt={resource.title} />
            <div>
            <p className=''>{resource.title} </p>
            <div className=' flex flex-row gap-3'>
            {/* <p className='bg-blue-200 px-2 hover:text-blue-500 rounded-xl cursor-pointer'>{resource.category}</p> */}
            <div className='flex flex-row gap-1 text-gray-500'>
            <LuSquareEqual className='mt-1 '/>
            <p>{resource.duration}</p>
            </div>
            <div className='flex flex-row gap-1 text-gray-500'>
            <IoAlertCircleOutline className='mt-1' />
            <p> {resource.size}</p>
            </div>
            </div>
            </div>
            </div>
            </div>
          </div>
        ))}
        </div>
                </div>
               </div>
                
            </div>
        </div>
    );
}
