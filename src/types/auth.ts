export interface AuthResponse {
    good:        Good;
    accesstoken: string;
}

export interface Good {
    _id:        string;
    First_name: string;
    Last_name:  string;
    Email:      string;
    Telephone:  number;
    password:   string;
    absences:   number;
    ClassId:    string;
    PersoId:    string;
    RoleId:     string;
    descriptor: number[];
    __v:        number;
}



export interface AuthLogin {
    Email:string;
    password:string
}
