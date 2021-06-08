import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1> Najlepsza myjnia samochodowa w Lublinie!</h1>
            </div>
            <div className="container experience-wraper">
                <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                     <div className="timeline-content">
                         <h3>Mycie wstępne</h3>
                         <p>W pierwszej fazie mycia wstępnego, auto myjemy wodą z detergentem. Używamy do tego specjalnego  mikroproszeku, który ułatwia usuwanie brudu. Na ten etap mycia musimy poświęć nieco więcej czasu, aby usunąć wszystkie większe zabrudzenia.</p>
                     </div>
                </div>
                
                {/* - */}
                <div className="timeline-block timeline-block-left">
                <div className="marker"></div>
                     <div className="timeline-content">
                         <h3>Zadowolenie klienta</h3>
                         <p>Nasze usługi świadczone są na najwyższym poziomie, aby zadowolić każdego klienta.</p>
                     </div>
                </div>
                
                {/* - */}
                <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                     <div className="timeline-content">
                         <h3>Aktywna piana</h3>
                         <p>Połączenie niemieckiej precyzji z innowacyjną myślą technologiczną, daje gwarancję perfekcyjnego mycia samochodu.

Stosowanie aktywnej piany nie odbarwia i nie powoduje matowienia lakieru. Jej regularne stosowanie ułatwia utrzymanie karoserii w dobrym stanie przez długi czas.</p>
                     </div>
                </div>
                
                {/* - */}
                <div className="timeline-block timeline-block-left">
                <div className="marker"></div>
                     <div className="timeline-content">
                         <h3>Sprzątanie wnętrza pojazdu</h3>
                         <p>Niezależnie od rodzaju materiału tapicerka samochodowa szybko się brudzi i zmienia kolor. Nawet jeśli kierowca regularnie odkurza wnętrze, kurz szybko wnika we włókna foteli oraz zanieczyszcza kokpit. Brud w odsłoniętych miejscach dodatkowo jest utrwalany przez wysoką temperaturę, do której wnętrze nagrzewa się podczas postoju na słońcu.

Elementy plastikowe czyścimy specjalnym środkiem (bez dodatku silikonu, który tworzy tłustą warstwę brudu).</p>
                     </div>
                </div>
                
                {/* - */}
                <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                     <div className="timeline-content">
                         <h3>Wycieranie</h3>
                         <p>Po myciu wstępnym oraz aktywnej pianie, samochód jest osuszany sprężonym powietrzem, a następnie dokładnie wycierany przy pomocy ścierek z mikrofibry, aby nie uszkodzić lakieru pojazdu.</p>
                     </div>
                </div>
            </div>
        </div> 
    )
}

export default Experience
