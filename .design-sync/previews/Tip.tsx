import { Button, Tip } from 'kipitidy';

export const Default = () => (
  <div className="flex justify-center pt-10">
    <Tip content="Restarts every service"><Button variant="outline" autoFocus>Restart</Button></Tip>
  </div>
);
