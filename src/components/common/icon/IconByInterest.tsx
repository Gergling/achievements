import CodeBrackets from '../../../assets/code-brackets.svg';
import ComedyTragedyMasks from '../../../assets/comedy-tragedy-masks.svg';
import Dumbbell from '../../../assets/dumbbell.svg';
import Games from '../../../assets/games.svg';
import HammerSpanner from '../../../assets/hammer-spanner.svg';
import KickingStickMan from '../../../assets/kicking-stick-man.svg';
import PaperPencilGear from '../../../assets/paper-pencil-gear.svg';
import QuillScroll from '../../../assets/quill-scroll.svg';
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
    case 'games':
      return <Games />;
    case 'lifting':
      return <Dumbbell />;
    case 'maintenance':
      return <PaperPencilGear />;
    case 'martialarts':
      return <KickingStickMan />;
    case 'performance':
      return <ComedyTragedyMasks />;
    case 'writing':
      return <QuillScroll />;
  }
  return <Unknown>?</Unknown>;
}
