import Link from "next/link"

interface ItemMenuProps {

    url: string
    text: string
    icon: any

}

export default function ItemMenu(props: ItemMenuProps) {
    

    return (

        <li >

            <Link 
                href={props.url} 
                className={`flex flex-col justify-center items-center h-20 w-full text-gray-700 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-200 dark:hover:bg-gray-800 p-1 cursor-pointer`}
            >
               
                {props.icon}

                <span className={`text-xs font-light `}>
                        {props.text}
                </span>
            
            </Link>

        </li>

    )

}