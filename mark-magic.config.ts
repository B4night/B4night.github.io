import { defineConfig } from '@mark-magic/cli'
import * as joplin from '@mark-magic/plugin-joplin'
import * as local from '@mark-magic/plugin-local'
import { OutputPlugin } from '@mark-magic/core'
import { config } from 'dotenv'
import path from 'path'
import { existsSync } from 'fs'

if (existsSync('.env.local')) {
  config({ path: '.env.local' })
}

function vuepress(options: { path: string }): OutputPlugin {
  const plugin = local.output({
    path: options.path,
    contentPath: (it) => path.join(options.path, it.id + '.md'),
    meta: (it) => ({
      title: it.name,
      date: new Date(it.created).toJSON(),
      tags: it.extra.tags,
    }),
  })
  plugin.name = 'vuepress'
  return plugin
}

export default defineConfig({
  tasks: [
    {
      name: 'blog',
      input: joplin.input({
        baseUrl: 'http://localhost:41184',
        token: process.env.JOPLIN_TOKEN!,
        tag: 'blog',
      }),
      output: vuepress({
        path: './src/posts',
      }),
    },
  ],
})
