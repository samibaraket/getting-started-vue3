<template>
  <form @submit.prevent="onSubmit" class="space-y-3">
    <div>
      <label class="block text-sm font-medium">Name</label>
      <input v-model="name" type="text" class="input" />
      <span class="text-red-500 text-xs">{{ nameError }}</span>
    </div>

    <div>
      <label class="block text-sm font-medium">Email</label>
      <input v-model="email" type="email" class="input" />
      <span class="text-red-500 text-xs">{{ emailError }}</span>
    </div>

    <button type="submit" class="btn w-full">
      {{ isEdit ? "Update" : "Create" }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
// types
import type { User } from "@/types/User";

const props = defineProps<{ initialData?: Partial<User>; isEdit?: boolean }>();
const emit = defineEmits<{ (e: "submit", data: Omit<User, "id">): void }>();

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

const { handleSubmit } = useForm<Omit<User, "id">>({
  validationSchema: schema,
  initialValues: props.initialData ?? { name: "", email: "" },
});


const { value: name, errorMessage: nameError } = useField("name");
const { value: email, errorMessage: emailError } = useField("email");

const onSubmit = handleSubmit((formValues) => {
  console.log("SUBMITTED VALUES = ", formValues);
  emit("submit", formValues);
});
</script>

<style scoped>
.input {
  border: 1px solid #ccc;
  padding: 6px;
  border-radius: 6px;
  width: 100%;
}
.btn {
  background: #3b82f6;
  color: white;
  padding: 8px;
  border-radius: 6px;
}
</style>
