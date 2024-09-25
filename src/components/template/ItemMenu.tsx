import Link from "next/link"

interface ItemMenuProps {

    url: string
    text: string
    icon: any

}

export default function ItemMenu(props: ItemMenuProps) {
    

    return (

        <li >

            <Link href={props.url} className={`flex flex-col justify-center items-center h-20 w-full hover:bg-gray-200 p-1`}>
               
                {props.icon}

                <span className={`text-xs font-light text-gray-600`}>
                        {props.text}
                </span>
            
            </Link>

        </li>

    )

}