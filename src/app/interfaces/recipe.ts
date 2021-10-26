export interface recipe {
  name: string,
  eta: number,
  price: number,
  ingredients: ingredient[],
  description: string,
}

export interface ingredient {
  name: string,
  amount: string,
}
