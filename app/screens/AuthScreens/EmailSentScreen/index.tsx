import {useNavigation, useRoute} from '@react-navigation/native';
import {AuthForm} from '../../../feature/Auth/components/AuthForm';
import {Button} from '../../../ui/Button';
import {AppLayout} from '../../../shared/components/AppLayout';
import {Typography} from '../../../ui/Typography';
import {convertToSecureEmail} from '../../../shared/utils/convertToSecureEmail';
import {pixelSizeVertical} from '../../../shared/theme/metrics';
import {PATH} from '../../../shared/constants/path';

const EmailSentScreen = () => {
  const {
    params: {email},
  } = useRoute();

  const {navigate} = useNavigation();

  const routeConfirmCode = () => {
    navigate(PATH.ConfirmationCode.pathname, {
      email,
    });
  };

  const emailContent = (
    <Typography variant="headline" weight="semibold">
      {convertToSecureEmail(email)}
    </Typography>
  );

  return (
    <AppLayout>
      <AuthForm
        title="Email Sent"
        info={
          <Typography variant="headline">
            We sent an email to {emailContent} with a link to get back into your
            account.
          </Typography>
        }>
        <Button
          style={{marginTop: pixelSizeVertical(24)}}
          variant="outlined"
          onPress={routeConfirmCode}>
          Close
        </Button>
      </AuthForm>
    </AppLayout>
  );
};

export default EmailSentScreen;
