<script>
  export default {
  async paths() {
    const transformEvenementsObject = (partenaireData) => {
  let eventsByMonth = {};

  partenaireData.forEach((data) => {
    const { titre, description, localisation, debut, fin } = data.attributes;
    let mois = monthNames[new Date(debut).getMonth()];

    let event = {
      titre,
      description,
      localisation,
      debut: new Date(debut).toISOString().replace(/-|:|\.\d\d\d/g,""),
      debutOriginal: debut,
      fin: new Date(fin).toISOString().replace(/-|:|\.\d\d\d/g,""),
      isPast: new Date(debut) < new Date(),
    };

    if (!eventsByMonth[mois]) {
      eventsByMonth[mois] = [];
    }

    eventsByMonth[mois].push(event);
  });

  return eventsByMonth;
};

const getEvenements = async () => {
  const url = `https://backoffice.roulerpouraider.fr/api/vite-presses`;

  // if (process.env.GENERATE) {
    const { data, pending, error } = await useAsyncData("vitepress", () => {
      return $fetch(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 98142cfcfe16d9cd95293f68ec19a2c5884f20ae9a2d5767971c38178a2f05dae10390e26ab456c97d2ab79914cb433dd04d50cc2f4cde9e1aa4fa86cde25fab10a45215e0bb1708207555280181184bf0df39b16427651e6c5d0117314ec67ca1410f2194d6006617f8593ce2a3f0afba078929c7017b3f44c1d372f914afd5`,
        },
      });
    });

    if (!error.value && !pending.value && data.value) {
      evenements.value = transformEvenementsObject(data.value.data);
    } else {
      console.error("oui" + error.value);
    }
  // }
};

    // use respective CMS client library if needed
    const data = await (await fetch('https://backoffice.roulerpouraider.fr/api/vite-presses', {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 98142cfcfe16d9cd95293f68ec19a2c5884f20ae9a2d5767971c38178a2f05dae10390e26ab456c97d2ab79914cb433dd04d50cc2f4cde9e1aa4fa86cde25fab10a45215e0bb1708207555280181184bf0df39b16427651e6c5d0117314ec67ca1410f2194d6006617f8593ce2a3f0afba078929c7017b3f44c1d372f914afd5`,
        },
    })).json()

    console.log(data);

    // return data.map(entry => {
    //   console.log(entry);
    //   return {
    //     params: { id: entry.id, /* title, authors, date etc. */ },
    //     // title: entry.attributes.Title
    //     title: "entry.attributes.Title"
    //   }
    // })

    // getEvenements();

    return {
      title: "jean"
    }
  }
}
</script>

<template>
<!-- {{ path.title }} -->
</template>

<!-- # {{ $params.title }}


- by {{ $params.author }} on {{ $params.date }} -->

<!-- @content -->

# oui