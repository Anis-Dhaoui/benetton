interface IComputer {
    _id: string,
    ref: string,
    brandName: string,
    model: string,
    os: OS,
    type: TYPE,
    cpu: string,
    status: STATUS,
    usedBy: string,
    sessions: string[],
    networkDriveAccess: string[],
    softwares: string[],
    group: string
}

interface IUser {
    _id: string,
    firstName: string,
    lastName: string,
    username: string,
    role: string
}

enum TYPE {
    LAPTOP = 'Laptop',
    DESKTOP = 'Desktop'
}

enum OS {
    WINXP = 'WIN-XP',
    WIN7 = 'WIN-7',
    WIN10 = 'WIN-10',
    WIN11 = 'WIN-11'
}

enum STATUS {
    BROKEN = 'broken',
    UNUSED = 'unused',
    RUNNING = 'running'
}

declare module 'react-json-to-excel'

//$$$$$$$$$$$$$$$$$$$$$$$$$$// LOGIN //$$$$$$$$$$$$$$$$$$$$$$$$$$//
interface ILoginRes {
    user: {
        _id: string,
        firstName: string,
        lastName: string,
        username: string,
        role: string,
    }
    access_token: string
}

interface ILoginReq {
    username: string,
    password: string
}


//$$$$$$$$$$$$$$$$$$$$$$$$$$// REGISTER //$$$$$$$$$$$$$$$$$$$$$$$$$$//
interface IRegisterRes {
    statusCode: number,
    message: string,
    error?: string
}

interface IRegisterReq {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    interests: string[]
};


//$$$$$$$$$$$$$$$$$$$$$$$$$$// UPDATE PASSWORD //$$$$$$$$$$$$$$$$$$$$$$$$$$//µ
interface IPassword {
    currentPassword?: string,
    newPassword: string
}

