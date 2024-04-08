
export const load = async ({ params, fetch }: any) => {
    try {
        const response = await fetch(`/api/anime/${params.slug}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}