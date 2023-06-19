<template>
  <section class="border-t dark:border-white/10 border-neutral-200 pt-10">
    <h5 class="pt-5 pl-2 my-3">Contributors:</h5>
    <table>
      <colgroup>
        <col class="w-full sm:w-4/12" />
        <col class="lg:w-4/12" />
        <col class="lg:w-2/12" />
        <col class="lg:w-1/12" />
      </colgroup>
      <thead class="border-white/10 dark:text-white text-neutral-300">
        <tr>
          <th scope="col" class="pl-4 pr-8 sm:pl-6 lg:pl-8">User</th>
          <th scope="col" class="hidden pl-0 pr-8 sm:table-cell">Commit</th>
          <th scope="col" class="hidden pl-0 pr-4 sm:table-cell sm:pr-8 sm:text-left lg:pr-20">Status</th>
          <th scope="col" class="hidden pl-0 pr-4 sm:table-cell sm:pr-6 lg:pr-8">Message</th>
        </tr>
      </thead>
      <tbody class="divide-y dark:divide-white/5 divide-black/10">
        <tr v-for="user in gitActivity" :key="user.commit">
          <td class="flex items-center gap-x-4 py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
            <img class="smallerAvatar" :src="user.user.avatar" :alt="user.user.name" />
            <div class="truncate text-sm font-medium leading-6 dark:text-white text-neutral-500">
              <a :href="user.user.gitHub" target="_blank">{{ user.user.name }}</a>
            </div>
          </td>
          <td class="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
            <div class="flex gap-x-3">
              <div class="text-sm leading-6 text-gray-400">{{ user.commit }}</div>
              <span
                class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                {{ user.branch }}
              </span>
            </div>
          </td>
          <td
            class="hidden p-5 pl-0 text-sm leading-6 sm:pr-8 lg:pr-20 sm:flex items-center justify-end gap-x-2 sm:justify-start">
            <div :class="[statuses[user.status], 'flex-none rounded-full p-1']">
              <div class="h-1.5 w-1.5 rounded-full bg-current" />
            </div>
            <div class="hidden dark:text-white text-neutral-400 sm:block">{{ user.status }}</div>
          </td>
          <td class="hidden py-5 text-left text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
            <div>{{ user.message }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
const statuses = {
  Completed: 'text-sky-400 bg-sky-400/10',
  Pending: 'text-yellow-400 bg-yellow-400/10',
  Merged: 'text-green-400 bg-green-400/10',
}
const gitActivity = [
  {
    user: {
      name: '@Tr1pwyr',
      avatar:
        'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/16789da8-89a9-44d5-85e2-bd6001c68a00/public',
      "gitHub": "https://github.com/tr1pwyr",
    },
    commit: '1ccd92a',
    branch: 'main',
    status: 'Completed',
    message: 'v.0.1.6',
    dateTime: '2023-01-23T11:00',
  },
  {
    "user": {
      "name": "@JamesTurner-Dev",
      "avatar": "https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/8193b4ac-87e4-4d11-ad94-7c8663f7c700/public",
      "gitHub": "https://github.com/jamesturner-dev",
    },
    "commit": "adfc696",
    "branch": "spec",
    "status": "Merged",
    "message": "Fixed ugly logo shirnkage",
    "dateTime": "2023-01-23T10:15"
  },
  {
    "user": {
      "name": "@ChristopherCollins",
      "avatar": "https://images.unsplash.com/photo-1515270741844-9ff62ad94f56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "gitHub": "https://github.com/christophercollins",
    },
    "commit": "eb8a594",
    "branch": "spec",
    "status": "Pending",
    "message": "code separated",
    "dateTime": "2023-01-23T10:30"
  },
  {
    "user": {
      "name": "@Tr1pwyr",
      "avatar": "https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/16789da8-89a9-44d5-85e2-bd6001c68a00/public",
      "gitHub": "https://github.com/tr1pwyr",
    },
    "commit": "eb8a595",
    "branch": "main",
    "status": "Completed",
    "message": "Init commit",
    "dateTime": "2023-01-23T10:45"
  }
]
</script>