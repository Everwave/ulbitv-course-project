import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/theme-light.svg'
import DarkIcon from 'shared/assets/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'


interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <Button 
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}>
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />} 
    </Button>
  )
}