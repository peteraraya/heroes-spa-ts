import { useState } from 'react';

interface FormState {
    [key: string]: string;
  }

export const useForm = ( initialForm:FormState = {} ) => {
  
      const [formState, setFormState] = useState<FormState>(initialForm);

      const onInputChange = (event: React.SyntheticEvent) => {
       
        const target = event.target as HTMLInputElement;
        
        const { name: key, value: val } = target;
        
        setFormState({
          ...formState,
          [key]: val,
        });
      };

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}