import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from 'kipitidy';

export const Default = () => (
  <Command className="w-80 border">
    <CommandInput placeholder="Search labels" />
    <CommandList>
      <CommandEmpty>No label found.</CommandEmpty>
      <CommandGroup heading="Labels">
        <CommandItem>alps</CommandItem>
        <CommandItem>winter</CommandItem>
        <CommandItem>with friends</CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
);
