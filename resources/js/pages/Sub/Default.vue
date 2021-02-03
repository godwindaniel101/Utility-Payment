<template>
  <div class="rounded-md shadow w-48 m-auto flex border border-red-600">
    <v-button tag="Set Default"  @BtnClicked="$store.dispatch('setDefaultUser')"/>
  </div>
</template>