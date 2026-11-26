import { Slider } from 'kipitidy';

export const Default = () => <Slider className="w-72" defaultValue={[8]} min={6} max={10} step={0.5} />;
export const Range = () => <Slider className="w-72" defaultValue={[20, 80]} />;
