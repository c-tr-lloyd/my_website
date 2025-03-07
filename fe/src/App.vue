<script setup>
</script>

<template>
  <div id='opening'> 
    <div id='logo_name'>
      <router-link to='/'><img src='./assets/full_cust_logo.png' height='75px'></router-link>
    </div>

    <div class='nav'>
      <router-link to='./about'><strong>About Page</strong></router-link>
      <router-link to='./projects'><strong>Projects</strong></router-link><br><br>
    </div>
  </div>

  <router-view/> 
</template>