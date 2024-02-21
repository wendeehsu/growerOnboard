import React from "react";
import { useState, useEffect } from 'react';
import Signup from './Signup';
import AccountDetail from './AccountDetail';
import Thank from "./Thank";

export default function OnBoard() {
    const [currentStage, setCurrentStage] = useState(0);
    const updateStage = (stage) => {
        setCurrentStage(stage);
    }

    return (
        <div className="flex h-[100vh]">
            <div className="bg-center bg-[url('../public/images/crops.png')] bg-cover bg-no-repeat w-[50%]">
            </div>
            <div className="flex-1 pt-[80px] overflow-y-scroll">
                <img
                    className="mx-auto mb-2 w-[300px]"
                    src="../../images/logo-name.png"
                    alt="logo"
                />
                {
                    currentStage < 2 && 
                    <Signup stage={currentStage} onStageChange={updateStage} />
                }
                {currentStage === 2 && <AccountDetail onStageChange={updateStage}/>}
                {currentStage === 3 && <Thank />}
            </div>
        </div>
    )
}