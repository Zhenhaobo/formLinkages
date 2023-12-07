<template>
  <Form :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
    <FormItem v-for="item in formItemData" :key="item.key" :label="item.label" :name="formState[item.key]">
      <component :is="formItem[item.comp]" v-model:value="formState[item.key]" />
    </FormItem>
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
console.log("fromItem: ", formItem);

const props = defineProps(['formItemData']);
console.log("props: ", props);
const { formItemData } = props;

const formState: Record<string, any> = computed(() => {
  return formItemData?.reduce((pre, cur) => {
    const { key, defaultValue = '' } = cur;
    pre[key] = defaultValue;
    return pre;
  }, {})
})
// interface FormState {
//   form1: string;
//   password: string;
//   remember: boolean;
// }

const formState1 = reactive<FormState>({
  form1: '',
  password: '',
  remember: true,
});
console.log('forms1', formState.value);

const onFinish = (values: any) => {
  console.log('Success:', values);
};
const sss = (item) => {
  console.log("item: ", item);
  return 'sss';
}
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const handel = () => {
  console.log('handel', formState.value);

}
</script>