import ContentLoader from "react-content-loader";

const ReposLoader = () => (
    <ContentLoader
    speed={1}
    viewBox=" 0 0 1024 340"
    width='100%'
    height='100%'
    backgroundColor="#111729"
    foregroundColor="#4A5567"
    >
        <rect x='0' y='0' rx='15' width='100%' height={132} />
        <rect x='0' y='192' rx='15' width='100%' height={132} />
    </ContentLoader>
)

export default ReposLoader;