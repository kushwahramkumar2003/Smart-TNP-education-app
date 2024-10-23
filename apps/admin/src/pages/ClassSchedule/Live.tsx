import { useParams } from 'react-router-dom';

const Live:React.FC=()=>{
  const {classId} = useParams();
  return <div>
  params is {classId}
  </div>
}

export default Live