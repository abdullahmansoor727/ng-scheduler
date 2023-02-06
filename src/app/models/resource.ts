export interface IResource {
  id: number;
  name: string;
}

export interface IShiftResource extends IResource {
  id: number;
  name: string;
  availability: {
    mon: { day: boolean; night: boolean };
    tue: { day: boolean; night: boolean };
    wed: { day: boolean; night: boolean };
    thurs: { day: boolean; night: boolean };
    fri: { day: boolean; night: boolean };
    sat: { day: boolean; night: boolean };
    sun: { day: boolean; night: boolean };
  };
  allocation: { day: number; night: number };
}
