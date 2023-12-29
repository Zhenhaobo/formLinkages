
export interface LinkageProps {
    conditions: Array<Array<ConditionsProps>>;
    result: string[]
}

export enum ConditionOperator {
    GT = 'gt', // 大于
    GTE = 'gte', // 大于等于
    LT = 'lt', // 小于
    LTE = 'lte', // 小于等于
    EQ = 'eq', // 等于
    NEQ = 'neq', // 不等于
    INCLUDE = 'include', // 包含
    EXCLUDE = 'exclude', // 不包含
  }
  
export interface ConditionsProps {
    key: string;
    rule: ConditionOperator;
    value: string;
}[]

const computedConditon = (conditions: ConditionsProps[][], formState:Record<string, any>) => {
    return conditions.some((condition) => {
        if (Array.isArray(condition)) {
            return condition.every((it) => {
                const { key, rule, value } = it;
                    switch (rule) {
                        case 'eq':
                            return  formState[key] === value
                        case 'neq':
                            return formState[key] !== value
                        case 'gt':
                            return formState[key] > value
                        case 'lt':
                            return formState[key] < value
                        case 'gte':
                            return formState[key] >= value
                        case 'lte':
                            return formState[key] <= value
                        default:
                            return false
                    }
            })
        }
        return false
    })
}

/**
 * 
 * @param formState form表单的响应式values
 * @param linkages  显隐条件判定
 * @returns 
 */
export const computedLinkage = (formState: Record<string, any>, linkages: LinkageProps[]) => {
    const formLinkage: Record<string, boolean> = {};
    Array.isArray(linkages) && linkages.forEach(item => {
        const { conditions, result } = item;
        if (Array.isArray(conditions)) {
            const bool = computedConditon(conditions, formState)
            if (bool) {
                Array.isArray(result) && result?.forEach((key) => {
                    formLinkage[key] = true
                })
            }
        }
    })
    return formLinkage;
}