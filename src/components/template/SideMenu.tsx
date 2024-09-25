import ItemMenu from "./ItemMenu";

import {AssetIcon, EquipamentIcon, HomeIcon, IntelligenceIcon, MissionIcon, SuspectIcon, UnitIcon, UserIcon, VehicleIcon} from "../icons"

export default function SideMenu() {

    return (
        <aside>
            
            <ul>
                    <ItemMenu url="/" text="" icon={HomeIcon}/>

                    <ItemMenu url="/unit" text="Unit" icon={UnitIcon}/>
              
                    <ItemMenu url="/user" text="User" icon={UserIcon}/>
  
                    <ItemMenu url="/equipament" text="Equipament" icon={EquipamentIcon}/>

                    <ItemMenu url="/vehicle" text="Vehicle" icon={VehicleIcon}/>

                    <ItemMenu url="/asset" text="Asset" icon={AssetIcon}/>

                    <ItemMenu url="/intelligence" text="Intelligence" icon={IntelligenceIcon}/>

                    <ItemMenu url="/suspect" text="Suspect" icon={SuspectIcon}/>

                    <ItemMenu url="/mission" text="Mission" icon={MissionIcon}/>
                
            </ul>

        </aside>
    )

}