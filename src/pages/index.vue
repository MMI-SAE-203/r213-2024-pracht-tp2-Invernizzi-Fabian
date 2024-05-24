<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

import MaisonCard from '@/components/MaisonCard.vue';
import { allMaisonsFavori, pb } from '@/backend';

const maisonsListe = await allMaisonsFavori()
 

</script>

<template>
  
  <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.id" v-bind="uneMaison" />
</template>
