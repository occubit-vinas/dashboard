'use client';
import React, { useState,useEffect } from 'react';
import { Purple_button, Toggle_btn } from '../../components/top_buttons';
import {secu_stg} from '@/data/dashboard/constants';
const Page = () => {
    const [twoFactor, setTwoFactor] = useState(false);

    const [passwordPolicy, setPasswordPolicy] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
        legth:8,
    });

    const [securityFeatures, setSecurityFeatures] = useState({
        ssl: false,
        cookies: false,
        csrf: false,
    });
    const [sessioncontrol,setsessioncontrol]=useState({
        timeout:0,
        login_atm:0,
        duration:0
    })
    const [ip,setip]=useState([]);
    const [inputip,setinputip]=useState();

    const handleaddip=()=>{
        if(!inputip.trim()) return;
        
        setip(prev=>{
          const newlist = [...prev,inputip];
          console.log(newlist);
          setinputip('');
          return newlist;
        })
        
        
    }
    const handlesessionchange=(e)=>{
        const {name,value}=e.target;
        setsessioncontrol((prev)=>({
            ...prev,
            [name]:value,
        }))
    }

    return (
      <div className="container mx-auto p-6 bg-white rounded-sm flex flex-col gap-6 mt-8">
  {/* Section 1 — Authentication & Access */}
  <p className="my-title">{secu_stg.anc}</p>
  <div className="flex flex-row justify-between items-center border border-gray-100 rounded-sm p-3">
    <div className="flex flex-col gap-1">
      <p className="text-first font-medium">{secu_stg.tfa}</p>
      <p className="text-third text-sm">{secu_stg.r2fa}</p>
    </div>
    <Toggle_btn
      isActive={twoFactor}
      onClick={() => setTwoFactor(!twoFactor)}
    />
  </div>

  {/* Section 2 — Session Controls */}
  <div className='flex flex-col gap-3'>
    <p className="my-title">{secu_stg.sc}</p>
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-1.5 w-1/3">
        <p className="text-first">{secu_stg.sto}</p>
        <input
          type="number"
          className="in-field text-third"
          placeholder="30"
          value={sessioncontrol.timeout}
          onChange={handlesessionchange}
        />
      </div>
      <div className="flex flex-col gap-1.5 w-1/3">
        <p className="text-first">{secu_stg.mla}</p>
        <input
          type="number"
          className="in-field text-third"
          placeholder="5"
          value={sessioncontrol.login_atm}
          onChange={handlesessionchange}
        />
      </div>
      <div className="flex flex-col gap-1.5 w-1/3">
        <p className="text-first">{secu_stg.lad}</p>
        <input
          type="number"
          className="in-field text-third"
          placeholder="15"
          value={sessioncontrol.duration}
          onChange={handlesessionchange}
        />
      </div>
    </div>
  </div>

  {/* Section 3 — Password Policy */}
  <p className="my-title">{secu_stg.pp}</p>
  <div className='flex flex-col gap-1.5'>
    <p>{secu_stg.mpl}</p>
    <input
      type='number'
      className='in-field'
      placeholder='8'
      value={passwordPolicy.length}
      onChange={(e) => setPasswordPolicy(prev => ({ ...prev, length: e.target.value }))}
    />
  </div>

  <div className="border border-gray-400 bg-white rounded-sm p-3 flex flex-row justify-between w-full gap-6">
    <div className="w-1/2 flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center">
        <p className="text-first">{secu_stg.rul}</p>
        <Toggle_btn
          isActive={passwordPolicy.uppercase}
          onClick={() => setPasswordPolicy(prev => ({ ...prev, uppercase: !prev.uppercase }))}
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="text-first">{secu_stg.rn}</p>
        <Toggle_btn
          isActive={passwordPolicy.numbers}
          onClick={() => setPasswordPolicy(prev => ({ ...prev, numbers: !prev.numbers }))}
        />
      </div>
    </div>
    <div className="w-1/2 flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center">
        <p className="text-first">{secu_stg.rll}</p>
        <Toggle_btn
          isActive={passwordPolicy.lowercase}
          onClick={() => setPasswordPolicy(prev => ({ ...prev, lowercase: !prev.lowercase }))}
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="text-first">{secu_stg.rs}</p>
        <Toggle_btn
          isActive={passwordPolicy.symbols}
          onClick={() => setPasswordPolicy(prev => ({ ...prev, symbols: !prev.symbols }))}
        />
      </div>
    </div>
  </div>

  {/* Section 4 — Security Features */}
  <p className="my-title">{secu_stg.sf}</p>
  <div className="border border-gray-400 bg-white rounded-sm p-3 flex flex-row gap-6 w-full">
    {/* SSL Required */}
    <div className="flex flex-row justify-between items-center flex-1">
      <div className='flex flex-col gap-1.5'>
        <p className="text-first font-medium">{secu_stg.ssl}</p>
        <p className="text-third text-sm">{secu_stg.fhc}</p>
      </div>
      <Toggle_btn
        isActive={securityFeatures.ssl}
        onClick={() => setSecurityFeatures(prev => ({ ...prev, ssl: !prev.ssl }))}
      />
    </div>

    {/* Secure Cookies */}
    <div className="flex flex-row justify-between items-center flex-1">
      <div className='flex flex-col gap-1.5'>
        <p className="text-first font-medium">{secu_stg.sec}</p> {/* Note: 'sc' reused, but in your object it's Secure Cookies */}
        <p className="text-third text-sm">{secu_stg.usc}</p>
      </div>
      <Toggle_btn
        isActive={securityFeatures.cookies}
        onClick={() => setSecurityFeatures(prev => ({ ...prev, cookies: !prev.cookies }))}
      />
    </div>

    {/* CSRF Protection */}
    <div className="flex flex-row justify-between items-center flex-1">
      <div className='flex flex-col gap-1.5'>
        <p className="text-first font-medium">{secu_stg.cp}</p>
        <p className="text-third text-sm">{secu_stg.pcra}</p>
      </div>
      <Toggle_btn
        isActive={securityFeatures.csrf}
        onClick={() => setSecurityFeatures(prev => ({ ...prev, csrf: !prev.csrf }))}
      />
    </div>
  </div>

  {/* Section 5 — IP Whitelist */}
  <p className="my-title">{secu_stg.iw}</p>
  <div className="flex flex-col gap-1.5 w-full">
    <p className="text-first">{secu_stg.aia}</p>
    <div className="flex flex-row justify-between gap-4 w-full">
      <input
        type="text"
        className="bg-purple-50 w-[1260px] text-third p-1.5 rounded-sm"
        placeholder={secu_stg.eia}
        value={inputip}
        onChange={(e) => setinputip(e.target.value)}
      />
      <div>
        <Purple_button
          label={secu_stg.ai}
          className="whitespace-nowrap"
          onClick={handleaddip}
        />
      </div>
    </div>
  </div>

  <div className='bg-[#F59E0B1A] rounded-sm p-5'>
    <h1 className='desc_text'>{secu_stg.siio}</h1>
  </div>

  <div className='flex flex-row justify-end'>
    <Purple_button label={secu_stg.sss} />
  </div>
</div>
    );
};

export default Page;
