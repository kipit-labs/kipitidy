import { Button, DangerZone } from 'kipitidy';

export const Default = () => (
  <div className="w-full max-w-lg">
    <DangerZone description="Deletes the account and everything in it."><Button size="sm" variant="destructive">Delete account</Button></DangerZone>
  </div>
);
