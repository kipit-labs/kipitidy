import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, Search } from 'kipitidy';

export const Default = () => (
  <div className="w-80 space-y-3">
    <InputGroup>
      <InputGroupAddon><Search /></InputGroupAddon>
      <InputGroupInput placeholder="Search" />
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="92.5" />
      <InputGroupAddon align="inline-end"><InputGroupText>kg</InputGroupText></InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="Write a comment" />
      <InputGroupAddon align="inline-end"><InputGroupButton>Send</InputGroupButton></InputGroupAddon>
    </InputGroup>
  </div>
);
