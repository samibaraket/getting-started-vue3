<template>
  <div>
    <button class="btn mb-3" @click="showCreateModal = true">
      + Add Company
    </button>
    <table class="w-full border">
      <thead>
        <tr class="bg-gray-100 text-center">
          <th class="p-2">ID</th>
          <th class="p-2">Name</th>
          <th class="p-2">Creation Date</th>
          <th class="p-2">Rcs Number</th>
          <th class="p-2">Status</th>
          <th class="p-2">Users</th>
          <th class="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in companies" :key="company.id">
          <td class="p-2">{{ company.id }}</td>
          <td class="p-2">{{ company.name }}</td>
          <td class="p-2">{{ company.creationDate }}</td>
          <td class="p-2">{{ company.rcsNumber }}</td>
          <td class="p-2">{{ company.status }}</td>
          <td class="p-2">{{ company.users }}</td>
          <td class="p-2 space-x-2">
            <button class="text-blue-500" @click="editCompany(company)">
              Edit
            </button>
            <button class="text-red-500" @click="deleteCompany(company.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Modal :show="showCreateModal" @close="closeModal">
      <CompanyForm @submit="handleCreate" />
    </Modal>

    <Modal :show="showEditModal" @close="closeModal">
      <CompanyForm
        :initialData="selectedCompany ?? undefined"
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
import { companyWorkerService } from "@/store/companyWorkerService";
// components
import CompanyForm from "./CompanyForm.vue";
import Modal from "@/components/Modal.vue";
// Model
import { Company } from "@/types/Company";

const store = companyWorkerService();
const { companies } = storeToRefs(store);

const showCreateModal = ref(false);
const showEditModal = ref(false);
const selectedCompany = ref<Company | null>(null);

onMounted(() => store.getCompanies());

function closeModal() {
  showCreateModal.value = false;
  showEditModal.value = false;
}

async function handleCreate(data: Omit<Company, "id">) {
  console.log("Received from child:", data);
  await store.addCompany(data);
  closeModal();
}

function editCompany(company: Company) {
  selectedCompany.value = { ...company };
  showEditModal.value = true;
}

async function handleEdit(data: Omit<Company, "id">) {
  if (selectedCompany.value) {
    await store.updateCompany(selectedCompany.value.id, data);
    closeModal();
  }
}

async function deleteCompany(id: number) {
  if (confirm("Are you sure?")) await store.deleteCompanyr(id);
}
</script>
