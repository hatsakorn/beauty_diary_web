import React, { useEffect, useState , useRef} from 'react'
// import Select from 'react-select'

const initialPackage = {
    "title":"",
    "price":"",
    "topup":"",
    "packageImage":"",
    "adsImage":"",
    "id":""
}

function SelectionPackage({allPackage,input,setInput,getPackageObj}) {
const [inputPackage,setInputPackage] = useState(initialPackage)
// const selectRef = useRef(null)


// useEffect(()=>{
    // getPackageObj(inputPackage)
    // setInputPackage({
    // "title":inputPackage.title||"",
    // "price":inputPackage.price||"",
    // "topup":inputPackage.topup||"",
    // "packageImage":inputPackage.packageImage||"",
    // "adsImage":inputPackage.adsImage||"",
    // "id":inputPackage.id||""    
    // })
    // handleShowExistPackage(inputPackage)    
// },[])
const handleChangePackage = (e) => {
    
    setInputPackage({...inputPackage,[e.target.name]:e.target.value})
    setInput({...inputPackage,[e.target.name]:e.target.value})
    // handleShowExistPackage(inputPackage)
    getPackageObj(input)
}
// const limitOption = () => {
//   console.log(selectRef.current)
//   if(selectRef.current.option.length > 4) {
//     selectRef.current.size = 4;
//   }
// }
// console.log(allPackage)

  return (
    <>
    <select 
    onChange={handleChangePackage} 
    // onMouseDown={limitOption}
    name="id" 
    // ref={selectRef}
    // className='overflow-y-auto'
    >
    <option hidden="hidden">Choose Package to edit ot delete</option>
   
  {allPackage.map((el,idx)=>
     <option key={el.id} value={el.id}>{idx+1}. {el.title}</option>
     )}

    </select>
    </>
  )
}

export default SelectionPackage