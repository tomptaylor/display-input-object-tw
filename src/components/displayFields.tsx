import { Component, For } from 'solid-js';

const data = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  address: "123 Main St, Anytown, USA",
  phone: "555-555-5555"
};

const DisplayFields: Component = () => {
  const entries = Object.entries(data);

  return (
    <div class="container mx-auto p-4">
      <div class="flex flex-wrap -mx-2">
        <For each={entries}>{([key, value]) => (
          <div class="w-full sm:w-1/2 p-2">
            <div class="bg-white p-4 shadow rounded">
              <h2 class="font-bold text-lg">{key}:{value}</h2>
                          </div>
          </div>
        )}</For>
      </div>
    </div>
  );
};

export default DisplayFields;
