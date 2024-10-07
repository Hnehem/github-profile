// eslint-disable-next-line react/prop-types
export default function ProfileDetail({title, value}) {
    return (
        <div className="detail">
            <p className="title">{title}</p>
            <p className="val">{value}</p>
        </div>
    )
}