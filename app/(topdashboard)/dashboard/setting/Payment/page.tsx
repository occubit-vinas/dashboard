'use client';
import React, { useState } from 'react';
import Type_box from './Type_box';
import Stripeform from './Stripeform';
import Paypalform from './Paypalform';
import Bankform from './Bankform';
import Cashform from './Cashform';
import { Purple_button, Toggle_btn } from '../../components/top_buttons';
const Page = () => {

  const defaultcard = [
    {
      img: '/dashboard/card.png',
      title: 'Stripe',
      desc: 'Accept credit and debit cards',
      active: true,
      setup: false,
      details: { Publishable_key: '', Secret_key: '' },
    },
    {
      img: '/dashboard/paypal.png',
      title: 'PayPal',
      desc: 'PayPal Payment',
      active: false,
      setup: false,
      details: { Client_ID: '', Client_Secret: '' },
    },
    {
      img: '/dashboard/bank.png',
      title: 'Bank Transfer',
      desc: 'Direct bank transfer',
      active: false,
      setup: false,
      details: { Account_Name: '', Account_Number: '', Routing_Number: '', Bank_Name: '' },
    },
    {
      img: '/dashboard/cash.png',
      title: 'Cash On Delivery',
      desc: 'Pay When You Receive',
      active: false,
      setup: false,
      details: { Extra_fee: '', Maximum_Order_Amount: '' },
    },
  ]
  const [cards, setCards] = useState(defaultcard);

  const [openFormIndex, setOpenFormIndex] = useState<number | null>(null);
  const [inclusiveprice,setinclusiveprice]=useState(false);
  const handleBoxClick = (index: number) => {
    const card = cards[index];
    if (!card.setup) {
      setOpenFormIndex(index);
    }
  };
  const handleEditClick = (index) => {
    setOpenFormIndex(index);
  };
  const handleDelete = (index) => {
    setCards((prevCards) =>
      prevCards.map((c, i) =>
        i === index ? { ...defaultcard[i] } : c // reset to original
      )
    );
  };

  const closeForm = () => setOpenFormIndex(null);

  return (
    <div className="mt-6 bg-white shadow-sm rounded-sm flex flex-col gap-6 p-3">
      <h1 className="my-title  mb-2">Payment Methods</h1>

      <div className="flex flex-row justify-between gap-1.5 item-start h-auto ">
        {cards.map((cur, index) => (
          <Type_box
            key={index}
            img={cur.img}
            title={cur.title}
            desc={cur.desc}
            active={cur.active}
            index={index}
            setCard={setCards}
            setup={cur.setup}
            onBoxClick={() => handleBoxClick(index)}
            onEditClick={() => handleEditClick(index)}
            onDeleteClick={() => handleDelete(index)}
          />
        ))}
      </div>

      {/* ✅ Modal Overlay */}
      {openFormIndex !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50"
          onClick={closeForm}
        >
          <div
            className="relative bg-white p-6 rounded-md shadow-md w-[500px] max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {cards[openFormIndex].title === 'Stripe' && (
              <Stripeform
                onClose={closeForm}
                index={openFormIndex}
                card={cards[openFormIndex]}
                setCards={setCards}
              />
            )}
            {cards[openFormIndex].title === 'PayPal' && (
              <Paypalform
                onClose={closeForm}
                index={openFormIndex}
                card={cards[openFormIndex]}
                setCards={setCards}
              />
            )}
            {cards[openFormIndex].title === 'Bank Transfer' && (
              <Bankform
                onClose={closeForm}
                index={openFormIndex}
                card={cards[openFormIndex]}
                setCards={setCards}
              />
            )}
            {cards[openFormIndex].title === 'Cash On Delivery' && (
              <Cashform
                onClose={closeForm}
                index={openFormIndex}
                card={cards[openFormIndex]}
                setCards={setCards}
              />
            )}
          </div>
        </div>
      )}
      <div className='flex flex-col gap-3'>
        <p className='my-title mt-4'>Tax Setting</p>

        <p className='text-first'>text rate</p>
        <div className='flex flex-row justify-start gap-4 items-center'>
          <input
            type='number'
            placeholder='12'
            className='p-1.5 bg-purple-50 border-2 border-gray-100 rounded-sm w-[450px]'
          />
          <Toggle_btn className='mt-2' isActive={inclusiveprice} onClick={()=>setinclusiveprice(!inclusiveprice)}/>
          <p className='text-sm '>Tax inclusive Pricing</p>
        </div>

      </div>
      <div className='flex justify-end'>
                <Purple_button label='save payment settings'/>
      </div>
    </div>
  );
};

export default Page;
