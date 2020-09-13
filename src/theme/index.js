import { createMuiTheme } from '@material-ui/core/styles';
import overrides from './overrides';
import palette from './palette';
import typography from './typography';

const theme = createMuiTheme({
  palette,
  typography,
  overrides,
  themeName: 'JPR',
});

export default theme;
