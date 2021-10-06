
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing(3),
  }
}));

const TwitterIcon = ({
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <SvgIcon viewBox={viewBox || '0 0 33 28'} {...rest} className={clsx(classes.root, className)}>
      <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="28">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H33V28H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <path fillRule="evenodd" clipRule="evenodd" d="M32.8643 3.35628C31.8168 3.84513 30.6572 4.14144 29.5266 4.33713C30.0633 4.24361 30.8516 3.24232 31.168 2.83677C31.6498 2.21902 32.0501 1.51561 32.275 0.754814C32.3047 0.695869 32.3261 0.621204 32.2681 0.576406C32.1957 0.54654 32.1492 0.561473 32.0912 0.591339C30.8295 1.28847 29.5235 1.79383 28.1337 2.15222C28.0193 2.18208 27.9332 2.15222 27.8615 2.07755C27.7456 1.94394 27.6381 1.81741 27.5154 1.71288C26.9314 1.20044 26.3055 0.798827 25.5988 0.502527C24.6709 0.112701 23.6577 -0.0523471 22.659 0.0144579C21.687 0.079691 20.7325 0.361844 19.8702 0.826335C19.0057 1.29161 18.2341 1.94001 17.6204 2.72124C16.9846 3.52919 16.5165 4.48332 16.2763 5.49561C16.0453 6.47175 16.0644 7.43767 16.2054 8.42403C16.2268 8.58829 16.2123 8.60951 16.069 8.58829C10.6347 7.75441 6.12974 5.74947 2.47258 1.45352C2.314 1.26725 2.22861 1.26725 2.09825 1.46766C0.497239 3.94102 1.27411 7.91317 3.27308 9.86544C3.53992 10.1256 3.81361 10.3857 4.10866 10.6231C4.00116 10.6459 2.6708 10.4981 1.48529 9.86544C1.32671 9.7617 1.24666 9.82143 1.23218 10.0069C1.21769 10.2741 1.24056 10.5201 1.27563 10.8094C1.58287 13.3165 3.26622 15.6343 5.5732 16.5389C5.84689 16.6583 6.14956 16.7621 6.4446 16.8139C5.91856 16.9334 5.37803 17.0175 3.87155 16.8965C3.68401 16.8587 3.61234 16.9562 3.68401 17.1417C4.81615 20.3224 7.25959 21.2694 9.09008 21.8086C9.33481 21.8526 9.58029 21.8526 9.82578 21.9123C9.8113 21.9351 9.79605 21.9351 9.78233 21.9571C9.17547 22.9113 7.07052 23.621 6.0901 23.9739C4.30764 24.6168 2.36661 24.9052 0.482753 24.7142C0.180849 24.6679 0.118333 24.6718 0.0359955 24.7142C-0.0463421 24.7669 0.0253221 24.8416 0.122907 24.9217C0.504862 25.1819 0.893679 25.4121 1.29088 25.6354C2.48706 26.2893 3.73432 26.8095 5.03877 27.1813C11.7752 29.099 19.3632 27.6898 24.4209 22.5089C28.3929 18.4408 29.7858 12.83 29.7858 7.21211C29.7858 6.99283 30.0374 6.87101 30.1868 6.75548C31.2206 5.9546 32.0539 4.99654 32.8246 3.92687C32.9977 3.68716 33 3.47338 33 3.38536V3.35628C33 3.2659 32.9977 3.2934 32.8643 3.35628Z" fill="black" />
      </g>
    </SvgIcon>
  )
}

export default memo(TwitterIcon);