import React from 'react';

import ChatBot from 'react-simple-chatbot';

const cropPrices = {
wheat: '₹2,500 per quintal',
rice: '₹3,200 per quintal',
maize: '₹1,800 per quintal',
pulses: '₹4,000 per quintal',
cotton: '₹5,500 per quintal',
};

const predictedPrices = {
wheat: {
1: '₹2,600',
3: '₹2,700',
6: '₹2,800',
},
rice: {
1: '₹3,300',
3: '₹3,400',
6: '₹3,500',
},
maize: {
1: '₹1,900',
3: '₹2,000',
6: '₹2,100',
},
pulses: {
1: '₹4,100',
3: '₹4,200',
6: '₹4,300',
},
cotton: {
1: '₹5,600',
3: '₹5,700',
6: '₹5,800',
},
};

const FasalSarthiChatBot = () => {
const steps = [
{
id: '0',
message: 'Hey! Welcome to Fasal Sarthi. How can I help you?',
trigger: 'options',
},
{
id: 'options',
options: [
{ value: 'live-prices', label: 'Live Prices', trigger: 'crop-options' },
{ value: 'price-prediction', label: 'Price Prediction', trigger: 'crop-options-prediction' },
],
},
{
id: 'crop-options',
message: 'Please select a crop:',
trigger: 'crop-list',
},
{
id: 'crop-list',
options: [
{ value: 'wheat', label: 'Wheat', trigger: 'wheat-price' },
{ value: 'rice', label: 'Rice', trigger: 'rice-price' },
{ value: 'maize', label: 'Maize', trigger: 'maize-price' },
{ value: 'pulses', label: 'Pulses', trigger: 'pulses-price' },
{ value: 'cotton', label: 'Cotton', trigger: 'cotton-price' },
],
},
{
id: 'wheat-price',
message: `The price of Wheat is ${cropPrices.wheat}.`,
trigger: 'end',
},
{
id: 'rice-price',
message: `The price of Rice is ${cropPrices.rice}.`,
trigger: 'end',
},
{
id: 'maize-price',
message: `The price of Maize is ${cropPrices.maize}.`,
trigger: 'end',
},
{
id: 'pulses-price',
message: `The price of Pulses is ${cropPrices.pulses}.`,
trigger: 'end',
},
{
id: 'cotton-price',
message: `The price of Cotton is ${cropPrices.cotton}.`,
trigger: 'end',
},
{
id: 'crop-options-prediction',
message: 'Please select a crop for price prediction:',
trigger: 'crop-list-prediction',
},
{
id: 'crop-list-prediction',
options: [
{ value: 'wheat', label: 'Wheat', trigger: 'wheat-prediction' },
{ value: 'rice', label: 'Rice', trigger: 'rice-prediction' },
{ value: 'maize', label: 'Maize', trigger: 'maize-prediction' },
{ value: 'pulses', label: 'Pulses', trigger: 'pulses-prediction' },
{ value: 'cotton', label: 'Cotton', trigger: 'cotton-prediction' },
],
},
{
id: 'wheat-prediction',
message: `Predicted prices for Wheat: 1 month - ${predictedPrices.wheat[1]}, 3 months - ${predictedPrices.wheat[3]}, 6 months - ${predictedPrices.wheat[6]}.`,
trigger: 'end',
},
{
id: 'rice-prediction',
message: `Predicted prices for Rice: 1 month - ${predictedPrices.rice[1]}, 3 months - ${predictedPrices.rice[3]}, 6 months - ${predictedPrices.rice[6]}.`,
trigger: 'end',
},
{
id: 'maize-prediction',
message: `Predicted prices for Maize: 1 month - ${predictedPrices.maize[1]}, 3 months - ${predictedPrices.maize[3]}, 6 months - ${predictedPrices.maize[6]}.`,
trigger: 'end',
},
{
id: 'pulses-prediction',
message: `Predicted prices for Pulses: 1 month - ${predictedPrices.pulses[1]}, 3 months - ${predictedPrices.pulses[3]}, 6 months - ${predictedPrices.pulses[6]}.`,
trigger: 'end',
},
{
id: 'cotton-prediction',
message: `Predicted prices for Cotton: 1 month - ${predictedPrices.cotton[1]}, 3 months - ${predictedPrices.cotton[3]}, 6 months - ${predictedPrices.cotton[6]}.`,
trigger: 'end',
},
{
id: 'end',
message: 'Thank you for using Fasal Sarthi! Bye!',
end: true,
},
];

return (
<div>
<ChatBot steps={steps} />
</div>
);
};

export default FasalSarthiChatBot;
