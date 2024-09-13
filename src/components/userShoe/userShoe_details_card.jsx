import { cookies } from "next/headers"
import Image from "next/image"
import { _apiBaseUrl, _usershoeUrl } from "utility"

export default async function UserShoeDetailsCard({ userShoeId }) {
  const userShoeResponse = await fetch(
    `${_apiBaseUrl}${_usershoeUrl}/${userShoeId}`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
      headers: {
        Cookie: `${cookies().toString()}`,
      },
    }
  )

  const userShoe = await userShoeResponse.json()

  console.log(userShoe)

  return (
    <>
      <div className="mt-4 rounded-xl flex-col md:flex-row md:flex-wrap mb-4 p-4 bg-blue-950 text-amber-600">
        <Image
          src={`${_apiBaseUrl}${userShoe?.shoe.image}`}
          alt={`image of ${userShoe?.shoe.name} shoe`}
          width={500}
          height={500}
          className="rounded-xl"
        />
        <div className="mt-2 text-2xl text-amber-600 font-semibold">
          {userShoe?.shoe.name}
        </div>
        <div className="text-md">Style: {userShoe?.shoe.style}</div>
        <div className="text-md">{userShoe?.shoe.year}</div>
        <div className="text-md">{userShoe?.shoe.modelNumber}</div>
        <div className="text-md">{userShoe?.shoe.colorway}</div>
      </div>
    </>
  )
}
