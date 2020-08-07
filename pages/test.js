export default function Test({queryParam}) {
    let name = queryParam
    return (
        <>
            <h1 id='hello'>Oh, Hello... {name}</h1>
            <style jsx>
                {`
                    h1 {
                        color: hotpink;
                    }
                `}
            </style>
        </>
    )
}

export function getServerSideProps({query}) {
    let queryParam = query.name
    return {
        props: {
            queryParam,
        }
    }
}