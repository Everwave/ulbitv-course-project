import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  LIGHT = 'light',
  DARK = 'dark'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {to, children, theme = AppLinkTheme.LIGHT, className} = props
  return (
    <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  )
  
}