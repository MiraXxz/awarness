import React, { Component } from "react";
import loginImg from "../../pictures/loginpic.jpg";
import slideImage1 from "../../pictures/slide1.jpg";
import slideImage2 from "../../pictures/slide2.jpg";
import whiteImg from "../../pictures/white.png";

class Carousel extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={whiteImg} alt="First slide" />

              <div class="carousel-caption d-none d-md-block">
                <div className="  align-items-start text-right p-5">
                  <h4>HEADLINE 1</h4>
                  <p>
                    عندما يريد العالم أن ‪يتكلّم ‬ ، فهو يتحدّث بلغة يونيكود.
                    تسجّل الآن لحضور المؤتمر الدولي العاشر ليونيكود (Unicode
                    Conference)، الذي سيعقد في 10-12 آذار 1997 بمدينة
                    مَايِنْتْس، ألمانيا. و سيجمsdfنترنيت يونكود في النظم القائمة
                    وفيما يخص التطب
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={whiteImg}
                alt="Second slide"
              />

              <div class="carousel-caption d-none d-md-block">
                <div className="  align-items-start text-right p-5">
                  <h4>HEADLINE 1</h4>
                  <p>
                    عندما يريد العالم أن ‪يتكلّم ‬ ، فهو يتحدّث بلغة يونيكود.
                    تسجّل الآن لحضور المؤتمر الدولي العاشر ليونيكود (Unicode
                    Conference)، الذي سيعقد في 10-12 آذار 1997 بمدينة
                    مَايِنْتْس، ألمانيا. و سيجمع المؤتمر بين خبراء من كافة
                    قطاعات الصناعة على الشبكة العالمية انترنيت ويونيكود، حيث
                    ستتم، على الصعيدين الدولي والمحلي على حد سواء مناقشة سبل
                    استخدام يونكود في النظم القائمة وفيما يخص التطبيقات
                    الحاسوبية، الخطوط، تصميم النصوص والحوسبة متعددة اللغات.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={whiteImg} alt="Third slide" />

              <div class="carousel-caption d-none d-md-block">
                <div className="  align-items-start text-right p-5">
                  <h4>HEADLINE 1</h4>
                  <p>
                    عندما يريد العالم أن ‪يتكلّم ‬ ، فهو يتحدّث بلغة يونيكود.
                    تسجّل الآن لحضور المؤتمر الدولي العاشر ليونيكود (Unicode
                    Conference)، الذي سيعقد في 10-12 آذار 1997 بمدينة
                    مَايِنْتْس، ألمانيا. و سيجمع المؤتمر بين خبراء من كافة
                    قطاعات الصناعة على الشبكة العالمية انترنيت ويونيكود، حيث
                    ستتم، على الصعيدين الدولي والمحلي على حد سواء مناقشة سبل
                    استخدام يونكود في النظم القائمة وفيما يخص التطبيقات
                    الحاسوبية، الخطوط، تصميم النصوص والحوسبة متعددة اللغات.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Carousel;
