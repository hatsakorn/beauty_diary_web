import React, { useEffect, useState } from 'react'
import useReserve from '../../hooks/useReserve';

function Transaction({getPackage}) {
  const [isCourse,setIsCourse] = useState(false)

  const {reserveCourse,fetchCourse} = useReserve()

  useEffect(()=>{
    fetchCourse()
  },[])
  const handleToggle = () => {
    setIsCourse(!isCourse)
  }


  return (
    <>
    <div>
      <div className='flex justify-evenly'>
        <div>Transaction</div>
        <div>{isCourse === true ?"Courses":"Packages"}</div>
      </div>
      {isCourse === true ?
      (<>{reserveCourse.map((el,idx)=>
        <div key={idx} className='flex justify-evenly'>
        <div>
          {el.title}
        </div>
        <div>
          -{el.price}
        </div>
        </div>)}
        </>)
      :(<>{getPackage.map((el,idx)=>
      <div key={idx} className='flex justify-evenly'>
      <div>
        {el.Package.title}
      </div>
      <div>
        +{el.Package.topup}
      </div>
      </div>)}
      </>)}
    </div>

    <div className='flex justify-center'>
   
    <button onClick={handleToggle} className="text-lg bg-rose-300 py-4 px-3 my-4">{isCourse === true ?"Packages":"Courses"}</button>
    </div>
    </>
  )
}

export default Transaction