
import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import ContainedButton from 'components/UI/Buttons/ContainedButton'

const useStyles = makeStyles(theme => ({
  root: {}
}));

const GradientButton = React.forwardRef(({
  color = 'primary',
  className,
  children,
  ...rest
}, ref) => {
  const classes = useStyles();

  return (
    <ContainedButton
      ref={ref}
      className={clsx(className, classes.root)}
      {...rest}
    >
      {children}
    </ContainedButton>
  );
});

export default memo(GradientButton);
