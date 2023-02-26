
export default function CounterCustomers() {
  return (
    <div className="counter-customers">
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row position-relative">
              <div className="col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="text-center">
                  <div className="text d-flex flex-column">
                    <strong className="number" data-number="2560">
                      2,560
                    </strong>
                    <span>Khách hàng</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="text-center">
                  <div className="text d-flex flex-column">
                    <strong className="number" data-number="60">
                      60
                    </strong>
                    <span>Nhân viên</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="text-center">
                  <div className="text d-flex flex-column">
                    <strong className="number" data-number="50">
                      10
                    </strong>
                    <span>Năm kinh nghiệm</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="text-center">
                  <div className="text d-flex flex-column">
                    <strong className="number" data-number="100">
                      100
                    </strong>
                    <span>Dịch vụ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
