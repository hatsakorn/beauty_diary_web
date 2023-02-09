import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import * as reserveApi from '../../apis/reserve-api'

const initialCourseInput = {
  "title":"",
  "price":"",
  "discount":0,
  "description":"",
  "courseImage":""
}

export default function SelectionList({getCourses,setInputReserve,inputReserve}){
const [edit,setEdit] = useState(false)
const [inputCourse,setInputCourse] = useState(initialCourseInput)

const {authenticatedUser} = useAuth()

const handleChangeInput = (e) => {
  setInputCourse({...inputCourse,[e.target.name]:e.target.value})
  // console.log(inputCourse)
}
const handleUserChangeInput = (e) => {
  // setInputReserve({...inputReserve,[e.target.name]:e.target.value})
  setInputReserve({...inputReserve,[e.target.name]:e.target.value})
}

const handleSubmitForm = async e => {
  e.preventDefault()
  try{
    await reserveApi.createCourse(inputCourse)
    setInputCourse(initialCourseInput)
  }catch(err){
    console.log(err)
  }
  }



return (
<>
{!edit ? (<select onChange={handleUserChangeInput} name="title" >
  {getCourses.map((el,id)=>(
   <option key={id}>{el.title}</option>
    ))}
</select>
):(
<>
<form onSubmit={handleSubmitForm}>
<input 
className="block m-2" 
type="text" 
placeholder="Add course name" 
name="title"
id="title"
value={inputCourse.title}
onChange={handleChangeInput}
/>
<input 
className="block m-2" 
type="text" 
placeholder="Add price" 
name="price"
id="price"
value={inputCourse.price}
onChange={handleChangeInput}
/>
<input 
className="block m-2" 
type="text" 
placeholder="Add description" 
name="description"
id="description"
value={inputCourse.description}
onChange={handleChangeInput}
/>
<label>course Image</label>
<input 
className="block m-2" 
type="file" 
name="courseImage"
id="courseImage"
value={inputCourse.courseImage}
onChange={handleChangeInput}
/>
<button className="bg-rose-300 rounded-lg ml-3 p-2" type="submit">Add</button>
</form>
</>
)} 
{authenticatedUser.role === "admin" ? (
<>
<input 
className="ml-3" 
type={"checkbox"} 
onChange={(e)=>{setEdit(e.target.checked)}}/>
<label className="ml-2">click to add courses</label>
</>
):""}
</>
)
}