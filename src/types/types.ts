export type Class = {
  id: string;
  code: string;
  name: string;
};

export type Attendance = {
  id: string;
  first_name: string;
  last_name: string;
  period1: boolean;
  period2: boolean;
  period3: boolean;
};

export type StudentAttendance = {
  id: string;
  date: Date;
  period1: boolean;
  period2: boolean;
  period3: boolean;
};

export const classFaker: Class[] = [
  {
    id: "b1f1e1f4-2c4a-4b5c-9b0d-5e1f1e1f1e1f",
    code: "ABCD12",
    name: "Class 23",
  },
  {
    id: "c2f2e2f5-3d5b-4c6d-9d1e-6f2f2e2f2e2f",
    code: "EFGH34",
    name: "Class 47",
  },
  {
    id: "d3f3e3f6-4d5b-4c7d-9d2e-7f3f3e3f3e3f",
    code: "IJKL56",
    name: "Class 15",
  },
  {
    id: "e4f4e4f7-5d6b-4c8d-9d3e-8f4f4e4f4e4f",
    code: "MNOP78",
    name: "Class 89",
  },
  {
    id: "f5f5e5f8-6d7b-4c9d-9d4e-9f5f5e5f5e5f",
    code: "QRST90",
    name: "Class 12",
  },
  {
    id: "g6f6e6f9-7d8b-4c0d-9d5e-0g6f6e6f6e6f",
    code: "UVWX12",
    name: "Class 34",
  },
  {
    id: "h7f7e7fa-8d9b-4c1d-9d6e-1h7f7e7f7e7f",
    code: "YZAB34",
    name: "Class 56",
  },
  {
    id: "i8f8e8fb-9d0b-4c2d-9d7e-2i8f8e8f8e8f",
    code: "CDEF56",
    name: "Class 78",
  },
  {
    id: "j9f9e9fc-ad1b-4c3d-9d8e-3j9f9e9f9e9f",
    code: "GHJK78",
    name: "Class 90",
  },
  {
    id: "k0f0e0fd-be2b-4c4d-9d9e-4k0f0e0f0e0f",
    code: "LMNO90",
    name: "Class 11",
  },
];

export const attendanceFaker: Attendance[] = [
  {
    id: "b1f1e1f4-2c4a-4b5c-9b0d-5e1f1e1f1e1f",
    first_name: "John",
    last_name: "Smith",
    period1: true,
    period2: false,
    period3: true,
  },
  {
    id: "c2f2e2f5-3d5b-4c6d-9d1e-6f2f2e2f2e2f",
    first_name: "Emily",
    last_name: "Johnson",
    period1: false,
    period2: true,
    period3: false,
  },
  {
    id: "d3f3e3f6-4d5b-4c7d-9d2e-7f3f3e3f3e3f",
    first_name: "Michael",
    last_name: "Williams",
    period1: true,
    period2: true,
    period3: false,
  },
  {
    id: "e4f4e4f7-5d6b-4c8d-9d3e-8f4f4e4f4e4f",
    first_name: "Katie",
    last_name: "Jones",
    period1: false,
    period2: false,
    period3: true,
  },
  {
    id: "f5f5e5f8-6d7b-4c9d-9d4e-9f5f5e5f5e5f",
    first_name: "Chris",
    last_name: "Brown",
    period1: true,
    period2: false,
    period3: true,
  },
  {
    id: "g6f6e6f9-7d8b-4c0d-9d5e-0g6f6e6f6e6f",
    first_name: "Jane",
    last_name: "Davis",
    period1: false,
    period2: true,
    period3: false,
  },
  {
    id: "h7f7e7fa-8d9b-4c1d-9d6e-1h7f7e7f7e7f",
    first_name: "Emily",
    last_name: "Smith",
    period1: true,
    period2: true,
    period3: true,
  },
  {
    id: "i8f8e8fb-9d0b-4c2d-9d7e-2i8f8e8f8e8f",
    first_name: "Michael",
    last_name: "Johnson",
    period1: false,
    period2: false,
    period3: true,
  },
  {
    id: "j9f9e9fc-ad1b-4c3d-9d8e-3j9f9e9f9e9f",
    first_name: "John",
    last_name: "Williams",
    period1: true,
    period2: false,
    period3: false,
  },
  {
    id: "k0f0e0fd-be2b-4c4d-9d9e-4k0f0e0f0e0f",
    first_name: "Katie",
    last_name: "Jones",
    period1: true,
    period2: true,
    period3: true,
  },
];

export const studentAttendance: StudentAttendance[] = [
  {
    id: "MONDAY",
    period1: true,
    period2: false,
    period3: true,
    date: new Date("2024-08-07"),
  },
  {
    id: "TUESDAY",
    period1: false,
    period2: true,
    period3: false,
    date: new Date("2024-08-06"),
  },
  {
    id: "WEDNESDAY",
    period1: true,
    period2: true,
    period3: false,
    date: new Date("2024-08-3"),
  },
  {
    id: "THURSDAY",
    period1: false,
    period2: false,
    period3: true,
    date: new Date(),
  },
  {
    id: "FRIDAY",
    period1: true,
    period2: false,
    period3: true,
    date: new Date("2024-07-30"),
  },
];

export interface Stats {
  totalPeriodsPresent: number;
  totalPeriodsAbsent: number;
  percentageDaysAttended: string;
  percentageDaysAbsent: string;
  daysAbsent: number;
}


interface FileData {
    content: string;
    filename: string;
    contentType: string;
    uploadedAt: Date;
  }
  
export interface RequestData {
    file: FileData;
    _id: string;
    state: string;
    message: string;
    studId: string;
    PersoId: string;
    __v: number;
  }


  export interface AttendanceResponse {
    attend: Attend[];
}
  export interface Attend {
    id:           string;
    _id:           string;
    First_period:  boolean;
    Second_period: boolean;
    Third_period:  boolean;
    studId:        string;
    date:          Date;
    createdAt:     Date;
    updatedAt:     Date;
    __v:           number;
}


export interface ClassResults {
    classes: SingleClass[];
}

export interface SingleClass {
    _id:       string;
    id:       string;
    Name:      string;
    persoId:   string;
    createdAt: Date;
    updatedAt: Date;
    __v:       number;
}



export interface ClassStudents {
    student: Student[];
}

export interface Student {
    id:string;
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




export interface AttendanceListResults {
    attendance: AttendanceList[];
}

export interface AttendanceList {
    _id:           string;
    id:           string;
    First_period:  boolean;
    Second_period: boolean;
    Third_period:  boolean;
    studId:        StudID;
    date:          Date;
    createdAt:     Date;
    updatedAt:     Date;
    __v:           number;
    ClassId:       ClassID;
}

export interface ClassID {
    _id:       string;
    Name:      string;
    persoId:   string;
    createdAt: Date;
    updatedAt: Date;
    __v:       number;
}

export interface StudID {
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
