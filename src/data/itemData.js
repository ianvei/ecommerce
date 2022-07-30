import genLoss from './images/generationloss.jpeg'
import genLossHover from './images/Generation+Loss+MKII_Pedal_Chase+Bliss_Wide_Rollover.jpeg'
import habit from './images/Habit_Pedal_Chase+Bliss_Wide.jpeg'
import habitHover from './images/Habit_Pedal_Chase+Bliss_Wide_Rollover.jpeg'
import cxm from './images/CXM+1978_Automatone_Pedal_Chase+Bliss_Wide.jpeg'
import cxmHover from './images/CXM+1978_Automatone_Pedal_Chase+Bliss_Wide_Rollover.jpeg'
import blooper from './images/Blooper_Pedal_Chase+Bliss_Wide.jpeg'
import blooperHover from './images/blooper_Pedal_Chase+Bliss_Wide_Rollover.jpeg'
import mood from './images/MOOD_Pedal_Chase+Bliss_Wide.jpeg'
import moodHover from './images/MOOD_Pedal_Chase+Bliss_Wide_Rollover.jpeg'
import thermae from './images/Thermae_Pedal_Chase+Bliss_Wide.jpeg'
import thermaeHover from './images/Thermae_Pedal_Chase+Bliss_Wide_Rollover.jpeg'

const itemData = [
    {
        name: 'Generation Loss MKII',
        description: 'Generation Loss MKII is a study of tape in all its forms.',
        images: {
            static: genLoss,
            hover: genLossHover,
        },
        price: 399
        
    },
    {
        name: 'Habit',
        description: 'Musical sketchpad. Compositional delay.',
        images: {
            static: habit,
            hover: habitHover,
        },
        price: 399,
    },
    {
        name: 'CXM 1978',
        description: "Reflections of the 70s.",
        images: {
            static: cxm,
            hover: cxmHover,
        },
        price: 899,
    },
    {
        name: 'blooper',
        description: 'Performance looper with additive sound design.',
        images: {
            static: blooper,
            hover: blooperHover,
        },
        price: 499,
    },
    {
        name: 'mood',
        description: 'Two channels of spatial chemistry.',
        images: {
            static: mood,
            hover: moodHover,
        },
        price: 349,
    },
    {
        name: 'thermae',
        description: "Analog delay that thinks it's a synth.",
        images: {
            static: thermae,
            hover: thermaeHover,
        },
        price: 499,
    },
    
]

export default itemData;