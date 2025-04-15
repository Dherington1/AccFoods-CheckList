import React from 'react'
import CheckListForm from './CheckListForm'

const CheckListPage = () => {
  return (
    <div>

        <div className='information'>
          <h4 className='information-title'>Must be Completed Before Leaving US Foods</h4>
          <h3 className=' information-body'>
            IMPORTANT: PLEASE READ BEFORE PROCEEDING
          </h3>

          <p className='p-content'><span className='sub-title'>Supervise Loading:</span> Observe the loader while they load the van to ensure safe and careful handling. Assist if necessary to avoid any accidental damage to the van.</p>
          <p className='p-content'><span className='sub-title'>No Side Loading:</span> Ensure all items are loaded through designated loading areas only—side loading is not permitted.</p>
          <p className='p-content'><span className='sub-title'>Verify Proper Organization:</span> Pay close attention to how the van is loaded. Check the placement of items such as refrigerated goods, frozen items, and chemicals to avoid cross-contamination or damage.</p>
          <p className='p-content'><span className='sub-title'>Small Orders:</span> For smaller orders, confirm the number of boxes matches the order before departure.</p>
        </div>

        <CheckListForm />
    </div>
  )
}

export default CheckListPage