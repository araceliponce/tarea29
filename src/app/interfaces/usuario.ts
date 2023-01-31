export interface Usuario {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}


export interface Tarea {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

