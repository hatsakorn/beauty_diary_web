import React from 'react'

function Transaction({getPackage}) {


  return (
    <>
    <div>
      <div className='flex justify-evenly'>
        <div>Transaction</div>
        <div>Package</div>
      </div>
      {getPackage.map(el=>
      <div key={el.id} className='flex justify-evenly'>
      <div>
        {el.Package.title}
      </div>
      <div>
        {el.Package.topup}
      </div>
      </div>
      )}
    </div>

    <div>

    </div>
    </>
  )
}

export default Transaction