import useFetch from "./useFetch";

function useFetch() {
    const { loading, error, data } = useFetch("https://v2.jokeapi.dev/joke/Any");
    if (loading) return <span>Loading</span>;

    if (error) return <span>{error}</span>;

    let content = "";
    if (data.type === "twopart") {
        content = (
            <>
                <span>{data?.setup}</span>
                <span>{data?.delivery}</span>
            </>
        );
    } else {
        content = <span>{data?.joke}</span>;
    }
    return <div>{content}</div>;
}
export default useFetch;