import { ChartContainer, ChartTooltip, ChartTooltipContent } from 'kipitidy';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const data = [
  { week: 'W1', count: 3 }, { week: 'W2', count: 4 }, { week: 'W3', count: 2 },
  { week: 'W4', count: 4 }, { week: 'W5', count: 5 }, { week: 'W6', count: 3 },
];
const config = { count: { label: 'Workouts', color: 'var(--chart-2)' } };

export const Default = () => (
  <ChartContainer config={config} className="h-48 w-96">
    <BarChart data={data}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="week" tickLine={false} axisLine={false} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Bar dataKey="count" fill="var(--color-count)" radius={4} />
    </BarChart>
  </ChartContainer>
);
