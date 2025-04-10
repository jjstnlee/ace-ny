import COLORS from '@/styles/colors';

export const CheckmarkIcon = (props: {
  width: string | undefined;
  height: string | undefined;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 8 7"
    fill="none"
  >
    <path
      d="M7.48145 7H0.481445V6H7.48145V7ZM2.98145 4.71L0.981445 2.71L1.68645 2.005L2.98145 3.295L6.27645 0L6.98145 0.71L2.98145 4.71Z"
      fill={COLORS.electricBlue}
    />
  </svg>
);

export const DotDotDotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="3"
    viewBox="0 0 9 3"
    fill="none"
  >
    <path
      d="M7.14355 2.03125C6.59127 2.03125 6.14355 1.57654 6.14355 1.01562C6.14355 0.454711 6.59127 0 7.14355 0C7.69584 0 8.14355 0.454711 8.14355 1.01562C8.14355 1.28499 8.0382 1.54331 7.85066 1.73378C7.66313 1.92425 7.40877 2.03125 7.14355 2.03125ZM4.14355 2.03125C3.59127 2.03125 3.14355 1.57654 3.14355 1.01562C3.14355 0.454711 3.59127 0 4.14355 0C4.69584 0 5.14355 0.454711 5.14355 1.01562C5.14355 1.28499 5.0382 1.54331 4.85066 1.73378C4.66313 1.92425 4.40877 2.03125 4.14355 2.03125ZM1.14355 2.03125C0.59127 2.03125 0.143555 1.57654 0.143555 1.01562C0.143555 0.454711 0.59127 0 1.14355 0C1.69584 0 2.14355 0.454711 2.14355 1.01562C2.14355 1.28499 2.0382 1.54331 1.85066 1.73378C1.66313 1.92425 1.40877 2.03125 1.14355 2.03125Z"
      fill="#B0B4BF"
    />
  </svg>
);

export const OpenIcon = (props: {
  width: string | undefined;
  height: string | undefined;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 10 7"
    fill="none"
  >
    <path
      d="M4.98157 6.16104L9.83813 1.62824L8.69631 0.561035L4.98157 4.0304L1.26763 0.561035L0.125 1.62749L4.98157 6.16104Z"
      fill="#949AA9"
    />
  </svg>
);

export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
  >
    <path
      d="M5.00012 0.561011L9.85669 5.09381L8.71487 6.16101L5.00012 2.69165L1.28618 6.16101L0.143555 5.09456L5.00012 0.561011Z"
      fill="#949AA9"
    />
  </svg>
);
