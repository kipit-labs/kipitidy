import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount } from 'kipitidy';

export const Default = () => (
  <div className="flex items-center gap-4">
    <Avatar><AvatarFallback>LM</AvatarFallback></Avatar>
    <Avatar size="lg"><AvatarFallback>TR</AvatarFallback><AvatarBadge /></Avatar>
  </div>
);
export const Group = () => (
  <AvatarGroup>
    <Avatar><AvatarFallback>LM</AvatarFallback></Avatar>
    <Avatar><AvatarFallback>TR</AvatarFallback></Avatar>
    <Avatar><AvatarFallback>AK</AvatarFallback></Avatar>
    <AvatarGroupCount>+4</AvatarGroupCount>
  </AvatarGroup>
);
