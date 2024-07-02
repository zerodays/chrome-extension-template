import { useTranslation } from 'react-i18next';
import { Button } from './components/ui/button';

export const InjectContent = () => {
  const { t } = useTranslation('common');

  return (
    <div className="ex-fixed ex-bottom-0 ex-left-0 ex-right-0 ex-top-0 ex-z-50 ex-flex ex-items-center ex-justify-center">
      <div style={{ fontSize: 100 }}>
        <Button onClick={() => console.log('Button working')}>
          {t('welcome')}
        </Button>
      </div>
    </div>
  );
};
