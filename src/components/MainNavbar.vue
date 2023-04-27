<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" class="m-3">Vue Exercise</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/details">Details</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-nav class="ml-auto">
      <b-nav-item to="/login" class="mr-3">Login</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {};
</script>
