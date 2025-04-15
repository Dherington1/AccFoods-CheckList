import React, { useState, useEffect } from 'react';

    type OrderData = {
        orderNumber: number;
        city: string;
        categories: string[];
    };
    
    type CheckListOrdersProps = {
        orderIndex: number;
        onDataChange: (data: OrderData) => void;
        validation?: { cityMissing: boolean; categoryMissing: boolean };
    };
  

    const CheckListOrders: React.FC<CheckListOrdersProps> = ({ orderIndex, onDataChange, validation }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [cityName, setCityName] = useState('');
  
    useEffect(() => {
      onDataChange({
        orderNumber: orderIndex,
        city: cityName,
        categories: selectedCategories,
      });
    }, [cityName, selectedCategories]);
  
    const handleCheckboxChange = (value: string) => {
      setSelectedCategories((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    };
  
    return (
        <div className='checklistOrdersParent'>
            <h4 className='form-title'>Check off the categories that are on invoice #{orderIndex}:<span className='required'>*</span></h4>
    
            <div className='city-parent'>
                <h4 className='question-label'>Enter city name <span className='required'>*</span></h4>
                <input
                    className='input-box'
                    placeholder='Your answer'
                    value={cityName}
                    style={{ backgroundColor: validation?.cityMissing ? '#ffe5e5' : 'transparent' }}
                    onChange={(e) => setCityName(e.target.value)}
                />
            </div>
    
            <div className={`category-parent ${validation?.categoryMissing ? 'category-error' : ''}`}>
                {['Frozen', 'Refrigerated', 'Dry', 'Chemical'].map((category) => (
                    <label key={category} style={{ display: 'block', marginBottom: '4px' }}>
                    <input
                      type='checkbox'
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCheckboxChange(category)}
                      
                    />
                    {category}
                  </label>
                ))}
            </div>
        </div>
    );
  };
  
  export default CheckListOrders;
