export enum RoutesPath {
  MENU = '/',
  CATALOG = '/catalog/:source',
  DESCRIPTION = '/description/:source/:id',
  FAVORITES = '/favorites/:source',
  BASKET = '/basket/:source',
  ADD_PROJECT = '/add-project',
  CONTACT_MANAGER = '/contact-manager',
  SERVICES = '/services',
}

export enum ViewTypes {
  CATALOG = 'catalog',
  FAVORITE = 'favorite',
  BASKET = 'basket',
}

export enum CardSource {
  INSTAGRAM = 'instagram',
  TELEGRAM = 'telegram',
}

export enum DataSource {
  INSTAGRAM_SOURCE = 'instagram',
  TELEGRAM_SOURCE = 'telegram',
}

export enum ComponentType {
  INSTAGRAM_COMPONENT = 'instagram',
  TELEGRAM_COMPONENT = 'telegram',
}
