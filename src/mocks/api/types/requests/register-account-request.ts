export type RegisterAccountRequest = {
  userId: number;
  initialBalance: number;
  ignoreInOverview: boolean;
  name: string;
  description: string;
};
