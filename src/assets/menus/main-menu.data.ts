import {Menu} from "../../app/shared/models/main-menu-model";

export const SIDE_MENU: Menu = [
  {
    title: 'Home',
    icon: 'home',
    link: '/home',
    color: '#267bd9',
  },
  {
    title: 'Admin Console',
    icon: 'person',
    link: '/admin',
    color: '#267bd9',
  },
  {
    title: 'My Work',
    icon: 'select_check_box',
    link: '/dash',
    color: '#267bd9',
    subMenu: [
      {
        title: 'My Appeals',
        icon: 'money',
        link: '/appeals',
        color: '#267bd9',
      },
      {
        title: 'My Tasks',
        icon: 'task',
        color: '#267bd9',
        link: '/tasks',
      },
      {
        title: 'My Reports',
        icon: 'summarize',
        color: '#267bd9',
        link: '/reports',
      },
    ],
  },
  {
    title: 'Work baskets',
    link: '/wb',
    icon: 'inventory_2',
    color: '#267bd9',
    subMenu: [
      {
        title: 'Intake',
        icon: 'send',
        link: '/wb/intake',
        color: '#ff7f0e',
      },
      {
        title: 'Adjudication',
        icon: 'people',
        color: '#ff7f0e',
        link: '/wb/adjudication',
      },
      {
        title: 'Hearing',
        icon: 'label',
        color: '#ff7f0e',
        link: '/wb/hearing',
      },
      {
        title: 'Effectuation',
        icon: 'people',
        color: '#ff7f0e',
        link: '/wb/effectuation',
      },
      {
        title: 'Call center',
        icon: 'people',
        color: '#ff7f0e',
        link: '/wb/calls',
      },
      {
        title: 'Correspondence',
        icon: 'drafts',
        color: '#ff7f0e',
        link: '/wb/corr',
      },
    ],
  },
  {
    title: 'Tools',
    icon: 'build',
    color: '#267bd9',
    subMenu: [
      {
        title: 'Manager tools',
        icon: 'build',
        link: '/manager_tools',
        color: '#ff7f0e',
      },
      {
        title: 'Master Calendar',
        icon: 'calendar_month',
        color: '#ff7f0e',
        link: '/master_calendar',
      },
      {
        title: 'Hearing Calendar',
        icon: 'event',
        color: '#ff7f0e',
        link: '/hearing_calendar',
      },
      {
        title: 'Bulk Transfer',
        icon: 'undo',
        color: '#ff7f0e',
        link: '/bulk_transfer',
      },
      {
        title: 'CRM Bulk Transfer',
        icon: 'undo',
        color: '#ff7f0e',
        link: '/crm_bulk_transfer',
      },
      {
        title: 'Search',
        icon: 'search',
        color: '#ff7f0e',
        link: '/search',
      },
    ],
  },
  {
    title: 'Chat',
    icon: 'chat',
    link: '/chat',
    color: '#267bd9',
  },
  {
    title: 'Contacts',
    icon: 'contacts',
    link: '/contacts',
    color: '#267bd9',
  }
];
