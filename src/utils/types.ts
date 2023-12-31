export interface registerType {
  name?: string;
  email: string;
  password: string;
  password2?: string;
  identity?: string;
}

export interface registerRulesType {
    name?: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    email: {
        type: string;
        required: boolean;
        message: string;
        trigger: string;
    }[];
    password: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    password2?: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    } | {
      validator: (rule: any, value: string, callback: any) => void,
      trigger: string
    })[];
}

export interface userType {
    avatar: string;
    exp: number;
    iat: number;
    id: string;
    identity: string;
    name: string;
    email?: string;  
    password?: string;
    success?: boolean;
    token?: string;
    accessible_pages: { [key: string]: string[] }; 
}