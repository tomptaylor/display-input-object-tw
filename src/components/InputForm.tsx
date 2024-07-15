import { createSignal } from 'solid-js';
import { user} from '../db/schema/user'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

const InputForm = () => {
  const initialData = {
    name: "",
    age: "",
    email: "",
    address: "",
    phone: ""
  };

  const [formData, setFormData] = createSignal(initialData);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFormData({
      ...formData(),
      [target.name]: target.value
    });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // todo put validation here
    console.log(formData());
  };

  return (
    <div class="container mx-auto p-4">
      <form class="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
        <div class="w-full sm:w-1/2 p-2">
          <div class="bg-white p-4 shadow rounded">
            <label class="block text-lg font-bold mb-2" for="name">Name</label>
            <input
              class="w-full p-2 border rounded"
              type="text"
              name="name"
              id="name"
              value={formData().name}
              onInput={handleChange}
            />
          </div>
        </div>
        <div class="w-full sm:w-1/2 p-2">
          <div class="bg-white p-4 shadow rounded">
            <label class="block text-lg font-bold mb-2" for="age">Age</label>
            <input
              class="w-full p-2 border rounded"
              type="number"
              name="age"
              id="age"
              value={formData().age}
              onInput={handleChange}
            />
          </div>
        </div>
        <div class="w-full sm:w-1/2 p-2">
          <div class="bg-white p-4 shadow rounded">
            <label class="block text-lg font-bold mb-2" for="email">Email</label>
            <input
              class="w-full p-2 border rounded"
              type="email"
              name="email"
              id="email"
              value={formData().email}
              onInput={handleChange}
            />
          </div>
        </div>
        <div class="w-full sm:w-1/2 p-2">
          <div class="bg-white p-4 shadow rounded">
            <label class="block text-lg font-bold mb-2" for="address">Address</label>
            <input
              class="w-full p-2 border rounded"
              type="text"
              name="address"
              id="address"
              value={formData().address}
              onInput={handleChange}
            />
          </div>
        </div>
        <div class="w-full sm:w-1/2 p-2">
          <div class="bg-white p-4 shadow rounded">
            <label class="block text-lg font-bold mb-2" for="phone">Phone</label>
            <input
              class="w-full p-2 border rounded"
              type="text"
              name="phone"
              id="phone"
              value={formData().phone}
              onInput={handleChange}
            />
          </div>
        </div>
        <div class="w-full p-2">
          <button
            class="w-full p-2 bg-blue-500 text-white rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
