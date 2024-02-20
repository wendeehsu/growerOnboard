import React from "react";
import { useState, useEffect } from 'react';
import Signup from './Signup';

export default function OnBoard() {
    // basic crops
    // detailed crops
    // account detail
    // thank you

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
                <Signup />
            </div>
        </div>
    )
}