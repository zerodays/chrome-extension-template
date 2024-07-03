import 'react';
import { useTranslation } from 'react-i18next';
import './globals.css';
import ZodiosClientExample from './zodios-client-example';

function App() {
  const { t } = useTranslation('common');
  return (
    <div className="ex-w-96">
      {t('welcome')}
      <ZodiosClientExample />
    </div>
  );
}

export default App;
