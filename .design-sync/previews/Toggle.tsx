import { Bold, Repeat, Toggle } from 'kipitidy';

export const Default = () => (
  <div className="flex items-center gap-2">
    <Toggle aria-label="Loop"><Repeat /></Toggle>
    <Toggle defaultPressed aria-label="Bold"><Bold /></Toggle>
    <Toggle variant="outline">Follow</Toggle>
  </div>
);
