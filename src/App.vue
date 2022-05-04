<template>
 <div class="container vh-100 d-flex align-items-center justify-content-center">
   <app-contact-list></app-contact-list>
 </div>
</template>

<script>
import '../bootstrap.min.css'
import AppContactList from '@/components/AppContactList'
export default {
  components: {
    AppContactList
  }
}
</script>

<style>

</style>
