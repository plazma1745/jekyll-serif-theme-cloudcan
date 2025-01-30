import { defineConfig } from 'tinacms';

export default defineConfig({
  clientId: 'c39c3a59-f411-47e0-823a-08e20f8094f7', // Замените на ваш ID
  branch: 'main', // Укажите ветку вашего репозитория
  token: 'ff1746b203df2a054f88c7cdb2df029c5801b627', // Замените на ваш токен
  build: {
    publicFolder: '_site',
    outputFolder: 'admin',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'assets',
    },
  },
  schema: {
    collections: [
      {
        name: 'posts',
        label: 'Posts',
        path: '_posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true,
          },
          {
            type: 'string',
            name: 'layout',
            label: 'Layout',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
