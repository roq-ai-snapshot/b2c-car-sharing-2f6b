const mapping: Record<string, string> = {
  bookings: 'booking',
  'car-parks': 'car_park',
  'car-reviews': 'car_review',
  companies: 'company',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
