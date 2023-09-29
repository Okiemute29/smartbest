import { useEffect, useRef, useState } from "react";
import internationalData from "./International-list";

const VerifyNumber = () =>{
    const handleCallCode = ()=>{
        setCallCode(callCodeRef.current.value)
        const value = callCodeRef.current.value,
        showValueOption = callCodeRef.current.querySelector('.show-value');
        setMinLength(callCodeRef.current.options[callCodeRef.current.selectedIndex].getAttribute('data-min'));
        setMaxLength(callCodeRef.current.options[callCodeRef.current.selectedIndex].getAttribute('data-max'));
      
        showValueOption.style.display = '';
        showValueOption.innerText = value;
        showValueOption.value = value;
        
        callCodeRef.current.selectedIndex = 0;
        
      }
      
}
export default VerifyNumber