/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */

export default function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="company">
              <h3>Huyen Trang Center</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="social">
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-messenger"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="address">
              <h3>Địa chỉ</h3>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
              <p> 0392 3929 210</p>
              <p>info@yourdomain.com</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="sevices">
              <h3>Dịch vụ</h3>
              <ul>
                <a href="#">
                  <li>Aromatheraphy</li>
                </a>
                <a href="#">
                  <li>Skin Care</li>
                </a>
                <a href="#">
                  <li>Herbal Spa</li>
                </a>
                <a href="#">
                  <li>Body Massage</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="location">
              <h3>Vị trí</h3>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.2722761759937!2d105.8680948153891!3d21.418540379732168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31351f8792c838f1%3A0x9a18999d400b1b0d!2sHuy%E1%BB%81n%20Trang%20brows!5e0!3m2!1svi!2s!4v1657861317521!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="mb-0 mt-2 text-center copy-right">
              Copyright ©
              <script>document.write(new Date().getFullYear());</script>2022 All
              rights by <a href="#" className="title">Huyen Trang Beauty Center</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
