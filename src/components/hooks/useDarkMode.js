import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValues) => {
  const [value, setValue] = useLocalStorage(key, initialValues);

  const handleChange = (value) => {
    setValue(value);
  };

  return [value, handleChange];
};
