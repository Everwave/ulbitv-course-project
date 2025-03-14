import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"

interface NavbarProps {
  className?: string
}

export const Navbar = ({className}: NavbarProps) => {

  return (
    <nav className={classNames(cls.navbar, {}, [className])} >
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.DARK} to={'/'} className={cls.mainLink}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.DARK} to={'/about'}>О сайте</AppLink>
      </div>
    </nav>
  )
}