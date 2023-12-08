import { Input, Checkbox, Select } from 'ant-design-vue';
import type { Component } from 'vue';

enum FormItemType {
    'input',
    'checkbox',
    'select'
}

const formItem: Record<keyof typeof FormItemType, Component> = {
    'input': Input,
    'checkbox': Checkbox,
    'select': Select
}


export { formItem, FormItemType };