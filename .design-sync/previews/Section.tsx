import { Button, Section } from 'kipitidy';

export const Default = () => (
  <Section className="w-96" title="Notifications" description="Where alerts are sent." actions={<Button size="sm" variant="outline">Test</Button>}>
    <p className="text-sm text-muted-foreground">Email and push are on.</p>
  </Section>
);
export const Plain = () => (
  <Section plain className="w-96" title="Members" description="People who can open this project.">
    <p className="text-sm">3 members</p>
  </Section>
);
