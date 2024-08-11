import CodeBrackets from '../../../assets/code-brackets.svg';
import Dumbbell from '../../../assets/dumbbell.svg';
import HammerSpanner from '../../../assets/hammer-spanner.svg';
import { Unknown } from './Icon.style';
import { IconProps } from "./types";

export const IconByInterest = ({
  interest,
}: { interest: IconProps['interest']}) => {
  switch (interest) {
    case 'coding':
      return <CodeBrackets />;
    case 'crafts':
      return <HammerSpanner />;
    case 'lifting':
      return <Dumbbell />;
  }
  return <Unknown>?</Unknown>;
}
