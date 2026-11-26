import { CheckboxField } from 'kipitidy';
import { useState } from 'react';

export const Default = () => {
  const [on, setOn] = useState(true);
  return <CheckboxField className="w-80" label="Email me weekly" description="A summary every Monday morning." checked={on} onCheckedChange={setOn} />;
};
