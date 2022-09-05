import { FC } from 'react';

export interface BoilingVerdictProps {
  celsius: number;
}

export const BoilingVerdict: FC<BoilingVerdictProps> = ({ celsius }) => {
  if (celsius >= 98) {
    return <p>The water would boil</p>;
  }
  return <p>The water would not boil.</p>;
};

export default BoilingVerdict;
