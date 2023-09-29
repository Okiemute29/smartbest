import SideBar from '../component/sidebar/sidebar'
import Header from '../component/hearder/header'
import StatisticCard from '../component/dashboard/statisticcard';

const Dashboard = () => {
  return (
    <>
      <div className="aiz-main-wrapper">
        {/* sidebar */}
        <SideBar />

        <div className="aiz-content-wrapper">
          {/* Header */}
          <Header />
          {/* .aiz-topbar */}

          <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">
              <div className="alert alert-danger d-flex align-items-center">
                Please Configure SMTP Setting to work all email sending
                functionality,
                <a
                  className="alert-link ml-2"
                  href="https://shop.activeitzone.com/admin/smtp-settings"
                >
                  Configure Now
                </a>
              </div>
              <div className="row">
                <StatisticCard title='Total Customers' amount='40' icon='customer' color='#91A8D0' />
                <StatisticCard title='Total Products' amount='307' icon='product' color='#F0C05A' />
                <StatisticCard title='Total Orders' amount='203' icon='order' color='#7BC4C4' />
                <StatisticCard title='Total Sales' amount='$67,519.59' icon='sale' color='#FF6F61' />
              </div>
              <div className="row mb-3">
                <div className="col-xl-3 col-md-6">
                  <div
                    className="rounded-lg mb-4"
                    style={{ backgroundColor: "#FF6F61" }}
                  >
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">
                        <div className />
                      </div>
                      <div className="chartjs-size-monitor-shrink">
                        <div className />
                      </div>
                    </div>
                    <div className="px-4 pt-4 pb-3 text-white fs-16 fw-700">
                      Order Stat
                    </div>
                    <canvas
                      id="graph-1"
                      className="w-100 chartjs-render-monitor"
                      height={420}
                      style={{ display: "block", height: 210, width: 290 }}
                      width={580}
                    />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="rounded-lg p-3 d-flex align-items-center border mb-4 bg-light">
                        <div className="flex-grow-1 py-5px">
                          <div className="fs-20 fw-700 opacity-90">81</div>
                          <div className="opacity-60">Total Category</div>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path
                            id="Path_18951"
                            data-name="Path 18951"
                            d="M20.358,12.949A3.691,3.691,0,0,1,24,16.656h0v3.627A3.7,3.7,0,0,1,20.358,24H16.805a3.692,3.692,0,0,1-3.631-3.718h0V16.656a3.669,3.669,0,0,1,3.631-3.706h3.553Zm-15.257,0a.974.974,0,0,1,.935.464,1.018,1.018,0,0,1,0,1.062.974.974,0,0,1-.935.464H3.642a1.71,1.71,0,0,0-1.693,1.717h0v3.581a1.744,1.744,0,0,0,1.693,1.717H7.217a1.664,1.664,0,0,0,1.2-.5,1.735,1.735,0,0,0,.5-1.218h0V14.859l-.015-.134a1.007,1.007,0,0,1,.454-.893.963.963,0,0,1,1.1.033,1.011,1.011,0,0,1,.38,1.051h0v5.355a3.68,3.68,0,0,1-3.642,3.718H3.642A3.759,3.759,0,0,1,0,20.271H0V16.656a3.746,3.746,0,0,1,1.067-2.625,3.593,3.593,0,0,1,2.574-1.082H5.1Zm15.257,1.99H16.805a1.7,1.7,0,0,0-1.682,1.717h0v3.627a1.724,1.724,0,0,0,.489,1.217,1.653,1.653,0,0,0,1.192.5h3.553a1.653,1.653,0,0,0,1.192-.5,1.724,1.724,0,0,0,.489-1.217h0V16.656a1.735,1.735,0,0,0-.493-1.214,1.664,1.664,0,0,0-1.189-.5ZM20.358,0a3.759,3.759,0,0,1,3.631,3.718h0V7.333a3.748,3.748,0,0,1-1.032,2.634A3.6,3.6,0,0,1,20.4,11.085h-1.47a1,1,0,0,1,0-1.99h1.425a1.676,1.676,0,0,0,1.2-.518,1.747,1.747,0,0,0,.484-1.233h0V3.718A1.722,1.722,0,0,0,20.358,2H16.805a1.7,1.7,0,0,0-1.682,1.717h0V9.141l-.012.125a1,1,0,0,1-.991.853.96.96,0,0,1-.683-.31,1,1,0,0,1-.264-.713h0V3.718A3.746,3.746,0,0,1,14.234,1.09,3.593,3.593,0,0,1,16.805,0h3.553ZM7.194,0a3.692,3.692,0,0,1,3.642,3.718h0V7.344A3.746,3.746,0,0,1,9.769,9.969a3.593,3.593,0,0,1-2.574,1.082H3.642A3.691,3.691,0,0,1,0,7.344H0V3.718A3.7,3.7,0,0,1,3.642,0H7.194Zm0,2H3.642a1.663,1.663,0,0,0-1.211.491,1.735,1.735,0,0,0-.5,1.226h0V7.344a1.736,1.736,0,0,0,.492,1.248,1.664,1.664,0,0,0,1.223.5H7.194a1.676,1.676,0,0,0,1.2-.518,1.747,1.747,0,0,0,.484-1.233h0V3.718A1.711,1.711,0,0,0,7.194,2Z"
                            fill="#7bc4c4"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="rounded-lg p-3 d-flex align-items-center border mb-4 bg-light">
                        <div className="flex-grow-1 py-5px">
                          <div className="fs-20 fw-700 opacity-90">50</div>
                          <div className="opacity-60">Total Brands</div>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height="23.999"
                          viewBox="0 0 24 23.999"
                        >
                          <g
                            id="Group_8915"
                            data-name="Group 8915"
                            transform="translate(-640 -606)"
                          >
                            <path
                              id="Union_34"
                              data-name="Union 34"
                              d="M-618-600c0-.012,0-.023,0-.035A4,4,0,0,0-622-604h-17a1,1,0,0,1-1-1,1,1,0,0,1,1-1h17a6.007,6.007,0,0,1,6,6h0a1,1,0,0,1-1,1A1,1,0,0,1-618-600Z"
                              transform="translate(1280 1212)"
                              fill="#ff6f61"
                            />
                            <path
                              id="Union_36"
                              data-name="Union 36"
                              d="M22,6c0-.012,0-.023,0-.035A4,4,0,0,0,18,2H1A1,1,0,0,1,1,0H18a6.007,6.007,0,0,1,6,6h0a1,1,0,1,1-2,0Z"
                              transform="translate(664 629.999) rotate(180)"
                              fill="#ff6f61"
                            />
                            <path
                              id="Subtraction_79"
                              data-name="Subtraction 79"
                              d="M6,12a6,6,0,1,1,6-6A6.007,6.007,0,0,1,6,12ZM6,2a4,4,0,1,0,4,4A4.005,4.005,0,0,0,6,2Z"
                              transform="translate(646 612)"
                              fill="#ff6f61"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="rounded-lg p-3 d-flex align-items-center border mb-4 bg-light">
                        <div className="flex-grow-1 py-5px">
                          <div className="fs-20 fw-700 opacity-90">55</div>
                          <div className="opacity-60">Coupons</div>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <g
                            id="Group_8909"
                            data-name="Group 8909"
                            transform="translate(-9.875 -11)"
                          >
                            <g id="Icon-Tag" transform="translate(9.875 11)">
                              <path
                                id="Fill-129"
                                d="M-58.8-347a2.712,2.712,0,0,1-1.937-.8l-7.577-7.582a2.72,2.72,0,0,1,0-3.876L-58.172-369.4a6.045,6.045,0,0,1,3.817-1.6h6.495a2.774,2.774,0,0,1,2.735,2.736v6.5a6.052,6.052,0,0,1-1.6,3.819L-56.862-347.8a2.712,2.712,0,0,1-1.937.8Zm4.444-22.289a4.482,4.482,0,0,0-2.621,1.083L-67.117-358.06a1,1,0,0,0,0,1.425l7.577,7.582a1,1,0,0,0,1.424,0L-47.974-359.2a4.341,4.341,0,0,0,1.082-2.622v-6.5a1.022,1.022,0,0,0-1.026-1.026h-6.438Z"
                                transform="translate(69.125 371)"
                                fill="#91a8d0"
                              />
                              <path
                                id="Fill-130"
                                d="M-41.539-358.177a3.368,3.368,0,0,1-3.361-3.361,3.368,3.368,0,0,1,3.361-3.361,3.368,3.368,0,0,1,3.361,3.361,3.368,3.368,0,0,1-3.361,3.361Zm0-5.128a1.775,1.775,0,0,0-1.766,1.766,1.775,1.775,0,0,0,1.766,1.766,1.775,1.775,0,0,0,1.766-1.766,1.775,1.775,0,0,0-1.766-1.766Z"
                                transform="translate(58.702 368.375)"
                                fill="#91a8d0"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="rounded-lg p-3 d-flex align-items-center border mb-4 bg-light">
                        <div className="flex-grow-1 py-5px">
                          <div className="fs-20 fw-700 opacity-90">8</div>
                          <div className="opacity-60">Offers</div>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19.53"
                          height={24}
                          viewBox="0 0 19.53 24"
                        >
                          <path
                            id="Path_18950"
                            data-name="Path 18950"
                            d="M8.932,9.023l0,0,0,0Zm10.8-.2a1.342,1.342,0,0,0-.25-.19,1.085,1.085,0,0,0-1.518.446,6.273,6.273,0,0,1-1.517,1.928,9.457,9.457,0,0,0-4.63-9.864,1.085,1.085,0,0,0-1.618.874A7.613,7.613,0,0,1,7.519,7.377l-.25.2A9.236,9.236,0,0,0,5.113,9.6a9.747,9.747,0,0,0,3.966,15.09,1.084,1.084,0,0,0,1.494-1,1.139,1.139,0,0,0-.054-.339,7.57,7.57,0,0,1-.206-2.8,9.769,9.769,0,0,0,4.679,4.358,1.082,1.082,0,0,0,.776.041A9.759,9.759,0,0,0,19.732,8.82ZM15.5,22.742a7.556,7.556,0,0,1-3.881-4.776,9.665,9.665,0,0,1-.195-1.046A1.085,1.085,0,0,0,10.553,16a1.065,1.065,0,0,0-.208-.02,1.084,1.084,0,0,0-.94.544A9.72,9.72,0,0,0,8.1,21.645,7.579,7.579,0,0,1,6.822,10.938,7.111,7.111,0,0,1,8.516,9.357.808.808,0,0,0,8.6,9.3s.322-.266.333-.272A9.73,9.73,0,0,0,12.075,4a7.309,7.309,0,0,1,1.5,8.775,1.085,1.085,0,0,0,1.284,1.538,8.523,8.523,0,0,0,4.19-2.916A7.6,7.6,0,0,1,15.5,22.742Z"
                            transform="translate(-3 -1)"
                            fill="#d94f70"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="rounded-lg p-4 border mb-4 bg-light">
                    <div className="py-2 d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.999"
                        height="23.999"
                        viewBox="0 0 23.999 23.999"
                      >
                        <g
                          id="Group_8914"
                          data-name="Group 8914"
                          transform="translate(-2.25 -2.25)"
                        >
                          <path
                            id="Path_18961"
                            data-name="Path 18961"
                            d="M22.071,26.249H6.436A4.186,4.186,0,0,1,2.25,22.063V6.428A4.186,4.186,0,0,1,6.436,2.25H22.071a4.178,4.178,0,0,1,4.178,4.178V22.063a4.186,4.186,0,0,1-4.178,4.186ZM6.436,4.217A2.211,2.211,0,0,0,4.217,6.428V22.063a2.219,2.219,0,0,0,2.219,2.219H22.071a2.211,2.211,0,0,0,2.211-2.219V6.428a2.211,2.211,0,0,0-2.211-2.211Z"
                            fill="#f0c05a"
                          />
                          <path
                            id="Path_18962"
                            data-name="Path 18962"
                            d="M12.5,15.233a1.9,1.9,0,0,1-.787-.173,1.959,1.959,0,0,1-1.149-1.8V3.234a.984.984,0,1,1,1.967,0V13.258l1.849-1.637a1.9,1.9,0,0,1,2.526,0l1.9,1.645L18.743,3.234a.984.984,0,0,1,1.967,0V13.258a1.959,1.959,0,0,1-1.149,1.8,1.9,1.9,0,0,1-2.054-.307l-1.873-1.621-1.873,1.629a1.9,1.9,0,0,1-1.259.472ZM15.6,13.109ZM15.674,13.109Zm1.141,8.278H9.734a.984.984,0,1,1,0-1.967h7.082a.984.984,0,1,1,0,1.967Z"
                            transform="translate(-1.385)"
                            fill="#f0c05a"
                          />
                        </g>
                      </svg>
                      <div className="flex-grow-1 fw-700 mx-4">
                        Order Placed
                      </div>
                      <div
                        className="fs-20 fw-600"
                        style={{ color: "#F0C05A" }}
                      >
                        96
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg p-4 border mb-4 bg-light">
                    <div className="py-2 d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.999"
                        height="25.134"
                        viewBox="0 0 23.999 25.134"
                      >
                        <g
                          id="Group_8912"
                          data-name="Group 8912"
                          transform="translate(-41.293 -19.076)"
                        >
                          <path
                            id="Path_18953"
                            data-name="Path 18953"
                            d="M63.758,20.966V39.321c0,.054,0,.11-.008.163.01-.069.018-.135.028-.2a1.214,1.214,0,0,1-.082.3l.076-.184a1.7,1.7,0,0,1-.1.176c-.061.1.112-.122.051-.061-.023.023-.043.051-.066.074s-.041.038-.061.056c-.092.089.161-.1.048-.038-.059.033-.115.069-.176.1l.184-.076a1.184,1.184,0,0,1-.3.082l.2-.028a5.439,5.439,0,0,1-.576.008H58.56l.66,1.15a6.862,6.862,0,1,0-12.035-6.582,7.037,7.037,0,0,0-.732,2.656,6.91,6.91,0,0,0,.579,3.25,6.391,6.391,0,0,0,.339.673l.66-1.15H43.715c-.227,0-.464.015-.691-.008l.2.028a1.214,1.214,0,0,1-.3-.082l.184.076a1.7,1.7,0,0,1-.176-.1c-.1-.061.122.112.061.051-.023-.023-.051-.043-.074-.066s-.038-.041-.056-.061c-.089-.092.1.161.038.048-.033-.059-.069-.115-.1-.176l.076.184a1.214,1.214,0,0,1-.082-.3c.01.069.018.135.028.2a5.309,5.309,0,0,1-.008-.6V20.989c0-.054,0-.11.008-.163-.01.069-.018.135-.028.2a1.215,1.215,0,0,1,.082-.3l-.076.184a1.7,1.7,0,0,1,.1-.176c.061-.1-.112.122-.051.061.023-.023.043-.051.066-.074s.041-.038.061-.056c.092-.089-.161.1-.048.038.059-.033.115-.069.176-.1l-.184.076a1.184,1.184,0,0,1,.3-.082l-.2.028a6.185,6.185,0,0,1,.653-.008H63.4c.056,0,.11,0,.166.008l-.2-.028a1.215,1.215,0,0,1,.3.082l-.184-.076a1.7,1.7,0,0,1,.176.1c.1.061-.122-.112-.061-.051.023.023.051.043.074.066s.038.041.056.061c.089.092-.1-.161-.038-.048.033.059.069.115.1.176l-.076-.184a1.184,1.184,0,0,1,.082.3c-.01-.069-.018-.135-.028-.2,0,.051.005.1.008.143a.765.765,0,0,0,1.53,0A1.893,1.893,0,0,0,63.419,19.1H43.264a2.074,2.074,0,0,0-1.01.237A1.9,1.9,0,0,0,41.3,21V38.712a3.559,3.559,0,0,0,.1,1.242,1.915,1.915,0,0,0,1.216,1.175,2.017,2.017,0,0,0,.63.082h4.78a.772.772,0,0,0,.66-1.15,6.534,6.534,0,0,1-.349-.693l.076.184a6.2,6.2,0,0,1-.428-1.565c.01.069.018.135.028.2a6.223,6.223,0,0,1,0-1.629c-.01.069-.018.135-.028.2a6.2,6.2,0,0,1,.423-1.553l-.076.184a6.186,6.186,0,0,1,.413-.808c.079-.127.161-.255.25-.377l.069-.094c.01-.013.02-.025.031-.041.043-.061-.071.1-.069.089.013-.056.11-.135.148-.181a5.992,5.992,0,0,1,.63-.642c.054-.048.11-.094.166-.14l.092-.074c.087-.071-.158.117-.036.028s.245-.176.37-.257a6.1,6.1,0,0,1,.92-.484l-.184.076a6.173,6.173,0,0,1,1.553-.423l-.2.028a6.2,6.2,0,0,1,1.626,0l-.2-.028a6.2,6.2,0,0,1,1.553.423l-.184-.076a6.186,6.186,0,0,1,.808.413c.127.079.255.161.377.25l.094.069c.013.01.025.02.041.031.061.043-.1-.071-.089-.069.056.013.135.11.181.148a5.991,5.991,0,0,1,.642.63c.048.054.094.11.14.166.025.031.048.061.074.092.071.087-.117-.158-.028-.036s.176.245.257.37a6.1,6.1,0,0,1,.484.92l-.076-.184a6.173,6.173,0,0,1,.423,1.553c-.01-.069-.018-.135-.028-.2a6.335,6.335,0,0,1,0,1.629c.01-.069.018-.135.028-.2a6.171,6.171,0,0,1-.428,1.565l.076-.184a6.534,6.534,0,0,1-.349.693.771.771,0,0,0,.66,1.15h2.33c.841,0,1.68.008,2.521,0a1.891,1.891,0,0,0,1.879-1.866V20.966a.767.767,0,0,0-1.535,0Z"
                            transform="translate(0 -0.023)"
                            fill="#7bc4c4"
                          />
                          <path
                            id="Path_18954"
                            data-name="Path 18954"
                            d="M251.777,19.842v6.939l1.15-.66-2.506-1.313c-.107-.056-.217-.117-.326-.171a.844.844,0,0,0-.806.015c-.056.031-.115.059-.171.089-.482.252-.966.5-1.448.76l-1.18.619,1.15.66V19.842l-.765.765h5.665a.765.765,0,0,0,0-1.53h-5.665a.775.775,0,0,0-.765.765v6.939a.773.773,0,0,0,1.15.66l2.475-1.3c.12-.061.237-.125.357-.186h-.772l2.475,1.3c.12.061.237.125.357.186a.773.773,0,0,0,1.15-.66V19.842a.762.762,0,1,0-1.524,0Zm3.263,17.506a6.233,6.233,0,0,1-.054.816c.01-.069.018-.135.028-.2a6.171,6.171,0,0,1-.428,1.565l.076-.184a6.214,6.214,0,0,1-.607,1.1c-.048.071-.1.138-.15.209.148-.209.043-.056.005-.01s-.061.076-.094.112c-.12.14-.245.275-.375.4s-.268.252-.41.367l-.115.092c.2-.163.056-.043.008-.008-.069.051-.14.1-.212.148a6.1,6.1,0,0,1-1.007.546l.184-.076a6.152,6.152,0,0,1-1.563.428l.2-.028a6.262,6.262,0,0,1-1.634,0l.2.028a6.152,6.152,0,0,1-1.563-.428l.184.076a6,6,0,0,1-1.007-.546c-.071-.048-.143-.1-.212-.148-.046-.036-.191-.156.008.008l-.115-.092c-.143-.117-.278-.24-.41-.367s-.255-.263-.375-.4c-.031-.038-.064-.074-.094-.112s-.143-.2.005.01c-.048-.069-.1-.138-.15-.209a6.213,6.213,0,0,1-.607-1.1l.076.184a6.2,6.2,0,0,1-.428-1.565c.01.069.018.135.028.2a6.223,6.223,0,0,1,0-1.629c-.01.069-.018.135-.028.2a6.2,6.2,0,0,1,.423-1.553l-.076.184a6.184,6.184,0,0,1,.413-.808c.079-.127.161-.255.25-.377l.069-.094c.01-.013.02-.025.031-.041.043-.061-.071.1-.069.089.013-.056.11-.135.148-.181a5.992,5.992,0,0,1,.63-.642c.054-.048.11-.094.166-.14l.092-.074c.087-.071-.158.117-.036.028s.245-.176.37-.257a6.1,6.1,0,0,1,.92-.484l-.184.076a6.173,6.173,0,0,1,1.553-.423l-.2.028a6.2,6.2,0,0,1,1.626,0l-.2-.028a6.2,6.2,0,0,1,1.553.423l-.184-.076a6.186,6.186,0,0,1,.808.413c.127.079.255.161.377.25l.094.069c.013.01.025.02.041.031.061.043-.1-.071-.089-.069.056.013.135.11.181.148a5.993,5.993,0,0,1,.642.63c.048.054.094.11.14.166.025.031.048.061.074.092.071.087-.117-.158-.028-.036s.176.245.257.37a6.1,6.1,0,0,1,.484.92l-.076-.184a6.173,6.173,0,0,1,.423,1.553c-.01-.069-.018-.135-.028-.2.023.27.041.54.041.813a.765.765,0,1,0,1.53,0,6.848,6.848,0,0,0-3.939-6.205,6.727,6.727,0,0,0-1.853-.566,7.4,7.4,0,0,0-2.187.008,6.849,6.849,0,0,0-5.264,9.269,7.23,7.23,0,0,0,1.219,2.009,6.833,6.833,0,0,0,5.713,2.322,6.985,6.985,0,0,0,3.995-1.7,6.788,6.788,0,0,0,2.19-3.832,7.471,7.471,0,0,0,.127-1.305.765.765,0,0,0-1.53,0Z"
                            transform="translate(-196.417)"
                            fill="#7bc4c4"
                          />
                          <path
                            id="Path_18955"
                            data-name="Path 18955"
                            d="M359.965,640l1.706,1.706.242.242a.774.774,0,0,0,1.081,0l1.366-1.366,2.177-2.177.5-.5a.764.764,0,1,0-1.081-1.081l-1.366,1.366-2.177,2.177-.5.5h1.081l-1.706-1.706-.242-.242A.764.764,0,0,0,359.965,640Z"
                            transform="translate(-310.336 -601.79)"
                            fill="#7bc4c4"
                          />
                        </g>
                      </svg>
                      <div className="flex-grow-1 fw-700 mx-4">
                        Confirmed Order
                      </div>
                      <div
                        className="fs-20 fw-600"
                        style={{ color: "#7BC4C4" }}
                      >
                        9
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg p-4 border mb-4 bg-light">
                    <div className="py-2 d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height="26.182"
                        viewBox="0 0 24 26.182"
                      >
                        <path
                          id="Path_18963"
                          data-name="Path 18963"
                          d="M16,0,4,5.455V20.727l12,5.455,12-5.455V5.455Zm0,2.4,8.045,3.657L16,9.712,7.952,6.055ZM6.182,19.323V7.645l8.727,3.965V23.288Zm19.636,0-8.727,3.966V11.61l8.727-3.966Z"
                          transform="translate(-4)"
                          fill="#91a8d0"
                        />
                      </svg>
                      <div className="flex-grow-1 fw-700 mx-4">
                        Processed Order
                      </div>
                      <div
                        className="fs-20 fw-600"
                        style={{ color: "#91A8D0" }}
                      >
                        16
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg p-4 border mb-4 bg-light">
                    <div className="py-2 d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height="20.727"
                        viewBox="0 0 24 20.727"
                      >
                        <path
                          id="shipping-truck"
                          d="M25,13.409v5.455a1.091,1.091,0,0,1-1.091,1.091H22.818a3.273,3.273,0,1,1-6.545,0H9.727a3.273,3.273,0,1,1-6.545,0H2.091A1.091,1.091,0,0,1,1,18.864V5.773A3.273,3.273,0,0,1,4.273,2.5h9.818a3.273,3.273,0,0,1,3.273,3.273V7.955h2.182a3.273,3.273,0,0,1,2.618,1.309l2.618,3.491a.665.665,0,0,1,.076.153l.065.12A1.091,1.091,0,0,1,25,13.409ZM7.545,19.955a1.091,1.091,0,1,0-1.091,1.091A1.091,1.091,0,0,0,7.545,19.955ZM15.182,5.773a1.091,1.091,0,0,0-1.091-1.091H4.273A1.091,1.091,0,0,0,3.182,5.773v12h.851a3.273,3.273,0,0,1,4.844,0h6.305Zm2.182,6.545h4.364l-1.309-1.745a1.091,1.091,0,0,0-.873-.436H17.364Zm3.273,7.636a1.091,1.091,0,1,0-1.091,1.091A1.091,1.091,0,0,0,20.636,19.955ZM22.818,14.5H17.364v3.033a3.273,3.273,0,0,1,4.6.24h.851Z"
                          transform="translate(-1 -2.5)"
                          fill="#ff6f61"
                        />
                      </svg>
                      <div className="flex-grow-1 fw-700 mx-4">
                        Order Delivered
                      </div>
                      <div
                        className="fs-20 fw-600"
                        style={{ color: "#FF6F61" }}
                      >
                        67
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="border rounded-lg px-4 pt-4 pb-3">
                    <div className="fs-16 fw-700 mb-2">Top Category</div>
                    <ul className="list-group list-group-raw">
                      <li className="list-group-item d-flex align-items-center px-0 py-5px mt-1">
                        <img alt=''
                          src="https://shop.activeitzone.com/public/uploads/all/kwYXmOKkm91XWRfGF8h8hVriGoPyOmhSmgi5InAJ.png"
                          data-src="https://shop.activeitzone.com/public/uploads/all/kwYXmOKkm91XWRfGF8h8hVriGoPyOmhSmgi5InAJ.png"
                          className="size-50px rounded lazyloaded"
                          onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                        />
                        <div className="minw-0 flex-grow-1 text-truncate-2 mx-3">
                          Cellphones &amp; Tabs
                        </div>
                        <div className="ml-auto mr-0 fw-600 text-danger">
                          $19,354.70
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0 py-5px mt-1">
                        <img alt=''
                          src="https://shop.activeitzone.com/public/uploads/all/D5dhekz6XMXvgXrjAxBrHvXGWvIEX2advil097AT.png"
                          data-src="https://shop.activeitzone.com/public/uploads/all/D5dhekz6XMXvgXrjAxBrHvXGWvIEX2advil097AT.png"
                          className="size-50px rounded lazyloaded"
                          onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                        />
                        <div className="minw-0 flex-grow-1 text-truncate-2 mx-3">
                          Smartphones
                        </div>
                        <div className="ml-auto mr-0 fw-600 text-danger">
                          $16,294.40
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0 py-5px mt-1">
                        <img alt=''
                          src="https://shop.activeitzone.com/public/uploads/all/uazXsowjuJ4ESShXDqGxf0SjlGQlyIwnm8yxNZEr.png"
                          data-src="https://shop.activeitzone.com/public/uploads/all/uazXsowjuJ4ESShXDqGxf0SjlGQlyIwnm8yxNZEr.png"
                          className="size-50px rounded lazyloaded"
                          onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                        />
                        <div className="minw-0 flex-grow-1 text-truncate-2 mx-3">
                          Computer &amp; Accessories
                        </div>
                        <div className="ml-auto mr-0 fw-600 text-danger">
                          $15,736.45
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0 py-5px mt-1">
                        <img alt=''
                          src="https://shop.activeitzone.com/public/uploads/all/QFr6jOK360KnwVvONku4UnJzpIrY2M0314pWkXK9.png"
                          data-src="https://shop.activeitzone.com/public/uploads/all/QFr6jOK360KnwVvONku4UnJzpIrY2M0314pWkXK9.png"
                          className="size-50px rounded lazyloaded"
                          onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                        />
                        <div className="minw-0 flex-grow-1 text-truncate-2 mx-3">
                          Women Clothing &amp; Fashion
                        </div>
                        <div className="ml-auto mr-0 fw-600 text-danger">
                          $8,653.83
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0 py-5px mt-1">
                        <img alt=''
                          src="https://shop.activeitzone.com/public/uploads/all/p7GDjaYAa9lLs32Zd1LqmXLze3ywrhOahKnNtNi6.png"
                          data-src="https://shop.activeitzone.com/public/uploads/all/p7GDjaYAa9lLs32Zd1LqmXLze3ywrhOahKnNtNi6.png"
                          className="size-50px rounded lazyloaded"
                          onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                        />
                        <div className="minw-0 flex-grow-1 text-truncate-2 mx-3">
                          Automobile &amp; Motorcycle
                        </div>
                        <div className="ml-auto mr-0 fw-600 text-danger">
                          $7,029.83
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0 py-5px mt-1">
                        <img alt=''
                          src="https://shop.activeitzone.com/public/uploads/all/b1W2DDYY7AiuHEMkOGZK57snOz1qXj5A0heRFbxh.png"
                          data-src="https://shop.activeitzone.com/public/uploads/all/b1W2DDYY7AiuHEMkOGZK57snOz1qXj5A0heRFbxh.png"
                          className="size-50px rounded lazyloaded"
                          onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                        />
                        <div className="minw-0 flex-grow-1 text-truncate-2 mx-3">
                          Car accessories
                        </div>
                        <div className="ml-auto mr-0 fw-600 text-danger">
                          $5,253.38
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="border rounded-lg px-4 pt-4 pb-3">
                    <div className="fs-16 fw-700 mb-2">Top Brands</div>
                    <ul className="list-group list-group-raw">
                      <li className="list-group-item d-flex align-items-center px-0 py-5px mt-1">
                        <span className="d-flex align-items-center size-50px">
                          <img alt=''
                            src="https://shop.activeitzone.com/public/uploads/all/TRcc8CiQwf6YXDPVPNtmaZ6RQZDyFtDGxWZ2fuIb.png"
                            data-src="https://shop.activeitzone.com/public/uploads/all/TRcc8CiQwf6YXDPVPNtmaZ6RQZDyFtDGxWZ2fuIb.png"
                            className="mw-100 mh-100 rounded lazyloaded"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </span>
                        <div className="minw-0 flex-grow-1 text-truncate-2 mx-3">
                          Apple
                        </div>
                        <div className="ml-auto mr-0 fw-600 text-danger">
                          $10,604.50
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0 py-5px mt-1">
                        <span className="d-flex align-items-center size-50px">
                          <img alt=''
                            src="https://shop.activeitzone.com/public/uploads/all/al5TKVSD1W9yw8tyi1E7gRhzkSTqDQ1SWOsLSNZY.png"
                            data-src="https://shop.activeitzone.com/public/uploads/all/al5TKVSD1W9yw8tyi1E7gRhzkSTqDQ1SWOsLSNZY.png"
                            className="mw-100 mh-100 rounded lazyloaded"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </span>
                        <div className="minw-0 flex-grow-1 text-truncate-2 mx-3">
                          HERMES
                        </div>
                        <div className="ml-auto mr-0 fw-600 text-danger">
                          $6,552.40
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0 py-5px mt-1">
                        <span className="d-flex align-items-center size-50px">
                          <img alt=''
                            src="https://shop.activeitzone.com/public/uploads/all/Z9Y4p2xXqWuJ3hJIj9j7ifqfkCAutoCvAbIBFL8i.png"
                            data-src="https://shop.activeitzone.com/public/uploads/all/Z9Y4p2xXqWuJ3hJIj9j7ifqfkCAutoCvAbIBFL8i.png"
                            className="mw-100 mh-100 rounded lazyloaded"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </span>
                        <div className="minw-0 flex-grow-1 text-truncate-2 mx-3">
                          Asus
                        </div>
                        <div className="ml-auto mr-0 fw-600 text-danger">
                          $6,178.48
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0 py-5px mt-1">
                        <span className="d-flex align-items-center size-50px">
                          <img alt=''
                            src="https://shop.activeitzone.com/public/uploads/all/TVLVGJ6YtUhDFctQT3J43q9CcAs2CpxWg3DoJlGC.png"
                            data-src="https://shop.activeitzone.com/public/uploads/all/TVLVGJ6YtUhDFctQT3J43q9CcAs2CpxWg3DoJlGC.png"
                            className="mw-100 mh-100 rounded lazyloaded"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </span>
                        <div className="minw-0 flex-grow-1 text-truncate-2 mx-3">
                          One Plus
                        </div>
                        <div className="ml-auto mr-0 fw-600 text-danger">
                          $5,567.10
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0 py-5px mt-1">
                        <span className="d-flex align-items-center size-50px">
                          <img alt=''
                            src="https://shop.activeitzone.com/public/uploads/all/RMnxStCCvQFavNhqUCzqJFaiaTvSUcbR5jzv2LGn.png"
                            data-src="https://shop.activeitzone.com/public/uploads/all/RMnxStCCvQFavNhqUCzqJFaiaTvSUcbR5jzv2LGn.png"
                            className="mw-100 mh-100 rounded lazyloaded"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </span>
                        <div className="minw-0 flex-grow-1 text-truncate-2 mx-3">
                          Mobil
                        </div>
                        <div className="ml-auto mr-0 fw-600 text-danger">
                          $3,263.53
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0 py-5px mt-1">
                        <span className="d-flex align-items-center size-50px">
                          <img alt=''
                            src="https://shop.activeitzone.com/public/uploads/all/jJt6OUUCu3RZfarr1TH8x6Ag9Cjss7sTNYPD5SRV.png"
                            data-src="https://shop.activeitzone.com/public/uploads/all/jJt6OUUCu3RZfarr1TH8x6Ag9Cjss7sTNYPD5SRV.png"
                            className="mw-100 mh-100 rounded lazyloaded"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </span>
                        <div className="minw-0 flex-grow-1 text-truncate-2 mx-3">
                          LOUIS VUITTON
                        </div>
                        <div className="ml-auto mr-0 fw-600 text-danger">
                          $2,998.09
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-lg-6">
                  <div className="border rounded-lg p-4 mb-4">
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">
                        <div className />
                      </div>
                      <div className="chartjs-size-monitor-shrink">
                        <div className />
                      </div>
                    </div>
                    <div className="fs-16 fw-700 mb-4">Sales stat</div>
                    <canvas
                      id="graph-2"
                      className="w-100 chartjs-render-monitor"
                      height={352}
                      width={482}
                      style={{ display: "block", height: 176, width: 241 }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="border rounded-lg p-4 mb-4">
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">
                        <div className />
                      </div>
                      <div className="chartjs-size-monitor-shrink">
                        <div className />
                      </div>
                    </div>
                    <div className="fs-16 fw-700 mb-4">Sales by Category</div>
                    <canvas
                      id="graph-3"
                      className="w-100 chartjs-render-monitor"
                      height={352}
                      width={482}
                      style={{ display: "block", height: 176, width: 241 }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="fs-16 fw-700 mb-3">Top Products</div>
                <div
                  className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider"
                  data-items={7}
                  data-xl-items={6}
                  data-lg-items={4}
                  data-md-items={3}
                  data-sm-items={2}
                >
                  <div className="slick-list draggable">
                    <div
                      className="slick-track flex"
                      style={{
                        opacity: 1,
                        width: 1860,
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <div
                        className="slick-slide slick-current slick-active"
                        data-slick-index={0}
                        aria-hidden="false"
                        style={{ width: 155 }}
                      >
                        <div>
                          <div
                            className="carousel-box"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="aiz-card-box border rounded mb-2 bg-white">
                              <div className="position-relative">
                                <a
                                  href="/product/asus-rog-phone-ii-zs660kl"
                                  className="d-block"
                                  target="_blank"
                                  tabIndex={0}
                                >
                                  <img alt=''
                                    className="img-fit mx-auto h-210px lazyloaded"
                                    src="https://shop.activeitzone.com/public/uploads/all/eAyjUaOrohoDCUY4tR9SxpkcaqEBCxWw0uNjCSqi.png"
                                    data-src="https://shop.activeitzone.com/public/uploads/all/eAyjUaOrohoDCUY4tR9SxpkcaqEBCxWw0uNjCSqi.png"
                                    onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public/assets/img/placeholder.jpg';"
                                  />
                                </a>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <span className="fw-700 text-primary">
                                    $301.00
                                  </span>
                                </div>
                                <div className="rating rating-sm mt-1">
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star half" />
                                </div>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a
                                    href="/product/asus-rog-phone-ii-zs660kl"
                                    className="d-block text-reset"
                                    target="_blank"
                                    tabIndex={0}
                                  >
                                    ASUS ROG Phone 2 (New) Unlocked GSM US
                                    Version &amp; Warranty
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active"
                        data-slick-index={1}
                        aria-hidden="false"
                        style={{ width: 155 }}
                      >
                        <div>
                          <div
                            className="carousel-box"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="aiz-card-box border rounded mb-2 bg-white">
                              <div className="position-relative">
                                <a
                                  href="/product/5-adidas-mens-running-shoes-xmvt8"
                                  className="d-block"
                                  target="_blank"
                                  tabIndex={0}
                                >
                                  <img alt=''
                                    className="img-fit mx-auto h-210px lazyloaded"
                                    src="https://shop.activeitzone.com/public/uploads/all/CtZC5bRWpgDGKdakd44TvCsJ4jwPfzl1GjS3Mz3N.png"
                                    data-src="https://shop.activeitzone.com/public/uploads/all/CtZC5bRWpgDGKdakd44TvCsJ4jwPfzl1GjS3Mz3N.png"
                                    onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public/assets/img/placeholder.jpg';"
                                  />
                                </a>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <del className="fw-600 opacity-50 mr-1">
                                    $81.60
                                  </del>
                                  <span className="fw-700 text-primary">
                                    $65.28
                                  </span>
                                </div>
                                <div className="rating rating-sm mt-1">
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star half" />
                                </div>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a
                                    href="/product/5-adidas-mens-running-shoes-xmvt8"
                                    className="d-block text-reset"
                                    target="_blank"
                                    tabIndex={0}
                                  >
                                    Women Sleeveless Lace Patchwork Deep V-Neck
                                    A Line Flared Party Dress
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={2}
                        aria-hidden="true"
                        style={{ width: 155 }}
                        tabIndex={-1}
                      >
                        <div>
                          <div
                            className="carousel-box"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="aiz-card-box border rounded mb-2 bg-white">
                              <div className="position-relative">
                                <a
                                  href="/product/5-adidas-mens-running-shoes-lkk2p"
                                  className="d-block"
                                  target="_blank"
                                  tabIndex={-1}
                                >
                                  <img alt=''
                                    className="img-fit mx-auto h-210px lazyloaded"
                                    src="https://shop.activeitzone.com/public/uploads/all/ByeVzjm9wUbcwaeYeCPI6CQn6jhXjWEGuTs4079O.png"
                                    data-src="https://shop.activeitzone.com/public/uploads/all/ByeVzjm9wUbcwaeYeCPI6CQn6jhXjWEGuTs4079O.png"
                                    onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public/assets/img/placeholder.jpg';"
                                  />
                                </a>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <del className="fw-600 opacity-50 mr-1">
                                    $183.60
                                  </del>
                                  <span className="fw-700 text-primary">
                                    $146.88
                                  </span>
                                </div>
                                <div className="rating rating-sm mt-1">
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </div>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a
                                    href="/product/5-adidas-mens-running-shoes-lkk2p"
                                    className="d-block text-reset"
                                    target="_blank"
                                    tabIndex={-1}
                                  >
                                    Nike Air Women's Velour Jacket
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={3}
                        aria-hidden="true"
                        style={{ width: 155 }}
                        tabIndex={-1}
                      >
                        <div>
                          <div
                            className="carousel-box"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="aiz-card-box border rounded mb-2 bg-white">
                              <div className="position-relative">
                                <a
                                  href="/product/5-adidas-mens-running-shoes-jg8w6"
                                  className="d-block"
                                  target="_blank"
                                  tabIndex={-1}
                                >
                                  <img alt=''
                                    className="img-fit mx-auto h-210px lazyloaded"
                                    src="https://shop.activeitzone.com/public/uploads/all/2WwMTy7pGgdDCozZHJaWzj2fZwo13dsjobRgi5T4.png"
                                    data-src="https://shop.activeitzone.com/public/uploads/all/2WwMTy7pGgdDCozZHJaWzj2fZwo13dsjobRgi5T4.png"
                                    onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public/assets/img/placeholder.jpg';"
                                  />
                                </a>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <del className="fw-600 opacity-50 mr-1">
                                    $66.30
                                  </del>
                                  <span className="fw-700 text-primary">
                                    $59.67
                                  </span>
                                </div>
                                <div className="rating rating-sm mt-1">
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star half" />
                                </div>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a
                                    href="/product/5-adidas-mens-running-shoes-jg8w6"
                                    className="d-block text-reset"
                                    target="_blank"
                                    tabIndex={-1}
                                  >
                                    Women's Sleeveless Chiffon Tiered Cocktail
                                    Dress Petite and Missy
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={4}
                        aria-hidden="true"
                        style={{ width: 155 }}
                        tabIndex={-1}
                      >
                        <div>
                          <div
                            className="carousel-box"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="aiz-card-box border rounded mb-2 bg-white">
                              <div className="position-relative">
                                <a
                                  href="/product/5-adidas-mens-running-shoes-69gwg"
                                  className="d-block"
                                  target="_blank"
                                  tabIndex={-1}
                                >
                                  <img alt=''
                                    className="img-fit mx-auto h-210px lazyloaded"
                                    src="https://shop.activeitzone.com/public/uploads/all/QOlVTGx6mmXKwHzl0NLFB28vzTIgTuxXdc1XJKe9.png"
                                    data-src="https://shop.activeitzone.com/public/uploads/all/QOlVTGx6mmXKwHzl0NLFB28vzTIgTuxXdc1XJKe9.png"
                                    onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public/assets/img/placeholder.jpg';"
                                  />
                                </a>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <del className="fw-600 opacity-50 mr-1">
                                    $99.99
                                  </del>
                                  <span className="fw-700 text-primary">
                                    $96.99
                                  </span>
                                </div>
                                <div className="rating rating-sm mt-1">
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </div>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a
                                    href="/product/5-adidas-mens-running-shoes-69gwg"
                                    className="d-block text-reset"
                                    target="_blank"
                                    tabIndex={-1}
                                  >
                                    Apple iPhone 11 (128GB) - Yellow
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={5}
                        aria-hidden="true"
                        style={{ width: 155 }}
                        tabIndex={-1}
                      >
                        <div>
                          <div
                            className="carousel-box"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="aiz-card-box border rounded mb-2 bg-white">
                              <div className="position-relative">
                                <a
                                  href="/product/6-men-slim-fit-checkered-spread-collar-casual-shirt-ihcer"
                                  className="d-block"
                                  target="_blank"
                                  tabIndex={-1}
                                >
                                  <img alt=''
                                    className="img-fit mx-auto h-210px lazyloaded"
                                    src="https://shop.activeitzone.com/public/uploads/all/KKvhdcV29Rh3BPbXvCVCjDoTbg3gIXe05CRlSUkW.webp"
                                    data-src="https://shop.activeitzone.com/public/uploads/all/KKvhdcV29Rh3BPbXvCVCjDoTbg3gIXe05CRlSUkW.webp"
                                    onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public/assets/img/placeholder.jpg';"
                                  />
                                </a>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <del className="fw-600 opacity-50 mr-1">
                                    $800.00
                                  </del>
                                  <span className="fw-700 text-primary">
                                    $720.10
                                  </span>
                                </div>
                                <div className="rating rating-sm mt-1">
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </div>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a
                                    href="/product/6-men-slim-fit-checkered-spread-collar-casual-shirt-ihcer"
                                    className="d-block text-reset"
                                    target="_blank"
                                    tabIndex={-1}
                                  >
                                    2021 Apple 12.9-inch iPad Pro (Wiâ‘Fi,
                                    256GB) - Space Gray
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={6}
                        aria-hidden="true"
                        style={{ width: 155 }}
                        tabIndex={-1}
                      >
                        <div>
                          <div
                            className="carousel-box"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="aiz-card-box border rounded mb-2 bg-white">
                              <div className="position-relative">
                                <a
                                  href="/product/5-adidas-mens-running-shoes-6nydc"
                                  className="d-block"
                                  target="_blank"
                                  tabIndex={-1}
                                >
                                  <img alt=''
                                    className="img-fit mx-auto h-210px lazyloaded"
                                    src="https://shop.activeitzone.com/public/uploads/all/MXdgA88J5OpOFeklOuehEAZ65hy8XKmN8gFijd2y.png"
                                    data-src="https://shop.activeitzone.com/public/uploads/all/MXdgA88J5OpOFeklOuehEAZ65hy8XKmN8gFijd2y.png"
                                    onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public/assets/img/placeholder.jpg';"
                                  />
                                </a>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <del className="fw-600 opacity-50 mr-1">
                                    $191.90
                                  </del>
                                  <span className="fw-700 text-primary">
                                    $182.31
                                  </span>
                                </div>
                                <div className="rating rating-sm mt-1">
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                </div>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a
                                    href="/product/5-adidas-mens-running-shoes-6nydc"
                                    className="d-block text-reset"
                                    target="_blank"
                                    tabIndex={-1}
                                  >
                                    OnePlus Nord CE 5G Smartphone with Quad
                                    Camera, Dual SIM
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={7}
                        aria-hidden="true"
                        style={{ width: 155 }}
                        tabIndex={-1}
                      >
                        <div>
                          <div
                            className="carousel-box"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="aiz-card-box border rounded mb-2 bg-white">
                              <div className="position-relative">
                                <a
                                  href="/product/5-adidas-mens-running-shoes-ubnlk"
                                  className="d-block"
                                  target="_blank"
                                  tabIndex={-1}
                                >
                                  <img alt=''
                                    className="img-fit mx-auto h-210px lazyloaded"
                                    src="https://shop.activeitzone.com/public/uploads/all/S9YqMcqnG3PBP3auNCAVLiKbSTPLRwioKCmM7OBv.png"
                                    data-src="https://shop.activeitzone.com/public/uploads/all/S9YqMcqnG3PBP3auNCAVLiKbSTPLRwioKCmM7OBv.png"
                                    onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public/assets/img/placeholder.jpg';"
                                  />
                                </a>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <span className="fw-700 text-primary">
                                    $252.50
                                  </span>
                                </div>
                                <div className="rating rating-sm mt-1">
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </div>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a
                                    href="/product/5-adidas-mens-running-shoes-ubnlk"
                                    className="d-block text-reset"
                                    target="_blank"
                                    tabIndex={-1}
                                  >
                                    Apple iPhone XR Black Display (1792 x 828)
                                    pixels
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={8}
                        aria-hidden="true"
                        style={{ width: 155 }}
                        tabIndex={-1}
                      >
                        <div>
                          <div
                            className="carousel-box"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="aiz-card-box border rounded mb-2 bg-white">
                              <div className="position-relative">
                                <a
                                  href="/product/6-men-slim-fit-checkered-spread-collar-casual-shirt-0fwi3"
                                  className="d-block"
                                  target="_blank"
                                  tabIndex={-1}
                                >
                                  <img alt=''
                                    className="img-fit mx-auto h-210px lazyloaded"
                                    src="https://shop.activeitzone.com/public/uploads/all/Ox2fJZjezhY2uqkI5XArrVqTiRfl4flpxlOnSKe1.png"
                                    data-src="https://shop.activeitzone.com/public/uploads/all/Ox2fJZjezhY2uqkI5XArrVqTiRfl4flpxlOnSKe1.png"
                                    onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public/assets/img/placeholder.jpg';"
                                  />
                                </a>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <span className="fw-700 text-primary">
                                    $255.00
                                  </span>
                                </div>
                                <div className="rating rating-sm mt-1">
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </div>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a
                                    href="/product/6-men-slim-fit-checkered-spread-collar-casual-shirt-0fwi3"
                                    className="d-block text-reset"
                                    target="_blank"
                                    tabIndex={-1}
                                  >
                                    Apple iPhone 13 Pro Max 17 cm (6.7") 128 GB
                                    Dual SIM 5G Blue iOS 14 iPhone
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={9}
                        aria-hidden="true"
                        style={{ width: 155 }}
                        tabIndex={-1}
                      >
                        <div>
                          <div
                            className="carousel-box"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="aiz-card-box border rounded mb-2 bg-white">
                              <div className="position-relative">
                                <a
                                  href="/product/6-men-slim-fit-checkered-spread-collar-casual-shirt-ijxnw"
                                  className="d-block"
                                  target="_blank"
                                  tabIndex={-1}
                                >
                                  <img alt=''
                                    className="img-fit mx-auto h-210px lazyloaded"
                                    src="https://shop.activeitzone.com/public/uploads/all/rE0CkcpkcGy2H2KduuukPXTbcfP81IA2ixePZ8c8.png"
                                    data-src="https://shop.activeitzone.com/public/uploads/all/rE0CkcpkcGy2H2KduuukPXTbcfP81IA2ixePZ8c8.png"
                                    onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public/assets/img/placeholder.jpg';"
                                  />
                                </a>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <del className="fw-600 opacity-50 mr-1">
                                    $402.99
                                  </del>
                                  <span className="fw-700 text-primary">
                                    $382.84
                                  </span>
                                </div>
                                <div className="rating rating-sm mt-1">
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </div>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a
                                    href="/product/6-men-slim-fit-checkered-spread-collar-casual-shirt-ijxnw"
                                    className="d-block text-reset"
                                    target="_blank"
                                    tabIndex={-1}
                                  >
                                    Apple iPhone 12 Pro Max 17 cm (6.7") 128 GB
                                    Dual SIM 5G Blue iOS 14
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={10}
                        aria-hidden="true"
                        style={{ width: 155 }}
                        tabIndex={-1}
                      >
                        <div>
                          <div
                            className="carousel-box"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="aiz-card-box border rounded mb-2 bg-white">
                              <div className="position-relative">
                                <a
                                  href="/product/1-adidas-mens-running-shoes-gjmks"
                                  className="d-block"
                                  target="_blank"
                                  tabIndex={-1}
                                >
                                  <img alt=''
                                    className="img-fit lazyload mx-auto h-210px"
                                    src="https://shop.activeitzone.com/public/assets/img/placeholder.jpg"
                                    data-src="https://shop.activeitzone.com/public/uploads/all/KorbBNbxqdHYBKAbMvLH8W1OXdKnHIpd0jtI8wOh.png"
                                    onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public/assets/img/placeholder.jpg';"
                                  />
                                </a>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <del className="fw-600 opacity-50 mr-1">
                                    $303.00
                                  </del>
                                  <span className="fw-700 text-primary">
                                    $287.85
                                  </span>
                                </div>
                                <div className="rating rating-sm mt-1">
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                  <i className="las la-star active" />
                                </div>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a
                                    href="/product/1-adidas-mens-running-shoes-gjmks"
                                    className="d-block text-reset"
                                    target="_blank"
                                    tabIndex={-1}
                                  >
                                    OnePlus 8 (Glacial Green 8GB RAM+128GB
                                    Storage)
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={11}
                        aria-hidden="true"
                        style={{ width: 155 }}
                        tabIndex={-1}
                      >
                        <div>
                          <div
                            className="carousel-box"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="aiz-card-box border rounded mb-2 bg-white">
                              <div className="position-relative">
                                <a
                                  href="/product/mobil-1-extended-performance-full-synthetic-motor-oil-5w-30-5-quart-na5lj"
                                  className="d-block"
                                  target="_blank"
                                  tabIndex={-1}
                                >
                                  <img alt=''
                                    className="img-fit lazyload mx-auto h-210px"
                                    src="https://shop.activeitzone.com/public/assets/img/placeholder.jpg"
                                    data-src="https://shop.activeitzone.com/public/uploads/all/5ywHNpwAY6dNOapwWjUgLoeYsm18ZRwdU5PzXqJM.png"
                                    onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public/assets/img/placeholder.jpg';"
                                  />
                                </a>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <del className="fw-600 opacity-50 mr-1">
                                    $70.00
                                  </del>
                                  <span className="fw-700 text-primary">
                                    $68.00
                                  </span>
                                </div>
                                <div className="rating rating-sm mt-1">
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </div>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a
                                    href="/product/mobil-1-extended-performance-full-synthetic-motor-oil-5w-30-5-quart-na5lj"
                                    className="d-block text-reset"
                                    target="_blank"
                                    tabIndex={-1}
                                  >
                                    Mobil 1 96936 20W-50 V-Twin Synthetic
                                    Motocycle Motor Oil - 1 Quart
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
              <p className="mb-0">© The Shop 2.9</p>
            </div>
          </div>
          {/* .aiz-main-content */}
        </div>
        {/* .aiz-content-wrapper */}
      </div>
    </>
  );
}

export default Dashboard
