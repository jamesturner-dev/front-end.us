<template>
  <aside class="w-full sm:w-1/3 md:w-1/4 sticky top-0">
    <ul role="list" class="divide-y dark:divide-slate-600 divide-slate-200">
      <li v-for="item in activityItems" :key="item.commit" class="py-4">
        <div class="flex items-center gap-x-2">
          <img :src="item.user.imageUrl" alt="" class="avatar smallerAvatar" />
          <h3 class="flex-auto truncate text-sm font-semibold leading-6">
            <a :href="item.url" class="primaryText">{{ item.user.name }}</a>
          </h3>
        </div>
        <p class="mt-1 truncate text-xs text-neutral-500">
          {{ item.projectName }}
        </p>
      </li>
    </ul>
  </aside>
</template>

<script setup>
const activityItems = [
  {
    user: {
      name: 'Outside Walled Gardens',
      imageUrl: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdlYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    date: '2023-04-18',
    projectName: 'Independent Development is the Future of Software',
    url: 'https://jamesturner.dev/blog/walled-garden',
  },
  {
    user: {
      name: 'Fast Websites',
      imageUrl: 'https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    projectName: 'Why do you focus so much on website speed? ',
    date: '2023-01-23',
    url: 'https://jamesturner.dev/blog/fast-websites',
  },
  {
    user: {
      name: 'Why Vue',
      imageUrl:
        'https://images.unsplash.com/photo-1593720216276-0caa6452e004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
    },
    projectName: 'Why VueJs is my preferred framework.',
    date: '2023-01-23',
    url: 'https://jamesturner.dev/blog/why-vue',
  },
  {
    user: {
      name: 'Python Podcasts',
      imageUrl: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY2fHxweXRob258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
    },
    projectName: 'Python Podcasts that I have enjoyed.',
    date: '2023-02-22',
    url: 'https://jamesturner.dev/blog/python-podcasts',
  },
  {
    user: {
      name: 'Web Form',
      imageUrl: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdlYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    date: '2023-03-24',
    projectName: 'There are no small components.  Everything is important',
    url: 'https://jamesturner.dev/blog/web-form',
  },
]
</script>