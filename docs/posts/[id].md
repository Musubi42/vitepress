---
title: Post
---

<script setup>
// import { useData } from 'vitepress'
// const { $params } = useData()

import { useRoute } from 'vitepress'
import { ref } from 'vue'

// Fetch dynamic route params
const route = useRoute()
const params = route.params

// Access content from params
// const content = params.value.content
// const title = params.value.title


console.log("je suis paramas", params);
</script>

{{ $params.title }}

<!-- @content -->

# oui


