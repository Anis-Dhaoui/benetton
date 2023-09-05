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