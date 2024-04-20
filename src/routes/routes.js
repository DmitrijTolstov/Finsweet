import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/layouts/Home.vue'
import About from '@/layouts/About.vue'
import WhatWeDo from '@/layouts/WhatWeDo.vue'
import Media from '@/layouts/Media.vue'
import Contact from '@/layouts/Contact.vue'
import Project from '@/layouts/Projects.vue'
import EventsMore from '@/layouts/EventsMore.vue'
import BlogsMore from '@/layouts/BlogsMore.vue'
import Donate from '@/layouts/Donate.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/whatWeDo', name: 'WhatWeDo', component: WhatWeDo },
  { path: '/media', name: 'Media', component: Media },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/project', name: 'Project', component: Project },
  { path: '/events', name: 'EventsMore', component: EventsMore },
  { path: '/blogs', name: 'BlogsMore', component: BlogsMore },
  { path: '/donate', name: 'Donate', component: Donate },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
