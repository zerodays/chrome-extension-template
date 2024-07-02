import 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

function App() {
  const { t } = useTranslation('common');
  return <div>{t('Welcome to React')}</div>;
}

export default App;
