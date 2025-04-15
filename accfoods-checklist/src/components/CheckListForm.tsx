import React, { useState } from 'react'
import CheckListOrders from './checkListOrders'

type OrderData = {
  orderNumber: number;
  city: string;
  categories: string[];
};

const CheckListForm = () => {
  // from orders page
  const [orderDetails, setOrderDetails] = useState<OrderData[]>([]);

  // data from this file
  const [firstName, setFirstName] = useState('');
  const [vanNumber, setVanNumber] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [orderCount, setOrderCount] = useState(1);

  // for loading success on submit
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // validating all information is there
  const [invalidFields, setInvalidFields] = useState<{
    firstName?: boolean;
    vanNumber?: boolean;
    orderDetails: { cityMissing: boolean; categoryMissing: boolean }[];
  }>({
    orderDetails: [],
  });
  const [showValidationModal, setShowValidationModal] = useState(false);
  
  // to reset the form on successful submit
  const [formKey, setFormKey] = useState(0);

  // handles the order information from CheckListOrders.tsx
  const handleOrderDataChange = (index: number, data: OrderData) => {
    setOrderDetails(prev => {
      const newData = [...prev];
      newData[index - 1] = data; 
      return newData;
    });
  };
  
  // resets form on successful submit
  const resetForm = () => {
    setFirstName('');
    setVanNumber('');
    setDate(new Date().toISOString().split('T')[0]);
    setOrderCount(1);
    setOrderDetails([]);
    setInvalidFields({ orderDetails: [] });
    setFormKey(prev => prev + 1); 
  };
  
  
  const handleSubmit = async () => {
    const orderIssues = orderDetails.map((order) => ({
      cityMissing: !order.city.trim(),
      categoryMissing: order.categories.length === 0,
    }));
  
    const isAnyInvalid =
      !firstName.trim() ||
      !vanNumber.trim() ||
      orderIssues.some((o) => o.cityMissing || o.categoryMissing);
  
    // if form is not full filled out
    if (isAnyInvalid) {
      setShowValidationModal(true);

      setTimeout(() => {
        const firstError = document.querySelector('.input-error, .category-error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      
      setInvalidFields({
        firstName: !firstName.trim(),
        vanNumber: !vanNumber.trim(),
        orderDetails: orderIssues,
      });
      return;
    }

    // form is full filled out
    setIsSubmitting(true);
    const formatted = {
      name: firstName,
      van: vanNumber,
      date,
      numberOfOrders: orderCount.toString(),
      orders: orderDetails.map(order => ({
        city: order.city,
        categories: order.categories
      }))
      
    };
  
    console.log('** Final Data:', formatted);
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbwO9g8XM19qcNgJ3WT_2PJrLfowD23hFjXXSwVR0gQ-HOv9dDScZu8mGqVfUlgKFpKXLA/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: firstName,
          van: vanNumber,
          date,
          numberOfOrders: orderCount.toString(),
          orderProducts: orderDetails.map(order => ({
            city: order.city,
            categories: order.categories,
          })),
        }),
      });
    
      if (!res.ok) {
        throw new Error("Failed to submit data");
      }
    
      console.log("✅ Data sent to Google Sheets!");
    } catch (err) {
      console.error("❌ Submission failed:", err);
    }
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
  
      setTimeout(() => {
        setIsSuccess(false);
        resetForm();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 2000);
    }, 2000);
  };
  
  
  return (
    <>
      {isSubmitting && (
        <div className='overlay'>
          <div className='spinner'></div>
        </div>
      )}
      
      {isSuccess && (
        <div className='overlay'>
          <div className='checkmark'>
            ✓
          </div>
        </div>
      )}

      {showValidationModal && (
        <div className="validation-modal">
          <button className="close-button" onClick={() => setShowValidationModal(false)}>✖</button>
          <p className="modal-message">Please complete all required fields.</p>
        </div>
      )}


      <div key={formKey}>
        <div className='checklistFormParent'>
          <div className='checklistContent'>
            <h4 className='form-title'>Van Departure Checklist</h4>
            {/* name */}
            <div>
              <h4 className='question-label'>Enter first name <span className='required'>*</span></h4>
              <input 
                className={`input-box ${invalidFields.firstName ? 'input-error' : ''}`} 
                placeholder='Your answer' 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} 
                style={{ backgroundColor: invalidFields.firstName ? '#ffe5e5' : 'transparent' }}
              />
            </div>

            {/* van */}
            <div>
              <h4 className='question-label'>Enter van number <span className='required'>*</span></h4>
              <input 
                className={`input-box ${invalidFields.vanNumber ? 'input-error' : ''}`}
                placeholder='Your answer'
                value={vanNumber}
                onChange={(e) => setVanNumber(e.target.value)} 
                style={{ backgroundColor: invalidFields.firstName ? '#ffe5e5' : 'transparent' }}
              />
            </div>

            {/* date */}
            <div>
              <h4 className='question-label'>Enter the date <span className='required'>*</span></h4>
              <input 
                className='input-box' 
                type='date' 
                value={date}
                onChange={(e) => setDate(e.target.value)} 
              />
            </div>

            {/* order number */}
            <div>
              <h4 className='question-label'>How many orders do you have? <span className='required'>*</span></h4>
              <select
                className='input-box'
                value={orderCount}
                onChange={(e) => setOrderCount(Number(e.target.value))}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {[...Array(orderCount)].map((_, index) => (
          <CheckListOrders 
            key={index} 
            orderIndex={index + 1}
            onDataChange={(data) => handleOrderDataChange(index + 1, data)}
            validation={invalidFields.orderDetails?.[index]}
          />
        ))}


        <div className='button-parent'>
          <button className='submit-button' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default CheckListForm