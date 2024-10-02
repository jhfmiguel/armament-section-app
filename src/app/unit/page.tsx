"use client"

import Layout from "../../components/template/Layout";

import useAppData from "../../data/hook/useAppData"

export default function Unit() {

    const { changeTheme } = useAppData()

    return (
        <div className="">
        
        <Layout title="Unit" subtitle="Unit Registration">

            <button 
                onClick={changeTheme}>
                    Change Theme
            </button>

        </Layout>

        </div>
  
    )

}