'use client';
import React, { useState } from 'react';
import { Purple_button, Toggle_btn } from '../../components/top_buttons';

const Page = () => {
    const [twoFactor, setTwoFactor] = useState(false);

    const [passwordPolicy, setPasswordPolicy] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    });

    const [securityFeatures, setSecurityFeatures] = useState({
        ssl: false,
        cookies: false,
        csrf: false,
    });

    return (
        <div className="p-6 bg-white rounded-sm flex flex-col gap-6 mt-8">
            {/* Section 1 — Two-Factor Authentication */}
            <p className="my-title">Authentication & Access</p>
            <div className="flex flex-row justify-between items-center border border-gray-100 rounded-sm p-3">
                <div className="flex flex-col gap-1">
                    <p className="text-first font-medium">Two-Factor Authentication</p>
                    <p className="text-third text-sm">
                        Require 2FA for admin accounts
                    </p>
                </div>
                <Toggle_btn
                    isActive={twoFactor}
                    onClick={() => setTwoFactor(!twoFactor)}
                />
            </div>

            {/* Section 2 — Session Controls */}
            <div className='flex flex-col gap-3'>
                <p className="my-title">Session Controls</p>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col gap-1.5 w-1/3">
                        <p className="text-first">Session Timeout (minutes)</p>
                        <input
                            type="number"
                            className="in-field text-third"
                            placeholder="30"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5 w-1/3">
                        <p className="text-first">Max Login Attempts</p>
                        <input
                            type="number"
                            className="in-field text-third"
                            placeholder="5"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5 w-1/3">
                        <p className="text-first">Lockout Duration (minutes)</p>
                        <input
                            type="number"
                            className="in-field text-third"
                            placeholder="15"
                        />
                    </div>
                </div>
            </div>

            {/* Section 3 — Password Policy */}
            <p className="my-title">Password Policy</p>
            <div className='flex flex-col gap-1.5'>
                <p>Minimum password length</p>
                <input
                    type='number'
                    className='in-field'
                    placeholder='8'
                />
            </div>
            <div className="border border-gray-400 bg-white rounded-sm p-3 flex flex-row justify-between w-full gap-6">
                <div className="w-1/2 flex flex-col gap-3">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-first">Require Uppercase Letters</p>
                        <Toggle_btn
                            isActive={passwordPolicy.uppercase}
                            onClick={() =>
                                setPasswordPolicy((prev) => ({
                                    ...prev,
                                    uppercase: !prev.uppercase,
                                }))
                            }
                        />
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-first">Require Numbers</p>
                        <Toggle_btn
                            isActive={passwordPolicy.numbers}
                            onClick={() =>
                                setPasswordPolicy((prev) => ({
                                    ...prev,
                                    numbers: !prev.numbers,
                                }))
                            }
                        />
                    </div>
                </div>

                <div className="w-1/2 flex flex-col gap-3">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-first">Require Lowercase Letters</p>
                        <Toggle_btn
                            isActive={passwordPolicy.lowercase}
                            onClick={() =>
                                setPasswordPolicy((prev) => ({
                                    ...prev,
                                    lowercase: !prev.lowercase,
                                }))
                            }
                        />
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-first">Require Symbols</p>
                        <Toggle_btn
                            isActive={passwordPolicy.symbols}
                            onClick={() =>
                                setPasswordPolicy((prev) => ({
                                    ...prev,
                                    symbols: !prev.symbols,
                                }))
                            }
                        />
                    </div>
                </div>
            </div>

            {/* Section 4 — Security Features */}
            <p className="my-title">Security Features</p>
            <div className="border border-gray-400 bg-white rounded-sm p-3 flex flex-row gap-6 w-full">
                {/* SSL Required */}
                <div className="flex flex-row justify-between items-center flex-1">
                    <div className='flex flex-col gap-1.5'>
                        <p className="text-first font-medium">SSL Required</p>
                        <p className="text-third text-sm">Force HTTPS connections</p>
                    </div>
                    <Toggle_btn
                        isActive={securityFeatures.ssl}
                        onClick={() =>
                            setSecurityFeatures((prev) => ({ ...prev, ssl: !prev.ssl }))
                        }
                    />
                </div>

                {/* Secure Cookies */}
                <div className="flex flex-row justify-between items-center flex-1">
                    <div className='flex flex-col gap-1.5'>
                        <p className="text-first font-medium">Secure Cookies</p>
                        <p className="text-third text-sm">Use Secure Cookie flag</p>
                    </div>
                    <Toggle_btn
                        isActive={securityFeatures.cookies}
                        onClick={() =>
                            setSecurityFeatures((prev) => ({
                                ...prev,
                                cookies: !prev.cookies,
                            }))
                        }
                    />
                </div>

                {/* CSRF Protection */}
                <div className="flex flex-row justify-between items-center flex-1">
                    <div className='flex flex-col gap-1.5'>
                        <p className="text-first font-medium">CSRF Protection</p>
                        <p className="text-third text-sm">
                            Prevent cross-site request attacks
                        </p>
                    </div>
                    <Toggle_btn
                        isActive={securityFeatures.csrf}
                        onClick={() =>
                            setSecurityFeatures((prev) => ({ ...prev, csrf: !prev.csrf }))
                        }
                    />
                </div>
            </div>


            {/* Section 5 — IP Whitelist */}
            <p className="my-title">IP Whitelist</p>
            <div className="flex flex-col gap-1.5 w-full">
                <p className="text-first">Allowed IP Address</p>

                {/* Row containing input + button */}
                <div className="flex flex-row justify-between gap-4 w-full">
                    <input
                        type="text"
                        className="bg-purple-50 w-[1260px] text-third p-1.5 rounded-sm "
                        placeholder="Enter IP address (e.g. 192.168.1.1)"
                    />
                    <div>
                        <Purple_button
                            label="Add IP"
                            className="whitespace-nowrap"
                        />
                    </div>
                </div>


            </div>


            <div className='bg-[#F59E0B1A] rounded-sm p-5'>
                <h1 className='desc_text'>Shipping information is optional but recommended for accurate shipping calculations.</h1>
            </div>

            <div className='flex flex-row justify-end'>
                <Purple_button label='Save Security Settings' />
            </div>

        </div>
    );
};

export default Page;
