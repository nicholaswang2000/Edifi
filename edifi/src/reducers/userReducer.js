import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types'

const initialState = {  userName: 'Brandon Wilson',
                        userSchool: 'Antelope High School',
                        userDescription: `I’ve been teaching computer science at Antelope High School for 5 
                                            years now. Teaching isn’t just an occupation, it’s a lifestyle. 
                                            I’ve been looking to expose my students to the oppurtunities of 
                                            CS after high school, should they choose to continue this path.`,
                        oppurtunities: [{
                                        title: 'Looking For: Cyber Security Analyst',
                                        description: `I teach a cyber security class.  The class mostly consists of 
                                                                Seniors with proffiecent programming knowledge. I would love 
                                                                for my students to see the day-to-day of a real Security Analyst.`
                                        },
                                        {
                                        title: 'Looking For: Mobile Developer',
                                        description: `In my capstone course, several students are developing apps as their final
                                                      project. I think getting advice for mobile dev from a mobile developer would
                                                      really push them to go above and beyond with their projexts`
                                        }],
                        
};
/* Template code. Will be changed upon completion of backend
*/
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    } 
}