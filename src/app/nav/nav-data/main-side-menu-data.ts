export const MAIN_SIDE = [
  {
    title: 'Home',
    icon: 'home',
    link: '/home',
    color: '#267bd9',
  },
  {
    title: 'My Worklist',
    icon: 'select_check_box',
    link: '/mywork',
    color: '#267bd9',
    expanded: true,
    subMenu: [
      {
        title: 'My Appeals',
        icon: 'cases',
        link: '/mywork/appeals',
        color: '#267bd9'
      },
      {
        title: 'My Tasks',
        icon: 'task',
        color: '#267bd9',
        link: '/mywork/tasks',
      },
      {
        title: 'My Reports',
        icon: 'summarize',
        color: '#267bd9',
        link: '/mywork/reports',
      },
      {
        title: 'My Team',
        icon: 'diversity_1',
        color: '#267bd9',
        link: '/mywork/team',
      },
    ],
  },
  {
    title: 'Workbaskets',
    link: '/wb',
    icon: 'inventory_2',
    color: '#267bd9',
    expanded: true,
    subMenu: [
      {
        title: 'Intake',
        icon: 'send',
        link: '/wb/intake',
        color: '#2E8540',
      },
      {
        title: 'Adjudication',
        icon: 'emoji_objects',
        color: '#2E8540',
        link: '/wb/adjudication',
      },
      {
        title: 'Hearing',
        icon: 'hearing',
        color: '#2E8540',
        link: '/wb/hearing',
      },
      {
        title: 'Effectuation',
        icon: 'done_outline',
        color: '#2E8540',
        link: '/wb/effectuation',
      },
      {
        title: 'Call center',
        icon: 'deskphone',
        color: '#2E8540',
        link: '/wb/calls',
      },
      {
        title: 'Correspondence',
        icon: 'drafts',
        color: '#2E8540',
        link: '/wb/corr',
      },
    ],
  },
  {
    title: 'Utilities',
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
    title: 'Call Center',
    icon: 'chat',
    link: '/chat',
    color: '#267bd9',
  },
  {
    title: 'Admin Console',
    icon: 'person',
    link: '/admin',
    color: '#267bd9',
  },
  {
    title: 'SMARTY API',
    icon: 'contacts',
    link: '/contacts',
    color: '#267bd9',
  }
];
