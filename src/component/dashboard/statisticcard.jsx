import Icon from "../icon/icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const StatisticCard = ({title, amount, icon, color, loading}) => {
  console.log(loading)
  return (
    <>
        <div className="col-xl-3 col-md-6">
            <div
            className="shadow-xl rounded-lg pt-5 px-4 mb-5 d-flex justify-content-between align-items-end"
            style={{ backgroundColor: `${color}` }}
            >
            <div className="pb-5">
                <div className="fw-500">{title}</div>
                <div className="h2 fw-700">
                {loading ? <FontAwesomeIcon icon={faSpinner} size="lg" spin/> :amount}
                </div>
                
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
