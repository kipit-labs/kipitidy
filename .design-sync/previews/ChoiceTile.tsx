import { ChoiceTile, Database, Server } from 'kipitidy';

export const Default = () => (
  <div className="grid w-full max-w-lg grid-cols-2 gap-3">
    <ChoiceTile icon={<Database />} title="PostgreSQL" description="Relational database" onClick={() => {}} />
    <ChoiceTile icon={<Server />} title="Redis" description="In-memory store" onClick={() => {}} />
  </div>
);
