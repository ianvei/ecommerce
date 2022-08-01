import menBlackTee from './images/men-t-shirt-black-2017-1.jpg__300x300_q85_crop_subsampling-2_upscale.jpg'
import menGreyTee from './images/men-t-shirt-grey-2017-1.jpg__300x300_q85_crop_subsampling-2_upscale.jpg'
import womenBlackTee from './images/women-t-shirt-black-2017-1.jpg__300x300_q85_crop_subsampling-2_upscale.jpg'
import womenGreyTee from './images/women-t-shirt-grey-2017-1.jpg__300x300_q85_crop_subsampling-2_upscale.jpg'


const merchData = [
    {
        id: "mbt00",
        name: "Men's T-Shirt Black",
        description: 'White Ableton logo on front, small "Ableton" on back. 100% cotton, classic cut.',
        images: {
            staticImg: menBlackTee
        }, 
        price: 40,
        size: ''
    },
    {
        id: "mgt00",
        name: "Men's T-Shirt Grey",
        description: 'Black Ableton logo on front, small "Ableton" on back. 85% cotton, 15% viscose, classic cut.',
        images: {
            staticImg: menGreyTee
        } , 
        price: 40,
        size: ''
        
    },
    {
        id: "wbt00",
        name: "Women's T-Shirt Black",
        description: 'White Ableton logo on front, small "Ableton" on back. 100% cotton, regular fit.',
        images: {
            staticImg: womenBlackTee
        }, 
        price: 40,
        size: ''
        
    },
    {
        id: "wgt00",
        name: "Women's T-Shirt Grey",
        description: 'Black Ableton logo on front, small "Ableton" on back. 85% cotton, 15% viscose, regular fit.',
        images: {
            staticImg: womenGreyTee
        }, 
        price: 40,
        size: ''
        
    },
    
]

export default merchData;