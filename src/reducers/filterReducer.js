const recommendedItems = [
    {
        name: 'Gorilla',
        section: "popular"
    },
    {
        name: 'Goat',
        section: "featured"
    },
    {
        name: 'Goose',
        section: "popular"
    },
    {
        name: 'Ant',
        section: "popular"
    },
    {
        name: 'Antelope',
        section: "best"
    },
    {
        name: 'Ape',
        section: "popular"
    },
    {
        name: 'Ancorvy fish',
        section: "popular"
    },
]


const FilterReducer = (state = recommendedItems,action) => {
    switch(action.type) {
        case 'FILTER_SECTION':
            const filteredItem = state.recommendedItems.find(item => {
                // Replace this condition with your own filtering criteria
            return item.section=== action.payload;
          });
          console.log(filteredItem);
          return {...state, recommendedItems: [filteredItem]};
      
        default:
          return state;
      }
     
}

export default FilterReducer;
