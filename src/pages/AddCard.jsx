import axios from 'axios';
import React, { useRef, useState } from 'react';
import { LuCreditCard } from "react-icons/lu";
import { api } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';

export const AddCard = () => {
    const [ CardHolderName, setCardHolderName ] = useState('');
    const [ CardNumber, setCardNumber ] = useState('');
    const [ CVV, setCVV ] = useState('');
    const [ CardExpiryDate, setCardExpiryDate] = useState('');
    const [ BankName, setBankName ] = useState('');
    const [error, setError] = useState('');
    const [ IsActive, setIsActive ] = useState(true);
    const UserId = localStorage.getItem('userId');
    const cardNumberInputRef = useRef(null);

    const navigate = useNavigate();

    const handleAddBankCard = (e) => {
        e.preventDefault();

        const data = {BankName, CVV,CardExpiryDate,CardHolderName, CardNumber,UserId,  IsActive};

        console.log(data);
        
        axios.post(`${api}/cardDetails`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            navigate('/payment');
          })
          .catch(error => {
            console.error('Error:', error.response?.data);
            
            if(error.response?.data){
              setError(error.reponse.data);
            }else{
              setError('An error occured. Please try again.')
            }
          });
    };

    const handleExpiryDateChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); 
        if (value.length > 4) value = value.slice(0, 4); 
    
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2); 
        }
    
        setCardExpiryDate(value);
    };

    const handleCardHolderClick = ()=> {
        if(cardNumberInputRef.current){
            cardNumberInputRef.current.focus();
        }
    };
  return (
    <div className='col-9 bg-gradient-to-r from-dba_blue to-dba_light container-fluid h-screen flex flex-col items-center'>

        <div className="bg-white rounded mt-[3rem] flex flex-col col-10 h-2/6">
            <h3 className="text-center fs-5 fw-bold mt-1">New card</h3>
            <form action="" className="ml-6" onSubmit={handleAddBankCard}>
                {/* Card number */}
                <span className="border-2 border-gray-400 flex flex-col rounded col-8 h-[4rem] bg-white" onClick={handleCardHolderClick}>
                    <p className="fs-6 text-center h-[0.1rem] fw-bold">Card number</p>

                    <span className="flex flex-row rounded col-12 h-[2.9rem] py-1 ">
                    <LuCreditCard className='col-2 fs-1 fw-bold mt-[-0.5rem] '/>
                    <input type="text"  className="border-none outline-none col-10 rounded px-1" ref={cardNumberInputRef} value={CardNumber} onChange={e=> setCardNumber(e.target.value)}/>
                    </span>
                </span>

                {/* Expiry & CVV */}
                <div className="flex flex-row col-8 justify-between h-[3rem] mt-2 ">
                    <input type="text" placeholder='Expiry date' className='rounded fw-bold text-center border-gray-400 border-2 outline-0 w-1/2 mr-1' value={CardExpiryDate} onChange={handleExpiryDateChange} maxLength={5}/>
                    <input type="text" placeholder='Secure code' className='rounded fw-bold text-center border-gray-400 border-2 outline-0 w-1/2 ml-1' value={CVV} onChange={e=> setCVV(e.target.value)} maxLength={3}/>
                </div>

                {/* Name */}
                <input type="text" placeholder='Card holder name' className='col-8 fw-bold h-[3.3rem] pl-3 fw-normal rounded mt-2 border-2 border-gray-400 outline-none'value={CardHolderName} onChange={e=> setCardHolderName(e.target.value)}/>

                <div className="flex flex-row col-8">
                    <input type="text" placeholder='Bank name' className='col-6 pl-2 text-center fw-bold mt-2 rounded h-[3.4rem] border-2 border-gray-400 outline-none' value={BankName} onChange={e=> setBankName(e.target.value)}/>
                    <button className="bg-green-950 rounded fw-bold text-white col-4 justify-between h-[2.5rem] mt-3 ml-auto">Add Card</button>
                </div>
            </form>
        </div>

        <p className="text-white fw-bold fs-6 my-[5rem]">
        Add credit or debit card to Consultation Room to make secure payments on the site. 
        </p>

        <p className="text-gray-500 fw-bold text-[14px] col-9">
        Card-related information, location, and information about the user patterns may be sent to Consultation Room and may be used together with account information to provide assessments to your card issuer or payment network to set up payments and prevent transaction fraud.
        </p>
    </div>
  )
}
