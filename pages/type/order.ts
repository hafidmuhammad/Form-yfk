export type MealDetail = {
  time: string;
  address: string;
  request: string;
};

export type OrderDetail = {
  date: string;
  day: string;
  meals: MealDetail[];
};

export type WeeklyOrder = {
  week: string;
  details: OrderDetail[];
};

export type MonthlyOrder = {
  month: string;
  weeks: WeeklyOrder[];
};
