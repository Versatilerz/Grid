<template>
  <header class="header" :class="{ 'is-active': isHovered }">
    <nav class="header__navbar">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/one">One</RouterLink></li>
        <li><RouterLink to="/two">Two</RouterLink></li>
        <li><RouterLink to="/three">Three</RouterLink></li>
        <li><RouterLink to="/four">Four</RouterLink></li>
      </ul>
    </nav>
    <h2 class="header__currentRoute">{{ route.name?.toString().toUpperCase() }}</h2>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const isHovered = ref(false);

const handleMouseMove = (event: { clientY: number }) => {
  const screenHeight = window.innerHeight;
  if (event.clientY < screenHeight * 0.1) {
    isHovered.value = true;
  } else {
    isHovered.value = false;
  }
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style scoped>
.header {
  position: fixed;
  top: -80px;
  left: 0;
  width: 100%;
  background-color: aliceblue;
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__navbar {
    padding: 1rem;
  }

  &__navbar > ul {
    display: flex;
    list-style: none;
  }

  &__navbar > ul > li > a {
    justify-content: space-between;
    margin-right: 1rem;
  }

  &__currentRoute {
    margin-right: 50%;
  }
}

.header.is-active {
  transform: translateY(80px);
}
</style>
