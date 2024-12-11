// types.ts
export type Question = {
    id: string;
    text: string;
    options: {
      text: string;
      nextId: string | null;
    }[];
  };
  
  export type Result = {
    id: string;
    text: string;
    details: string[];
    type: 'success' | 'warning' | 'error';
  };