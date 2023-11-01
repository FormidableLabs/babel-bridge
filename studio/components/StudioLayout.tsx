import {LayoutProps} from 'sanity'
import {SupportedLanguagesContextProvider} from './SupportedLanguages/hooks/useSupportedLanguages'

export const StudioLayout = (props: LayoutProps) => {
  return (
    <SupportedLanguagesContextProvider>
      {props.renderDefault(props)}
    </SupportedLanguagesContextProvider>
  )
}
