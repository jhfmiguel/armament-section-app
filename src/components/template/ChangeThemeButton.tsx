import { SunIcon, MoonIcon } from "../icons"

interface ChangeThemeButtonProps {

    theme?: string 
    changeTheme?: () => void

}

export default function ChangeThemeButton(props: ChangeThemeButtonProps) {

    return props.theme === 'dark' ? (
        
        <div 
            onClick={ props.changeTheme }
            className={``}
        >

            <div
                className={``}
            >

                {SunIcon}

            </div>

            <div
                className={``}
            >

                <span>Light</span>

            </div>

        </div>

    ) : (

        <div></div>

    )

}