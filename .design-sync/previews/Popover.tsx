import { Button, Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from 'kipitidy';

export const Open = () => (
  <div className="flex justify-center pb-40">
    <Popover defaultOpen>
      <PopoverTrigger asChild><Button variant="outline">Rest timer</Button></PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Rest timer</PopoverTitle>
          <PopoverDescription>Starts when you tick a set.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  </div>
);
