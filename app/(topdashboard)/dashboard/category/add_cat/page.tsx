"use client";
import { useState } from 'react';
import { Upload, Filter, Settings } from 'lucide-react';
import { Cancel, Create } from '../../components/top_buttons';
import Top_area from '@/components/sidebar/top_area';
import { IoIosArrowDown } from 'react-icons/io';
import { Purple_button } from '../../components/top_buttons';
import { ADD_CAT } from '@/data/dashboard/constants';
export default function CategoryManagement() {
    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        sortOrder: '1',
        description: '',
        parentCategory: '',
        activeStatus: true,
        primaryCategory: false,
        categoryImage: null,
    });

    const [filters, setFilters] = useState([]);
    const [attributes, setAttributes] = useState([]);

    const [newFilter, setNewFilter] = useState({
        name: '',
        type: 'Default Text',
        required: false,
    });

    const [newAttribute, setNewAttribute] = useState({
        name: '',
        type: 'Default Text',
        defaultValue: '',
        required: false,
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        // Auto-generate slug from name
        if (field === 'name') {
            const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            setFormData(prev => ({ ...prev, slug }));
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData(prev => ({ ...prev, categoryImage: file }));
        }
    };

    const addFilter = () => {
        if (newFilter.name && newFilter.type) {
            setFilters([...filters, { ...newFilter, id: Date.now() }]);
            setNewFilter({ name: '', type: 'Default Text', required: false });
        }
    };

    const removeFilter = (id) => {
        setFilters(filters.filter(f => f.id !== id));
    };

    const addAttribute = () => {
        if (newAttribute.name && newAttribute.type) {
            setAttributes([...attributes, { ...newAttribute, id: Date.now() }]);
            setNewAttribute({ name: '', type: 'Default Text', defaultValue: '', required: false });
        }
    };

    const removeAttribute = (id) => {
        setAttributes(attributes.filter(a => a.id !== id));
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);
        console.log('Filters:', filters);
        console.log('Attributes:', attributes);
        alert('Category saved successfully!');
    };
    const handleCancel = () => {
        window.history.back();
    }

    return (
        <div className="container my-13 min-h-screen bg-gray-20 ">
            <div className="max-w-8xl mx-auto bg-white shadow-sm rounded-md p-4">

                {/* Header */}
                <div className='my-5'>

                    <Top_area
                        title="Add Category"
                        desc=""
                        components={[<Cancel key={1} onClick={handleCancel} />, <Create key={2} onClick={handleSubmit} />]}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Left Column */}
                    <div className="space-y-6">

                        {/* Name Field */}
                        <div className="">
                            <label className="block text-first font-medium text-gray-700 mb-2 ml-3">
                                {ADD_CAT.t1}
                            </label>
                            <input
                                type="text"
                                placeholder={ADD_CAT.d1}
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="light-purple w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>

                        {/* Slug Field */}
                        <div className="">
                            <label className="block text-first font-medium text-gray-700 mb-2 ml-3">
                                {ADD_CAT.t2}
                            </label>
                            <input
                                type="text"
                                placeholder={ADD_CAT.d2}
                                value={formData.slug}
                                onChange={(e) => handleInputChange('slug', e.target.value)}
                                className="light-purple w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <p className="text-xs text-gray-500 mt-2">{ADD_CAT.des1}</p>
                        </div>

                        {/* Sort Order Field */}
                        <div className="">
                            <label className="block text-first font-medium text-gray-700 mb-2 ml-3">
                                {ADD_CAT.t3}
                            </label>
                            <input
                                type="number"
                                placeholder="1"
                                value={formData.sortOrder}
                                onChange={(e) => handleInputChange('sortOrder', e.target.value)}
                                className="light-purple w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <p className="text-xs text-gray-500 mt-2">{ADD_CAT.des2}</p>
                        </div>

                        {/* Description Field */}
                        <div className="">
                            <label className="block text-first font-medium text-gray-700 mb-2 ml-3">
                                {ADD_CAT.t4}
                            </label>
                            <textarea
                                placeholder={ADD_CAT.d4}
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                rows={7}
                                className="light-purple w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                            />
                        </div>

                        {/* Category Filters */}
                        <h3 className="text-first font-semibold text-gray-900 mb-4 ml-3">{ADD_CAT.t5}</h3>
                        <div className="light-purple rounded-lg shadow p-6">

                            {filters.length === 0 ? (
                                <div className="text-center py-8 text-gray-400">
                                    <Filter className="w-12  mx-auto mb-2 opacity-50" />
                                    <p className="text-sm">{ADD_CAT.d51}</p>
                                    <p className="text-xs mt-1">{ADD_CAT.d52}</p>
                                </div>
                            ) : (
                                <div className="space-y-2 mb-4">
                                    {filters.map((filter) => (
                                        <div key={filter.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div>
                                                <p className="font-medium text-sm text-gray-900">{filter.name}</p>
                                                <p className="text-xs text-gray-500">{filter.type}</p>
                                            </div>
                                            <button
                                                onClick={() => removeFilter(filter.id)}
                                                className="text-red-500 hover:text-red-700 text-sm font-medium"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Category Attributes */}
                        <h3 className="text-first font-semibold text-gray-900 mb-4 ml-3">{ADD_CAT.t6}</h3>
                        <div className="light-purple rounded-lg shadow p-6">

                            {attributes.length === 0 ? (
                                <div className="text-center py-8 text-gray-400">
                                    <Settings className="w-12 h-20 mx-auto mb-2 opacity-50" />
                                    <p className="text-sm">{ADD_CAT.d61}</p>
                                    <p className="text-xs mt-1">{ADD_CAT.d62}</p>
                                </div>
                            ) : (
                                <div className="space-y-2 mb-4">
                                    {attributes.map((attr) => (
                                        <div key={attr.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div>
                                                <p className="font-medium text-sm text-gray-900">{attr.name}</p>
                                                <p className="text-xs text-gray-500">{attr.type}</p>
                                            </div>
                                            <button
                                                onClick={() => removeAttribute(attr.id)}
                                                className="text-red-500 hover:text-red-700 text-sm font-medium"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">

                        {/* Parent Category */}
                        <label className="block text-first font-medium text-gray-700 mb-2 ml-3">
                            {ADD_CAT.t7}
                        </label>
                        <div className="relative w-full group">
                            {/* Select */}
                            <select
                                value={formData.parentCategory}
                                onChange={(e) =>
                                    handleInputChange('parentCategory', e.target.value)
                                }
                                className="light-purple w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
                            >
                                <option value="">{ADD_CAT.d71}</option>
                                <option value="clothing">{ADD_CAT.d72}</option>
                                <option value="electronics">{ADD_CAT.d73}</option>
                                <option value="home">{ADD_CAT.d74}</option>
                                <option value="sports">{ADD_CAT.d75}</option>
                            </select>

                            {/* Vertical line — full height, just left of arrow */}
                            <div className="absolute top-0 bottom-0 right-10 w-[2px] bg-gray-300 rounded pointer-events-none" />

                            {/* Arrow icon — flips on focus (no JS/state) */}
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none transition-transform duration-300 group-focus-within:rotate-180">
                                <IoIosArrowDown size={20} className="text-gray-00" />
                            </div>
                        </div>

                        {/* Status Toggles */}
                        <label className="block text-first font-medium text-gray-700 mb-2 ml-3">
                            {ADD_CAT.t8}
                        </label>
                        <div className="light-purple rounded-lg shadow p-6">

                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{ADD_CAT.d81}</p>
                                        <p className="text-xs text-gray-500">{ADD_CAT.d811}</p>
                                    </div>
                                    <button
                                        onClick={() => handleInputChange('activeStatus', !formData.activeStatus)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.activeStatus ? 'bg-purple-600' : 'bg-gray-300'
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.activeStatus ? 'translate-x-6' : 'translate-x-1'
                                                }`}
                                        />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{ADD_CAT.d82}</p>
                                        <p className="text-xs text-gray-500">{ADD_CAT.d821}</p>
                                    </div>
                                    <button
                                        onClick={() => handleInputChange('primaryCategory', !formData.primaryCategory)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.primaryCategory ? 'bg-purple-600' : 'bg-gray-300'
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.primaryCategory ? 'translate-x-6' : 'translate-x-1'
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Category Image */}
                        <label className="block text-first font-medium text-gray-700 mb-2 mt-11 ml-3">
                            {ADD_CAT.t9}
                        </label>
                        <div className="light-purple rounded-lg shadow p-6">

                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
                                <input
                                    type="file"
                                    id="image-upload"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                                <label htmlFor="image-upload" className="cursor-pointer">
                                    <Upload className="w-10 h-7 mx-auto mb-2 text-gray-400" />
                                    <p className="text-sm text-gray-600">
                                        {`${formData.categoryImage} ? formData.categoryImage.name : ${ADD_CAT.d9}`}
                                    </p>
                                </label>
                            </div>
                        </div>

                        {/* Add New Filter */}
                        <h3 className="text-first font-semibold text-gray-900 mb-4 ml-3">{ADD_CAT.t10}</h3>
                        <div className="light-purple rounded-lg shadow p-6">

                            <div className="space-y-10">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">{ADD_CAT.d101}</label>
                                        <input
                                            type="text"
                                            placeholder={ADD_CAT.d1011}
                                            value={newFilter.name}
                                            onChange={(e) => setNewFilter({ ...newFilter, name: e.target.value })}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">{ADD_CAT.d102}</label>
                                        <div className="relative w-full group">

                                            <select
                                                value={newFilter.type}
                                                onChange={(e) =>
                                                    setNewFilter({ ...newFilter, type: e.target.value })
                                                }
                                                className="w-full px-3 py-2 pr-12 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
                                            >
                                                <option>Default Text</option>
                                                <option>Dropdown</option>
                                                <option>Checkbox</option>
                                                <option>Radio</option>
                                            </select>

                                            <div className="absolute top-0 bottom-0 right-9 w-[2px] bg-gray-300 rounded pointer-events-none" />

                                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none transition-transform duration-300 group-focus-within:rotate-180">
                                                <IoIosArrowDown size={18} className="text-gray-600" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center space-x-2">
                                        <button
                                            type="button"
                                            onClick={() => setNewFilter({ ...newFilter, required: !newFilter.required })}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${newFilter.required ? 'bg-purple-600' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${newFilter.required ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                        <span className="text-sm text-gray-700">{ADD_CAT.d103}</span>
                                    </label>


                                    <Purple_button label='Add Filter' onClick={addFilter} />
                                </div>
                            </div>
                        </div>

                        {/* Add New Attributes */}
                        <h3 className="text-first font-semibold text-gray-900 mb-4 ml-3">{ADD_CAT.t11}</h3>
                        <div className="light-purple bg-white rounded-lg shadow p-6">

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">{ADD_CAT.d111}</label>
                                        <input
                                            type="text"
                                            placeholder={ADD_CAT.d1111}
                                            value={newAttribute.name}
                                            onChange={(e) => setNewAttribute({ ...newAttribute, name: e.target.value })}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">{ADD_CAT.d112}</label>
                                        <div className="relative w-full group">
                                            {/* Select */}
                                            <select
                                                value={newAttribute.type}
                                                onChange={(e) =>
                                                    setNewAttribute({ ...newAttribute, type: e.target.value })
                                                }
                                                className="w-full px-3 py-2 pr-12 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
                                            >
                                                <option>Default Text</option>
                                                <option>Number</option>
                                                <option>Date</option>
                                                <option>Boolean</option>
                                            </select>

                                            {/* Gray vertical line (full height, left of arrow) */}
                                            <div className="absolute top-0 bottom-0 right-9 w-[2px] bg-gray-300 rounded pointer-events-none" />

                                            {/* Gray arrow icon (flips on focus/open) */}
                                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none transition-transform duration-300 group-focus-within:rotate-180">
                                                <IoIosArrowDown size={18} className="text-gray-600" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">{ADD_CAT.d113}</label>
                                    <input
                                        type="text"
                                        placeholder={ADD_CAT.d1131}
                                        value={newAttribute.defaultValue}
                                        onChange={(e) => setNewAttribute({ ...newAttribute, defaultValue: e.target.value })}
                                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center space-x-2">
                                        <button
                                            type="button"
                                            onClick={() => setNewAttribute({ ...newAttribute, required: !newAttribute.required })}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${newAttribute.required ? 'bg-purple-600' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${newAttribute.required ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                        <span className="text-sm text-gray-700">{ADD_CAT.d114}</span>
                                    </label>

                                    <Purple_button label='Add Attributes' onClick={addAttribute} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}