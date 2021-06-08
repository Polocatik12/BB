import React from "react";
import author from "../ico_myjnia.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-jpg" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">Kompleksowe mycie i pielęgnacja samochodu – kim jesteśmy?</h1>
                    <p>
                   Bwash nie jest zwykłą myjnią, która nie tylko umyje i wyczyści Twój samochód. Naszym klientom zapewniamy kompleksowe mycie i pielęgnację samochodu zarówno wewnątrz, jak i na zewnątrz. Prowadzimy profesjonalne studio autokosmetyki, w którym wykonujemy pełen pakiet czynności w zakresie czyszczenia i pielęgnacji auta. 

Dbamy nawet o najdrobniejsze detale, dzięki czemu będziesz olśniony efektem naszych prac – Twój samochód będzie wyglądał, jakby dopiero co wyjechał z salonu.


Możecie mieć Państwo pewność, że zadbamy o Wasze auto z największą starannością . Zdajemy sobie sprawę z tego, że wrogiem każdego mycia jest pośpiech. Lakiery to „ulubione miejsce” wszelkich zabrudzeń, soków i żywic z drzew, a także ptaków. Niestety podczas upałów osadzają się na nim także cząstki smoły z rozgrzanych asfaltów. Takich zabrudzeń z reguły nie usuwamy od razu, przez co zasychają i wyczyszczenie auta jest znacznie trudniejsze. My jednak za jedną z najważniejszych zasad naszej pracy uważamy dokładność. Cierpliwie będziemy starali się zwalczyć nawet te najbardziej uporczywe zabrudzenia.

Dlatego nie czekaj i odwiedź naszą profesjonalną myjnie samochodową

Naszym klientom oferujemy wysokiej klasy usługi realizowane przez zespół profesjonalistów z wieloletnim doświadczeniem. Zabiegi takie jak mycie, czyszczenie, zabezpieczanie lakieru, wykonujemy z niezwykłą starannością, gwarantując pełnie bezpieczeństwa oraz wysoką skuteczność. Na poziom naszych usług mają wpływ używane materiały. Korzystamy wyłącznie z wysokiej klasy kosmetyków samochodowych od renomowanych producentów.

Współpracujemy z wieloma firmami, wciąż szukamy również nowych partnerów.
                         
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
