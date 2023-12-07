<script setup lang="ts">
import formLinkage from '@/components/formLinkage.vue';
import { Button, FormItem } from 'ant-design-vue';


const formItemData = [
  {
    comp: 'input',
    label: '表单1',
    key: 'form1',
    componentName: 'Form1',
    componentProps: {
      // 表单组件属性
    },
    formItemProps: {}
  },
  {
    comp: 'input',
    label: '表单2',
    key: 'form2',
    componentName: 'Form2',
    componentProps: {
      // 表单组件属性
    },
    formItemProps: {}
  },
  {
    comp: 'input',
    label: '表单3',
    key: 'form3',
    componentName: 'Form3',
    componentProps: {
      // 表单组件属性
    },
    formItemProps: {}
  },
  {
    comp: 'input',
    label: '表单4',
    key: 'form4',
    componentName: 'Form4',
    componentProps: {
      // 表单组件属性   
    },
    formItemProps: {}
  }
];
const linkages = [
{
  conditons: [
    [
      {
        key: 'form1',
        rule: 'eq',
        value: '1'
      }
    ]
  ],
  result: [
    {
      key: 'form2',
      value: 'hidden'
    }
  ]
}
]
</script>

<template>
  <div>
    <form-Linkage :formItemData="formItemData" :linkages="linkages ">
      <FormItem :wrapper-col="{ offset: 8, span: 16 }">
        <Button type="primary" html-type="submit">父组件按钮</Button>
      </FormItem>
    </form-Linkage>
  </div>
</template>

<style scoped></style>
