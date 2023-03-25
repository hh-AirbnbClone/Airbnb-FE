import React from "react";
import styled from "styled-components";
import { Column } from "./Flex";

export const Logo = () => {
  return (
    <Column>
      <StSpan className="Maincolor">
        <StSvg fill="current">
          <StCi d="M 29.3864 22.7101 C 29.2429 22.3073 29.0752 21.9176 28.9157 21.5565 C 28.6701 21.0011 28.4129 20.4446 28.1641 19.9067 L 28.1444 19.864 C 25.9255 15.0589 23.5439 10.1881 21.0659 5.38701 L 20.9607 5.18316 C 20.7079 4.69289 20.4466 4.18596 20.1784 3.68786 C 19.8604 3.0575 19.4745 2.4636 19.0276 1.91668 C 18.5245 1.31651 17.8956 0.833822 17.1853 0.502654 C 16.475 0.171486 15.7005 -0.0000983959 14.9165 4.23317e-8 C 14.1325 0.0000984805 13.3581 0.171877 12.6478 0.503224 C 11.9376 0.834571 11.3088 1.31742 10.8059 1.91771 C 10.3595 2.46476 9.97383 3.05853 9.65572 3.68858 C 9.38521 4.19115 9.12145 4.70278 8.8664 5.19757 L 8.76872 5.38696 C 6.29061 10.1884 3.90903 15.0592 1.69015 19.8639 L 1.65782 19.9338 C 1.41334 20.463 1.16057 21.0102 0.919073 21.5563 C 0.75949 21.9171 0.592009 22.3065 0.448355 22.7103 C 0.0369063 23.8104 -0.094204 24.9953 0.0668098 26.1585 C 0.237562 27.334 0.713008 28.4447 1.44606 29.3804 C 2.17911 30.3161 3.14434 31.0444 4.24614 31.4932 C 5.07835 31.8299 5.96818 32.002 6.86616 32 C 7.14824 31.9999 7.43008 31.9835 7.71027 31.9509 C 8.846 31.8062 9.94136 31.4366 10.9321 30.8639 C 12.2317 30.1338 13.5152 29.0638 14.9173 27.5348 C 16.3194 29.0638 17.6029 30.1338 18.9025 30.8639 C 19.8932 31.4367 20.9886 31.8062 22.1243 31.9509 C 22.4045 31.9835 22.6864 31.9999 22.9685 32 C 23.8664 32.002 24.7561 31.8299 25.5883 31.4932 C 26.6901 31.0444 27.6554 30.3161 28.3885 29.3804 C 29.1216 28.4447 29.5971 27.3341 29.7679 26.1585 C 29.9287 24.9952 29.7976 23.8103 29.3864 22.7101 Z M 14.9173 24.377 C 13.1816 22.1769 12.0678 20.1338 11.677 18.421 C 11.5169 17.7792 11.4791 17.1131 11.5656 16.4573 C 11.6339 15.9766 11.8105 15.5176 12.0821 15.1148 C 12.4163 14.6814 12.8458 14.3304 13.3374 14.0889 C 13.829 13.8475 14.3696 13.7219 14.9175 13.7219 C 15.4655 13.722 16.006 13.8476 16.4976 14.0892 C 16.9892 14.3307 17.4186 14.6817 17.7528 15.1151 C 18.0244 15.5181 18.201 15.9771 18.2693 16.4579 C 18.3556 17.114 18.3177 17.7803 18.1573 18.4223 C 17.7661 20.1349 16.6526 22.1774 14.9173 24.377 Z M 27.7406 25.8689 C 27.6212 26.6908 27.2887 27.4674 26.7762 28.1216 C 26.2636 28.7759 25.5887 29.2852 24.8183 29.599 C 24.0393 29.9111 23.1939 30.0217 22.3607 29.9205 C 21.4946 29.8089 20.6599 29.5239 19.9069 29.0824 C 18.7501 28.4325 17.5791 27.4348 16.2614 25.9712 C 18.3591 23.3846 19.669 21.0005 20.154 18.877 C 20.3723 17.984 20.4196 17.0579 20.2935 16.1475 C 20.1791 15.3632 19.8879 14.615 19.4419 13.9593 C 18.9194 13.2519 18.2378 12.6768 17.452 12.2805 C 16.6661 11.8842 15.798 11.6777 14.9175 11.6777 C 14.0371 11.6777 13.1689 11.8841 12.383 12.2803 C 11.5971 12.6765 10.9155 13.2515 10.393 13.9589 C 9.94707 14.6144 9.65591 15.3624 9.5414 16.1465 C 9.41524 17.0566 9.4623 17.9822 9.68011 18.8749 C 10.1648 20.9993 11.4748 23.384 13.5732 25.9714 C 12.2555 27.4348 11.0845 28.4325 9.92769 29.0825 C 9.17468 29.5239 8.34007 29.809 7.47395 29.9205 C 6.64065 30.0217 5.79525 29.9111 5.0162 29.599 C 4.24581 29.2852 3.57092 28.7759 3.05838 28.1217 C 2.54585 27.4674 2.21345 26.6908 2.09411 25.8689 C 1.97932 25.0334 2.07701 24.1825 2.37818 23.3946 C 2.49266 23.0728 2.62663 22.757 2.7926 22.3818 C 3.0274 21.851 3.27657 21.3115 3.51759 20.7898 L 3.54996 20.7197 C 5.75643 15.9419 8.12481 11.0982 10.5894 6.32294 L 10.6875 6.13283 C 10.9384 5.64601 11.1979 5.14267 11.4597 4.6563 C 11.7101 4.15501 12.0132 3.68171 12.3639 3.2444 C 12.6746 2.86903 13.0646 2.56681 13.5059 2.35934 C 13.9473 2.15186 14.4291 2.04426 14.9169 2.04422 C 15.4047 2.04418 15.8866 2.15171 16.3279 2.35911 C 16.7693 2.56651 17.1593 2.86867 17.4701 3.24399 C 17.821 3.68097 18.1242 4.15411 18.3744 4.65538 C 18.6338 5.13742 18.891 5.63623 19.1398 6.11858 L 19.2452 6.32315 C 21.7097 11.0979 24.078 15.9415 26.2847 20.7201 L 26.3046 20.7631 C 26.5498 21.2936 26.8033 21.8419 27.042 22.382 C 27.2082 22.7577 27.3424 23.0738 27.4566 23.3944 C 27.7576 24.1824 27.8553 25.0333 27.7406 25.8689 Z"></StCi>

          <StLogo d="M 41.6847 24.1196 C 40.8856 24.1196 40.1505 23.9594 39.4792 23.6391 C 38.808 23.3188 38.2327 22.8703 37.7212 22.2937 C 37.2098 21.7172 36.8263 21.0445 36.5386 20.3078 C 36.2509 19.539 36.123 18.7062 36.123 17.8093 C 36.123 16.9124 36.2829 16.0475 36.5705 15.2787 C 36.8582 14.51 37.2737 13.8373 37.7852 13.2287 C 38.2966 12.6521 38.9039 12.1716 39.6071 11.8513 C 40.3103 11.531 41.0455 11.3708 41.8765 11.3708 C 42.6756 11.3708 43.3788 11.531 44.0181 11.8833 C 44.6574 12.2037 45.1688 12.6841 45.5843 13.2927 L 45.6802 11.7232 H 48.6209 V 23.7992 H 45.6802 L 45.5843 22.0375 C 45.1688 22.6781 44.6254 23.1906 43.9222 23.575 C 43.2829 23.9274 42.5158 24.1196 41.6847 24.1196 Z M 42.4519 21.2367 C 43.0272 21.2367 43.5386 21.0765 44.0181 20.7882 C 44.4656 20.4679 44.8172 20.0515 45.1049 19.539 C 45.3606 19.0265 45.4884 18.4179 45.4884 17.7452 C 45.4884 17.0725 45.3606 16.4639 45.1049 15.9514 C 44.8492 15.4389 44.4656 15.0225 44.0181 14.7022 C 43.5706 14.3818 43.0272 14.2537 42.4519 14.2537 C 41.8765 14.2537 41.3651 14.4139 40.8856 14.7022 C 40.4382 15.0225 40.0866 15.4389 39.7989 15.9514 C 39.5432 16.4639 39.4153 17.0725 39.4153 17.7452 C 39.4153 18.4179 39.5432 19.0265 39.7989 19.539 C 40.0546 20.0515 40.4382 20.4679 40.8856 20.7882 C 41.3651 21.0765 41.8765 21.2367 42.4519 21.2367 Z M 53.6392 8.4559 C 53.6392 8.80825 53.5753 9.12858 53.4154 9.38483 C 53.2556 9.64109 53.0319 9.86531 52.7442 10.0255 C 52.4565 10.1856 52.1369 10.2497 51.8173 10.2497 C 51.4976 10.2497 51.178 10.1856 50.8903 10.0255 C 50.6026 9.86531 50.3789 9.64109 50.2191 9.38483 C 50.0592 9.09654 49.9953 8.80825 49.9953 8.4559 C 49.9953 8.10355 50.0592 7.78323 50.2191 7.52697 C 50.3789 7.23868 50.6026 7.04649 50.8903 6.88633 C 51.178 6.72617 51.4976 6.66211 51.8173 6.66211 C 52.1369 6.66211 52.4565 6.72617 52.7442 6.88633 C 53.0319 7.04649 53.2556 7.27072 53.4154 7.52697 C 53.5433 7.78323 53.6392 8.07152 53.6392 8.4559 Z M 50.2191 23.7672 V 11.6911 H 53.4154 V 23.7672 H 50.2191 V 23.7672 Z M 61.9498 14.8623 V 14.8943 C 61.79 14.8303 61.5982 14.7982 61.4383 14.7662 C 61.2466 14.7342 61.0867 14.7342 60.895 14.7342 C 60 14.7342 59.3287 14.9904 58.8812 15.535 C 58.4018 16.0795 58.178 16.8483 58.178 17.8413 V 23.7672 H 54.9817 V 11.6911 H 57.9223 L 58.0182 13.517 C 58.3379 12.8763 58.7214 12.3958 59.2648 12.0435 C 59.7762 11.6911 60.3835 11.531 61.0867 11.531 C 61.3105 11.531 61.5342 11.563 61.726 11.595 C 61.8219 11.6271 61.8858 11.6271 61.9498 11.6591 V 14.8623 Z M 63.2283 23.7672 V 6.72617 H 66.4247 V 13.2287 C 66.8722 12.6521 67.3836 12.2036 68.0229 11.8513 C 68.6622 11.531 69.3654 11.3388 70.1645 11.3388 C 70.9635 11.3388 71.6987 11.4989 72.3699 11.8193 C 73.0412 12.1396 73.6165 12.588 74.128 13.1646 C 74.6394 13.7412 75.0229 14.4139 75.3106 15.1506 C 75.5983 15.9194 75.7261 16.7522 75.7261 17.6491 C 75.7261 18.546 75.5663 19.4109 75.2787 20.1796 C 74.991 20.9484 74.5755 21.6211 74.064 22.2297 C 73.5526 22.8063 72.9453 23.2867 72.2421 23.6071 C 71.5389 23.9274 70.8037 24.0875 69.9727 24.0875 C 69.1736 24.0875 68.4704 23.9274 67.8311 23.575 C 67.1918 23.2547 66.6804 22.7742 66.2649 22.1656 L 66.169 23.7352 L 63.2283 23.7672 Z M 69.3973 21.2367 C 69.9727 21.2367 70.4841 21.0765 70.9635 20.7882 C 71.411 20.4679 71.7626 20.0515 72.0503 19.539 C 72.306 19.0265 72.4339 18.4179 72.4339 17.7452 C 72.4339 17.0725 72.306 16.4639 72.0503 15.9514 C 71.7626 15.4389 71.411 15.0225 70.9635 14.7022 C 70.5161 14.3818 69.9727 14.2537 69.3973 14.2537 C 68.822 14.2537 68.3106 14.4139 67.8311 14.7022 C 67.3836 15.0225 67.032 15.4389 66.7443 15.9514 C 66.4886 16.4639 66.3608 17.0725 66.3608 17.7452 C 66.3608 18.4179 66.4886 19.0265 66.7443 19.539 C 67 20.0515 67.3836 20.4679 67.8311 20.7882 C 68.3106 21.0765 68.822 21.2367 69.3973 21.2367 Z M 76.9408 23.7672 V 11.6911 H 79.8814 L 79.9773 13.2607 C 80.3289 12.6841 80.8084 12.2357 81.4157 11.8833 C 82.023 11.531 82.7262 11.3708 83.5253 11.3708 C 84.4203 11.3708 85.1874 11.595 85.8267 12.0115 C 86.4979 12.4279 87.0094 13.0365 87.361 13.8053 C 87.7126 14.574 87.9043 15.5029 87.9043 16.56 V 23.7992 H 84.708 V 16.9764 C 84.708 16.1436 84.5162 15.4709 84.1326 14.9904 C 83.7491 14.51 83.2376 14.2537 82.5664 14.2537 C 82.0869 14.2537 81.6714 14.3498 81.2878 14.574 C 80.9362 14.7982 80.6486 15.0865 80.4248 15.503 C 80.2011 15.8873 80.1052 16.3678 80.1052 16.8483 V 23.7672 H 76.9408 V 23.7672 Z M 89.5025 23.7672 V 6.72617 H 92.6989 V 13.2287 C 93.1464 12.6521 93.6578 12.2036 94.2971 11.8513 C 94.9364 11.531 95.6396 11.3388 96.4387 11.3388 C 97.2378 11.3388 97.9729 11.4989 98.6442 11.8193 C 99.3154 12.1396 99.8907 12.588 100.402 13.1646 C 100.914 13.7412 101.297 14.4139 101.585 15.1506 C 101.873 15.9194 102 16.7522 102 17.6491 C 102 18.546 101.841 19.4109 101.553 20.1796 C 101.265 20.9484 100.85 21.6211 100.338 22.2297 C 99.8268 22.8063 99.2195 23.2867 98.5163 23.6071 C 97.8131 23.9274 97.0779 24.0875 96.2469 24.0875 C 95.4478 24.0875 94.7446 23.9274 94.1053 23.575 C 93.466 23.2547 92.9546 22.7742 92.5391 22.1656 L 92.4432 23.7352 L 89.5025 23.7672 Z M 95.7035 21.2367 C 96.2788 21.2367 96.7903 21.0765 97.2697 20.7882 C 97.7172 20.4679 98.0688 20.0515 98.3565 19.539 C 98.6122 19.0265 98.7401 18.4179 98.7401 17.7452 C 98.7401 17.0725 98.6122 16.4639 98.3565 15.9514 C 98.1008 15.4389 97.7172 15.0225 97.2697 14.7022 C 96.8222 14.3818 96.2788 14.2537 95.7035 14.2537 C 95.1281 14.2537 94.6167 14.4139 94.1373 14.7022 C 93.6898 15.0225 93.3382 15.4389 93.0505 15.9514 C 92.7628 16.4639 92.6669 17.0725 92.6669 17.7452 C 92.6669 18.4179 92.7948 19.0265 93.0505 19.539 C 93.3062 20.0515 93.6898 20.4679 94.1373 20.7882 C 94.6167 21.0765 95.0962 21.2367 95.7035 21.2367 Z"></StLogo>
        </StSvg>
      </StSpan>
    </Column>
  );
};

const StSpan = styled.span`
  display: block;
  width: 102px;
  height: 32px;
  color: var(--color-mainColor);
  width: current;
  height: current;
  overflow: hidden;
  box-sizing: border-box;
`;
const StSvg = styled.svg`
  overflow: hidden;
  box-sizing: border-box;
`;

const StCi = styled.path`
  width: current;
  height: current;
`;
const StLogo = styled.path`
  width: current;
  height: current;
`;
