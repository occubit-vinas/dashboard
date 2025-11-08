"use client";

import { useState } from 'react';
import { X, Percent, DollarSign, Truck, Calendar } from 'lucide-react';
import styles from './page.module.css';
import { White_button,Purple_button } from '../top_buttons';
export default function Add_coupon_box({onClick}) {
  
  const [formData, setFormData] = useState({
    couponCode: 'SAVE20',
    description: '20% off on all items - limited time offer',
    discountType: 'percentage',
    percentage: '20',
    fixedAmount: '',
    minOrderAmount: '50.00',
    maxDiscountAmount: '100.00',
    usageLimit: '100',
    startDate: '',
    endDate: '',
    isActive: true,
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateCouponCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setFormData(prev => ({ ...prev, couponCode: code }));
  };

  const handleSubmit = () => {
    console.log('Coupon Data:', formData);
    alert('Coupon created successfully!');
    setIsOpen(false);
  };

  

  return (
    <div className="fixed inset-0 bg-black-100 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
          <div>
            <h2 className={styles.title}>Create New Coupon</h2>
            <p className={`${styles.subtitle} mt-1`}>Create a new discount coupon to offer to your customers.</p>
          </div>
          <button
            onClick={onClick}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            {/* <X className="w-5 h-5" onClick={onClick}/> */}
            <Image src='/dashboard/close-circle-black.png' className='w-5 h-5' alt='img' height={10} width={10} onClick={onClick}/>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Coupon Code */}
          <div>
            <label className={`block ${styles.sectionHeading} mb-2`}>
              Coupon Code
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={formData.couponCode}
                onChange={(e) => handleInputChange('couponCode', e.target.value.toUpperCase())}
                placeholder="SAVE20"
                className={`flex-1 px-4 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 ${styles.subtitle}`}
              />
              <Purple_button
                onClick={generateCouponCode}
                label='Generate'
                // className="px-6 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
              >
                
              </Purple_button>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className={`block  mb-2 ${styles.sectionHeading}`}>
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="20% off on all items - limited time offer"
              rows={3}
              maxLength={200}
              className={`w-full px-4 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${styles.subtitle}`}
            />
            <p className="text-xs text-gray-500 mt-1 text-right">{formData.description.length}/200</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            
            {/* Discount Type */}
            <div>
              <label className={`${styles.sectionHeading} block  mb-2`}>
                Discount Type
              </label>
              <div className="relative">
                <select
                  value={formData.discountType}
                  onChange={(e) => handleInputChange('discountType', e.target.value)}
                  className={`w-full px-4 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none text-gray-900 pr-10 ${styles.subtitle}`}
                >
                  <option value="percentage">% Percentage discount</option>
                  <option value="fixed">Fixed amount discount</option>
                  <option value="free-shipping">Free shipping</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  {formData.discountType === 'percentage' && <Percent className="w-4 h-4 text-gray-500" />}
                  {formData.discountType === 'fixed' && <DollarSign className="w-4 h-4 text-gray-500" />}
                  {formData.discountType === 'free-shipping' && <Truck className="w-4 h-4 text-gray-500" />}
                </div>
              </div>
            </div>

            {/* Percentage/Fixed Amount Input */}
            {formData.discountType === 'percentage' && (
              <div>
                <label className={`${styles.sectionHeading} block  mb-2`}>
                  Percentage (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.percentage}
                    onChange={(e) => handleInputChange('percentage', e.target.value)}
                    placeholder="20"
                    min="0"
                    max="100"
                    className={`w-full px-4 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${styles.subtitle}`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">%</span>
                </div>
                <p className={`mt-1.5 ${styles.subtitle}`}>Cap the maximum discount for percentage-based coupons</p>
              </div>
            )}

            {formData.discountType === 'fixed' && (
              <div>
                <label className={`block  mb-2 ${styles.sectionHeading}`}>
                  Fixed Amount ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="number"
                    value={formData.fixedAmount}
                    onChange={(e) => handleInputChange('fixedAmount', e.target.value)}
                    placeholder="10.00"
                    min="0"
                    step="0.01"
                    className="w-full pl-8 pr-4 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Fixed discount amount for this coupon</p>
              </div>
            )}

            {formData.discountType === 'free-shipping' && (
              <div className="flex items-center justify-center">
                <div className="text-center py-4">
                  <Truck className="w-12 h-12 mx-auto text-purple-600 mb-2" />
                  <p className="text-sm text-gray-500">Free shipping will be applied</p>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            
            {/* Minimum Order Amount */}
            <div>
              <label className={` ${styles.sectionHeading} block  mb-2`}>
                Minimum Order Amount ($)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                <input
                  type="number"
                  value={formData.minOrderAmount}
                  onChange={(e) => handleInputChange('minOrderAmount', e.target.value)}
                  placeholder="50.00"
                  min="0"
                  step="0.01"
                  className={`w-full pl-8 pr-4 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${styles.subtitle} `}
                />
              </div>
            </div>

            {/* Maximum Discount Amount */}
            <div>
              <label className={`${styles.sectionHeading} block  mb-2`}>
                Maximum Discount Amount ($)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                <input
                  type="number"
                  value={formData.maxDiscountAmount}
                  onChange={(e) => handleInputChange('maxDiscountAmount', e.target.value)}
                  placeholder="100.00"
                  min="0"
                  step="0.01"
                  className={`w-full pl-8 pr-4 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${styles.subtitle}`}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            
            {/* Usage Limit */}
            <div>
              <label className={`${styles.sectionHeading} block  mb-2`}>
                Usage Limit
              </label>
              <input
                type="number"
                value={formData.usageLimit}
                onChange={(e) => handleInputChange('usageLimit', e.target.value)}
                placeholder="100"
                min="0"
                className={`w-full px-4 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${styles.subtitle}`}
              />
              <p className="text-xs text-gray-400 mt-1.5">Leave empty for unlimited uses</p>
            </div>

            {/* Start Date */}
            <div>
              <label className={`block  mb-2 ${styles.sectionHeading}`}>
                Start Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className={`w-full px-4 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${styles.subtitle}`}
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">Leave empty for no expiration</p>
            </div>

            {/* End Date */}
            <div>
              <label className={`${styles.sectionHeading} block  mb-2`}>
                End Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  className={`w-full px-4 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${styles.subtitle}`}
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">Leave empty for no expiration</p>
            </div>
          </div>

          {/* Activate Coupon */}
          <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
            <div>
              <p className="text-base font-medium text-gray-700">Activate Coupon</p>
              <p className="text-xs text-gray-500 mt-1">Coupon will be immediately available for use</p>
            </div>
            <button
              onClick={() => handleInputChange('isActive', !formData.isActive)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                formData.isActive ? 'bg-black' : 'bg-gray-400'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  formData.isActive ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex justify-end gap-3">
          <White_button
            onClick={onClick}
            label='Close'
            // className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-purple-50 transition-colors"
          >
            
          </White_button>
          <Purple_button
            onClick={handleSubmit}
            label=' Create Coupon'
            // className="px-6 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
           
          </Purple_button>
        </div>
      </div>
    </div>
  );
}