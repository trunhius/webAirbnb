<template>
  <div class="scss-wrapper">
    <h1 class="scss-title">color SCSS</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$bg: rgb(0, 255, 106);
.scss-wrapper {
  .scss-title {
    background-color: $bg;
    color: yellow;
  }
}
</style>
