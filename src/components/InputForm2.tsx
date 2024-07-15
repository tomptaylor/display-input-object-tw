import { createSignal, For } from 'solid-js';

const initialData = {
  name: "",
  age: "",
  email: "",
  address: "",
  phone: ""
};

const InputForm = () => {
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
    console.log(formData());
  };

  return (
    <div class="container mx-auto p-4">
      <form class="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
        <For each={Object.entries(initialData)}>{([key, value]) => (
          <div class="w-full sm:w-1/2 p-2" key={key}>
            <div class="bg-white p-4 shadow rounded">
              <label class="block text-lg font-bold mb-2" for={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input
                class="w-full p-2 border rounded"
                type={key === "email" ? "email" : key === "age" ? "number" : "text"}
                name={key}
                id={key}
                value={formData()[key]}
                onInput={handleChange}
              />
            </div>
          </div>
        )}</For>
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
