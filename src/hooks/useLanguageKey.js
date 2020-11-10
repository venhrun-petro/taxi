import { useEffect } from 'react'
import { languageKey } from '~r/actions'

function useLanguageKey(dispatch, langKey) {
  useEffect(() => {
    dispatch(languageKey(langKey));
  }, [])
}

export default useLanguageKey
