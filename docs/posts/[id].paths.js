// posts/[id].paths.js
import { loadEnv } from 'vitepress'

const env = loadEnv('', process.cwd())

export default {
  async paths() {
    console.log(env.STRAPI_API_TOKEN);
    const response = await fetch('https://backoffice.roulerpouraider.fr/api/vite-presses', {
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${env.STRAPI_API_TOKEN}`
        'Authorization': `Bearer 98142cfcfe16d9cd95293f68ec19a2c5884f20ae9a2d5767971c38178a2f05dae10390e26ab456c97d2ab79914cb433dd04d50cc2f4cde9e1aa4fa86cde25fab10a45215e0bb1708207555280181184bf0df39b16427651e6c5d0117314ec67ca1410f2194d6006617f8593ce2a3f0afba078929c7017b3f44c1d372f914afd5`
      }
    })
    const { data } = await response.json()

    console.log(data);

    return data.map((pkg) => {
      return {
        params: {
          id: pkg.id,
          title: pkg.attributes.Title
        }
      }
    })
    // const result = data.map(entry => ({
    //   params: { id: entry.id },
    //   title: entry.attributes.Title,
    // }))

    // console.log("je suis un ", result);

  }
}
