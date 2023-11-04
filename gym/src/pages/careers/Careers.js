import { useLoaderData,Link} from 'react-router-dom'


var muscle = 'biceps'
const url = 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle;
const options ={
    method: 'GET',
    headers: {
    'X-Api-Key': 'gqUQifHbfGH1dwM8a3mjxw==WkJycD8mC3Ky2Q9H'
  },
}

export default function Careers(){
    const exercises = useLoaderData()
    console.log(exercises)
  return (
    <div className='gym'>
        {exercises.map(exercise =>
                <div className='excercise'>
                <h2>{exercise.name}</h2>
                <h3>{exercise.type}</h3>
                <Link to='/'>Instruction</Link>
            </div>
        )}
    </div>
  )
}

export const careerLoader = async() =>{
    const response = await fetch(url, options);
	  const result = await response.json();
    
    return result
    
}