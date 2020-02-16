import Error from "next/error";

const Page = ({ errorCode }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return <div>This page can't be reached</div>
}

export default Page