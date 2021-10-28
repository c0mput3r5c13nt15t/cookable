export interface recipe {
  imageUrl?: string,
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
