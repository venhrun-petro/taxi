import initialState from '~r/initialState'

export default (state = initialState, action) => {
  switch (action.type){
    case 'ChangeLanguageKey':
      return { ...state, languageValue: action.value};
    default:
      return state
  } 
} 