export interface Chat {
    id?: number;
    name: string,
    message: string,
    created_at: string
}

export interface NewChat {
  name: string;
  message: string;
}