import React,{useState}  from 'react'
import {Box} from '@mui/material'

import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';


const Home = () => {
  const [bodyPart,setBodyPart]=useState('all');

  const [exercises,setExcercises]=useState([]);

  return (
    <Box>
    <HeroBanner />
    <SearchExercises 
    setExcercises={setExcercises}
    bodyPart={bodyPart}
    setBodyPart={setBodyPart}/>
    <Exercises 
    exercises={exercises} 
     setExcercises={setExcercises}
     bodyPart={bodyPart}
   />
  </Box>
  )
}

export default Home