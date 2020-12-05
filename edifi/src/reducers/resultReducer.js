import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, DELETE_ALL, ITEMS_LOADING } from '../actions/types'

const initialState = [{profName: 'Sam Birkeby',
                         profTitle: 'iOS Engineer',
                         activityTitle: `I have a presentation on agile design and
                                        how it is implemented within my team.`,
                         photo: '87.jpg',
                        },
                        {profName: 'Angela Cray',
                         profTitle: 'Machine Learning Engineer',
                         activityTitle: `I have a workshop on creating ML programs
                                         for stock market predictions`,
                         photo: '57.jpg',
                        },
                        {profName: 'Yatin Arora',
                        profTitle: 'DevOps/Automation Engineer',
                        activityTitle: `I would like to speak on the topic of DevOps
                                        and explain how many daily proccess can be
                                        automated!`,
                        photo: '48.jpg',
                       }];

const emptyState = [];

/* Template code. Will be changed upon completion of backend
*/
export default function(state = emptyState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                loading: true
            }
        /*
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        */
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case DELETE_ALL:
            return initialState;
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