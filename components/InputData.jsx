import { Input } from "@nextui-org/react";

export default function InputData() {
  return (
    <div className="grid grid-cols-2 w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
      <Input type="text" variant="bordered" label="Title" />
      <Input type="text" variant="bordered" label="Body" />
      <Input type="text" variant="bordered" label="Author" />
      <Input type="text" variant="bordered" label="Category" />
    </div>
  );
}
