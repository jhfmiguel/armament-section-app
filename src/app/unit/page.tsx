"use client"

import Layout from "../../components/template/Layout";

import useAppData from "../../data/hook/useAppData"

export default function Unit() {

    const datas = useAppData()

    return (
        <div className="">
        
        <Layout title="Unit" subtitle="Unit Registration">

            <h3>{datas.name}</h3>

        </Layout>

        </div>
  
    )

}