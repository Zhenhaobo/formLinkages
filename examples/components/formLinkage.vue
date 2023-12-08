<template>
  <Form :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
    <template v-for="item in formItemData" :key="item.key">
      <FormItem v-if="!formLinkage[item.key]" :label="item.label" :name="formState[item.key]">
        <component :is="formItem[item.comp]" v-model:value="formState[item.key]" />
      </FormItem>
    </template>

    <!-- <FormItem label="sAdas" name="rtyrt">
      <Input v-model:value="formState1.form1"></Input>
    </FormItem> -->
    <FormItem :wrapper-col="{ offset: 8, span: 16 }">
      <Button type="primary" @click="handel">子组件按钮</Button>
    </FormItem>
    <slot></slot>
  </Form>
</template>
<script lang="ts" setup>
import { reactive, computed, ref } from 'vue';
import { Form, FormItem, Button, Input } from 'ant-design-vue';
import { formItem } from '@/formItem';
import { computedLinkage } from '@/utils';
console.log("fromItem: ", formItem);
interface FormState {
  form1: string;
  password: string;
}
interface FormItemDataProps {
  comp: string;
  label: string;
  key: string;
  defaultValue: string;
  componentName: string;
  componentProps: object;
  formItemProps: object;
}
interface Props {
  formItemData: FormItemDataProps[]
}
const props = defineProps<Props>();
console.log("props: ", props);
const { formItemData, linkages } = props;



const formState = reactive<Record<string, string>>(formItemData?.reduce((pre, cur) => {
  const { key, defaultValue = 1 } = cur;
  pre[key] = defaultValue;
  return pre;
}, {}))

console.log('forms1', formState);

const formLinkage = computed(() => {
  console.log('computedLinkage',computedLinkage(formState, linkages));
  
  return computedLinkage(formState, linkages)
})
const onFinish = (values: any) => {
  console.log();
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const handel = () => {
  console.log('handel', formState);

}
</script>