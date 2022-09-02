export const setLocalStorage = (props: { key: string, data: any }) => localStorage.setItem(props.key, props.data);

export const getLocalStorage = (key: string) => localStorage.getItem(key);