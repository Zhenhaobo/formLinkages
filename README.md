# formLinkage

This template should help get you started developing with Vue 3 in Vite.

## Installing

### Package manager
Using npm:
```sh
npm install formlinkage
```

Using pnpm:
```sh
pnpm install formlinkage
```

Using yarn:
```sh
yarn add formlinkage
```

## Example
```sh
js: 
import { reactive, computed } from 'vue';
import { computedLinkage } from 'formlinkage';
const form = reactive({
  name: '',
  post: '',
  isRead: false,
});

const linkages = [
  {
    conditions: [
      [
        {
          key: 'name',
          rule: 'eq',
          value: '123'
        }
      ]
    ],
    result: ['post']
  }
]
const linkageForm = computed(()=> computedLinkage(form, linkages))

template: 
    <a-form :model="form" :style="{ width: '600px' }">
      <a-form-item field="name" tooltip="Please enter username" label="Username">
        <a-input v-model="form.name" placeholder="please enter your username..." />
      </a-form-item>
      <a-form-item v-show="!linkageForm['post']" field="post" label="Post">
        <a-input v-model="form.post" placeholder="please enter your post..." />
      </a-form-item>
    </a-form>
```

