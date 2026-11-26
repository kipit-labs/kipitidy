import { Clock, GitBranch, Meta, MetaItem, User } from 'kipitidy';

export const Default = () => (
  <Meta>
    <MetaItem icon={GitBranch}>main</MetaItem>
    <MetaItem icon={Clock}>2 hours ago</MetaItem>
    <MetaItem icon={User}>léa</MetaItem>
  </Meta>
);
