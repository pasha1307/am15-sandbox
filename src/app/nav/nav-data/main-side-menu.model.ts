export interface SideMenuItem {
  title?: string;
  icon?: string;
  link?: string;
  color?: string;

  hideFor?: string;

  expanded?: boolean;
  subMenu?: SideMenuItem[];
}

export type SideMenu = SideMenuItem[];
