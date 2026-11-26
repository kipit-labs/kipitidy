import { Button, ConfirmDialog } from 'kipitidy';

export const Default = () => (
  <ConfirmDialog
    trigger={<Button variant="destructive" autoFocus>Delete workout</Button>}
    title="Delete this workout?"
    description="Its sets are removed and your records are worked out again."
    onConfirm={() => {}}
  />
);
