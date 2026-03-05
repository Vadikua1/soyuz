<template>
  <div class="soy-app">
    <header>
      <h1>SoyStock Control</h1>
      <p class="status-badge">
        System Status: {{ appStatus }}
      </p>
    </header>
    
    <main>
      <div class="inventory-card">
        <h2>Облік сої на складі</h2>
        <p>Поточний залишок: <strong>{{ totalSoy }} тонн</strong></p>
        <input
          v-model.number="soyAmount"
          type="number"
          placeholder="Кількість тонн"
        >
        <button @click="addStock">
          Додати на склад
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const appStatus = import.meta.env.VITE_APP_STATUS; // Отримуємо статус з .env [cite: 4886]
const totalSoy = ref(100);
const soyAmount = ref(0);

const addStock = () => {
  if (soyAmount.value > 0) {
    totalSoy.value += soyAmount.value;
    soyAmount.value = 0;
  }
};
</script>