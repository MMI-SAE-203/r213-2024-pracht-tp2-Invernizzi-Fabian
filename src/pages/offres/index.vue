<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
//<MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.id" v-bind="uneMaison" />
import MaisonCard from '@/components/MaisonCard.vue';
import { pb } from '@/backend';

const maisonsListe = await pb.collection('Maison').getFullList();
 

</script>

<template>
  <ul>
  <li v-for="uneMaison of maisonsListe" :key="uneMaison.id">
    <RouterLink
      :to="{
        name: '/offres/[id]',
        params: {
          id: uneMaison.id
        }
      }"
      class="text-red-400 hover:text-red-600"
    >
      {{ uneMaison.nomMaison }}
    </RouterLink>
  </li>
</ul>
  
</template>
