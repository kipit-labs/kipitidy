import { Button, EmptyState, Plus, Rocket } from 'kipitidy';

export const Default = () => (
  <div className="w-96">
    <EmptyState icon={Rocket} title="No projects yet" description="Create one to deploy your first app." action={<Button size="sm"><Plus />New project</Button>} />
  </div>
);
