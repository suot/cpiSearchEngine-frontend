<template>
  <a href="javascript:void(0)" class="nav-link dropdown-toggle" @click.stop.prevent><slot></slot></a>
</template>

<script>
export default {
  name: 'mega-dropdown-toggle'
}
</script>
