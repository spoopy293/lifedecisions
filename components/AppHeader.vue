<template>
  <header>
    <div>
      <NuxtLink to="/">Logo: User Name</NuxtLink>
      <NuxtLink to="/">Logo</NuxtLink>
    </div>
    <nav>
      <NuxtLink to="dawgs">Dawgs</NuxtLink>
    </nav>
  </header>
</template>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  color: white;
  background-color: black;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: blue;
  color: red;
}
nav {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
</style>