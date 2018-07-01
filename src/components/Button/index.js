// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

type Props = {
  isLoading?: boolean,
  label?: string
};
const CustomButton = (props: Props & any) => {
  return (
    <Button {...props}>
      {props.isLoading ? (
        <CircularProgress size={18} />
      ) : (
        <Typography>{props.label}</Typography>
      )}
    </Button>
  );
};
export default CustomButton;
