import { Button } from '../../ui/button.tsx';

const ClassCard:React.FC = ({data}:{data:any})=>{
  return <div className="p-1">
    <div
      className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-row justify-between items-center max-md:flex-col max-md:gap-3 dark:bg-slate-800">
      <div className={"flex flex-row gap-6 max-md:flex-col"}>
        <div
          className={
            "w-28 rounded-lg object-cover overflow-hidden max-md:w-auto max-md:h-auto"
          }
        >
          <img
            className={" rounded-lg"}
            src="https://www.hubspot.com/hubfs/free-online-courses_8.webp"
            alt="course1"
          />
        </div>
        <div
          className={"flex flex-col  items-start text-center justify-evenly"}
        >
          <p className={"text-xl font-semibold"}>Java Coding class</p>
          <div
            className={
              "flex flex-row gap-3 max-md:justify-center max-md:items-center"
            }
          >

          </div>
        </div>
      </div>
      <div className="flex max-md:w-full justify-center items-center">
        <Button className="w-full">Join</Button>
      </div>
    </div>
  </div>
}

export default ClassCard;