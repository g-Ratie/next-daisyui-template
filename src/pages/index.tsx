import type { NextPage, GetServerSideProps } from "next"
import { WelcomePage } from "components/templates/WelcomePage"

const Page: NextPage = () => {
  return <WelcomePage />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

export default Page
