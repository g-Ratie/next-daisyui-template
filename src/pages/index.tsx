import type { NextPage, GetServerSideProps } from "next"
import Home from "components/template"

const Page: NextPage = () => {
  return <Home />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

export default Page
