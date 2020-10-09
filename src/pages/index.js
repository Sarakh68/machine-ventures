import React from "react"
import News from "./home/_news"
import Products from "./home/_products"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Products />
      <News />
    </Layout>
  )
}
