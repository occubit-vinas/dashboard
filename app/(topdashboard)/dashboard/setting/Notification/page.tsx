'use client'
import React, { useState } from 'react'
import { Purple_button, Toggle_btn, White_button } from '../../components/top_buttons';
import { IoIosArrowDown } from "react-icons/io";

const Page = () => {
    // Email notification states
    const [notifications, setNotifications] = useState({
        newOrder: false,
        customerReview: false,
        refundRequest: false,
        lowStock: false,
        paymentReceived: false,
        systemUpdates: false,
    });

    // SMS notification states
    const [smsSettings, setSmsSettings] = useState({
        ssl: false,
        cookies: false,
        csrf: false,
    });

    // Push notification states
    const [pushSettings, setPushSettings] = useState({
        newOrder: false,
        inventoryAlerts: false,
        customerMessage: false,
    });

    // Email configuration states
    const [emailConfig, setEmailConfig] = useState({
        fromName: '',
        fromEmail: '',
        replyToEmail: '',
        smtpHost: '',
        smtpPort: '',
        smtpUsername: '',
        smtpPassword: '',
    });

    // Other states
    const [encryption, setEncryption] = useState('none');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notificationFrequency, setNotificationFrequency] = useState("immediate");
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [quietHours, setQuietHours] = useState(false);

    // Handle input changes for email configuration
    const handleEmailConfigChange = (field: string, value: string) => {
        setEmailConfig(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Handle form submission
    const handleSaveSettings = () => {
        const allSettings = {
            emailNotifications: notifications,
            smsNotifications: smsSettings,
            pushNotifications: pushSettings,
            emailConfiguration: emailConfig,
            encryption,
            notificationPreferences: {
                frequency: notificationFrequency,
                quietHours
            }
        };
        
        console.log('All Settings:', allSettings);
        // Here you would typically send this data to your backend
        // Example: await saveSettingsToAPI(allSettings);
        
        alert('Settings saved successfully!');
    };

    // Handle test email
    const handleSendTestEmail = () => {
        console.log('Sending test email with config:', emailConfig);
        // Here you would typically call your email service
        alert('Test email sent!');
    };

    return (
        <div className='container mx-auto p-6 flex flex-col gap-6 mt-8 bg-white rounded-sm'>
            <p className='my-title'>Email notification</p>
            <div className="border border-gray-400 bg-white rounded-sm p-3 flex flex-wrap gap-6 w-full">

                {/* New Order */}
                <div className="flex flex-row justify-between items-center flex-1 min-w-[400px] ">
                    <div className='flex flex-col gap-1'>
                        <p className="text-first font-medium">New Order</p>
                        <p className="text-third text-sm">Get notified of new orders</p>
                    </div>
                    <Toggle_btn
                        isActive={notifications.newOrder}
                        onClick={() =>
                            setNotifications((prev) => ({ ...prev, newOrder: !prev.newOrder }))
                        }
                    />
                </div>

                {/* Customer Review */}
                <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
                    <div className='flex flex-col gap-1'>
                        <p className="text-first font-medium">Customer Review</p>
                        <p className="text-third text-sm">Get alerts for new product reviews</p>
                    </div>
                    <Toggle_btn
                        isActive={notifications.customerReview}
                        onClick={() =>
                            setNotifications((prev) => ({
                                ...prev,
                                customerReview: !prev.customerReview,
                            }))
                        }
                    />
                </div>

                {/* Refund Request */}
                <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
                    <div className='flex flex-col gap-1'>
                        <p className="text-first font-medium">Refund Request</p>
                        <p className="text-third text-sm">Customer refund requests</p>
                    </div>
                    <Toggle_btn
                        isActive={notifications.refundRequest}
                        onClick={() =>
                            setNotifications((prev) => ({
                                ...prev,
                                refundRequest: !prev.refundRequest,
                            }))
                        }
                    />
                </div>

                {/* Low Stock Alert */}
                <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
                    <div className='flex flex-col gap-1'>
                        <p className="text-first font-medium">Low Stock Alert</p>
                        <p className="text-third text-sm">When inventory is running low</p>
                    </div>
                    <Toggle_btn
                        isActive={notifications.lowStock}
                        onClick={() =>
                            setNotifications((prev) => ({
                                ...prev,
                                lowStock: !prev.lowStock,
                            }))
                        }
                    />
                </div>

                {/* Payment Received */}
                <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
                    <div className='flex flex-col gap-1'>
                        <p className="text-first font-medium">Payment Received</p>
                        <p className="text-third text-sm">Successful payments</p>
                    </div>
                    <Toggle_btn
                        isActive={notifications.paymentReceived}
                        onClick={() =>
                            setNotifications((prev) => ({
                                ...prev,
                                paymentReceived: !prev.paymentReceived,
                            }))
                        }
                    />
                </div>

                {/* System Updates */}
                <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
                    <div className='flex flex-col gap-1'>
                        <p className="text-first font-medium">System Updates</p>
                        <p className="text-third text-sm">
                            Platform updates and maintenance alerts
                        </p>
                    </div>
                    <Toggle_btn
                        isActive={notifications.systemUpdates}
                        onClick={() =>
                            setNotifications((prev) => ({
                                ...prev,
                                systemUpdates: !prev.systemUpdates,
                            }))
                        }
                    />
                </div>
            </div>

            {/* SMS Notifications Section */}
            <p className="my-title">SMS Notifications</p>

            <div className="border border-gray-400 bg-white rounded-sm p-3 flex flex-row flex-wrap gap-6 w-full">

                {/* SSL Required */}
                <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
                    <div className='flex flex-col gap-1'>
                        <p className="text-first font-medium">SSL Required</p>
                        <p className="text-third text-sm">Force HTTPS connections</p>
                    </div>
                    <Toggle_btn
                        isActive={smsSettings.ssl}
                        onClick={() =>
                            setSmsSettings((prev) => ({ ...prev, ssl: !prev.ssl }))
                        }
                    />
                </div>

                {/* Secure Cookies */}
                <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
                    <div className='flex flex-col gap-1'>
                        <p className="text-first font-medium">Secure Cookies</p>
                        <p className="text-third text-sm">Use secure cookie flags</p>
                    </div>
                    <Toggle_btn
                        isActive={smsSettings.cookies}
                        onClick={() =>
                            setSmsSettings((prev) => ({ ...prev, cookies: !prev.cookies }))
                        }
                    />
                </div>

                {/* CSRF Protection */}
                <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
                    <div className='flex flex-col gap-1'>
                        <p className="text-first font-medium">CSRF Protection</p>
                        <p className="text-third text-sm">Prevent cross-site attacks</p>
                    </div>
                    <Toggle_btn
                        isActive={smsSettings.csrf}
                        onClick={() =>
                            setSmsSettings((prev) => ({ ...prev, csrf: !prev.csrf }))
                        }
                    />
                </div>
            </div>

            {/* Push Notifications Section */}
            <p className="my-title">Push Notifications</p>

            <div className="border border-gray-400 bg-white rounded-sm p-3 flex flex-row flex-wrap gap-6 w-full">

                {/* New Order */}
                <div className="flex flex-row justify-between items-center flex-1 min-w-[200px]">
                    <div className='flex flex-col gap-1'>
                        <p className="text-first font-medium">New Order</p>
                        <p className="text-third text-sm">Browser push notifications</p>
                    </div>
                    <Toggle_btn
                        isActive={pushSettings.newOrder}
                        onClick={() =>
                            setPushSettings((prev) => ({ ...prev, newOrder: !prev.newOrder }))
                        }
                    />
                </div>

                {/* Inventory Alerts */}
                <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
                    <div className='flex flex-col gap-1'>
                        <p className="text-first font-medium">Inventory Alerts</p>
                        <p className="text-third text-sm">Stock level warnings</p>
                    </div>
                    <Toggle_btn
                        isActive={pushSettings.inventoryAlerts}
                        onClick={() =>
                            setPushSettings((prev) => ({
                                ...prev,
                                inventoryAlerts: !prev.inventoryAlerts,
                            }))
                        }
                    />
                </div>

                {/* Customer Message */}
                <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
                    <div className='flex flex-col gap-1'>
                        <p className="text-first font-medium">Customer Message</p>
                        <p className="text-third text-sm">New customer inquiries</p>
                    </div>
                    <Toggle_btn
                        isActive={pushSettings.customerMessage}
                        onClick={() =>
                            setPushSettings((prev) => ({
                                ...prev,
                                customerMessage: !prev.customerMessage,
                            }))
                        }
                    />
                </div>
            </div>

            {/* Email Configuration Section */}
            <p className="my-title">Email Configuration</p>

            {/* Row 1: From Name & From Email */}
            <div className="flex flex-row flex-wrap gap-6 w-full">
                <div className="flex flex-col gap-1.5 flex-1 min-w-[300px]">
                    <p className="text-first">From Name</p>
                    <input
                        type="text"
                        className="in-field text-third"
                        placeholder="Enter sender name"
                        value={emailConfig.fromName}
                        onChange={(e) => handleEmailConfigChange('fromName', e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-1.5 flex-1 min-w-[300px]">
                    <p className="text-first">From Email</p>
                    <input
                        type="email"
                        className="in-field text-third"
                        placeholder="Enter sender email"
                        value={emailConfig.fromEmail}
                        onChange={(e) => handleEmailConfigChange('fromEmail', e.target.value)}
                    />
                </div>
            </div>

            {/* Row 2: Reply To Email & SMTP Host */}
            <div className="flex flex-row flex-wrap gap-6 w-full">
                <div className="flex flex-col gap-1.5 flex-1 min-w-[300px]">
                    <p className="text-first">Reply-To Email</p>
                    <input
                        type="email"
                        className="in-field text-third"
                        placeholder="Enter reply-to email"
                        value={emailConfig.replyToEmail}
                        onChange={(e) => handleEmailConfigChange('replyToEmail', e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-1.5 flex-1 min-w-[300px]">
                    <p className="text-first">SMTP Host</p>
                    <input
                        type="text"
                        className="in-field text-third"
                        placeholder="Enter SMTP host (e.g., smtp.gmail.com)"
                        value={emailConfig.smtpHost}
                        onChange={(e) => handleEmailConfigChange('smtpHost', e.target.value)}
                    />
                </div>
            </div>

            {/* SMTP Port + Encryption Row */}
            <div className="flex flex-row flex-wrap gap-6 w-full mt-6">
                {/* SMTP Port */}
                <div className="flex flex-col gap-1.5 flex-1 min-w-[300px]">
                    <p className="text-first">SMTP Port</p>
                    <input
                        type="number"
                        className="in-field text-third"
                        placeholder="Enter SMTP port (e.g. 587)"
                        value={emailConfig.smtpPort}
                        onChange={(e) => handleEmailConfigChange('smtpPort', e.target.value)}
                    />
                </div>

                {/* Encryption Dropdown */}
                <div className="flex flex-col gap-1.5 flex-1 min-w-[300px] relative">
                    <p className="text-first">Encryption</p>
                    <div className="relative">
                        <select
                            className="in-field text-third appearance-none cursor-pointer pr-10 py-1"
                            onChange={(e) => setEncryption(e.target.value)}
                            value={encryption}
                            onClick={() => setDropdownOpen((prev) => !prev)}
                            onBlur={() => setDropdownOpen(false)}
                        >
                            <option value="none">None</option>
                            <option value="tls">TLS</option>
                            <option value="ssl">SSL</option>
                        </select>
                        <IoIosArrowDown
                            className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''
                                }`}
                        />
                    </div>
                </div>
            </div>

            {/* Row 4: SMTP Username & SMTP Password */}
            <div className="flex flex-row flex-wrap gap-6 w-full mt-6">
                {/* SMTP Username */}
                <div className="flex flex-col gap-1.5 flex-1 min-w-[300px]">
                    <p className="text-first">SMTP Username</p>
                    <input
                        type="text"
                        className="in-field text-third"
                        placeholder="Enter SMTP username"
                        value={emailConfig.smtpUsername}
                        onChange={(e) => handleEmailConfigChange('smtpUsername', e.target.value)}
                    />
                </div>

                {/* SMTP Password */}
                <div className="flex flex-col gap-1.5 flex-1 min-w-[300px] relative">
                    <p className="text-first">SMTP Password</p>
                    <input
                        type="password"
                        className="in-field text-third pr-10"
                        placeholder="Enter SMTP password"
                        value={emailConfig.smtpPassword}
                        onChange={(e) => handleEmailConfigChange('smtpPassword', e.target.value)}
                    />
                </div>
            </div>

            <div className='flex flex-row justify-end'>
                <White_button 
                    label='Send Test Email' 
                    onClick={handleSendTestEmail}
                />
            </div>

            <p className='my-title'>Notification Preferences</p>

            {/* Row: Notification Frequency & Quiet Hours */}
            <div className="flex flex-row flex-wrap gap-6 w-full mt-6">
                {/* Notification Frequency Dropdown */}
                <div className="flex flex-col gap-1.5 flex-1 min-w-[300px] relative">
                    <p className="text-first">Notification Frequency</p>
                    <div className="relative">
                        <select
                            className="in-field text-third appearance-none cursor-pointer pr-10"
                            value={notificationFrequency}
                            onChange={(e) => setNotificationFrequency(e.target.value)}
                            onClick={() => setDropdownOpen2((prev) => !prev)}
                            onBlur={() => setDropdownOpen2(false)}
                        >
                            <option value="immediate">Immediate</option>
                            <option value="hourly">Hourly Digest</option>
                            <option value="daily">Daily Digest</option>
                        </select>
                        <IoIosArrowDown
                            className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 transition-transform duration-200 ${dropdownOpen2 ? "rotate-180" : ""
                                }`}
                        />
                    </div>
                </div>

                {/* Enable Quiet Hours Toggle */}
                <div className="flex flex-row justify-between items-center flex-1 min-w-[300px] p-3">
                    <div className="flex flex-col">
                        <p className="text-first font-medium">Enable Quiet Hours</p>
                        <p className="text-third text-sm">Mute notifications during off-hours</p>
                    </div>
                    <Toggle_btn
                        isActive={quietHours}
                        onClick={() => setQuietHours((prev) => !prev)}
                    />
                </div>
            </div>

            <div className='flex flex-row justify-end'>
                <Purple_button 
                    label='Save Notification Settings' 
                    onClick={handleSaveSettings}
                />
            </div>
        </div>
    )
}

export default Page