import { Bubble, BubbleContent, BubbleGroup } from 'kipitidy';

export const Default = () => (
  <BubbleGroup className="w-80">
    <Bubble><BubbleContent>Nice route, how long did the climb take?</BubbleContent></Bubble>
    <Bubble align="end" variant="tinted"><BubbleContent>About 40 minutes from the car park.</BubbleContent></Bubble>
  </BubbleGroup>
);
