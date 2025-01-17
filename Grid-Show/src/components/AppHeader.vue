<template>
  <header>
    <div>
      <nav class="navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/one">One</RouterLink>
        <RouterLink to="/two">Two</RouterLink>
        <RouterLink to="/three">Three</RouterLink>
        <RouterLink to="/four">Four</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style>
.navbar {
  display: flex;
  padding: 1rem;
  justify-content: space-around;
  background-color: aliceblue;
}
</style>
