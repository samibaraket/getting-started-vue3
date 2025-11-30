<template>
  <div>
    <button class="btn mb-3" @click="showCreateModal = true">+ Add User</button>

    <table class="w-full border">
      <thead>
        <tr class="bg-gray-100 text-center">
          <th class="p-2">ID</th>
          <th class="p-2">Name</th>
          <th class="p-2">Email</th>
          <th class="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="u in users" :key="u.id">
          <td class="p-2">{{ u.id }}</td>
          <td class="p-2">{{ u.name }}</td>
          <td class="p-2">{{ u.email }}</td>
          <td class="p-2 space-x-2">
            <button class="text-blue-500" @click="editUser(u)">Edit</button>
            <button class="text-red-500" @click="deleteUser(u.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <Modal :show="showCreateModal" @close="closeModal">
      <UserForm @submit="handleCreate" />
    </Modal>

    <Modal :show="showEditModal" @close="closeModal">
      <UserForm
        :initialData="selectedUser ?? undefined"
        isEdit
        @submit="handleEdit"
      />
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
// services
import { userWorkerService } from "@/store/userWorkerService";
// components
import Modal from "@/components/Modal.vue";
import UserForm from "@/components/user/UserForm.vue";
// type
import type { User } from "@/types/User";

const store = userWorkerService();
const { users } = storeToRefs(store);

const showCreateModal = ref(false);
const showEditModal = ref(false);
const selectedUser = ref<User | null>(null);

onMounted(() => store.getUsers());

function closeModal() {
  showCreateModal.value = false;
  showEditModal.value = false;
}

async function handleCreate(data: Omit<User, "id">) {
  console.log("Received from child:", data);
  await store.addUser(data);
  closeModal();
}

function editUser(user: User) {
  selectedUser.value = { ...user };
  showEditModal.value = true;
}

async function handleEdit(data: Omit<User, "id">) {
  if (selectedUser.value) {
    await store.updateUser(selectedUser.value.id, data);
    closeModal();
  }
}

async function deleteUser(id: number) {
  if (confirm("Are you sure?")) await store.deleteUser(id);
}
</script>
