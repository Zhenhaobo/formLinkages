<template>
  <Form :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
    <template v-for="item in formItemData" :key="item.key">
      <FormItem v-if="!formLinkage[item.key]" :label="item.label" :name="formState[item.key]">
        <component :is="formItem[item.comp]" v-model:value="formState[item.key]" />
      </FormItem>
    </template>
    <slot></slot>
  </Form>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { Form, FormItem } from 'ant-design-vue';
import { formItem } from './formItem';
import { computedLinkage } from './utils';
import type { LinkageProps } from './utils';
export interface FormItemDataProps {
  comp: string;
  label: string;
  key: string;
  defaultValue?: string;
  componentName?: string;
  componentProps?: object;
  formItemProps?: object;
}
interface Props {
  formItemData: FormItemDataProps[],
  linkages: LinkageProps[],
}
const props = defineProps<Props>();
console.log("props: ", props);
const { formItemData, linkages } = props;



const formState = reactive<Record<string, string>>(formItemData?.reduce((pre, cur) => {
  const { key, defaultValue = '' } = cur;
  pre[key] = defaultValue;
  return pre;
}, {}))



const formLinkage = computed(() => computedLinkage(formState, linkages))
const onFinish = (values: any) => {

  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const handel = () => {
  console.log('handel', formState);

}
</script>