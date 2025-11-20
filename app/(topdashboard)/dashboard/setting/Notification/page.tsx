'use client'
import React, { useState } from 'react'
import { Purple_button, Toggle_btn, White_button } from '../../components/top_buttons';
import { IoIosArrowDown } from "react-icons/io";
import { notification_stg } from '@/data/dashboard/constants';
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
  {/* Email Notifications */}
  <p className='my-title'>{notification_stg.emailNotifications}</p>
  <div className="border border-gray-400 bg-white rounded-sm p-3 flex flex-wrap gap-6 w-full">
    <div className="flex flex-row justify-between items-center flex-1 min-w-[400px]">
      <div className='flex flex-col gap-1'>
        <p className="text-first font-medium">{notification_stg.newOrder}</p>
        <p className="text-third text-sm">{notification_stg.newOrderDesc}</p>
      </div>
      <Toggle_btn isActive={notifications.newOrder} onClick={() => setNotifications(prev => ({ ...prev, newOrder: !prev.newOrder }))} />
    </div>

    <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
      <div className='flex flex-col gap-1'>
        <p className="text-first font-medium">{notification_stg.customerReview}</p>
        <p className="text-third text-sm">{notification_stg.customerReviewDesc}</p>
      </div>
      <Toggle_btn isActive={notifications.customerReview} onClick={() => setNotifications(prev => ({ ...prev, customerReview: !prev.customerReview }))} />
    </div>

    <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
      <div className='flex flex-col gap-1'>
        <p className="text-first font-medium">{notification_stg.refundRequest}</p>
        <p className="text-third text-sm">{notification_stg.refundRequestDesc}</p>
      </div>
      <Toggle_btn isActive={notifications.refundRequest} onClick={() => setNotifications(prev => ({ ...prev, refundRequest: !prev.refundRequest }))} />
    </div>

    <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
      <div className='flex flex-col gap-1'>
        <p className="text-first font-medium">{notification_stg.lowStock}</p>
        <p className="text-third text-sm">{notification_stg.lowStockDesc}</p>
      </div>
      <Toggle_btn isActive={notifications.lowStock} onClick={() => setNotifications(prev => ({ ...prev, lowStock: !prev.lowStock }))} />
    </div>

    <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
      <div className='flex flex-col gap-1'>
        <p className="text-first font-medium">{notification_stg.paymentReceived}</p>
        <p className="text-third text-sm">{notification_stg.paymentReceivedDesc}</p>
      </div>
      <Toggle_btn isActive={notifications.paymentReceived} onClick={() => setNotifications(prev => ({ ...prev, paymentReceived: !prev.paymentReceived }))} />
    </div>

    <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
      <div className='flex flex-col gap-1'>
        <p className="text-first font-medium">{notification_stg.systemUpdates}</p>
        <p className="text-third text-sm">{notification_stg.systemUpdatesDesc}</p>
      </div>
      <Toggle_btn isActive={notifications.systemUpdates} onClick={() => setNotifications(prev => ({ ...prev, systemUpdates: !prev.systemUpdates }))} />
    </div>
  </div>

  {/* SMS Notifications */}
  <p className="my-title">{notification_stg.smsNotifications}</p>
  <div className="border border-gray-400 bg-white rounded-sm p-3 flex flex-row flex-wrap gap-6 w-full">
    <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
      <div className='flex flex-col gap-1'>
        <p className="text-first font-medium">{notification_stg.smsNewOrder}</p>
        <p className="text-third text-sm">{notification_stg.smsNewOrderDesc}</p>
      </div>
      <Toggle_btn isActive={smsSettings.newOrder} onClick={() => setSmsSettings(prev => ({ ...prev, newOrder: !prev.newOrder }))} />
    </div>
    {/* Add more SMS toggles as needed */}
  </div>

  {/* Push Notifications */}
  <p className="my-title">{notification_stg.pushNotifications}</p>
  <div className="border border-gray-400 bg-white rounded-sm p-3 flex flex-row flex-wrap gap-6 w-full">
    <div className="flex flex-row justify-between items-center flex-1 min-w-[200px]">
      <div className='flex flex-col gap-1'>
        <p className="text-first font-medium">{notification_stg.pushNewOrder}</p>
        <p className="text-third text-sm">{notification_stg.pushNewOrderDesc}</p>
      </div>
      <Toggle_btn isActive={pushSettings.newOrder} onClick={() => setPushSettings(prev => ({ ...prev, newOrder: !prev.newOrder }))} />
    </div>

    <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
      <div className='flex flex-col gap-1'>
        <p className="text-first font-medium">{notification_stg.inventoryAlerts}</p>
        <p className="text-third text-sm">{notification_stg.inventoryAlertsDesc}</p>
      </div>
      <Toggle_btn isActive={pushSettings.inventoryAlerts} onClick={() => setPushSettings(prev => ({ ...prev, inventoryAlerts: !prev.inventoryAlerts }))} />
    </div>

    <div className="flex flex-row justify-between items-center flex-1 min-w-[300px]">
      <div className='flex flex-col gap-1'>
        <p className="text-first font-medium">{notification_stg.customerMessage}</p>
        <p className="text-third text-sm">{notification_stg.customerMessageDesc}</p>
      </div>
      <Toggle_btn isActive={pushSettings.customerMessage} onClick={() => setPushSettings(prev => ({ ...prev, customerMessage: !prev.customerMessage }))} />
    </div>
  </div>

  {/* Email Configuration */}
  <p className="my-title">{notification_stg.emailConfig}</p>
  {/* ... all input labels using notification_stg.fromName, etc. ... */}

  {/* Notification Preferences */}
  <p className='my-title'>{notification_stg.notificationPreferences}</p>
  <div className="flex flex-row flex-wrap gap-6 w-full mt-6">
    <div className="flex flex-col gap-1.5 flex-1 min-w-[300px] relative">
      <p className="text-first">{notification_stg.notificationFrequency}</p>
      <div className="relative">
        <select className="in-field text-third appearance-none cursor-pointer pr-10" value={notificationFrequency} onChange={(e) => setNotificationFrequency(e.target.value)}>
          <option value="immediate">{notification_stg.freqImmediate}</option>
          <option value="hourly">{notification_stg.freqHourly}</option>
          <option value="daily">{notification_stg.freqDaily}</option>
        </select>
        {/* arrow icon */}
      </div>
    </div>

    <div className="flex flex-row justify-between items-center flex-1 min-w-[300px] p-3">
      <div className="flex flex-col">
        <p className="text-first font-medium">{notification_stg.enableQuietHours}</p>
        <p className="text-third text-sm">{notification_stg.quietHoursDesc}</p>
      </div>
      <Toggle_btn isActive={quietHours} onClick={() => setQuietHours(prev => !prev)} />
    </div>
  </div>

  <div className='flex flex-row justify-end gap-4'>
    <White_button label={notification_stg.sendTestEmail} onClick={handleSendTestEmail} />
    <Purple_button label={notification_stg.saveSettings} onClick={handleSaveSettings} />
  </div>
</div>
    )
}

export default Page