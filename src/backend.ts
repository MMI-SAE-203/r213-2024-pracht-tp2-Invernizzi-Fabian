import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

export async function allMaisonsFavori() {
    const maisonListe = await pb.collection('maison').getFullList({
      filter: 'favori=true'
    })
    return maisonListe
  }
// Copier ici les fonctions developpées en R214 | Système d'information

