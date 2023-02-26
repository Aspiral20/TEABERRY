import React, { FC } from 'react';

const PasswordIconFilled: FC<React.SVGAttributes<SVGElement>> = ({
  className = '',
  ...rest
}) => {
  return (
    <svg
      className={"password_icon_filled " + className}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 485.017 485.017"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <g paintOrder="fill markers stroke">
        <path
          d="M361.205,68.899c-14.663,0-28.447,5.71-38.816,16.078-21.402,21.403-21.402,56.228,0,77.631c10.368,10.368,24.153,16.078,38.815,16.078s28.447-5.71,38.816-16.078c21.402-21.403,21.402-56.228,0-77.631-10.368-10.368-24.153-16.078-38.815-16.078Zm17.602,72.495c-4.702,4.702-10.953,7.292-17.603,7.292s-12.901-2.59-17.603-7.291c-9.706-9.706-9.706-25.499,0-35.205c4.702-4.702,10.953-7.291,17.603-7.291s12.9,2.589,17.603,7.291c9.706,9.706,9.706,25.498,0,35.204Z"
        />
        <path
          d="M441.961,43.036C414.21,15.284,377.311,0,338.064,0c-39.248,0-76.146,15.284-103.897,43.036-42.226,42.226-54.491,105.179-32.065,159.698L0.254,404.584l-.165,80.268l144.562.165v-55.722h55.705v-55.705h55.705v-64.492l26.212-26.212c17.615,7.203,36.698,10.976,55.799,10.976c39.244,0,76.14-15.282,103.889-43.032c57.289-57.289,57.289-150.505,0-207.794ZM380,160c-22.083,22.083-5.168,2.608-36.399,2.608-18.133,0-17.485-24.54-33.601-32.608l-67.4915,40L190,242.5085L160,270l-30,39.098L100,340L60,360L50,420L30,454.983l60-50.399L238.311,208.95L322.389,140c-22.572-45.087-28.067,1.868,7.611-33.81C352.086,84.104,329.97,80,361.204,80s7.458979-19.104205,18.796,10c20.02,51.395,45.592,24.408,0,70Z"
        />
      </g>
    </svg>
  );
};

export default PasswordIconFilled;