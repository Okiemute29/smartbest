import Icon from "../icon/icons"

const StatisticCard = ({title, amount, icon, color}) => {
  return (
    <>
        <div className="col-xl-3 col-md-6">
            <div
            className="shadow-xl rounded-lg pt-5 px-4 mb-5 d-flex justify-content-between align-items-end"
            style={{ backgroundColor: `${color}` }}
            >
            <div className="pb-5">
                <div className="fw-500">{title}</div>
                <div className="h2 fw-700">{amount}</div>
            </div>
            {console.log(icon)}
            {icon === 'customer' && <Icon customer={icon} />}
            {icon === 'product' && <Icon product={icon} />}
            {icon === 'order' && <Icon order={icon} />}
            {icon === 'sale' && <Icon sale={icon} />}
            </div>
        </div>
      
    </>
  )
}

export default StatisticCard
