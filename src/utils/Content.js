import { useSelector } from 'react-redux'

const checkLanguage = (allData, language) => {
  return allData.find(item => item.sourceInstanceName === language)
}

const setDataObject = (allData, language) => {
  const data = checkLanguage(allData, language);
  for(let key in data){
    if(data[key] !== null && typeof data[key] === 'object'){
     return data[key]
    }
  }
}

const Content = (query) => {
  const state = useSelector(props => props);
  return setDataObject(query, state.languageValue)
}


export default Content




