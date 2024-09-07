<script setup>

import { ref } from 'vue';

const variableOne = ref('');

const handleCreateUser = async () => {
    try {
        const response = await administrator_customer_registration(data);
    } catch (error) {
        
    }
   
}



</script>


<template>
    <div>
        <div>
            
            <form @submit.prevent="handleCreateUser">
                <label for="email1" class="block mb-2 text-xl font-medium text-surface-900 dark:text-surface-0">Suma de Números Pares</label>
                <InputText id="email1" type="text" placeholder="Lista de numeros pares" class="w-full md:w-[30rem] mb-8" v-model="variableOne" />
            </form>
            <div>
                
            </div>
        </div>
    </div>
</template>