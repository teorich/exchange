import { useRouter } from "next/router";
import { enUS, fr } from "../../translations";

const OurFeature = ({ title }) => {

  const router = useRouter();

  const { locale } = router;
  const t = locale === "en-US" ? enUS : fr;

  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{t.our_feature}</h2>
            <p>
              {t.our_feature_sub}
            </p>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-box">
                <img src="/images/features/features-img1.png" alt="image" />
                <h3>{t.security_first}</h3>
                <p>
                  {t.security_first_sub}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-box">
                <img src="/images/features/features-img2.png" alt="image" />
                <h3>{t.fast_withdraw}</h3>
                <p>
                  {t.fast_withdraw_sub}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-box">
                <img src="/images/features/features-img3.png" alt="image" />
                <h3>24/7 {t.support_daily}</h3>
                <p>
                  {t.support_daily_sub}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeature;
