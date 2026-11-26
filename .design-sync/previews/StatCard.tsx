import { Activity, HardDrive, StatCard, TriangleAlert } from 'kipitidy';

export const Default = () => (
  <div className="grid w-full max-w-xl grid-cols-3 gap-3">
    <StatCard icon={Activity} label="Uptime" value="99.9%" tone="good" hint="last 30 days" />
    <StatCard icon={HardDrive} label="Disk" value="71%" tone="warn" />
    <StatCard icon={TriangleAlert} label="Errors" value="3" tone="bad" hint="since yesterday" />
  </div>
);
