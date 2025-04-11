import { DataSource, RoutesPath } from 'src/types'

const createCatalogPath = (source: DataSource): string => {
  return RoutesPath.CATALOG.replace(':source', source)
}

export const menuItems = [
  {
    title: 'Instagram',
    path: createCatalogPath(DataSource.INSTAGRAM_SOURCE),
    iconSrc: '/assets/img/MenuPNG/instagram.png',
  },
  {
    title: 'Telegram',
    path: createCatalogPath(DataSource.TELEGRAM_SOURCE),
    iconSrc: '/assets/img/MenuPNG/telegram.png',
  },
  {
    title: 'Добавить свой проект',
    path: RoutesPath.ADD_PROJECT,
    iconSrc: '/assets/img/MenuPNG/project.png',
  },
  {
    title: 'Связаться с менеджером',
    path: RoutesPath.CONTACT_MANAGER,
    iconSrc: '/assets/img/MenuPNG/contact-manager.png',
  },
  {
    title: 'Услуги',
    path: RoutesPath.SERVICES,
    iconSrc: '/assets/img/MenuPNG/services.png',
  },
]
