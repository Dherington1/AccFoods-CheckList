import React, { useState } from 'react'
import { Link } from 'react-router-dom';

type NavBarProps = {
    setChosenTabForAppFile: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({setChosenTabForAppFile}: NavBarProps) => {

    const [choiceTab, setChoiceTab] = useState(true)

    const changeCurrentTab = (changedValue: boolean) => {
        setChosenTabForAppFile(changedValue);
        setChoiceTab(changedValue);
    }

    return (
        <>
            <div className='title-parent'>
                <Link to='/'  className='no-underline'>
                    <h3 className="A-inTitle">A<span className='cc-inTitle'>cc Foods</span></h3>
                </Link>
            </div>


            <div className='choice-tab'>
                <h3 
                    className={choiceTab ? 'current-tab choice-tab-option' : 'choice-tab-option'}
                    onClick={() => changeCurrentTab(true)}
                >
                    Checklist
                </h3>

                <h3 
                    className={choiceTab ? 'choice-tab-option' : 'current-tab choice-tab-option'} 
                    onClick={() => changeCurrentTab(false)}
                >
                    FAQ
                </h3>
            </div>
        </>
    )
}

export default NavBar