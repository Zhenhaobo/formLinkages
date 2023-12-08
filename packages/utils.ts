
export interface LinkageProps {
    conditions: ConditionsProps[][];
    result: ResultProps[]
}

export interface ConditionsProps {
    key: string;
    rule: string;
    value: string;
}[]
export interface ResultProps {
    key: string;
    value: 'hidden' | string;
}

const computedConditon = (conditions: ConditionsProps[][], formState:Record<string, any>) => {
    return conditions.some((condition) => {
        if (Array.isArray(condition)) {
            return condition.every((it) => {
                const { key, rule, value } = it;
                switch (rule) {
                    case 'eq':
                        return formState[key] === value
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
export const computedLinkage = (formState: Record<string, any>, linkage: LinkageProps[]) => {
    const formLinkage: Record<string, boolean> = {};
    Array.isArray(linkage) && linkage.forEach(item => {
        const { conditions, result } = item;
        if (Array.isArray(conditions)) {
            const bool = computedConditon(conditions, formState)
            if (bool) {
                Array.isArray(result) && result?.forEach((res) => {
                    formLinkage[res.key] = true
                })
            }
        }
    })

    return formLinkage;
}
