import { Avatar, AvatarFallback, Bubble, BubbleContent, Message, MessageAvatar, MessageContent, MessageFooter, MessageHeader } from 'kipitidy';

export const Default = () => (
  <Message className="w-96">
    <MessageAvatar><Avatar size="sm"><AvatarFallback>LM</AvatarFallback></Avatar></MessageAvatar>
    <MessageContent>
      <MessageHeader>Léa M.</MessageHeader>
      <Bubble><BubbleContent>Great session, see you Thursday.</BubbleContent></Bubble>
      <MessageFooter>2 hours ago</MessageFooter>
    </MessageContent>
  </Message>
);
