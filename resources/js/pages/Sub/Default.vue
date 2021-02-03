<template>
  <div class="rounded-md shadow w-48 m-auto flex border border-red-600">
    <v-button tag="Register"  @BtnClicked="$store.dispatch('setDefaultUser')"/>
  </div>
</template>